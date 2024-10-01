import 'package:auto_route/auto_route.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:dartx/dartx_io.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:flutter_azlir/app/routes/app_router.gr.dart';
import 'package:flutter_azlir/app/themes/app_theme.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:material_symbols_icons/symbols.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:url_launcher/url_launcher_string.dart';

class Project extends Equatable {
  final String id;
  final String name;
  final String shortDescription;
  final String? demoUrl;
  final String journalUrl;
  final String githubUrl;
  final String imageUrl;
  final Widget icon;
  final List<String> features;

  const Project({
    required this.id,
    required this.name,
    required this.shortDescription,
    required this.journalUrl,
    required this.githubUrl,
    required this.imageUrl,
    required this.icon,
    required this.features,
    this.demoUrl,
  });

  @override
  List<Object?> get props => [
        id,
        name,
        shortDescription,
        demoUrl,
        journalUrl,
        githubUrl,
        imageUrl,
        icon,
        features,
      ];
}

const _projects = [
  Project(
    id: 'c2640a89-3335-4779-95e2-1e4b82517392',
    name: 'sholat-ml',
    shortDescription:
        '🤲🏻 A machine learning model to detect prayer movements',
    githubUrl: 'https://github.com/azliR/sholat-ml',
    journalUrl: 'https://digilib.uinsgd.ac.id/98494/',
    imageUrl:
        'https://raw.githubusercontent.com/azliR/flutter_sholat_ml/refs/heads/main/docs/assets/flutter_sholat_ml-0.webp',
    icon: Icon(Symbols.watch_screentime_rounded),
    features: [
      'Uses accelerometer data from Xiaomi Mi Band 5',
      'Applies RNN algorithms: BLSTM, LSTM, GRU',
      'Optimal GRU model: 89.53 KB, window size 30',
      '95.38% accuracy, 9.09% fluctuation rate',
      'Real-time performance on mobile',
    ],
  ),
  Project(
    id: 'd89d7273-9c9d-4128-a63b-e66ab1352f1a',
    name: 'murojaah-ml',
    shortDescription:
        '🌙 A machine learning model to classify the recitation of Quranic verses using CNN (Convolutional Neural Network)',
    githubUrl: 'https://github.com/azliR/murojaah-ml',
    journalUrl: 'https://doi.org/10.15575/kjrt.v1i2.235',
    demoUrl: 'https://murojaah.netlify.app/',
    imageUrl:
        'https://raw.githubusercontent.com/azliR/flutter_murojaah-web/refs/heads/master/docs/assets/flutter_murojaah-web-0.webp',
    icon: FaIcon(FontAwesomeIcons.bookQuran),
    features: [
      'Classifies Quranic recitations with 89.06% accuracy',
      'Uses CNN with <a href="https://www.tensorflow.org/">TensorFlow</a> and <a href="https://keras.io/">Keras</a>',
      'Aids in learning and memorizing the Quran',
    ],
  ),
];

class MlProjectsSection extends StatelessWidget {
  const MlProjectsSection({super.key});

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    final textTheme = Theme.of(context).textTheme;

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 24),
      child: Column(
        children: [
          Text(
            'Machine Learning Projects',
            textAlign: TextAlign.center,
            style: textTheme.headlineLarge,
          ),
          const SizedBox(height: 16),
          Text(
            'Not only do I work on Flutter projects, but I also have a passion for Machine Learning. Here are some of the projects that I have worked on.',
            textAlign: TextAlign.center,
            style: textTheme.bodyMedium,
          ),
          const SizedBox(height: 56),
          ..._projects.mapIndexed(
            (index, project) {
              final isLeftAligned = index.isEven;

              return Padding(
                padding: EdgeInsets.symmetric(
                  vertical: 32,
                  horizontal: getValueForScreenType(
                    context: context,
                    mobile: 8,
                    tablet: 16,
                    desktop: 36,
                  ),
                ),
                child: Flex(
                  direction: getValueForScreenType(
                    context: context,
                    mobile: Axis.vertical,
                    desktop: Axis.horizontal,
                  ),
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: _reverseIf(
                      getValueForScreenType(
                        context: context,
                        mobile: true,
                        desktop: isLeftAligned,
                      ),
                      [
                        ScreenTypeBuilder(
                          desktop: (context, child) => Expanded(
                            child: child!,
                          ),
                          child: Align(
                            alignment: getValueForScreenType(
                              context: context,
                              mobile: Alignment.centerLeft,
                              desktop: Alignment.centerRight,
                            ),
                            child: Card.outlined(
                              child: MouseRegion(
                                cursor: SystemMouseCursors.click,
                                child: GestureDetector(
                                  onTap: () => context.router.push(
                                    NetworkImageViewerRoute(
                                      urls: [project.imageUrl],
                                    ),
                                  ),
                                  child: Hero(
                                    tag: project.imageUrl,
                                    child: CachedNetworkImage(
                                      imageUrl: project.imageUrl,
                                      width: 480,
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                        getValueForScreenType(
                          context: context,
                          mobile: const SizedBox(height: 32),
                          desktop: const SizedBox(width: 32),
                        ),
                        ScreenTypeBuilder(
                          desktop: (context, child) => Expanded(
                            child: child!,
                          ),
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                children: [
                                  IconTheme(
                                    data: IconThemeData(
                                      color: colorScheme.primary,
                                      size: 32,
                                    ),
                                    child: project.icon,
                                  ),
                                  const SizedBox(width: 16),
                                  Expanded(
                                    child: Text(
                                      project.name,
                                      style: textTheme.headlineMedium,
                                    ),
                                  ),
                                ],
                              ),
                              const SizedBox(height: 24),
                              Text(
                                project.shortDescription,
                                style: textTheme.bodyMedium,
                              ),
                              const SizedBox(height: 16),
                              ...project.features.map(
                                (feature) {
                                  return Row(
                                    children: [
                                      Icon(
                                        Symbols.check,
                                        color: colorScheme.primary,
                                      ),
                                      const SizedBox(width: 8),
                                      Expanded(
                                        child: HtmlWidget(
                                          feature,
                                          onTapUrl: launchUrlString,
                                          customStylesBuilder: (element) {
                                            if (element.localName == 'a') {
                                              return {
                                                'color': 'blue',
                                                'text-decoration': 'underline',
                                              };
                                            }
                                            return null;
                                          },
                                          textStyle:
                                              textTheme.bodySmall?.copyWith(
                                            color: colorScheme.secondary,
                                          ),
                                        ),
                                      ),
                                    ],
                                  );
                                },
                              ),
                              const SizedBox(height: 24),
                              Wrap(
                                spacing: 8,
                                runSpacing: 8,
                                children: [
                                  if (project.demoUrl != null)
                                    OutlinedButton.icon(
                                      onPressed: () =>
                                          launchUrlString(project.demoUrl!),
                                      icon: const Icon(
                                          Symbols.laptop_chromebook_rounded),
                                      label: const Text('Demo'),
                                    ),
                                  OutlinedButton.icon(
                                    onPressed: () =>
                                        launchUrlString(project.journalUrl),
                                    icon: const Icon(Symbols.article_rounded),
                                    label: const Text('Journal'),
                                  ),
                                  OutlinedButton.icon(
                                    onPressed: () =>
                                        launchUrlString(project.githubUrl),
                                    icon: const Icon(FontAwesomeIcons.github),
                                    label: const Text('GitHub'),
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ),
                      ]),
                ),
              );
            },
          ),
        ],
      ),
    );
  }

  List<T> _reverseIf<T>(bool isLeftAligned, List<T> list) {
    return isLeftAligned ? list : list.reversed.toList();
  }
}

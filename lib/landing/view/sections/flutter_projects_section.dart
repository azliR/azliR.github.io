import 'package:auto_route/auto_route.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:flutter_azlir/app/constants/constant.dart';
import 'package:flutter_azlir/app/routes/app_router.gr.dart';
import 'package:flutter_azlir/app/themes/app_theme.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:material_symbols_icons/symbols.dart';
import 'package:pausable_timer/pausable_timer.dart';
import 'package:photo_view/photo_view_gallery.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:url_launcher/url_launcher_string.dart';

class Project extends Equatable {
  const Project({
    required this.id,
    required this.name,
    required this.shortDescription,
    required this.githubUrl,
    required this.features,
    required this.platforms,
    required this.imageUrls,
    this.demoUrl,
  });

  final String id;
  final String name;
  final String shortDescription;
  final String? githubUrl;
  final String? demoUrl;
  final List<String> features;
  final List<String> platforms;
  final List<String> imageUrls;

  @override
  List<Object?> get props => [id, name, shortDescription, githubUrl];
}

const _projects = [
  Project(
    id: '06215fa1-a83a-447d-8ac0-63584f483ba9',
    name: 'Sholawatan',
    shortDescription:
        'A lyric app that allows users to find and listen to shalawat (praises) to the Prophet Muhammad',
    features: [
      'Built with Flutter',
      'Leveraging <a href="https://resocoder.com/2020/03/09/flutter-firebase-ddd-course-1-domain-driven-design-principles/#t-1727534535428">DDD Architecture</a> for robust design',
      'State management with <a href="https://bloclibrary.dev/">BloC</a>',
      'Seamless Dependency Injection (DI)',
      'Integrated with Firebase',
    ],
    githubUrl: null,
    platforms: ['Android', 'iOS', 'Web'],
    imageUrls: [
      '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-0.webp',
    ],
  ),
  Project(
    id: '09df9ac1-f94f-4960-aa0a-0551884bac5c',
    name: 'OutClass Mobile',
    shortDescription:
        'OutClass Mobile is a mobile app that helps students organize their classwork and collaborate with each other, built using Flutter with BloC and Injectable.',
    platforms: ['Android', 'iOS'],
    githubUrl: 'https://github.com/azliR/flutter_outclass',
    demoUrl: 'https://github.com/azliR/flutter_outclass/releases',
    features: [
      'Dependency injection with <a href="https://pub.dev/packages/injectable">Injectable</a> and <a href="https://pub.dev/packages/get_it">GetIt</a>.',
      'Backend API with <a href="https://gofiber.io/">GoFiber</a>.',
      'Data storage using <a href="https://www.mongodb.com/">MongoDB</a>.',
      'JWT token storage with <a href="https://redis.io/">Redis</a>.',
    ],
    imageUrls: [
      '$baseCdnUrl/flutter_outclass/flutter_outclass-0.webp',
      '$baseCdnUrl/flutter_outclass/flutter_outclass-1.webp',
      '$baseCdnUrl/flutter_outclass/flutter_outclass-2.webp',
      '$baseCdnUrl/flutter_outclass/flutter_outclass-3.webp',
      '$baseCdnUrl/flutter_outclass/flutter_outclass-4.webp',
      '$baseCdnUrl/flutter_outclass/flutter_outclass-5.webp',
      '$baseCdnUrl/flutter_outclass/flutter_outclass-6.webp',
      '$baseCdnUrl/flutter_outclass/flutter_outclass-7.webp',
      '$baseCdnUrl/flutter_outclass/flutter_outclass-8.webp',
      '$baseCdnUrl/flutter_outclass/flutter_outclass-9.webp',
      '$baseCdnUrl/flutter_outclass/flutter_outclass-10.webp',
    ],
  ),
  Project(
    id: '9f34cb46-0a99-4eb4-b73a-c3b84d51ee66',
    name: 'CompressIt',
    shortDescription:
        'A compression and convertion App for images (JPEG, PNG, HEIC, and WebP) and audio locally without server',
    githubUrl: 'https://github.com/azliR/flutter_compress_it',
    demoUrl: 'https://github.com/azliR/flutter_compress_it/releases',
    platforms: ['Android'],
    features: [
      'Image and audio compression and conversion',
      'Local processing without server',
      'Supports a variety of image and audio formats (JPEG, PNG, HEIC, WebP, MP3, AAC, WAV)',
    ],
    imageUrls: [
      '$baseCdnUrl/flutter_compress_it/flutter_compress_it-0.webp',
      '$baseCdnUrl/flutter_compress_it/flutter_compress_it-1.webp',
      '$baseCdnUrl/flutter_compress_it/flutter_compress_it-2.webp',
      '$baseCdnUrl/flutter_compress_it/flutter_compress_it-3.webp',
      '$baseCdnUrl/flutter_compress_it/flutter_compress_it-4.webp',
      '$baseCdnUrl/flutter_compress_it/flutter_compress_it-5.webp',
      '$baseCdnUrl/flutter_compress_it/flutter_compress_it-6.webp',
      '$baseCdnUrl/flutter_compress_it/flutter_compress_it-7.webp',
    ],
  ),
];

class FlutterProjectsSection extends StatelessWidget {
  const FlutterProjectsSection({super.key});

  @override
  Widget build(BuildContext context) {
    // final colorScheme = Theme.of(context).colorScheme;
    final textTheme = Theme.of(context).textTheme;

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 24),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            'Flutter Projects',
            textAlign: TextAlign.center,
            style: textTheme.headlineLarge,
          ),
          const SizedBox(height: 16),
          Text(
            'I love building apps with Flutter. Here are some of my projects 💙.',
            textAlign: TextAlign.center,
            style: textTheme.bodyMedium,
          ),
          const SizedBox(height: 36),
          ScreenTypeBuilder(
            desktop: (context, child) => SizedBox(
              height: 740,
              child: child,
            ),
            child: Flex(
              crossAxisAlignment: getValueForScreenType(
                context: context,
                mobile: CrossAxisAlignment.center,
                desktop: CrossAxisAlignment.center,
              ),
              direction: getValueForScreenType(
                context: context,
                mobile: Axis.vertical,
                desktop: Axis.horizontal,
              ),
              children: _projects.map(
                (project) {
                  return ScreenTypeBuilder(
                    mobile: (context, child) => ConstrainedBox(
                      constraints: const BoxConstraints(
                        maxWidth: 420,
                      ),
                      child: child,
                    ),
                    desktop: (context, child) => Expanded(
                      child: child!,
                    ),
                    child: _ProjectCard(
                      project: project,
                      expands: getValueForScreenType(
                        context: context,
                        mobile: false,
                        desktop: true,
                      ),
                    ),
                  );
                },
              ).toList(),
            ),
          ),
        ],
      ),
    );
  }
}

class _ProjectCard extends StatefulWidget {
  const _ProjectCard({
    required this.project,
    required this.expands,
    super.key,
  });

  final Project project;
  final bool expands;

  @override
  State<_ProjectCard> createState() => _ProjectCardState();
}

class _ProjectCardState extends State<_ProjectCard> {
  final _pageController = PageController();

  PausableTimer? _autoPlayTimer;

  var _isHovered = false;
  var _currentIndex = 0;

  @override
  void initState() {
    _autoPlayTimer = PausableTimer.periodic(
      const Duration(seconds: 2),
      () {
        if (!_pageController.hasClients) return;

        if (_pageController.page == widget.project.imageUrls.length - 1) {
          _pageController.animateToPage(
            0,
            duration: const Duration(milliseconds: 200),
            curve: Curves.easeInOut,
          );
          return;
        }

        _pageController.nextPage(
          duration: const Duration(milliseconds: 200),
          curve: Curves.easeInOut,
        );
      },
    );
    super.initState();
  }

  @override
  void dispose() {
    _autoPlayTimer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    final textTheme = Theme.of(context).textTheme;

    return Card.outlined(
      margin: const EdgeInsets.symmetric(horizontal: 8, vertical: 8),
      child: MouseRegion(
        onHover: (_) {
          setState(() {
            _isHovered = true;
          });
          _autoPlayTimer?.start();
        },
        onExit: (_) {
          setState(() {
            _isHovered = false;
          });
          _autoPlayTimer?.pause();
        },
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            MouseRegion(
              cursor: SystemMouseCursors.click,
              child: GestureDetector(
                onTap: () => context.router.push(
                  NetworkImageViewerRoute(
                    urls: widget.project.imageUrls,
                  ),
                ),
                child: SizedBox(
                  height: 280,
                  child: AnimatedCrossFade(
                    duration: const Duration(milliseconds: 600),
                    layoutBuilder:
                        (topChild, topChildKey, bottomChild, bottomChildKey) {
                      return Stack(
                        clipBehavior: Clip.none,
                        children: <Widget>[
                          Center(
                            key: bottomChildKey,
                            child: bottomChild,
                          ),
                          Center(
                            key: topChildKey,
                            child: topChild,
                          ),
                        ],
                      );
                    },
                    alignment: Alignment.center,
                    crossFadeState: _isHovered
                        ? CrossFadeState.showSecond
                        : CrossFadeState.showFirst,
                    firstChild: Hero(
                      tag: widget.project.imageUrls[0],
                      child: CachedNetworkImage(
                        imageUrl: widget.project.imageUrls[0],
                        fit: BoxFit.cover,
                        width: double.infinity,
                      ),
                    ),
                    secondChild: Stack(
                      children: [
                        PhotoViewGallery.builder(
                          pageController: _pageController,
                          scrollPhysics: const NeverScrollableScrollPhysics(),
                          itemCount: widget.project.imageUrls.length,
                          allowImplicitScrolling: true,
                          onPageChanged: (index) {
                            setState(() {
                              _currentIndex = index;
                            });
                          },
                          builder: (context, index) {
                            return PhotoViewGalleryPageOptions(
                              imageProvider: CachedNetworkImageProvider(
                                widget.project.imageUrls[index],
                              ),
                            );
                          },
                        ),
                        Positioned(
                          bottom: 16,
                          left: 16,
                          child: Text(
                            '${_currentIndex + 1}/${widget.project.imageUrls.length}',
                            style: textTheme.bodyMedium?.copyWith(
                              color: colorScheme.secondary,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
            const Divider(height: 0),
            const SizedBox(height: 24),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: Text(
                widget.project.name,
                textAlign: TextAlign.center,
                style: textTheme.titleLarge,
              ),
            ),
            const SizedBox(height: 16),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: Text(
                widget.project.shortDescription,
                textAlign: TextAlign.center,
                style: textTheme.bodyMedium,
              ),
            ),
            const SizedBox(height: 32),
            if (widget.expands) const Spacer(),
            ...widget.project.features.map(
              (feature) {
                return Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 16,
                  ),
                  child: Row(
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
                          textStyle: textTheme.bodySmall?.copyWith(
                            color: colorScheme.secondary,
                          ),
                        ),
                      ),
                    ],
                  ),
                );
              },
            ),
            const SizedBox(height: 36),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: Wrap(
                spacing: 8,
                runSpacing: 8,
                children: [
                  if (widget.project.demoUrl == null &&
                      widget.project.githubUrl == null)
                    const SizedBox(height: 36),
                  if (widget.project.demoUrl != null)
                    OutlinedButton.icon(
                      onPressed: () => launchUrlString(widget.project.demoUrl!),
                      icon: const Icon(
                        Symbols.laptop_chromebook_rounded,
                      ),
                      label: const Text('Demo'),
                    ),
                  if (widget.project.githubUrl != null)
                    OutlinedButton.icon(
                      onPressed: () =>
                          launchUrlString(widget.project.githubUrl!),
                      icon: const Icon(FontAwesomeIcons.github),
                      label: const Text('GitHub'),
                    ),
                ],
              ),
            ),
            const SizedBox(height: 32),
          ],
        ),
      ),
    );
  }
}

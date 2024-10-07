import 'package:carousel_slider/carousel_slider.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:url_launcher/url_launcher_string.dart';

class Project extends Equatable {
  final String id;
  final String name;
  final String shortDescription;
  final String githubUrl;
  final String language;

  const Project({
    required this.id,
    required this.name,
    required this.shortDescription,
    required this.githubUrl,
    required this.language,
  });

  @override
  List<Object?> get props => [id, name, shortDescription, githubUrl, language];
}

const _projects = [
  Project(
    id: '16c9bf86-74c6-4125-991c-92fb9499d6b9',
    name: 'OutClass API',
    shortDescription:
        'The OutClass API is a RESTful API that provides a backend for the OutClass app, built using GoFiber, MongoDB, and Redis.',
    githubUrl: 'https://github.com/azliR/gofiber_outclass-api',
    language: 'Go',
  ),
  Project(
    id: 'ad77825f-158d-4515-b58e-142dc4e8102d',
    name: 'Dart Restaurant API',
    shortDescription:
        'API for Restaurant App built with Dart with Shelf package',
    language: 'Dart',
    githubUrl: 'https://github.com/azliR/dart_restaurant_api',
  ),
];

class BackendProjectsSection extends StatelessWidget {
  const BackendProjectsSection({super.key});

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;

    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16),
          child: Text(
            'Backend Projects',
            textAlign: TextAlign.center,
            style: textTheme.headlineLarge,
          ),
        ),
        const SizedBox(height: 16),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16),
          child: Text(
            "After Flutter, backend projects are my favorite. I've built a few and had fun doing it!",
            textAlign: TextAlign.center,
            style: textTheme.bodyMedium,
          ),
        ),
        const SizedBox(height: 36),
        LayoutBuilder(
          builder: (context, constraints) {
            return CarouselSlider.builder(
              itemCount: _projects.length,
              itemBuilder: (context, index, realIndex) {
                return _ProjectCard(project: _projects[index]);
              },
              options: CarouselOptions(
                autoPlay: true,
                autoPlayInterval: const Duration(seconds: 3),
                enlargeCenterPage: true,
                height: constraints.maxWidth < 370 ? 240 : 200,
                viewportFraction: getValueForScreenType(
                  context: context,
                  watch: 0.9,
                  mobile: 0.8,
                  tablet: 0.6,
                  desktop: 0.4,
                ),
              ),
            );
          },
        ),
      ],
    );
  }
}

class _ProjectCard extends StatefulWidget {
  const _ProjectCard({
    required this.project,
    super.key,
  });

  final Project project;

  @override
  State<_ProjectCard> createState() => _ProjectCardState();
}

class _ProjectCardState extends State<_ProjectCard> {
  bool _isHovered = false;

  Color _getLanguageColor(String language) {
    switch (language) {
      case 'Go':
        return const Color(0xFF00B4AB);
      case 'Dart':
        return const Color(0xFF00ADD8);
      default:
        return Colors.grey;
    }
  }

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    final textTheme = Theme.of(context).textTheme;

    final github = widget.project.githubUrl.split('/');
    final githubName = github[github.length - 1];
    final githubAccount = github[github.length - 2];

    return SizedBox(
      width: 400,
      child: MouseRegion(
        onEnter: (event) {
          setState(() {
            _isHovered = true;
          });
        },
        onExit: (event) {
          setState(() {
            _isHovered = false;
          });
        },
        child: Card.filled(
          margin: EdgeInsets.zero,
          child: InkWell(
            onTap: () {
              launchUrlString(widget.project.githubUrl);
            },
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const FaIcon(
                        FontAwesomeIcons.github,
                      ),
                      const SizedBox(width: 10),
                      Text.rich(
                        TextSpan(
                          text: '$githubAccount/\n',
                          children: [
                            TextSpan(
                              text: githubName,
                              style: const TextStyle(
                                fontWeight: FontWeight.bold,
                                decorationThickness: 2,
                              ),
                            ),
                          ],
                          style: textTheme.bodyMedium!.copyWith(
                            decoration: _isHovered
                                ? TextDecoration.underline
                                : TextDecoration.none,
                            decorationColor: colorScheme.primary,
                          ),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),
                  Expanded(
                    child: Text(
                      widget.project.shortDescription,
                      style: textTheme.bodyMedium!.copyWith(
                        color: colorScheme.onSurface.withOpacity(0.7),
                      ),
                      overflow: TextOverflow.ellipsis,
                      maxLines: 5,
                    ),
                  ),
                  const SizedBox(height: 8),
                  Row(
                    children: [
                      Container(
                        width: 8,
                        height: 8,
                        decoration: BoxDecoration(
                          color: _getLanguageColor(widget.project.language),
                          shape: BoxShape.circle,
                        ),
                      ),
                      const SizedBox(width: 8),
                      Text(
                        widget.project.language,
                        style: textTheme.bodyMedium!.copyWith(
                          color: colorScheme.onSurface.withOpacity(0.7),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

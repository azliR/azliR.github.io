import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_azlir/landing/view/sections/backend_projects_section.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class ContinuousProjectListView extends StatefulWidget {
  final List<Project> projects;

  const ContinuousProjectListView({
    required this.projects,
    super.key,
  });

  @override
  State<ContinuousProjectListView> createState() =>
      _ContinuousProjectListStateView();
}

class _ContinuousProjectListStateView extends State<ContinuousProjectListView> {
  final ScrollController _scrollController = ScrollController();
  Timer? _timer;

  @override
  void initState() {
    super.initState();

    WidgetsBinding.instance.addPostFrameCallback((_) {
      _startAutoScroll();
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    _scrollController.dispose();
    super.dispose();
  }

  Future<void> _startAutoScroll() async {
    const scrollSpeed = 100000.0;
    final duration = Duration(seconds: (scrollSpeed / 50).round());

    unawaited(
      _scrollController.animateTo(
        scrollSpeed,
        duration: duration,
        curve: Curves.linear,
      ),
    );

    _timer = Timer.periodic(duration, (timer) {
      if (_scrollController.hasClients) {
        final maxScroll = _scrollController.position.maxScrollExtent;
        final currentScroll = _scrollController.position.pixels;
        final nextScroll = currentScroll + scrollSpeed;

        if (nextScroll >= maxScroll) {
          _scrollController.jumpTo(0);
        } else {
          _scrollController.animateTo(
            nextScroll,
            duration: duration,
            curve: Curves.linear,
          );
        }
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 200,
      child: ListView.builder(
        controller: _scrollController,
        scrollDirection: Axis.horizontal,
        itemBuilder: (context, index) {
          final itemIndex = index % widget.projects.length;
          return _ProjectCard(
            project: widget.projects[itemIndex],
          );
        },
      ),
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
          print('hovered');
          setState(() {
            _isHovered = true;
          });
        },
        onExit: (event) {
          setState(() {
            _isHovered = false;
          });
        },
        child: InkWell(
          onTap: () {
            print('tapped');
          },
          child: Card(
            margin: const EdgeInsets.symmetric(horizontal: 16),
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

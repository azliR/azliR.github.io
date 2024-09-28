import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_azlir/landing/models/project.dart';
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
    const duration = Duration(seconds: 1000);

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

class _ProjectCard extends StatelessWidget {
  const _ProjectCard({
    required this.project,
    super.key,
  });

  final Project project;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            Row(
              children: [
                const FaIcon(
                  FontAwesomeIcons.github,
                ),
                const SizedBox(width: 8),
                Text.rich(
                  TextSpan(
                    text: project.name,
                    style: Theme.of(context).textTheme.titleMedium,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 8),
          ],
        ),
      ),
    );
  }
}

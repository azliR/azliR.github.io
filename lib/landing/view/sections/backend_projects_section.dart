import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:flutter_azlir/landing/widgets/continuous_project_listview.dart';

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
        Text(
          'Backend Projects',
          textAlign: TextAlign.center,
          style: textTheme.headlineLarge,
        ),
        const SizedBox(height: 16),
        Text(
          "After Flutter, backend projects are my favorite. I've built a few and had fun doing it!",
          textAlign: TextAlign.center,
          style: textTheme.bodyMedium,
        ),
        const SizedBox(height: 36),
        const ContinuousProjectListView(
          projects: _projects,
        ),
      ],
    );
  }
}

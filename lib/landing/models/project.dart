import 'package:equatable/equatable.dart';

class Project extends Equatable {
  const Project({
    required this.id,
    required this.name,
    required this.description,
    required this.shortDescription,
    required this.tags,
    required this.images,
    required this.vertical,
    this.platforms,
    this.documents,
    this.sourceCode,
    this.visits,
  });

  final String id;
  final String name;
  final String description;
  final String shortDescription;
  final String? sourceCode;
  final List<String>? visits;
  final List<String> tags;
  final List<String>? platforms;
  final Map<String, String>? documents;
  final List<String> images;
  final bool vertical;

  @override
  List<Object?> get props => [
        id,
        name,
        description,
        shortDescription,
        tags,
        images,
        vertical,
        platforms,
        documents,
        sourceCode,
        visits,
      ];
}

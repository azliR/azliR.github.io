// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';

class Settings extends Equatable {
  final ThemeMode themeMode;

  const Settings({
    required this.themeMode,
  });

  @override
  List<Object?> get props => [themeMode];

  Settings copyWith({
    ThemeMode? themeMode,
  }) {
    return Settings(
      themeMode: themeMode ?? this.themeMode,
    );
  }
}

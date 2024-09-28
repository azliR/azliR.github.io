import 'package:flutter/material.dart';
import 'package:flutter_azlir/app/services/local_storage_service.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'settings_provider.g.dart';

@riverpod
class ThemeModeSetting extends _$ThemeModeSetting {
  @override
  ThemeMode build() {
    return LocalStorageService.getThemeMode() ?? ThemeMode.system;
  }

  void setTheme(ThemeMode themeMode) {
    LocalStorageService.setThemeMode(themeMode);

    state = themeMode;
  }
}

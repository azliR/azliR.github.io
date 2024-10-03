import 'package:flutter/material.dart';
import 'package:flutter_azlir/app/services/local_storage_service.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'settings_provider.g.dart';

@riverpod
class ThemeModeSettingProvider extends _$ThemeModeSettingProvider {
  @override
  ThemeMode build() {
    return LocalStorageService.getThemeMode() ?? ThemeMode.dark;
  }

  void setThemeMode(ThemeMode themeMode) {
    LocalStorageService.setThemeMode(themeMode);

    state = themeMode;
  }
}

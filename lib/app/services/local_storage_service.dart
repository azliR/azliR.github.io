import 'package:dartx/dartx_io.dart';
import 'package:flutter/material.dart';
import 'package:hive_ce/hive.dart';

class LocalStorageService {
  LocalStorageService._();

  static const String kBox = 'local_storage_box';
  static const String kThemeMode = 'themeMode';

  static final _box = Hive.box<dynamic>(kBox);

  static Future<void> openBox() async {
    await Hive.openBox<dynamic>(kBox);
  }

  static void setThemeMode(ThemeMode themeMode) {
    _box.put(kThemeMode, themeMode.name);
  }

  static ThemeMode? getThemeMode() {
    return ThemeMode.values.firstOrNullWhere(
      (themeMode) {
        return themeMode.name == _box.get(kThemeMode);
      },
    );
  }
}

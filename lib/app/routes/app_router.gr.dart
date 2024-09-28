// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// AutoRouterGenerator
// **************************************************************************

// ignore_for_file: type=lint
// coverage:ignore-file

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:auto_route/auto_route.dart' as _i3;
import 'package:flutter/material.dart' as _i4;
import 'package:flutter_azlir/app/views/main_screen.dart' as _i2;
import 'package:flutter_azlir/landing/view/landing_screen.dart' as _i1;

/// generated route for
/// [_i1.LandingScreen]
class LandingRoute extends _i3.PageRouteInfo<void> {
  const LandingRoute({List<_i3.PageRouteInfo>? children})
      : super(
          LandingRoute.name,
          initialChildren: children,
        );

  static const String name = 'LandingRoute';

  static _i3.PageInfo page = _i3.PageInfo(
    name,
    builder: (data) {
      return const _i1.LandingScreen();
    },
  );
}

/// generated route for
/// [_i2.MainScreen]
class MainRoute extends _i3.PageRouteInfo<MainRouteArgs> {
  MainRoute({
    _i2.NavigationTab initialNavigation = _i2.NavigationTab.home,
    _i4.Key? key,
    List<_i3.PageRouteInfo>? children,
  }) : super(
          MainRoute.name,
          args: MainRouteArgs(
            initialNavigation: initialNavigation,
            key: key,
          ),
          initialChildren: children,
        );

  static const String name = 'MainRoute';

  static _i3.PageInfo page = _i3.PageInfo(
    name,
    builder: (data) {
      final args =
          data.argsAs<MainRouteArgs>(orElse: () => const MainRouteArgs());
      return _i2.MainScreen(
        initialNavigation: args.initialNavigation,
        key: args.key,
      );
    },
  );
}

class MainRouteArgs {
  const MainRouteArgs({
    this.initialNavigation = _i2.NavigationTab.home,
    this.key,
  });

  final _i2.NavigationTab initialNavigation;

  final _i4.Key? key;

  @override
  String toString() {
    return 'MainRouteArgs{initialNavigation: $initialNavigation, key: $key}';
  }
}

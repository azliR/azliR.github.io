// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// AutoRouterGenerator
// **************************************************************************

// ignore_for_file: type=lint
// coverage:ignore-file

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:auto_route/auto_route.dart' as _i4;
import 'package:flutter/material.dart' as _i5;
import 'package:flutter_azlir/app/views/main_screen.dart' as _i3;
import 'package:flutter_azlir/image_previewer/view/image_previewer_screen.dart'
    as _i1;
import 'package:flutter_azlir/landing/view/landing_screen.dart' as _i2;

/// generated route for
/// [_i1.ImagePreviewerScreen]
class ImagePreviewerRoute extends _i4.PageRouteInfo<ImagePreviewerRouteArgs> {
  ImagePreviewerRoute({
    required String url,
    String? heroTag,
    _i5.Key? key,
    List<_i4.PageRouteInfo>? children,
  }) : super(
          ImagePreviewerRoute.name,
          args: ImagePreviewerRouteArgs(
            url: url,
            heroTag: heroTag,
            key: key,
          ),
          initialChildren: children,
        );

  static const String name = 'ImagePreviewerRoute';

  static _i4.PageInfo page = _i4.PageInfo(
    name,
    builder: (data) {
      final args = data.argsAs<ImagePreviewerRouteArgs>();
      return _i1.ImagePreviewerScreen(
        url: args.url,
        heroTag: args.heroTag,
        key: args.key,
      );
    },
  );
}

class ImagePreviewerRouteArgs {
  const ImagePreviewerRouteArgs({
    required this.url,
    this.heroTag,
    this.key,
  });

  final String url;

  final String? heroTag;

  final _i5.Key? key;

  @override
  String toString() {
    return 'ImagePreviewerRouteArgs{url: $url, heroTag: $heroTag, key: $key}';
  }
}

/// generated route for
/// [_i2.LandingScreen]
class LandingRoute extends _i4.PageRouteInfo<void> {
  const LandingRoute({List<_i4.PageRouteInfo>? children})
      : super(
          LandingRoute.name,
          initialChildren: children,
        );

  static const String name = 'LandingRoute';

  static _i4.PageInfo page = _i4.PageInfo(
    name,
    builder: (data) {
      return const _i2.LandingScreen();
    },
  );
}

/// generated route for
/// [_i3.MainScreen]
class MainRoute extends _i4.PageRouteInfo<MainRouteArgs> {
  MainRoute({
    _i3.NavigationTab initialNavigation = _i3.NavigationTab.home,
    _i5.Key? key,
    List<_i4.PageRouteInfo>? children,
  }) : super(
          MainRoute.name,
          args: MainRouteArgs(
            initialNavigation: initialNavigation,
            key: key,
          ),
          initialChildren: children,
        );

  static const String name = 'MainRoute';

  static _i4.PageInfo page = _i4.PageInfo(
    name,
    builder: (data) {
      final args =
          data.argsAs<MainRouteArgs>(orElse: () => const MainRouteArgs());
      return _i3.MainScreen(
        initialNavigation: args.initialNavigation,
        key: args.key,
      );
    },
  );
}

class MainRouteArgs {
  const MainRouteArgs({
    this.initialNavigation = _i3.NavigationTab.home,
    this.key,
  });

  final _i3.NavigationTab initialNavigation;

  final _i5.Key? key;

  @override
  String toString() {
    return 'MainRouteArgs{initialNavigation: $initialNavigation, key: $key}';
  }
}

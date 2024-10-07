// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// AutoRouterGenerator
// **************************************************************************

// ignore_for_file: type=lint
// coverage:ignore-file

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:auto_route/auto_route.dart' as _i7;
import 'package:flutter/material.dart' as _i8;
import 'package:flutter_azlir/app/views/main_screen.dart' as _i4;
import 'package:flutter_azlir/blur_hash_generator/view/blur_hash_generator_screen.dart'
    deferred as _i1;
import 'package:flutter_azlir/contact_us/view/contact_us_screen.dart'
    deferred as _i2;
import 'package:flutter_azlir/image_viewer/view/network_image_viewer_screen.dart'
    deferred as _i5;
import 'package:flutter_azlir/landing/view/landing_screen.dart' deferred as _i3;
import 'package:flutter_azlir/tools/view/tools_screen.dart' deferred as _i6;

/// generated route for
/// [_i1.BlurHashGeneratorScreen]
class BlurHashGeneratorRoute extends _i7.PageRouteInfo<void> {
  const BlurHashGeneratorRoute({List<_i7.PageRouteInfo>? children})
      : super(
          BlurHashGeneratorRoute.name,
          initialChildren: children,
        );

  static const String name = 'BlurHashGeneratorRoute';

  static _i7.PageInfo page = _i7.PageInfo(
    name,
    builder: (data) {
      return _i7.DeferredWidget(
        _i1.loadLibrary,
        () => _i1.BlurHashGeneratorScreen(),
      );
    },
  );
}

/// generated route for
/// [_i2.ContactUsScreen]
class ContactUsRoute extends _i7.PageRouteInfo<void> {
  const ContactUsRoute({List<_i7.PageRouteInfo>? children})
      : super(
          ContactUsRoute.name,
          initialChildren: children,
        );

  static const String name = 'ContactUsRoute';

  static _i7.PageInfo page = _i7.PageInfo(
    name,
    builder: (data) {
      return _i7.DeferredWidget(
        _i2.loadLibrary,
        () => _i2.ContactUsScreen(),
      );
    },
  );
}

/// generated route for
/// [_i3.LandingScreen]
class LandingRoute extends _i7.PageRouteInfo<void> {
  const LandingRoute({List<_i7.PageRouteInfo>? children})
      : super(
          LandingRoute.name,
          initialChildren: children,
        );

  static const String name = 'LandingRoute';

  static _i7.PageInfo page = _i7.PageInfo(
    name,
    builder: (data) {
      return _i7.DeferredWidget(
        _i3.loadLibrary,
        () => _i3.LandingScreen(),
      );
    },
  );
}

/// generated route for
/// [_i4.MainScreen]
class MainRoute extends _i7.PageRouteInfo<MainRouteArgs> {
  MainRoute({
    _i4.NavigationTab initialNavigation = _i4.NavigationTab.home,
    _i8.Key? key,
    List<_i7.PageRouteInfo>? children,
  }) : super(
          MainRoute.name,
          args: MainRouteArgs(
            initialNavigation: initialNavigation,
            key: key,
          ),
          initialChildren: children,
        );

  static const String name = 'MainRoute';

  static _i7.PageInfo page = _i7.PageInfo(
    name,
    builder: (data) {
      final args =
          data.argsAs<MainRouteArgs>(orElse: () => const MainRouteArgs());
      return _i4.MainScreen(
        initialNavigation: args.initialNavigation,
        key: args.key,
      );
    },
  );
}

class MainRouteArgs {
  const MainRouteArgs({
    this.initialNavigation = _i4.NavigationTab.home,
    this.key,
  });

  final _i4.NavigationTab initialNavigation;

  final _i8.Key? key;

  @override
  String toString() {
    return 'MainRouteArgs{initialNavigation: $initialNavigation, key: $key}';
  }
}

/// generated route for
/// [_i5.NetworkImageViewerScreen]
class NetworkImageViewerRoute
    extends _i7.PageRouteInfo<NetworkImageViewerRouteArgs> {
  NetworkImageViewerRoute({
    required List<String>? imageUrls,
    String? heroTag,
    _i8.Key? key,
    List<_i7.PageRouteInfo>? children,
  }) : super(
          NetworkImageViewerRoute.name,
          args: NetworkImageViewerRouteArgs(
            imageUrls: imageUrls,
            heroTag: heroTag,
            key: key,
          ),
          rawQueryParams: {'imageUrls': imageUrls},
          initialChildren: children,
        );

  static const String name = 'NetworkImageViewerRoute';

  static _i7.PageInfo page = _i7.PageInfo(
    name,
    builder: (data) {
      final queryParams = data.queryParams;
      final args = data.argsAs<NetworkImageViewerRouteArgs>(
          orElse: () => NetworkImageViewerRouteArgs(
              imageUrls: queryParams.optList('imageUrls')));
      return _i7.DeferredWidget(
        _i5.loadLibrary,
        () => _i5.NetworkImageViewerScreen(
          imageUrls: args.imageUrls,
          heroTag: args.heroTag,
          key: args.key,
        ),
      );
    },
  );
}

class NetworkImageViewerRouteArgs {
  const NetworkImageViewerRouteArgs({
    required this.imageUrls,
    this.heroTag,
    this.key,
  });

  final List<String>? imageUrls;

  final String? heroTag;

  final _i8.Key? key;

  @override
  String toString() {
    return 'NetworkImageViewerRouteArgs{imageUrls: $imageUrls, heroTag: $heroTag, key: $key}';
  }
}

/// generated route for
/// [_i6.ToolsScreen]
class ToolsRoute extends _i7.PageRouteInfo<void> {
  const ToolsRoute({List<_i7.PageRouteInfo>? children})
      : super(
          ToolsRoute.name,
          initialChildren: children,
        );

  static const String name = 'ToolsRoute';

  static _i7.PageInfo page = _i7.PageInfo(
    name,
    builder: (data) {
      return _i7.DeferredWidget(
        _i6.loadLibrary,
        () => _i6.ToolsScreen(),
      );
    },
  );
}

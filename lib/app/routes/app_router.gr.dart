// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// AutoRouterGenerator
// **************************************************************************

// ignore_for_file: type=lint
// coverage:ignore-file

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:auto_route/auto_route.dart' as _i5;
import 'package:flutter/material.dart' as _i6;
import 'package:flutter_azlir/app/views/main_screen.dart' as _i3;
import 'package:flutter_azlir/contact_us/view/contact_us_screen.dart'
    deferred as _i1;
import 'package:flutter_azlir/image_viewer/view/network_image_viewer_screen.dart'
    deferred as _i4;
import 'package:flutter_azlir/landing/view/landing_screen.dart' deferred as _i2;

/// generated route for
/// [_i1.ContactUsScreen]
class ContactUsRoute extends _i5.PageRouteInfo<void> {
  const ContactUsRoute({List<_i5.PageRouteInfo>? children})
      : super(
          ContactUsRoute.name,
          initialChildren: children,
        );

  static const String name = 'ContactUsRoute';

  static _i5.PageInfo page = _i5.PageInfo(
    name,
    builder: (data) {
      return _i5.DeferredWidget(
        _i1.loadLibrary,
        () => _i1.ContactUsScreen(),
      );
    },
  );
}

/// generated route for
/// [_i2.LandingScreen]
class LandingRoute extends _i5.PageRouteInfo<void> {
  const LandingRoute({List<_i5.PageRouteInfo>? children})
      : super(
          LandingRoute.name,
          initialChildren: children,
        );

  static const String name = 'LandingRoute';

  static _i5.PageInfo page = _i5.PageInfo(
    name,
    builder: (data) {
      return _i5.DeferredWidget(
        _i2.loadLibrary,
        () => _i2.LandingScreen(),
      );
    },
  );
}

/// generated route for
/// [_i3.MainScreen]
class MainRoute extends _i5.PageRouteInfo<MainRouteArgs> {
  MainRoute({
    _i3.NavigationTab initialNavigation = _i3.NavigationTab.home,
    _i6.Key? key,
    List<_i5.PageRouteInfo>? children,
  }) : super(
          MainRoute.name,
          args: MainRouteArgs(
            initialNavigation: initialNavigation,
            key: key,
          ),
          initialChildren: children,
        );

  static const String name = 'MainRoute';

  static _i5.PageInfo page = _i5.PageInfo(
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

  final _i6.Key? key;

  @override
  String toString() {
    return 'MainRouteArgs{initialNavigation: $initialNavigation, key: $key}';
  }
}

/// generated route for
/// [_i4.NetworkImageViewerScreen]
class NetworkImageViewerRoute
    extends _i5.PageRouteInfo<NetworkImageViewerRouteArgs> {
  NetworkImageViewerRoute({
    required List<String>? imageUrls,
    String? heroTag,
    _i6.Key? key,
    List<_i5.PageRouteInfo>? children,
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

  static _i5.PageInfo page = _i5.PageInfo(
    name,
    builder: (data) {
      final queryParams = data.queryParams;
      final args = data.argsAs<NetworkImageViewerRouteArgs>(
          orElse: () => NetworkImageViewerRouteArgs(
              imageUrls: queryParams.optList('imageUrls')));
      return _i5.DeferredWidget(
        _i4.loadLibrary,
        () => _i4.NetworkImageViewerScreen(
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

  final _i6.Key? key;

  @override
  String toString() {
    return 'NetworkImageViewerRouteArgs{imageUrls: $imageUrls, heroTag: $heroTag, key: $key}';
  }
}

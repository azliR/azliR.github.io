import 'package:animations/animations.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_azlir/app/routes/app_router.gr.dart';
import 'package:injectable/injectable.dart';

@lazySingleton
@AutoRouterConfig()
class AppRouter extends RootStackRouter {
  @override
  List<AutoRoute> get routes {
    return [
      CustomRoute<dynamic>(
        page: MainRoute.page,
        path: '/',
        initial: true,
        transitionsBuilder: _customTransition,
        durationInMilliseconds: 500,
        reverseDurationInMilliseconds: 500,
        children: [
          CustomRoute<dynamic>(
            page: LandingRoute.page,
            path: '',
            transitionsBuilder: _customTransition,
            durationInMilliseconds: 500,
            reverseDurationInMilliseconds: 500,
            initial: true,
          ),
          CustomRoute<dynamic>(
            page: ContactUsRoute.page,
            path: 'contact',
            transitionsBuilder: _customTransition,
            durationInMilliseconds: 500,
            reverseDurationInMilliseconds: 500,
          ),
          CustomRoute<dynamic>(
            page: ToolsRoute.page,
            path: 'tools',
            transitionsBuilder: _customTransition,
            durationInMilliseconds: 500,
            reverseDurationInMilliseconds: 500,
          ),
          CustomRoute<dynamic>(
            page: BlurHashGeneratorRoute.page,
            path: 'blurhash-generator',
            transitionsBuilder: _customTransition,
            durationInMilliseconds: 500,
            reverseDurationInMilliseconds: 500,
          ),
        ],
      ),
      CustomRoute<dynamic>(
        page: NetworkImageViewerRoute.page,
        path: '/image',
        transitionsBuilder: _customTransition,
        durationInMilliseconds: 300,
        reverseDurationInMilliseconds: 300,
      ),
      RedirectRoute(
        path: '*',
        redirectTo: '/',
      ),
    ];
  }

  static Widget _customTransition(
    BuildContext context,
    Animation<double> animation,
    Animation<double> secondaryAnimation,
    Widget child,
  ) {
    return SharedAxisTransition(
      animation: animation,
      secondaryAnimation: secondaryAnimation,
      transitionType: SharedAxisTransitionType.horizontal,
      fillColor: Colors.transparent,
      child: child,
    );
  }
}

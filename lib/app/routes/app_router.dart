import 'package:auto_route/auto_route.dart';
import 'package:flutter_azlir/app/routes/app_router.gr.dart';
import 'package:injectable/injectable.dart';

@lazySingleton
@AutoRouterConfig()
class AppRouter extends RootStackRouter {
  @override
  List<AutoRoute> get routes {
    return [
      AutoRoute(
        page: MainRoute.page,
        initial: true,
        children: [
          AutoRoute(
            page: LandingRoute.page,
            initial: true,
          ),
        ],
      ),
      AutoRoute(
        page: ImagePreviewerRoute.page,
      ),
    ];
  }
}

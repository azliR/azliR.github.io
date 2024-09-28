import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_azlir/app/helpers/injection.dart';
import 'package:flutter_azlir/app/l10n/l10n.dart';
import 'package:flutter_azlir/app/routes/app_router.dart';
import 'package:flutter_azlir/app/themes/app_theme.dart';
import 'package:flutter_azlir/settings/provider/settings_provider.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:loader_overlay/loader_overlay.dart';

class App extends ConsumerStatefulWidget {
  const App({super.key});

  @override
  ConsumerState<App> createState() => _AppState();
}

class _AppState extends ConsumerState<App> {
  final _appRouter = getIt<AppRouter>();

  @override
  void didChangeDependencies() {
    SystemChrome.setSystemUIOverlayStyle(
      SystemUiOverlayStyle(
        statusBarColor: Colors.transparent,
        statusBarIconBrightness: Theme.of(context).brightness,
        statusBarBrightness: Theme.of(context).brightness,
        systemNavigationBarColor: Colors.transparent,
      ),
    );
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);
    super.didChangeDependencies();
  }

  @override
  Widget build(BuildContext context) {
    final themeMode = ref.watch(themeModeSettingProviderProvider);

    final lightColorScheme = ColorScheme.fromSeed(
      seedColor: const Color(0xFF76ff00),
    );
    final darkColorScheme = ColorScheme.fromSeed(
      seedColor: const Color(0xFF76ff00),
      primary: const Color(0xFF76ff00),
      surface: const Color(0xFF1F2023),
      brightness: Brightness.dark,
    );

    return MaterialApp.router(
      debugShowCheckedModeBanner: false,
      themeMode: themeMode,
      theme: AppTheme.generateThemeData(
        colorScheme: lightColorScheme,
        brightness: Brightness.light,
      ),
      darkTheme: AppTheme.generateThemeData(
        colorScheme: darkColorScheme,
        brightness: Brightness.dark,
      ),
      localizationsDelegates: AppLocalizations.localizationsDelegates,
      supportedLocales: AppLocalizations.supportedLocales,
      builder: (context, child) {
        final currentBrightness = Theme.of(context).brightness;

        return LoaderOverlay(
          useBackButtonInterceptor: true,
          duration: const Duration(milliseconds: 250),
          reverseDuration: const Duration(milliseconds: 250),
          overlayColor: switch (currentBrightness) {
            Brightness.dark => darkColorScheme.surface.withOpacity(0.5),
            Brightness.light => lightColorScheme.surface.withOpacity(0.5),
          },
          overlayWidgetBuilder: (_) {
            return const SafeArea(
              child: Align(
                alignment: Alignment.topCenter,
                child: LinearProgressIndicator(),
              ),
            );
          },
          child: child!,
        );
      },
      routerConfig: _appRouter.config(
        navigatorObservers: () => [
          // getIt<AppAutoRouteObserver>(),
        ],
      ),
    );
  }
}

import 'package:auto_route/auto_route.dart';
import 'package:dartx/dartx.dart';
import 'package:flutter/material.dart';
import 'package:flutter_azlir/app/routes/app_router.gr.dart';
import 'package:flutter_azlir/settings/provider/settings_provider.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

enum NavigationTab { home, tools }

enum NavigationType { drawer, top }

class AdaptiveScaffoldDestination {
  const AdaptiveScaffoldDestination({
    required this.label,
    required this.page,
  });

  final String label;
  final PageRouteInfo<dynamic> page;
}

@RoutePage()
class MainScreen extends ConsumerStatefulWidget {
  const MainScreen({
    this.initialNavigation = NavigationTab.home,
    super.key,
  });

  final NavigationTab initialNavigation;

  @override
  ConsumerState<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends ConsumerState<MainScreen> {
  final _innerRouteKey = GlobalKey<AutoRouterState>();

  int? _currentPage;

  List<AdaptiveScaffoldDestination> get _destinations {
    return NavigationTab.values.map((section) {
      switch (section) {
        case NavigationTab.home:
          return const AdaptiveScaffoldDestination(
            label: 'Home',
            page: LandingRoute(),
          );
        case NavigationTab.tools:
          return const AdaptiveScaffoldDestination(
            label: 'Tools',
            page: ToolsRoute(),
          );
      }
    }).toList();
  }

  void _onNavigationChanged(int index) {
    context.router.push(_destinations[index].page);
  }

  @override
  void initState() {
    _currentPage = widget.initialNavigation.index;

    WidgetsBinding.instance.addPostFrameCallback((timeStamp) {
      final innerRouter = _innerRouteKey.currentState!.controller!;
      innerRouter.addListener(() {
        var found = false;
        for (final (index, destination) in _destinations.indexed) {
          if (destination.page.routeName == innerRouter.currentChild?.name) {
            setState(() {
              _currentPage = index;
            });
            found = true;
            break;
          }
        }
        if (!found) {
          setState(() {
            _currentPage = null;
          });
        }
      });
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    final textTheme = Theme.of(context).textTheme;

    final themeMode = ref.watch(themeModeSettingProviderProvider);

    final size = MediaQuery.sizeOf(context);

    final NavigationType navigationType;
    if (size.width < 1080) {
      navigationType = NavigationType.drawer;
    } else {
      navigationType = NavigationType.top;
    }
    final navigationTab =
        _currentPage != null && _currentPage! < NavigationTab.values.length
            ? NavigationTab.values[_currentPage!]
            : null;

    return Scaffold(
      backgroundColor: ElevationOverlay.applySurfaceTint(
        colorScheme.surface,
        colorScheme.surfaceTint,
        2,
      ),
      drawer: navigationType == NavigationType.drawer
          ? _DrawerMain(
              selectedTab: navigationTab,
              onSelected: _onNavigationChanged,
            )
          : null,
      appBar: AppBar(
        elevation: 6,
        scrolledUnderElevation: 6,
        surfaceTintColor: colorScheme.surface,
        backgroundColor: colorScheme.surface,
        shadowColor: colorScheme.surfaceTint.withOpacity(0.1),
        title: navigationType == NavigationType.top
            ? _TopNavigationBar(
                selectedTab: navigationTab,
                onSelected: _onNavigationChanged,
              )
            : MouseRegion(
                cursor: SystemMouseCursors.click,
                child: GestureDetector(
                  onTap: () {
                    if (context.router.isRouteActive(LandingRoute.name)) return;

                    context.router.push(const LandingRoute());
                  },
                  child: const Text('azlir.dev'),
                ),
              ),
        actions: [
          const SizedBox(width: 8),
          if (navigationType == NavigationType.top)
            SizedBox(
              height: kToolbarHeight,
              width: 160,
              child: Padding(
                padding: const EdgeInsets.all(8),
                child: DropdownMenu<ThemeMode>(
                  enableSearch: false,
                  requestFocusOnTap: false,
                  initialSelection: themeMode,
                  expandedInsets: const EdgeInsets.symmetric(horizontal: 8),
                  dropdownMenuEntries: ThemeMode.values.map(
                    (themeMode) {
                      return DropdownMenuEntry(
                        value: themeMode,
                        label: switch (themeMode) {
                          ThemeMode.system => 'System',
                          ThemeMode.light => 'Light',
                          ThemeMode.dark => 'Dark',
                        },
                      );
                    },
                  ).toList(),
                  onSelected: (value) {
                    ref
                        .read(themeModeSettingProviderProvider.notifier)
                        .setThemeMode(value!);
                  },
                ),
              ),
            ),
          if (navigationType == NavigationType.top)
            FilledButton(
              style: switch (Theme.of(context).brightness) {
                Brightness.dark => FilledButton.styleFrom(
                    minimumSize: const Size(56, 56),
                    textStyle: textTheme.titleMedium!.copyWith(
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                Brightness.light => null,
              },
              onPressed: () {
                if (context.router.isRouteActive(ContactUsRoute.name)) return;

                context.router.push(const ContactUsRoute());
              },
              child: const Text('Contact Us'),
            ),
          const SizedBox(width: 4),
        ],
      ),
      body: AutoRouter(key: _innerRouteKey),
    );
  }
}

class _DrawerMain extends ConsumerStatefulWidget {
  const _DrawerMain({
    required this.selectedTab,
    required this.onSelected,
    super.key,
  });

  final NavigationTab? selectedTab;
  final void Function(int index) onSelected;

  @override
  ConsumerState<_DrawerMain> createState() => _DrawerMainState();
}

class _DrawerMainState extends ConsumerState<_DrawerMain> {
  NavigationTab? _hoveredTab;

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    final textTheme = Theme.of(context).textTheme;

    final padding = MediaQuery.paddingOf(context);

    final themeMode = ref.watch(themeModeSettingProviderProvider);

    return Drawer(
      elevation: 0,
      width: 256,
      child: Column(
        children: [
          SizedBox(height: padding.top + 8),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8),
            child: Row(
              children: [
                MouseRegion(
                  cursor: SystemMouseCursors.click,
                  child: GestureDetector(
                    onTap: () {
                      if (context.router.isRouteActive(LandingRoute.name)) {
                        return;
                      }

                      Navigator.pop(context);
                      context.router.push(const LandingRoute());
                    },
                    child: Text(
                      'azlir.dev',
                      style: textTheme.headlineSmall,
                    ),
                  ),
                ),
                const Spacer(),
                const CloseButton(),
              ],
            ),
          ),
          const SizedBox(height: 8),
          const Divider(height: 0),
          const SizedBox(height: 8),
          ...NavigationTab.values.mapIndexed(
            (index, tab) {
              return ListTile(
                title: Align(
                  alignment: Alignment.centerLeft,
                  child: Container(
                    margin: const EdgeInsets.symmetric(
                      horizontal: 8,
                    ),
                    decoration: BoxDecoration(
                      border: Border(
                        bottom: BorderSide(
                          color: widget.selectedTab == tab || _hoveredTab == tab
                              ? colorScheme.primary
                              : Colors.transparent,
                          width: 2,
                        ),
                      ),
                    ),
                    child: Text(
                      switch (tab) {
                        NavigationTab.home => 'Home',
                        NavigationTab.tools => 'Tools',
                      },
                      style: textTheme.bodyLarge,
                    ),
                  ),
                ),
                onTap: () {
                  widget.onSelected(index);
                  Navigator.pop(context);
                },
              );
            },
          ),
          const Spacer(),
          SizedBox(
            height: 64,
            width: double.infinity,
            child: Padding(
              padding: const EdgeInsets.all(8),
              child: DropdownMenu<ThemeMode>(
                enableSearch: false,
                requestFocusOnTap: false,
                initialSelection: themeMode,
                expandedInsets: const EdgeInsets.symmetric(horizontal: 8),
                dropdownMenuEntries: ThemeMode.values.map(
                  (themeMode) {
                    return DropdownMenuEntry(
                      value: themeMode,
                      label: switch (themeMode) {
                        ThemeMode.system => 'System',
                        ThemeMode.light => 'Light',
                        ThemeMode.dark => 'Dark',
                      },
                    );
                  },
                ).toList(),
                onSelected: (value) {
                  ref
                      .read(themeModeSettingProviderProvider.notifier)
                      .setThemeMode(value!);
                },
              ),
            ),
          ),
          const SizedBox(height: 8),
          SizedBox(
            width: double.infinity,
            child: Padding(
              padding: const EdgeInsets.all(4),
              child: FilledButton(
                style: FilledButton.styleFrom(
                  minimumSize: const Size(64, 64),
                  textStyle: textTheme.titleMedium,
                ),
                onPressed: () {
                  if (context.router.isRouteActive(ContactUsRoute.name)) {
                    return;
                  }

                  Navigator.pop(context);
                  context.router.push(const ContactUsRoute());
                },
                child: const Text('Contact Us'),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _TopNavigationBar extends ConsumerStatefulWidget {
  const _TopNavigationBar({
    required this.selectedTab,
    required this.onSelected,
  });

  final NavigationTab? selectedTab;
  final void Function(int index) onSelected;

  @override
  ConsumerState<_TopNavigationBar> createState() => _TopNavigationBarState();
}

class _TopNavigationBarState extends ConsumerState<_TopNavigationBar> {
  NavigationTab? _hoveredTab;

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    final textTheme = Theme.of(context).textTheme;

    return SizedBox(
      height: kToolbarHeight,
      child: Row(
        children: [
          MouseRegion(
            cursor: SystemMouseCursors.click,
            child: GestureDetector(
              onTap: () {
                if (context.router.isRouteActive(LandingRoute.name)) return;

                context.router.push(const LandingRoute());
              },
              child: const Text('azlir.dev'),
            ),
          ),
          const SizedBox(width: 36),
          ...NavigationTab.values.mapIndexed(
            (index, tab) {
              return MouseRegion(
                cursor: SystemMouseCursors.click,
                onHover: (event) {
                  setState(() {
                    _hoveredTab = tab;
                  });
                },
                onExit: (event) {
                  setState(() {
                    _hoveredTab = null;
                  });
                },
                child: GestureDetector(
                  onTap: () => widget.onSelected(index),
                  child: Container(
                    height: kToolbarHeight,
                    margin: const EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 12,
                    ),
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      border: Border(
                        bottom: BorderSide(
                          color: widget.selectedTab == tab || _hoveredTab == tab
                              ? colorScheme.primary
                              : Colors.transparent,
                          width: 2,
                        ),
                      ),
                    ),
                    child: Text(
                      switch (tab) {
                        NavigationTab.home => 'Home',
                        NavigationTab.tools => 'Tools',
                      },
                      style: textTheme.bodyLarge,
                    ),
                  ),
                ),
              );
            },
          ),
          const Spacer(),
        ],
      ),
    );
  }
}

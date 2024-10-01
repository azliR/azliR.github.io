import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_azlir/app/routes/app_router.gr.dart';
import 'package:flutter_azlir/settings/provider/settings_provider.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

enum NavigationTab { home }

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

  var _currentPage = 0;

  List<AdaptiveScaffoldDestination> get _destinations {
    return NavigationTab.values.map((section) {
      switch (section) {
        case NavigationTab.home:
          return const AdaptiveScaffoldDestination(
            label: 'Home',
            page: LandingRoute(),
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
        for (final (index, destination) in _destinations.indexed) {
          if (destination.page.routeName == innerRouter.currentChild?.name) {
            setState(() {
              _currentPage = index;
            });
            break;
          }
        }
      });
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final colorScheme = theme.colorScheme;

    final themeMode = ref.watch(themeModeSettingProviderProvider);

    final size = MediaQuery.sizeOf(context);
    final padding = MediaQuery.paddingOf(context);

    final NavigationType navigationType;
    if (size.width < 1080) {
      navigationType = NavigationType.drawer;
    } else {
      navigationType = NavigationType.top;
    }
    final navigationTab = _currentPage < NavigationTab.values.length
        ? NavigationTab.values[_currentPage]
        : null;

    return Scaffold(
      backgroundColor: ElevationOverlay.applySurfaceTint(
        colorScheme.surface,
        colorScheme.surfaceTint,
        2,
      ),
      drawer: navigationType == NavigationType.drawer
          ? Drawer(
              elevation: 0,
              child: Column(
                children: [
                  SizedBox(height: padding.top + 8),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 8),
                    child: Row(
                      children: [
                        Text(
                          'azlir.dev',
                          style: theme.textTheme.headlineSmall,
                        ),
                        Spacer(),
                        CloseButton(),
                      ],
                    ),
                  ),
                  const SizedBox(height: 8),
                  const Divider(height: 0),
                  // ..._destinations.mapIndexed(
                  //   (index, destination) => ListTile(
                  //     onTap: () {
                  //       Navigator.pop(context);
                  //       _onNavigationChanged(index);
                  //     },
                  //     title: Text(destination.label),

                  //   ),
                  // ),
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
                        expandedInsets:
                            const EdgeInsets.symmetric(horizontal: 8),
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
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.zero,
                          ),
                          textStyle: theme.textTheme.titleMedium!.copyWith(
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        onPressed: () {
                          context.router.push(const ContactUsRoute());
                        },
                        child: Text('Contact Us'),
                      ),
                    ),
                  ),
                ],
              ),
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
            : const Text('azlir.dev'),
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
                    textStyle: theme.textTheme.titleMedium!.copyWith(
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
                context.router.push(const LandingRoute());
              },
              child: const Text('azlir.dev'),
            ),
          ),
          const SizedBox(width: 16),
          // ...NavigationTab.values.mapIndexed(
          //   (index, tab) {
          //     return MouseRegion(
          //       cursor: SystemMouseCursors.click,
          //       onHover: (event) {
          //         setState(() {
          //           _hoveredTab = tab;
          //         });
          //       },
          //       onExit: (event) {
          //         setState(() {
          //           _hoveredTab = null;
          //         });
          //       },
          //       child: GestureDetector(
          //         onTap: () => widget.onSelected(index),
          //         child: AnimatedContainer(
          //           duration: const Duration(milliseconds: 200),
          //           height: kToolbarHeight,
          //           padding: const EdgeInsets.symmetric(horizontal: 8),
          //           margin: const EdgeInsets.symmetric(horizontal: 8),
          //           alignment: Alignment.center,
          //           child: Text(
          //             switch (tab) {
          //               NavigationTab.home => 'Home',
          //             },
          //             style: textTheme.bodyMedium?.copyWith(
          //               fontWeight: FontWeight.bold,
          //             ),
          //           ),
          //         ),
          //       ),
          //     );
          //   },
          // ),
          const Spacer(),
          // const SizedBox(
          //   height: double.infinity,
          //   width: 256,
          //   child: Padding(
          //     padding: EdgeInsets.symmetric(vertical: 8),
          //     child: TextField(
          //       decoration: InputDecoration(
          //         hintText: 'Search',
          //         prefixIcon: Icon(Icons.search),
          //         contentPadding: EdgeInsets.symmetric(horizontal: 16),
          //       ),
          //     ),
          //   ),
          // ),
        ],
      ),
    );
  }
}

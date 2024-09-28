import 'dart:async';
import 'dart:developer';

import 'package:flutter/widgets.dart';
import 'package:flutter_azlir/app/helpers/injection.dart';
import 'package:flutter_azlir/app/observers/app_riverpod_observer.dart';
import 'package:flutter_azlir/app/services/local_storage_service.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hive_ce_flutter/hive_flutter.dart';

Future<void> bootstrap(
  String env,
  FutureOr<Widget> Function() builder,
) async {
  WidgetsFlutterBinding.ensureInitialized();

  await configureDependencies(env);

  await Hive.initFlutter();
  await LocalStorageService.openBox();

  FlutterError.onError = (details) {
    log(
      details.exceptionAsString(),
      error: details,
      stackTrace: details.stack,
    );
  };

  runApp(
    ProviderScope(
      observers: [
        getIt<AppRiverpodObserver>(),
      ],
      child: await builder(),
    ),
  );
}

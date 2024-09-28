// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// InjectableConfigGenerator
// **************************************************************************

// ignore_for_file: type=lint
// coverage:ignore-file

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:flutter_azlir/app/observers/app_auto_route_observer.dart'
    as _i504;
import 'package:flutter_azlir/app/observers/app_riverpod_observer.dart'
    as _i1055;
import 'package:flutter_azlir/app/routes/app_router.dart' as _i569;
import 'package:get_it/get_it.dart' as _i174;
import 'package:injectable/injectable.dart' as _i526;

extension GetItInjectableX on _i174.GetIt {
// initializes the registration of main-scope dependencies inside of GetIt
  _i174.GetIt init({
    String? environment,
    _i526.EnvironmentFilter? environmentFilter,
  }) {
    final gh = _i526.GetItHelper(
      this,
      environment,
      environmentFilter,
    );
    gh.lazySingleton<_i569.AppRouter>(() => _i569.AppRouter());
    gh.lazySingleton<_i504.AppAutoRouteObserver>(
        () => _i504.AppAutoRouteObserver());
    gh.lazySingleton<_i1055.AppRiverpodObserver>(
        () => _i1055.AppRiverpodObserver());
    return this;
  }
}

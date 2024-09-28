import 'package:flutter_azlir/app/views/app.dart';
import 'package:flutter_azlir/bootstrap.dart';
import 'package:injectable/injectable.dart';

void main() {
  bootstrap(Environment.test, () => const App());
}

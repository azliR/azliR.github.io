import 'package:auto_route/auto_route.dart';
import 'package:blurhash_generator/blurhash_generator.dart';
import 'package:flutter/material.dart';
import 'package:responsive_builder/responsive_builder.dart';

@RoutePage(deferredLoading: true)
class BlurHashGeneratorScreen extends StatelessWidget {
  const BlurHashGeneratorScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: BlurHashGenerator(
        direction: getValueForScreenType(
          context: context,
          mobile: Axis.vertical,
          tablet: Axis.horizontal,
        ),
      ),
    );
  }
}

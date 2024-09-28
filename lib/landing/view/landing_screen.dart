import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_azlir/landing/view/sections/introduction_section.dart';
import 'package:flutter_azlir/landing/view/sections/projects_section.dart';

@RoutePage()
class LandingScreen extends StatelessWidget {
  const LandingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;
    final size = MediaQuery.sizeOf(context);

    return Scaffold(
      body: ListView(
        children: [
          IntroductionSection(),
          ProjectsSection(),
        ],
      ),
    );
  }
}

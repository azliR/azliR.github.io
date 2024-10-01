import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_azlir/landing/view/sections/backend_projects_section.dart';
import 'package:flutter_azlir/landing/view/sections/flutter_projects_section.dart';
import 'package:flutter_azlir/landing/view/sections/footer_section.dart';
import 'package:flutter_azlir/landing/view/sections/introduction_section.dart';
import 'package:flutter_azlir/landing/view/sections/ml_projects_section.dart';

@RoutePage()
class LandingScreen extends StatelessWidget {
  const LandingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;
    final size = MediaQuery.sizeOf(context);

    return Scaffold(
      body: SelectionArea(
        child: ListView(
          children: const [
            IntroductionSection(),
            SizedBox(height: 128),
            FlutterProjectsSection(),
            SizedBox(height: 128),
            BackendProjectsSection(),
            SizedBox(height: 128),
            MlProjectsSection(),
            SizedBox(height: 128),
            FooterSection(),
          ],
        ),
      ),
    );
  }
}

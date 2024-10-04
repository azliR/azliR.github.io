import 'package:flutter/material.dart';
import 'package:flutter_azlir/app/themes/app_theme.dart';
import 'package:flutter_azlir/landing/widgets/random_reveal_text.dart';
import 'package:flutter_azlir/landing/widgets/showcase_image.dart';
import 'package:responsive_builder/responsive_builder.dart';

class IntroductionSection extends StatelessWidget {
  const IntroductionSection({super.key});

  @override
  Widget build(BuildContext context) {
    // final colorScheme = Theme.of(context).colorScheme;
    final textTheme = Theme.of(context).textTheme;

    return Padding(
      padding: EdgeInsets.symmetric(
        horizontal: getValueForScreenType(
          context: context,
          mobile: 16,
          tablet: 32,
          desktop: 64,
        ),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          ScreenTypeBuilder(
            mobile: (context, child) => const SizedBox(height: 64),
            desktop: (context, child) => const SizedBox(height: 100),
          ),
          Flex(
            mainAxisSize: getValueForScreenType(
              context: context,
              mobile: MainAxisSize.min,
              desktop: MainAxisSize.max,
            ),
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            direction: getValueForScreenType(
              context: context,
              mobile: Axis.vertical,
              desktop: Axis.horizontal,
            ),
            children: [
              ScreenTypeBuilder(
                desktop: (context, child) => Expanded(child: child!),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Align(
                      alignment: getValueForScreenType(
                        context: context,
                        mobile: Alignment.centerLeft,
                        tablet: Alignment.center,
                        desktop: Alignment.centerLeft,
                      ),
                      child: RandomRevealText(
                        texts: const ['azliR', 'Rizal Hadiyansah'],
                        transitionDuration: const Duration(seconds: 2),
                        waitDuration: const Duration(seconds: 10),
                        textStyle: textTheme.displayMedium,
                      ),
                    ),
                    const SizedBox(height: 8),
                    Align(
                      alignment: getValueForScreenType(
                        context: context,
                        mobile: Alignment.centerLeft,
                        tablet: Alignment.center,
                        desktop: Alignment.centerLeft,
                      ),
                      child: Text(
                        'Fullstack Developer',
                        style: textTheme.bodyMedium,
                      ),
                    ),
                  ],
                ),
              ),
              ScreenTypeBuilder(
                mobile: (context, child) => const SizedBox(height: 32),
                desktop: (context, child) => const SizedBox(width: 32),
              ),
              ScreenTypeBuilder(
                desktop: (context, child) => Expanded(child: child!),
                child: const ShowcaseImage(
                  maxHeight: 400,
                  maxWidth: 720,
                  duration: Duration(seconds: 2),
                  imageUrls: [
                    'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-0.webp',
                    'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-1.webp',
                    'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-2.webp',
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

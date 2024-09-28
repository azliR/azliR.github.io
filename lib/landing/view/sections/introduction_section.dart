import 'package:flutter/material.dart';
import 'package:flutter_azlir/landing/widgets/random_reveal_text.dart';
import 'package:flutter_azlir/landing/widgets/showcase_image.dart';
import 'package:responsive_builder/responsive_builder.dart';

class IntroductionSection extends StatelessWidget {
  const IntroductionSection({super.key});

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    final textTheme = Theme.of(context).textTheme;

    final leftWidget = Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const SizedBox(height: 100),
        Align(
          alignment: Alignment.centerLeft,
          child: RandomRevealText(
            texts: const ['azliR', 'Rizal Hadiyansah'],
            transitionDuration: const Duration(seconds: 2),
            waitDuration: const Duration(seconds: 10),
            textStyle: textTheme.headlineLarge,
          ),
        ),
        const SizedBox(height: 8),
        Align(
          alignment: Alignment.centerLeft,
          child: Text(
            'Flutter Developer',
            style: textTheme.bodyMedium,
          ),
        ),
        const SizedBox(height: 100),
      ],
    );
    final rightWidget = ShowcaseImage(
      maxHeight: 400,
      maxWidth: 720,
      duration: Duration(seconds: 2),
      imageUrls: [
        'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-0.webp',
        'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-1.webp',
        'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-2.webp',
      ],
    );

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
          const SizedBox(height: 80),
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
              getValueForScreenType(
                context: context,
                mobile: leftWidget,
                desktop: Expanded(
                  child: leftWidget,
                ),
              ),
              getValueForScreenType(
                context: context,
                mobile: rightWidget,
                desktop: Expanded(
                  child: rightWidget,
                ),
              ),
            ],
          ),
          const SizedBox(height: 80),
        ],
      ),
    );
  }
}

import 'package:flutter/material.dart';

class FooterSection extends StatelessWidget {
  const FooterSection({super.key});

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    final textTheme = Theme.of(context).textTheme;

    return Card.filled(
      margin: EdgeInsets.zero,
      color: switch (Theme.of(context).brightness) {
        Brightness.dark => colorScheme.surface,
        Brightness.light => colorScheme.secondaryContainer,
      },
      shape: RoundedRectangleBorder(
        side: switch (Theme.of(context).brightness) {
          Brightness.dark => BorderSide(color: colorScheme.primary, width: 2),
          Brightness.light => BorderSide.none,
        },
      ),
      child: SizedBox(
        height: 120,
        child: Row(
          children: [
            Padding(
              padding: const EdgeInsets.all(16),
              child: Align(
                alignment: Alignment.topLeft,
                child: Text(
                  'azlir.dev',
                  textAlign: TextAlign.center,
                  style: textTheme.titleLarge,
                ),
              ),
            ),
            const Spacer(),
            Padding(
              padding: const EdgeInsets.all(16),
              child: Align(
                alignment: Alignment.topRight,
                child: Row(
                  children: [
                    Text(
                      'Made with 💙 using ',
                      textAlign: TextAlign.center,
                      style: textTheme.bodyMedium,
                    ),
                    const FlutterLogo(size: 16),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

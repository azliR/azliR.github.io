import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_azlir/app/themes/app_theme.dart';
import 'package:responsive_builder/responsive_builder.dart';

@RoutePage()
class ContactUsScreen extends StatelessWidget {
  const ContactUsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    final textTheme = Theme.of(context).textTheme;

    return Scaffold(
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          const SizedBox(height: 56),
          Center(
            child: Text(
              'How can we help you today?',
              style: textTheme.headlineLarge,
            ),
          ),
          const SizedBox(height: 16),
          Center(
            child: Text(
              "We're excited to learn more about your project!",
              style: textTheme.bodyLarge,
            ),
          ),
          const SizedBox(height: 16),
          Center(
            child: ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 600),
              child: Flex(
                direction: getValueForScreenType(
                  context: context,
                  mobile: Axis.vertical,
                  tablet: Axis.horizontal,
                ),
                children: [
                  ScreenTypeBuilder(
                    tablet: (context, child) => Expanded(child: child!),
                    child: TextFormField(
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return 'Please enter your name';
                        }
                        return null;
                      },
                      decoration: const InputDecoration(
                        labelText: 'Name',
                      ),
                    ),
                  ),
                  ScreenTypeBuilder(
                    tablet: (context, child) => const SizedBox(width: 16),
                    child: const SizedBox(height: 16),
                  ),
                  ScreenTypeBuilder(
                    tablet: (context, child) => Expanded(child: child!),
                    child: TextFormField(
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return 'Please enter your email';
                        }
                        return null;
                      },
                      decoration: const InputDecoration(
                        labelText: 'Email',
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 16),
          Center(
            child: ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 600),
              child: TextFormField(
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter your message';
                  }
                  return null;
                },
                decoration: const InputDecoration(
                  labelText: 'Message',
                  helperText: 'Tell us more about your project',
                ),
                maxLines: 5,
              ),
            ),
          ),
          const SizedBox(height: 16),
          Center(
            child: FilledButton(
              onPressed: () {},
              child: const Text('Contact Us'),
            ),
          ),
        ],
      ),
    );
  }
}

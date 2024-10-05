import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_azlir/app/themes/app_theme.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:url_launcher/url_launcher_string.dart';

@RoutePage(deferredLoading: true)
class ContactUsScreen extends StatefulWidget {
  const ContactUsScreen({super.key});

  @override
  State<ContactUsScreen> createState() => _ContactUsScreenState();
}

class _ContactUsScreenState extends State<ContactUsScreen> {
  final _formKey = GlobalKey<FormState>();
  final _nameController = TextEditingController();
  final _messageController = TextEditingController();

  @override
  void dispose() {
    _nameController.dispose();
    _messageController.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // final colorScheme = Theme.of(context).colorScheme;
    final textTheme = Theme.of(context).textTheme;

    return Scaffold(
      body: Form(
        key: _formKey,
        child: ListView(
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
            const SizedBox(height: 24),
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
                        controller: _nameController,
                        keyboardType: TextInputType.name,
                        textInputAction: TextInputAction.next,
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
                    // ScreenTypeBuilder(
                    //   tablet: (context, child) => const SizedBox(width: 16),
                    //   child: const SizedBox(height: 16),
                    // ),
                    // ScreenTypeBuilder(
                    //   tablet: (context, child) => Expanded(child: child!),
                    //   child: TextFormField(
                    //     validator: (value) {
                    //       if (value == null || value.isEmpty) {
                    //         return 'Please enter your email';
                    //       }
                    //       return null;
                    //     },
                    //     decoration: const InputDecoration(
                    //       labelText: 'Email',
                    //     ),
                    //   ),
                    // ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 16),
            Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 600),
                child: TextFormField(
                  controller: _messageController,
                  keyboardType: TextInputType.multiline,
                  textInputAction: TextInputAction.newline,
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Please enter your message';
                    }
                    return null;
                  },
                  decoration: const InputDecoration(
                    labelText: 'Message',
                    helperText: 'Tell me more about your project',
                  ),
                  maxLines: 5,
                ),
              ),
            ),
            const SizedBox(height: 16),
            Center(
              child: FilledButton(
                onPressed: () {
                  if (!_formKey.currentState!.validate()) return;

                  final name = _nameController.text;
                  final message = _messageController.text;

                  launchUrl(
                    Uri.parse(
                      'mailto:rizalhadiyansah@gmail.com?subject=Project Request from $name&body=$message',
                    ),
                  );
                },
                child: const Text('Contact Us'),
              ),
            ),
            const SizedBox(height: 16),
            Center(
              child: TextButton(
                onPressed: () {
                  launchUrlString('https://www.fiverr.com/rizalhadiyansah');
                },
                child: const Text('Or reach me on Fiverr'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

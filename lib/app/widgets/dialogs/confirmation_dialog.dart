import 'package:flutter/material.dart';
import 'package:flutter_azlir/app/l10n/l10n.dart';

class ConfirmationDialog extends StatelessWidget {
  const ConfirmationDialog({
    required this.message,
    this.title,
    this.titleColor,
    this.negativeButtonText,
    this.positiveButtonText,
    this.onNegativePressed,
    this.onPositivePressed,
    this.negativeButtonColor,
    this.positiveButtonColor,
    this.negativeButtonTextColor,
    this.positiveButtonTextColor,
    super.key,
  });

  final String message;
  final String? title;
  final Color? titleColor;
  final String? negativeButtonText;
  final String? positiveButtonText;
  final VoidCallback? onNegativePressed;
  final VoidCallback? onPositivePressed;
  final Color? negativeButtonColor;
  final Color? positiveButtonColor;
  final Color? negativeButtonTextColor;
  final Color? positiveButtonTextColor;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return AlertDialog(
      backgroundColor: theme.colorScheme.surface,
      surfaceTintColor: theme.colorScheme.surfaceTint,
      // shape: RoundedRectangleBorder(
      //   borderRadius: AppTheme.defaultBoardRadius,
      // ),
      title: title != null
          ? Text(title!, style: theme.textTheme.titleMedium)
          : null,
      content: Padding(
        padding:
            title != null ? EdgeInsets.zero : const EdgeInsets.only(top: 4),
        child: Text(
          message,
          style: theme.textTheme.bodyMedium?.copyWith(
            color: titleColor ?? theme.colorScheme.onSurface,
          ),
        ),
      ),
      actions: <Widget>[
        TextButton(
          style: TextButton.styleFrom(
            backgroundColor: negativeButtonColor,
            foregroundColor: negativeButtonTextColor,
          ),
          onPressed: onNegativePressed ?? () => Navigator.of(context).pop(),
          child: Text(negativeButtonText ?? context.l10n.common_no),
        ),
        FilledButton.tonal(
          style: FilledButton.styleFrom(
            backgroundColor: positiveButtonColor,
            foregroundColor: positiveButtonTextColor,
          ),
          onPressed: onPositivePressed ?? () => Navigator.of(context).pop(),
          child: Text(positiveButtonText ?? context.l10n.common_yes),
        ),
      ],
      actionsPadding: const EdgeInsets.symmetric(horizontal: 16),
      buttonPadding: EdgeInsets.zero,
    );
  }
}

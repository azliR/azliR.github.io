import 'package:flutter/material.dart';
import 'package:flutter_azlir/image_viewer/view/network_image_viewer_screen.dart';
import 'package:flutter_blurhash/flutter_blurhash.dart';

class BlurHashPlaceholder extends StatelessWidget {
  const BlurHashPlaceholder({
    required this.imageData,
    super.key,
  });

  final ImageData imageData;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final aspectRatio = imageData.width / imageData.height;

        var newWidth = constraints.maxWidth;
        var newHeight = constraints.maxHeight;

        if (imageData.width > constraints.maxWidth) {
          newWidth = constraints.maxWidth;
          newHeight = constraints.maxWidth / aspectRatio;
        }

        if (newHeight > constraints.maxHeight) {
          newHeight = constraints.maxHeight;
          newWidth = constraints.maxHeight * aspectRatio;
        }

        return SizedBox(
          width: newWidth,
          height: newHeight,
          child: BlurHash(
            hash: imageData.hash,
          ),
        );
      },
    );
  }
}

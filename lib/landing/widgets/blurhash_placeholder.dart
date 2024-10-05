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
        final width = constraints.maxWidth;
        final height = width * imageData.height / imageData.width;

        return SizedBox(
          width: width,
          height: height,
          child: BlurHash(
            hash: imageData.hash,
          ),
        );
      },
    );
  }
}

import 'package:auto_route/auto_route.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:material_symbols_icons/symbols.dart';
import 'package:photo_view/photo_view.dart';

@RoutePage()
class ImagePreviewerScreen extends StatelessWidget {
  const ImagePreviewerScreen({
    required this.url,
    this.heroTag,
    super.key,
  });

  final String url;
  final String? heroTag;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Stack(
        children: [
          PhotoView(
            minScale: PhotoViewComputedScale.contained,
            heroAttributes: PhotoViewHeroAttributes(tag: heroTag ?? url),
            imageProvider: CachedNetworkImageProvider(url),
            errorBuilder: (context, error, stackTrace) {
              return const Center(
                child: Icon(
                  Symbols.broken_image_rounded,
                  fill: 1,
                  size: 100,
                  color: Colors.grey,
                ),
              );
            },
          ),
          const SafeArea(
            child: Padding(
              padding: EdgeInsets.all(16),
              child: Align(
                alignment: Alignment.topLeft,
                child: BackButton(
                  color: Colors.white,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

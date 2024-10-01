import 'package:auto_route/auto_route.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:material_symbols_icons/symbols.dart';
import 'package:photo_view/photo_view.dart';
import 'package:photo_view/photo_view_gallery.dart';

@RoutePage()
class NetworkImageViewerScreen extends StatefulWidget {
  const NetworkImageViewerScreen({
    required this.urls,
    this.heroTag,
    super.key,
  });

  final List<String> urls;
  final String? heroTag;

  @override
  State<NetworkImageViewerScreen> createState() =>
      _NetworkImageViewerScreenState();
}

class _NetworkImageViewerScreenState extends State<NetworkImageViewerScreen> {
  final _pageController = PageController();

  var _currentPage = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Stack(
        children: [
          PhotoViewGallery.builder(
            pageController: _pageController,
            itemCount: widget.urls.length,
            builder: (context, index) {
              return PhotoViewGalleryPageOptions(
                minScale: PhotoViewComputedScale.contained,
                heroAttributes: PhotoViewHeroAttributes(
                  tag: widget.heroTag ?? widget.urls[index],
                ),
                imageProvider: CachedNetworkImageProvider(widget.urls[index]),
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
              );
            },
          ),
          if (widget.urls.length > 1) ...[
            Align(
              alignment: Alignment.centerLeft,
              child: Padding(
                padding: const EdgeInsets.all(8),
                child: IconButton.filledTonal(
                  onPressed: _currentPage == 0
                      ? null
                      : () {
                          setState(() {
                            _currentPage--;
                          });

                          _pageController.animateToPage(
                            _currentPage,
                            duration: const Duration(milliseconds: 400),
                            curve: Curves.easeInOut,
                          );
                        },
                  icon: const Icon(Symbols.chevron_left_rounded),
                ),
              ),
            ),
            Align(
              alignment: Alignment.centerRight,
              child: Padding(
                padding: const EdgeInsets.all(8),
                child: IconButton.filledTonal(
                  onPressed: _currentPage == widget.urls.length - 1
                      ? null
                      : () {
                          setState(() {
                            _currentPage++;
                          });

                          _pageController.animateToPage(
                            _currentPage,
                            duration: const Duration(milliseconds: 400),
                            curve: Curves.easeInOut,
                          );
                        },
                  icon: const Icon(Symbols.chevron_right_rounded),
                ),
              ),
            ),
          ],
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

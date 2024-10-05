import 'package:animations/animations.dart';
import 'package:auto_route/auto_route.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_azlir/landing/widgets/blurhash_placeholder.dart';
import 'package:material_symbols_icons/symbols.dart';
import 'package:photo_view/photo_view.dart';
import 'package:photo_view/photo_view_gallery.dart';

class ImageData extends Equatable {
  const ImageData({
    required this.url,
    required this.hash,
    required this.width,
    required this.height,
  });

  final String url;
  final String hash;
  final double width;
  final double height;

  @override
  List<Object?> get props => [url, hash];
}

@RoutePage()
class NetworkImageViewerScreen extends StatefulWidget {
  const NetworkImageViewerScreen({
    required this.imageDatas,
    this.heroTag,
    super.key,
  });

  final List<ImageData> imageDatas;
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
    return CallbackShortcuts(
      bindings: <ShortcutActivator, VoidCallback>{
        const SingleActivator(LogicalKeyboardKey.arrowLeft): () {
          if (_currentPage > 0) {
            setState(() {
              _currentPage--;
            });

            _pageController.animateToPage(
              _currentPage,
              duration: const Duration(milliseconds: 400),
              curve: Curves.easeInOut,
            );
          }
        },
        const SingleActivator(LogicalKeyboardKey.arrowRight): () {
          if (_currentPage < widget.imageDatas.length - 1) {
            setState(() {
              _currentPage++;
            });

            _pageController.animateToPage(
              _currentPage,
              duration: const Duration(milliseconds: 400),
              curve: Curves.easeInOut,
            );
          }
        },
        const SingleActivator(LogicalKeyboardKey.escape): () {
          context.router.maybePop();
        },
      },
      child: Focus(
        autofocus: true,
        child: Scaffold(
          appBar: AppBar(
            backgroundColor: Colors.transparent,
            elevation: 0,
            shape: const Border(),
            leading: const AutoLeadingButton(),
            actions: [
              OutlinedButton(
                onPressed: () {
                  showModal<void>(
                    context: context,
                    builder: (context) {
                      return AlertDialog(
                        title: const Text('Keyboard shortcuts'),
                        content: const Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            _ShortcutTile(
                              label: Text('Previous image'),
                              shortcut: Text('←'),
                            ),
                            _ShortcutTile(
                              label: Text('Next image'),
                              shortcut: Text('→'),
                            ),
                            _ShortcutTile(
                              label: Text('Back'),
                              shortcut: Text('Esc'),
                            ),
                          ],
                        ),
                        actions: [
                          OutlinedButton(
                            onPressed: () {
                              Navigator.of(context).pop();
                            },
                            child: const Text('Close'),
                          ),
                        ],
                      );
                    },
                  );
                },
                child: const Text('Keyboard shortcuts'),
              ),
              const SizedBox(width: 8),
            ],
          ),
          extendBodyBehindAppBar: true,
          backgroundColor: Colors.black,
          body: Stack(
            children: [
              PhotoViewGallery.builder(
                pageController: _pageController,
                itemCount: widget.imageDatas.length,
                loadingBuilder: (context, event) {
                  return BlurHashPlaceholder(
                    imageData: widget.imageDatas[_currentPage],
                  );
                },
                onPageChanged: (index) {
                  setState(() {
                    _currentPage = index;
                  });
                },
                builder: (context, index) {
                  return PhotoViewGalleryPageOptions(
                    minScale: PhotoViewComputedScale.contained,
                    heroAttributes: PhotoViewHeroAttributes(
                      tag: widget.heroTag ?? widget.imageDatas[index],
                    ),
                    imageProvider: CachedNetworkImageProvider(
                      widget.imageDatas[index].url,
                    ),
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
              if (widget.imageDatas.length > 1) ...[
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
                      onPressed: _currentPage == widget.imageDatas.length - 1
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
            ],
          ),
        ),
      ),
    );
  }
}

class _ShortcutTile extends StatelessWidget {
  const _ShortcutTile({
    required this.label,
    required this.shortcut,
    super.key,
  });

  final Widget label;
  final Widget shortcut;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(child: label),
        const SizedBox(width: 8),
        Expanded(
          child: Align(
            alignment: Alignment.centerRight,
            child: shortcut,
          ),
        ),
      ],
    );
  }
}

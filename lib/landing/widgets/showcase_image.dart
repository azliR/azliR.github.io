import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';

class ShowcaseImage extends StatefulWidget {
  final List<String> imageUrls;
  final double maxWidth;
  final double maxHeight;
  final Duration duration;

  const ShowcaseImage({
    required this.imageUrls,
    required this.maxWidth,
    required this.maxHeight,
    required this.duration,
    super.key,
  });

  @override
  ShowcaseImageState createState() => ShowcaseImageState();
}

class ShowcaseImageState extends State<ShowcaseImage>
    with SingleTickerProviderStateMixin {
  int _currentIndex = 0;

  late AnimationController _controller;
  late Animation<double> _fadeAnimation;

  double _currentImageHeight = 300;
  double _currentImageWidth = 300;

  CachedNetworkImageProvider? image;

  @override
  void initState() {
    _controller = AnimationController(
      duration: const Duration(seconds: 3),
      vsync: this,
    );

    _fadeAnimation = Tween<double>(begin: 0, end: 1).animate(
      CurvedAnimation(parent: _controller, curve: Curves.easeIn),
    );

    _controller
      ..addStatusListener((status) {
        if (status == AnimationStatus.forward) {
          if (!mounted) return;

          setState(() {
            _currentIndex = (_currentIndex + 1) % widget.imageUrls.length;
          });
          _loadImage(widget.imageUrls[_currentIndex]);
        }
      })
      ..repeat(reverse: true);

    _loadImage(widget.imageUrls[_currentIndex]);

    super.initState();
  }

  void _loadImage(String imageUrl) {
    image = CachedNetworkImageProvider(imageUrl);
    image?.resolve(ImageConfiguration.empty).addListener(
      ImageStreamListener((ImageInfo info, bool synchronousCall) {
        if (mounted) {
          setState(() {
            _currentImageWidth = info.image.width.toDouble();
            _currentImageHeight = info.image.height.toDouble();
          });
        }
      }),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return ConstrainedBox(
      constraints: BoxConstraints(
        maxWidth: widget.maxWidth,
        maxHeight: widget.maxHeight,
      ),
      child: Center(
        child: LayoutBuilder(
          builder: (context, constraints) {
            final aspectRatio = _currentImageWidth / _currentImageHeight;

            var newWidth = constraints.maxWidth;
            var newHeight = constraints.maxHeight;

            if (_currentImageWidth > constraints.maxWidth) {
              newWidth = constraints.maxWidth;
              newHeight = constraints.maxWidth / aspectRatio;
            }

            if (newHeight > constraints.maxHeight) {
              newHeight = constraints.maxHeight;
              newWidth = constraints.maxHeight * aspectRatio;
            }

            return Card.outlined(
              child: AnimatedContainer(
                duration: const Duration(milliseconds: 500),
                curve: Curves.easeInOut,
                width: newWidth,
                height: newHeight,
                child: FadeTransition(
                  opacity: _fadeAnimation,
                  child: image != null
                      ? Image(
                          image: image!,
                          fit: BoxFit.cover,
                        )
                      : const SizedBox(),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}

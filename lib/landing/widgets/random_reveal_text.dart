import 'dart:async';
import 'dart:math';

import 'package:flutter/material.dart';

class RandomRevealText extends StatefulWidget {
  final List<String> texts;
  final Duration waitDuration;
  final Duration transitionDuration;
  final Curve curve;
  final TextStyle? textStyle;

  const RandomRevealText({
    required this.texts,
    required this.waitDuration,
    required this.transitionDuration,
    this.curve = Curves.linear,
    this.textStyle,
    super.key,
  });

  @override
  State<RandomRevealText> createState() => _RandomRevealTextState();
}

class _RandomRevealTextState extends State<RandomRevealText>
    with TickerProviderStateMixin {
  final Random _random = Random();

  late AnimationController _controller;
  late Animation<double> _animation;

  int _currentTextIndex = 0;
  Timer? _randomUpdateTimer;
  Timer? _resetTimer;

  @override
  void initState() {
    super.initState();
    _controller =
        AnimationController(duration: widget.transitionDuration, vsync: this);

    final curvedAnimation = CurvedAnimation(
      parent: _controller,
      curve: widget.curve,
    );

    _animation = Tween<double>(
      begin: 0,
      end: widget.texts[_currentTextIndex].length.toDouble(),
    ).animate(curvedAnimation)
      ..addListener(() {
        _randomUpdateTimer ??= Timer(const Duration(milliseconds: 50), () {
          if (mounted) {
            setState(() {});
          }
          _randomUpdateTimer?.cancel();
          _randomUpdateTimer = null;
        });
      });

    _controller
      ..addStatusListener((status) {
        if (status == AnimationStatus.completed) {
          _resetTimer = Timer(
            _currentTextIndex == widget.texts.length - 1
                ? widget.waitDuration
                : widget.transitionDuration,
            _resetAnimation,
          );
        }
      })
      ..forward();
  }

  @override
  void dispose() {
    _randomUpdateTimer?.cancel();
    _resetTimer?.cancel();

    _controller.dispose();
    super.dispose();
  }

  void _resetAnimation() {
    _currentTextIndex = (_currentTextIndex + 1) % widget.texts.length;
    _controller.reset();
    _animation = Tween<double>(
      begin: 0,
      end: widget.texts[_currentTextIndex].length.toDouble(),
    ).animate(
      CurvedAnimation(
        parent: _controller,
        curve: widget.curve,
      ),
    );

    _controller.forward();
  }

  String _animatedText({required String text, required int value}) {
    if (!_controller.isAnimating && !_controller.isCompleted) {
      return '';
    }

    if (value == text.length) {
      return text;
    }

    final substring = text.substring(0, value);

    final len = text.length - substring.length;

    final randomString = StringBuffer();
    const chars =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#\$%^&*()_+-=[]{}\\|;:\'".>/?';

    for (var i = 0; i < len; i++) {
      final index = _random.nextInt(chars.length);
      randomString.writeCharCode(
        chars.codeUnitAt(index),
      );
    }

    return '$substring$randomString';
  }

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;

    return Text(
      _animatedText(
        text: widget.texts[_currentTextIndex],
        value: _animation.value.toInt(),
      ),
      style: widget.textStyle ?? textTheme.bodyMedium,
    );
  }
}

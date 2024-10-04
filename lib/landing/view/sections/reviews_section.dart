import 'dart:async';

import 'package:cached_network_image/cached_network_image.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:material_symbols_icons/symbols.dart';
import 'package:url_launcher/url_launcher_string.dart';

class Review extends Equatable {
  final String name;
  final String country;
  final String review;
  final String? avatarUrl;
  final String source;
  final int rating;

  const Review({
    required this.name,
    required this.country,
    required this.review,
    required this.source,
    required this.rating,
    this.avatarUrl,
  });

  @override
  List<Object?> get props => [name, country, review, avatarUrl, source, rating];
}

const _reviews = [
  Review(
    name: 'venom96',
    country: 'Nepal',
    review:
        'Rizal H exceeded my expectations in every aspect! The professionalism and bug-free delivery were top-notch, and his attention to detail was impeccable. Working with him was an absolute pleasure—the fluency in communication and his level of cooperation were truly outstanding. 👍',
    avatarUrl:
        'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/a03dfad98df4a2b21a1dac245110c624-1685694262702/c3775b31-f7a2-4e18-8afd-b421c3f62766.png',
    source: 'Fiverr',
    rating: 5,
  ),
  Review(
    name: 'kozarni42',
    country: 'Myanmar [Burma]',
    review: 'You are very smart and very smart. I liked what you did bro..',
    avatarUrl:
        'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b6795894208d82c34310baccc16a53d1-1064970091642047309191/JPEG_20220113_104508_3714526916983055640.jpg',
    source: 'Fiverr',
    rating: 5,
  ),
  Review(
    name: 'drivooo',
    country: 'United States',
    review:
        "Amazing person and very experienced person. Know exactly what he is doing and don't let any chance of improvement go away. Always giving suggestions about how we can improve. Highly recommended. Loved working with him. He is quite experienced and knows his job.",
    avatarUrl:
        'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/2a3a164d6a8e9f9e09909a315bc42468-1643205333348/e617dd27-eaea-4075-8129-c7183eae5653.png',
    source: 'Fiverr',
    rating: 5,
  ),
  Review(
    name: 'drivooo',
    country: 'United States',
    review:
        'Always the best, I always work with him and the results are excellent. Professional and always ready to help the customer. It is a guarantee of success.',
    avatarUrl:
        'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/2a3a164d6a8e9f9e09909a315bc42468-1643205333348/e617dd27-eaea-4075-8129-c7183eae5653.png',
    source: 'Fiverr',
    rating: 5,
  ),
  Review(
    name: 'drivooo',
    country: 'United States',
    review:
        'This seller is patient, responsive, and professional. I would recommend him to anyone. Thank you so much!',
    avatarUrl:
        'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/2a3a164d6a8e9f9e09909a315bc42468-1643205333348/e617dd27-eaea-4075-8129-c7183eae5653.png',
    source: 'Fiverr',
    rating: 5,
  ),
  Review(
    name: 'harry_yau',
    country: 'Morocco',
    review: 'Good delivery from the seller',
    source: 'Fiverr',
    rating: 5,
  ),
  Review(
    name: 'amineandaloussi',
    country: 'Morocco',
    review: 'Auick honest very friendly the price is great really recommended',
    avatarUrl:
        'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/512fdd1b2418e09045b3ec63c0e0cce3-1590599210894/b877e08a-2bfe-4391-9357-6b53a2d41244.jpg',
    source: 'Fiverr',
    rating: 5,
  ),
  Review(
    name: 'amineandaloussi',
    country: 'Morocco',
    review: 'Second time and not the last',
    avatarUrl:
        'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/512fdd1b2418e09045b3ec63c0e0cce3-1590599210894/b877e08a-2bfe-4391-9357-6b53a2d41244.jpg',
    source: 'Fiverr',
    rating: 5,
  ),
];

class ReviewsSection extends StatelessWidget {
  const ReviewsSection({super.key});

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;

    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16),
          child: Text(
            'Reviews',
            textAlign: TextAlign.center,
            style: textTheme.headlineLarge,
          ),
        ),
        const SizedBox(height: 16),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16),
          child: Text(
            'Here are some of the reviews from my satisfied clients.',
            textAlign: TextAlign.center,
            style: textTheme.bodyLarge,
          ),
        ),
        const SizedBox(height: 24),
        const _ContinuousReviewListView(reviews: _reviews),
        const SizedBox(height: 16),
        OutlinedButton(
          onPressed: () {
            launchUrlString('https://www.fiverr.com/rizalhadiyansah');
          },
          child: Text('Show more reviews'),
        ),
      ],
    );
  }
}

class _ContinuousReviewListView extends StatefulWidget {
  final List<Review> reviews;

  const _ContinuousReviewListView({
    required this.reviews,
    super.key,
  });

  @override
  State<_ContinuousReviewListView> createState() =>
      _ContinuousReviewListStateView();
}

class _ContinuousReviewListStateView extends State<_ContinuousReviewListView> {
  final ScrollController _scrollController = ScrollController();
  Timer? _timer;

  @override
  void initState() {
    super.initState();

    WidgetsBinding.instance.addPostFrameCallback((_) {
      _startAutoScroll();
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    _scrollController.dispose();
    super.dispose();
  }

  Future<void> _startAutoScroll() async {
    const scrollSpeed = 100000.0;
    final duration = Duration(seconds: (scrollSpeed / 50).round());

    unawaited(
      _scrollController.animateTo(
        scrollSpeed,
        duration: duration,
        curve: Curves.linear,
      ),
    );

    _timer = Timer.periodic(duration, (timer) {
      if (_scrollController.hasClients) {
        final maxScroll = _scrollController.position.maxScrollExtent;
        final currentScroll = _scrollController.position.pixels;
        final nextScroll = currentScroll + scrollSpeed;

        if (nextScroll >= maxScroll) {
          _scrollController.jumpTo(0);
        } else {
          _scrollController.animateTo(
            nextScroll,
            duration: duration,
            curve: Curves.linear,
          );
        }
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 320,
      child: ListView.builder(
        controller: _scrollController,
        physics: const NeverScrollableScrollPhysics(),
        scrollDirection: Axis.horizontal,
        itemBuilder: (context, index) {
          final itemIndex = index % widget.reviews.length;
          return _ReviewCard(
            review: widget.reviews[itemIndex],
          );
        },
      ),
    );
  }
}

class _ReviewCard extends StatelessWidget {
  const _ReviewCard({
    required this.review,
    super.key,
  });

  final Review review;

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    final textTheme = Theme.of(context).textTheme;

    return SizedBox(
      width: 380,
      child: Card.outlined(
        margin: const EdgeInsets.symmetric(horizontal: 8),
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  CircleAvatar(
                    backgroundImage: review.avatarUrl == null
                        ? null
                        : CachedNetworkImageProvider(review.avatarUrl!),
                    child: review.avatarUrl != null
                        ? null
                        : Text(
                            review.name[0].toUpperCase(),
                          ),
                  ),
                  const SizedBox(width: 8),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(review.name),
                      Text(review.country),
                    ],
                  ),
                ],
              ),
              const SizedBox(height: 16),
              Text(review.review),
              const Spacer(),
              Row(
                children: List.generate(review.rating, (index) {
                  return Icon(
                    Symbols.star_rounded,
                    size: 16,
                    fill: 1,
                    color: colorScheme.primary,
                  );
                })
                  ..add(
                    Text(
                      ' ${review.rating}',
                      style: textTheme.bodyMedium?.copyWith(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
              ),
              const SizedBox(height: 8),
              Text('Source: ${review.source}'),
            ],
          ),
        ),
      ),
    );
  }
}

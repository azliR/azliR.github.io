// import 'package:equatable/equatable.dart';
// import 'package:flutter/material.dart';
// import 'package:flutter_azlir/app/constants/constant.dart';
// import 'package:flutter_azlir/landing/widgets/continuous_project_listview.dart';

// class Project extends Equatable {
//   final String id;
//   final String name;
//   final String shortDescription;
//   final String? githubUrl;
//   final String demoUrl;
//   final List<String> features;
//   final List<String> platforms;
//   final List<String> imageUrls;

//   const Project({
//     required this.id,
//     required this.name,
//     required this.shortDescription,
//     required this.githubUrl,
//     required this.demoUrl,
//     required this.features,
//     required this.platforms,
//     required this.imageUrls,
//   });

//   @override
//   List<Object?> get props => [id, name, shortDescription, githubUrl, language];
// }

// const projects = [
//   Project(
//     id: '06215fa1-a83a-447d-8ac0-63584f483ba9',
//     name: 'Sholawatan',
//     shortDescription:
//         'A lyric app that allows users to find and listen to shalawat (praises) to the Prophet Muhammad',
//     features: [
//       'Built with Flutter',
//       'Leveraging [DDD Architecture](https://resocoder.com/2020/03/09/flutter-firebase-ddd-course-1-domain-driven-design-principles/#t-1727534535428) for robust design',
//       'State management with [BloC](https://bloclibrary.dev/)',
//       'Seamless Dependency Injection (DI)',
//       'Integrated with Firebase',
//     ],
//     githubUrl: null,
//     platforms: ['Android', 'iOS', 'Web'],
//     imageUrls: [
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-0.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-1.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-2.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-3.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-4.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-5.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-6.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-7.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-8.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-9.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-10.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-11.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-12.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-13.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-14.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-15.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-16.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-17.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-18.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-19.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-20.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-21.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-22.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-23.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-24.webp',
//       '$baseCdnUrl/flutter_sholawatan/flutter_sholawatan-25.webp',
//     ],
//   ),
//   Project(
//     id: 'ee2bc423-ca60-4545-949a-53b29f922513',
//     name: 'OutClass',
//     shortDescription:
//         'OutClass is a web app that helps students organize their classwork and collaborate with each other that solves the problems of forgotten assignments, disorganized files, and difficult-to-remember class schedules.',
//     platforms: ['Web'],
//     githubUrl: 'https://github.com/azliR/vue_outclass',
//     demoUrl: 'https://outclass.azlir.my.id',
//     features: [
//       'Built with [Vue](https://vuejs.org/)',
//       'State management with [Pinia](https://pinia.vuejs.org/)',
//       'Offline storage with [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)',
//       'Backend built with [GoFiber](https://gofiber.io/)',
//       'Data storage with [MongoDB](https://www.mongodb.com/)',
//       'JWT token management with [Redis](https://redis.io/)',
//     ],
//     imageUrls: [
//       '$baseCdnUrl/vue_outclass/vue_outclass-0.webp',
//       '$baseCdnUrl/vue_outclass/vue_outclass-1.webp',
//       '$baseCdnUrl/vue_outclass/vue_outclass-2.webp',
//       '$baseCdnUrl/vue_outclass/vue_outclass-3.webp',
//       '$baseCdnUrl/vue_outclass/vue_outclass-4.webp',
//       '$baseCdnUrl/vue_outclass/vue_outclass-5.webp',
//       '$baseCdnUrl/vue_outclass/vue_outclass-6.webp',
//       '$baseCdnUrl/vue_outclass/vue_outclass-7.webp',
//       '$baseCdnUrl/vue_outclass/vue_outclass-8.webp',
//       '$baseCdnUrl/vue_outclass/vue_outclass-9.webp',
//       '$baseCdnUrl/vue_outclass/vue_outclass-10.webp',
//       '$baseCdnUrl/vue_outclass/vue_outclass-11.webp',
//       '$baseCdnUrl/vue_outclass/vue_outclass-12.webp',
//       '$baseCdnUrl/vue_outclass/vue_outclass-13.webp',
//     ],
//   ),
//   Project(
//     id: '09df9ac1-f94f-4960-aa0a-0551884bac5c',
//     name: 'OutClass Mobile',
//     shortDescription:
//         'OutClass Mobile is a mobile app that helps students organize their classwork and collaborate with each other, built using Flutter with BloC and Injectable.',
//     platforms: ['Android', 'iOS'],
//     githubUrl: 'https://github.com/azliR/flutter_outclass',
//     demoUrl: 'https://github.com/azliR/flutter_outclass/releases',
//     imageUrls: [
//       '$baseCdnUrl/flutter_outclass/flutter_outclass-0.webp',
//       '$baseCdnUrl/flutter_outclass/flutter_outclass-1.webp',
//       '$baseCdnUrl/flutter_outclass/flutter_outclass-2.webp',
//       '$baseCdnUrl/flutter_outclass/flutter_outclass-3.webp',
//       '$baseCdnUrl/flutter_outclass/flutter_outclass-4.webp',
//       '$baseCdnUrl/flutter_outclass/flutter_outclass-5.webp',
//       '$baseCdnUrl/flutter_outclass/flutter_outclass-6.webp',
//       '$baseCdnUrl/flutter_outclass/flutter_outclass-7.webp',
//       '$baseCdnUrl/flutter_outclass/flutter_outclass-8.webp',
//       '$baseCdnUrl/flutter_outclass/flutter_outclass-9.webp',
//       '$baseCdnUrl/flutter_outclass/flutter_outclass-10.webp',
//     ],
//   ),
//   Project(
//     id: '9f34cb46-0a99-4eb4-b73a-c3b84d51ee66',
//     name: 'CompressIt',
//     shortDescription:
//         'A compression and convertion App for images (JPEG, PNG, HEIC, and WebP) and audio locally without server',
//     githubUrl: 'https://github.com/azliR/flutter_compress_it',
//     demoUrl: 'https://github.com/azliR/flutter_compress_it/releases',
//     platforms: ['Android'],
//     documents: {
//       'Journal article (ID)':
//           'https://docs.google.com/document/d/1BLEHKPyrybhqMCJxjNtQ5xlN5gNTKaxsVHlhqIVvlyw',
//     },
//     imageUrls: [
//       '$baseCdnUrl/flutter_compress_it/flutter_compress_it-0.webp',
//       '$baseCdnUrl/flutter_compress_it/flutter_compress_it-1.webp',
//       '$baseCdnUrl/flutter_compress_it/flutter_compress_it-2.webp',
//       '$baseCdnUrl/flutter_compress_it/flutter_compress_it-3.webp',
//       '$baseCdnUrl/flutter_compress_it/flutter_compress_it-4.webp',
//       '$baseCdnUrl/flutter_compress_it/flutter_compress_it-5.webp',
//       '$baseCdnUrl/flutter_compress_it/flutter_compress_it-6.webp',
//       '$baseCdnUrl/flutter_compress_it/flutter_compress_it-7.webp',
//     ],
//   ),
//   Project(
//     id: '613b4548-f921-40a6-b6e0-1e99d39e58d9',
//     name: 'Murojaah Web',
//     githubUrl: 'https://github.com/azliR/flutter_murojaah-web',
//     platforms: ['Android', 'iOS', 'Web'],
//     shortDescription:
//         'A web app built using Flutter with Firebase Firestore, Storage, and Auth to collect sample dataset for the Murojaah-ml machine learning model',
//     demoUrl: 'https://murojaah.azlir.me/',
//     imageUrls: [
//       '$baseCdnUrl/flutter_murojaah-web/flutter_murojaah-web-0.webp',
//       '$baseCdnUrl/flutter_murojaah-web/flutter_murojaah-web-1.webp',
//       '$baseCdnUrl/flutter_murojaah-web/flutter_murojaah-web-2.webp',
//       '$baseCdnUrl/flutter_murojaah-web/flutter_murojaah-web-3.webp',
//       '$baseCdnUrl/flutter_murojaah-web/flutter_murojaah-web-4.webp',
//     ],
//   ),
//   Project(
//     id: '17736969-fadb-4c3e-b38a-92443c774b05',
//     name: 'Restauran App',
//     shortDescription:
//         'Restaurant app built with Flutter for all platforms (Android, iOS, MacOS, Windows, Linux, Web)',
//     tags: [
//       'Flutter',
//       'Firebase',
//       'State Management',
//       'Dependency Injection',
//       'Localizations',
//       'Maps',
//     ],
//     platforms: ['Android', 'iOS', 'macOS', 'Windows', 'Linux', 'Web'],
//     documents: {
//       'System Requirements (ID)':
//           'https://docs.google.com/document/d/18_b6HGrQufQ2BeKz_AxcEt0JyHuDtWp_8S-Nll-bljQ',
//       'System Testing (ID)':
//           'https://docs.google.com/document/d/1BMMtPtRGuXFIhr3L7Lo73P5kA1BlbVsUzX7_o-1Nmgg',
//     },
//     sourceCode: 'https://github.com/azliR/flutter_restaurant',
//     imageUrls: [
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-0.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-1.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-2.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-3.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-4.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-5.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-6.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-7.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-8.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-9.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-10.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-11.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-12.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-13.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-14.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-15.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-16.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-17.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-18.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-19.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-20.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-21.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-22.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-23.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-24.webp',
//       '$baseCdnUrl/flutter_restaurant/flutter_restaurant-25.webp',
//     ],
//   ),
// ];

// class ProjectsSection extends StatelessWidget {
//   const ProjectsSection({super.key});

//   @override
//   Widget build(BuildContext context) {
//     final textTheme = Theme.of(context).textTheme;

//     return Column(
//       mainAxisSize: MainAxisSize.min,
//       children: [
//         const SizedBox(height: 32),
//         Text(
//           'Other Open Source Projects',
//           style: textTheme.headlineLarge,
//         ),
//         const SizedBox(height: 16),
//         Text(
//           'Here are some of the open-source projects that I have worked on.\nFeel free to check them out on GitHub!',
//           style: textTheme.bodyMedium,
//           textAlign: TextAlign.center,
//         ),
//         const SizedBox(height: 36),
//         ContinuousProjectListView(
//           projects: projects,
//         ),
//         const SizedBox(height: 32),
//       ],
//     );
//   }
// }

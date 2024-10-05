import 'package:auto_route/auto_route.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:flutter_azlir/app/routes/app_router.gr.dart';
import 'package:flutter_azlir/app/themes/app_theme.dart';
import 'package:flutter_azlir/image_viewer/view/network_image_viewer_screen.dart';
import 'package:flutter_azlir/landing/widgets/blurhash_placeholder.dart';
import 'package:flutter_blurhash/flutter_blurhash.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:material_symbols_icons/symbols.dart';
import 'package:pausable_timer/pausable_timer.dart';
import 'package:photo_view/photo_view_gallery.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:url_launcher/url_launcher_string.dart';

class _Project extends Equatable {
  const _Project({
    required this.id,
    required this.name,
    required this.shortDescription,
    required this.githubUrl,
    required this.features,
    required this.platforms,
    required this.imageDatas,
    this.demoUrl,
  });

  final String id;
  final String name;
  final String shortDescription;
  final String? githubUrl;
  final String? demoUrl;
  final List<String> features;
  final List<String> platforms;
  final List<ImageData> imageDatas;

  @override
  List<Object?> get props => [id, name, shortDescription, githubUrl];
}

const _projects = [
  _Project(
    id: '06215fa1-a83a-447d-8ac0-63584f483ba9',
    name: 'Sholawatan',
    shortDescription:
        'A lyric app that allows users to find and listen to shalawat (praises) to the Prophet Muhammad',
    features: [
      'Built with Flutter',
      'Leveraging <a href="https://resocoder.com/2020/03/09/flutter-firebase-ddd-course-1-domain-driven-design-principles/#t-1727534535428">DDD Architecture</a> for robust design',
      'State management with <a href="https://bloclibrary.dev/">BloC</a>',
      'Seamless Dependency Injection (DI)',
      'Integrated with Firebase',
    ],
    githubUrl: null,
    platforms: ['Android', 'iOS', 'Web'],
    imageDatas: [
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-0.webp',
        hash: 'U56a*V~qj[9EM{RjofxuITM_j?xvM|Rkj]s:',
        width: 1366,
        height: 768,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-1.webp',
        hash: r'UGAw9w~qt6M_IUM{ayofD$M_j=ogIpNHRkf8',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-2.webp',
        hash: 'UVR3TV00M{xt-qxuofax?Z-pt6WBohWCa#ay',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-3.webp',
        hash: 'URA^OWjaM{WA^-f7R*aexuj[WVj]ITkCjuoz',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-4.webp',
        hash: 'URBDTtoMR%WA_4ayR%WBxbayWBj]ITogj]oz',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-5.webp',
        hash: r'U168Eb%M4.D$xfMyS1xa~qtRSKWCI8ozRktS',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-6.webp',
        hash: r'UBS$r#4,E0NX9rIUahofxvt7oej]^-%Nf#WB',
        width: 919,
        height: 579,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-7.webp',
        hash: 'U7S?Gas=bFxbNqNEahRi?JofNEoM?1WntQWU',
        width: 920,
        height: 579,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-8.webp',
        hash: 'U7R:ZqRkRjs;?0ofRjj[?1fjRjj]?Kj[j?ay',
        width: 919,
        height: 579,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-9.webp',
        hash: 'UD7e6HoMWBays;oyjbay4VWCoyj[MyWBfQj[',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-10.webp',
        hash: 'U55#wvn-DkWB%MtPMzaf9GV].6j[4VWB.6oe',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-11.webp',
        hash: 'U76RfGjJDkWC-:oyM|ayDkV]%ej[4VWU%fj[',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-12.webp',
        hash: 'U35#qmr_InRjj0tijJWB4nV[%MofjJbEWBt6',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-13.webp',
        hash: 'UB7K^%fQM|fQICfQj[fQ4VfQt7j@?@fQazfQ',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-14.webp',
        hash: 'UC7BW7.6RkMz%ex@ayRQMzRQj[of4VICt6xt',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-15.webp',
        hash: 'U268HbxutQM{aeX3s;WB4nICoyt74Vx[Rkoe',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-16.webp',
        hash: 'U46a-c~qxbn-D~RhobV?IUMyV]ogbbRjNGWo',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-17.webp',
        hash: 'UG8g,A?wxuM_?c-=t8RiRORij[oz9EI9WAtR',
        width: 1366,
        height: 768,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-18.webp',
        hash: 'UQBDW#f7M{WA^-jaR%WBxvj[Woj]ISofa#oz',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-19.webp',
        hash: r'U25#t=-$IUR._4V?RotR^so%M{fN-eojROjX',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-20.webp',
        hash: 'U45}y]MyRjtQRkxtoeRk4V%eofRRo[IBt7x@',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-21.webp',
        hash: 'U03+G#?ujJMzxuoeofoyDkRk%L%LIBIUbEtQ',
        width: 1366,
        height: 768,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-22.webp',
        hash: 'U45hV:j[D%f6oJaeWBj@9ZoL%Maz0Kj[ofj[',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-23.webp',
        hash: 'UGQ,daWUt7bE_3oMofofr|n,V]jv~qj]a#ju',
        width: 1366,
        height: 768,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_sholawatan/flutter_sholawatan-24.webp',
        hash: 'USBg0j00_300xaj?WBaykBj[f5j[kCayjZay',
        width: 920,
        height: 579,
      ),
    ],
  ),
  _Project(
    id: '09df9ac1-f94f-4960-aa0a-0551884bac5c',
    name: 'OutClass Mobile',
    shortDescription:
        'OutClass Mobile is a mobile app that helps students organize their classwork and collaborate with each other, built using Flutter with BloC and Injectable.',
    platforms: ['Android', 'iOS'],
    githubUrl: 'https://github.com/azliR/flutter_outclass',
    demoUrl: 'https://github.com/azliR/flutter_outclass/releases',
    features: [
      'Dependency injection with <a href="https://pub.dev/packages/injectable">Injectable</a> and <a href="https://pub.dev/packages/get_it">GetIt</a>.',
      'Backend API with <a href="https://gofiber.io/">GoFiber</a>.',
      'Data storage using <a href="https://www.mongodb.com/">MongoDB</a>.',
      'JWT token storage with <a href="https://redis.io/">Redis</a>.',
    ],
    imageDatas: [
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_outclass/flutter_outclass-0.webp',
        hash: 'UBRWJ4EJXMW,~WNZM{Wn#mxIn.jI=tsrn-nm',
        width: 1080,
        height: 2400,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_outclass/flutter_outclass-1.webp',
        hash: 'UYR3vSt6oeWB0%WBj[j[OGRkWCofNes:WVWB',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_outclass/flutter_outclass-2.webp',
        hash: 'UTQ,m}s:xtay0.WBRjj[ElR*j]j[Ipt7ofWB',
        width: 1080,
        height: 2400,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_outclass/flutter_outclass-3.webp',
        hash: 'UUQ,q6s.s.j[0,R*fRoLI]bHR+WVIqt6aeWB',
        width: 1080,
        height: 2400,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_outclass/flutter_outclass-4.webp',
        hash: r'UBS$r*Rjj]j]xaWBaefPE1ayWBay~Vt6Rjae',
        width: 1080,
        height: 2400,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_outclass/flutter_outclass-5.webp',
        hash: 'U6S?DWayRjWB^*s:NGWB0KofoLoe?HofRjWB',
        width: 1080,
        height: 2400,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_outclass/flutter_outclass-6.webp',
        hash: 'U6S?DWofRjWB^*t7M{a}0Kj]oeoL^*f6WBRk',
        width: 1080,
        height: 2400,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_outclass/flutter_outclass-7.webp',
        hash: 'U8SimhotSKbE~pNGRjbF9Zs;oNf8={xbV^jG',
        width: 1080,
        height: 2400,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_outclass/flutter_outclass-8.webp',
        hash: 'U9Ry:4%Kn#xt5B%2M{xtn1%2Rjt7~AxuIos:',
        width: 1080,
        height: 2400,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_outclass/flutter_outclass-9.webp',
        hash: 'UGRW6txAxbR.IExZWAxa.AxvIn%0%{kqMzba',
        width: 1080,
        height: 2400,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_outclass/flutter_outclass-10.webp',
        hash: 'U9R{=FM{oLt7~VkCWBWCxHt7R*j[?HfkWAj[',
        width: 1080,
        height: 2400,
      ),
    ],
  ),
  _Project(
    id: '9f34cb46-0a99-4eb4-b73a-c3b84d51ee66',
    name: 'CompressIt',
    shortDescription:
        'A compression and convertion App for images (JPEG, PNG, HEIC, and WebP) and audio locally without server',
    githubUrl: 'https://github.com/azliR/flutter_compress_it',
    demoUrl: 'https://github.com/azliR/flutter_compress_it/releases',
    platforms: ['Android'],
    features: [
      'Image and audio compression and conversion',
      'Local processing without server',
      'Supports a variety of image and audio formats (JPEG, PNG, HEIC, WebP, MP3, AAC, WAV)',
    ],
    imageDatas: [
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_compress_it/flutter_compress_it-0.webp',
        hash: r'UG8Nw$oe8^WC%3j[M{az9Ej]-=jY9EWV-=oe',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_compress_it/flutter_compress_it-1.webp',
        hash: 'UF9QBv=zWUNt0vExn+w|^9,]WVNaBPExe.w|',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_compress_it/flutter_compress_it-2.webp',
        hash: r'UKA9vx=fNGNZo}SLWBoL0vExs:xGrC$jofR*',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_compress_it/flutter_compress_it-3.webp',
        hash: 'UzI_QvS2nnS2n-spX4W.1ZoLX4j[ORS1r^jH',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_compress_it/flutter_compress_it-4.webp',
        hash: 'UE84}CoM8xWU%MofMyWB4Uj?.8a#8xax.7of',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_compress_it/flutter_compress_it-5.webp',
        hash: 'U96R}VxtRQWBMMofkBj[MMafkBkB*Fayafay',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_compress_it/flutter_compress_it-6.webp',
        hash: 'U96be|xuRQWBH]ofkBkBQqaybZay*Fayaff7',
        width: 864,
        height: 1920,
      ),
      ImageData(
        url:
            'https://f005.backblazeb2.com/file/azlir-public/flutter_compress_it/flutter_compress_it-7.webp',
        hash: 'U56u33tQD*V]-:ofM|jb4UaftQkBIVoM%2WT',
        width: 864,
        height: 1920,
      ),
    ],
  ),
];

class FlutterProjectsSection extends StatelessWidget {
  const FlutterProjectsSection({super.key});

  @override
  Widget build(BuildContext context) {
    // final colorScheme = Theme.of(context).colorScheme;
    final textTheme = Theme.of(context).textTheme;

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 24),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            'Flutter Projects',
            textAlign: TextAlign.center,
            style: textTheme.headlineLarge,
          ),
          const SizedBox(height: 16),
          Text(
            'I love building apps with Flutter. Here are some of my projects 💙.',
            textAlign: TextAlign.center,
            style: textTheme.bodyMedium,
          ),
          const SizedBox(height: 36),
          ScreenTypeBuilder(
            desktop: (context, child) => SizedBox(
              height: 740,
              child: child,
            ),
            child: Flex(
              crossAxisAlignment: getValueForScreenType(
                context: context,
                mobile: CrossAxisAlignment.center,
                desktop: CrossAxisAlignment.center,
              ),
              direction: getValueForScreenType(
                context: context,
                mobile: Axis.vertical,
                desktop: Axis.horizontal,
              ),
              children: _projects.map(
                (project) {
                  return ScreenTypeBuilder(
                    mobile: (context, child) => ConstrainedBox(
                      constraints: const BoxConstraints(
                        maxWidth: 420,
                      ),
                      child: child,
                    ),
                    desktop: (context, child) => Expanded(
                      child: child!,
                    ),
                    child: _ProjectCard(
                      project: project,
                      expands: getValueForScreenType(
                        context: context,
                        mobile: false,
                        desktop: true,
                      ),
                    ),
                  );
                },
              ).toList(),
            ),
          ),
        ],
      ),
    );
  }
}

class _ProjectCard extends StatefulWidget {
  const _ProjectCard({
    required this.project,
    required this.expands,
    super.key,
  });

  final _Project project;
  final bool expands;

  @override
  State<_ProjectCard> createState() => _ProjectCardState();
}

class _ProjectCardState extends State<_ProjectCard> {
  final _pageController = PageController();

  PausableTimer? _autoPlayTimer;

  var _isHovered = false;
  var _currentIndex = 0;

  @override
  void initState() {
    _autoPlayTimer = PausableTimer.periodic(
      const Duration(seconds: 2),
      () {
        if (!_pageController.hasClients) return;

        if (_pageController.page == widget.project.imageDatas.length - 1) {
          _pageController.animateToPage(
            0,
            duration: const Duration(milliseconds: 200),
            curve: Curves.easeInOut,
          );
          return;
        }

        _pageController.nextPage(
          duration: const Duration(milliseconds: 200),
          curve: Curves.easeInOut,
        );
      },
    );
    super.initState();
  }

  @override
  void dispose() {
    _autoPlayTimer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    final textTheme = Theme.of(context).textTheme;

    return Card.outlined(
      margin: const EdgeInsets.symmetric(horizontal: 8, vertical: 8),
      child: MouseRegion(
        onHover: (_) {
          setState(() {
            _isHovered = true;
          });
          _autoPlayTimer?.start();
        },
        onExit: (_) {
          setState(() {
            _isHovered = false;
          });
          _autoPlayTimer?.pause();
        },
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            MouseRegion(
              cursor: SystemMouseCursors.click,
              child: GestureDetector(
                onTap: () => context.router.push(
                  NetworkImageViewerRoute(
                    imageDatas: widget.project.imageDatas,
                  ),
                ),
                child: SizedBox(
                  height: 280,
                  child: AnimatedCrossFade(
                    duration: const Duration(milliseconds: 600),
                    layoutBuilder:
                        (topChild, topChildKey, bottomChild, bottomChildKey) {
                      return Stack(
                        clipBehavior: Clip.none,
                        children: <Widget>[
                          Center(
                            key: bottomChildKey,
                            child: bottomChild,
                          ),
                          Center(
                            key: topChildKey,
                            child: topChild,
                          ),
                        ],
                      );
                    },
                    alignment: Alignment.center,
                    crossFadeState: _isHovered
                        ? CrossFadeState.showSecond
                        : CrossFadeState.showFirst,
                    firstChild: Hero(
                      tag: widget.project.imageDatas[0],
                      child: CachedNetworkImage(
                        imageUrl: widget.project.imageDatas[0].url,
                        placeholder: (context, url) {
                          return BlurHash(
                            hash: widget.project.imageDatas[0].hash,
                          );
                        },
                        fit: BoxFit.cover,
                        width: double.infinity,
                        height: double.infinity,
                      ),
                    ),
                    secondChild: Stack(
                      children: [
                        PhotoViewGallery.builder(
                          pageController: _pageController,
                          scrollPhysics: const NeverScrollableScrollPhysics(),
                          itemCount: widget.project.imageDatas.length,
                          allowImplicitScrolling: true,
                          loadingBuilder: (context, event) {
                            return BlurHashPlaceholder(
                              imageData:
                                  widget.project.imageDatas[_currentIndex],
                            );
                          },
                          onPageChanged: (index) {
                            setState(() {
                              _currentIndex = index;
                            });
                          },
                          builder: (context, index) {
                            return PhotoViewGalleryPageOptions(
                              imageProvider: CachedNetworkImageProvider(
                                widget.project.imageDatas[index].url,
                              ),
                            );
                          },
                        ),
                        Positioned(
                          bottom: 16,
                          left: 16,
                          child: Text(
                            '${_currentIndex + 1}/${widget.project.imageDatas.length}',
                            style: textTheme.bodyMedium?.copyWith(
                              color: colorScheme.secondary,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
            const Divider(height: 0),
            const SizedBox(height: 24),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: Text(
                widget.project.name,
                textAlign: TextAlign.center,
                style: textTheme.titleLarge,
              ),
            ),
            const SizedBox(height: 16),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: Text(
                widget.project.shortDescription,
                textAlign: TextAlign.center,
                style: textTheme.bodyMedium,
              ),
            ),
            const SizedBox(height: 32),
            if (widget.expands) const Spacer(),
            ...widget.project.features.map(
              (feature) {
                return Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 16,
                  ),
                  child: Row(
                    children: [
                      Icon(
                        Symbols.check,
                        color: colorScheme.primary,
                      ),
                      const SizedBox(width: 8),
                      Expanded(
                        child: HtmlWidget(
                          feature,
                          onTapUrl: launchUrlString,
                          customStylesBuilder: (element) {
                            if (element.localName == 'a') {
                              return {
                                'color': 'blue',
                                'text-decoration': 'underline',
                              };
                            }
                            return null;
                          },
                          textStyle: textTheme.bodySmall?.copyWith(
                            color: colorScheme.secondary,
                          ),
                        ),
                      ),
                    ],
                  ),
                );
              },
            ),
            const SizedBox(height: 36),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: Wrap(
                spacing: 8,
                runSpacing: 8,
                children: [
                  if (widget.project.demoUrl == null &&
                      widget.project.githubUrl == null)
                    const SizedBox(height: 36),
                  if (widget.project.demoUrl != null)
                    OutlinedButton.icon(
                      onPressed: () => launchUrlString(widget.project.demoUrl!),
                      icon: const Icon(
                        Symbols.laptop_chromebook_rounded,
                      ),
                      label: const Text('Demo'),
                    ),
                  if (widget.project.githubUrl != null)
                    OutlinedButton.icon(
                      onPressed: () =>
                          launchUrlString(widget.project.githubUrl!),
                      icon: const Icon(FontAwesomeIcons.github),
                      label: const Text('GitHub'),
                    ),
                ],
              ),
            ),
            const SizedBox(height: 32),
          ],
        ),
      ),
    );
  }
}

// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'package:blurhash_dart/blurhash_dart.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;
import 'package:image/image.dart' as img;

class BlurHashGenerator extends StatefulWidget {
  const BlurHashGenerator({
    super.key,
    this.direction = Axis.horizontal,
    this.padding = const EdgeInsets.symmetric(horizontal: 24),
  });

  final Axis direction;
  final EdgeInsets padding;

  @override
  State<BlurHashGenerator> createState() => _BlurHashGeneratorState();
}

class _BlurHashGeneratorState extends State<BlurHashGenerator> {
  final _formKey = GlobalKey<FormState>();
  final _urlsController = TextEditingController();
  final _resultsController = TextEditingController();
  final _outputFormatController = TextEditingController(
    text: '''
BlurHasData(
  url: {url},
  hash: {hash},
  width: {width},
  height: {height},
),''',
  );

  var _lastBlurHashes = <BlurHashData?>[];
  var _selectedSeparator = ',';

  var _isLoading = false;

  @override
  void dispose() {
    _urlsController.dispose();
    _resultsController.dispose();
    _outputFormatController.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;

    return SelectionArea(
      child: ListView(
        padding: widget.padding,
        children: [
          const SizedBox(height: 36),
          Center(
            child: Text(
              'Generate BlurHash from URL',
              style: textTheme.headlineLarge,
            ),
          ),
          const SizedBox(height: 16),
          Center(
            child: Text(
              'Enter an image URL to generate a BlurHash.',
              style: textTheme.bodyMedium,
            ),
          ),
          const SizedBox(height: 36),
          IntrinsicHeight(
            child: Form(
              key: _formKey,
              child: Flex(
                direction: widget.direction,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  if (widget.direction == Axis.horizontal)
                    Expanded(
                      child: _buildUrlTextField(),
                    )
                  else
                    _buildUrlTextField(),
                  if (widget.direction == Axis.horizontal)
                    const SizedBox(width: 16)
                  else
                    const SizedBox(height: 24),
                  if (widget.direction == Axis.horizontal)
                    Expanded(
                      child: _buildResultTextField(),
                    )
                  else
                    _buildResultTextField(),
                ],
              ),
            ),
          ),
          const SizedBox(height: 16),
          ExpansionTile(
            title: const Text('Options'),
            children: [
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Flex(
                  direction: widget.direction,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    if (widget.direction == Axis.horizontal)
                      Expanded(
                        child: _buildSeparatorDropdown(),
                      )
                    else
                      _buildSeparatorDropdown(),
                    if (widget.direction == Axis.horizontal)
                      const SizedBox(width: 16)
                    else
                      const SizedBox(height: 24),
                    if (widget.direction == Axis.horizontal)
                      Expanded(
                        child: _buildOutputFormatTextField(),
                      )
                    else
                      _buildOutputFormatTextField(),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 24),
          Text(
            'Note: Generating BlurHash may cause the UI to become unresponsive temporarily. '
            'This is because Flutter does not support isolates on the web yet.',
            style: textTheme.bodySmall,
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 16),
          Center(
            child: FilledButton(
              onPressed: _isLoading
                  ? null
                  : () async {
                      if (!_formKey.currentState!.validate()) return;

                      setState(() {
                        _isLoading = true;
                      });

                      final urls = _urlsController.text
                          .split(_selectedSeparator)
                          .map((url) => url.trim())
                          .toList();

                      _lastBlurHashes = await _generateBlurHashes(urls);

                      _formatResult(_lastBlurHashes);

                      setState(() {
                        _isLoading = false;
                      });
                    },
              child: _isLoading
                  ? const Padding(
                      padding: EdgeInsets.all(8),
                      child: SizedBox(
                        width: 16,
                        height: 16,
                        child: CircularProgressIndicator(strokeWidth: 2),
                      ),
                    )
                  : const Text('Generate'),
            ),
          ),
          const SizedBox(height: 64),
        ],
      ),
    );
  }

  TextField _buildOutputFormatTextField() {
    return TextField(
      controller: _outputFormatController,
      minLines: 1,
      maxLines: 10,
      decoration: InputDecoration(
        labelText: 'Output format',
        suffixIcon: TextButton(
          onPressed: () => _formatResult(_lastBlurHashes),
          child: const Text('Refresh'),
        ),
      ),
    );
  }

  Align _buildSeparatorDropdown() {
    return Align(
      alignment: Alignment.centerLeft,
      child: DropdownMenu<String>(
        initialSelection: _selectedSeparator,
        requestFocusOnTap: false,
        enableSearch: false,
        dropdownMenuEntries: const [
          DropdownMenuEntry(
            label: 'Comma (,)',
            value: ',',
          ),
          DropdownMenuEntry(
            label: 'New Line (↵)',
            value: '\n',
          ),
        ],
        onSelected: (value) {
          setState(() {
            _selectedSeparator = value!;
          });
        },
        label: const Text('Input separator'),
      ),
    );
  }

  TextField _buildResultTextField() {
    return TextField(
      controller: _resultsController,
      minLines: 10,
      maxLines: null,
      readOnly: true,
      onTap: () {
        _resultsController.selection = TextSelection(
          baseOffset: 0,
          extentOffset: _resultsController.text.length,
        );
      },
      keyboardType: TextInputType.multiline,
      decoration: InputDecoration(
        labelText: 'Results',
        hintText: 'Result will appear here',
        floatingLabelBehavior: FloatingLabelBehavior.always,
        helperText: '',
        suffixIcon: TextButton(
          onPressed: () {
            Clipboard.setData(
              ClipboardData(text: _resultsController.text),
            );
          },
          child: const Text('Copy'),
        ),
      ),
    );
  }

  TextFormField _buildUrlTextField() {
    return TextFormField(
      controller: _urlsController,
      minLines: 10,
      maxLines: null,
      keyboardType: TextInputType.multiline,
      textInputAction: TextInputAction.newline,
      validator: (value) {
        if (value == null || value.isEmpty) {
          return 'Please enter an image URL';
        }
        return null;
      },
      decoration: InputDecoration(
        labelText: 'Image URLs',
        hintText:
            'https://example.com/image-1.jpg${_selectedSeparator}https://example.com/image-2.jpg',
        helperText: 'Enter an image URL to generate a BlurHash.',
        floatingLabelBehavior: FloatingLabelBehavior.always,
      ),
    );
  }

  void _formatResult(List<BlurHashData?> blurHashes) {
    _resultsController.text =
        blurHashes.where((element) => element != null).map((e) {
      return _outputFormatController.text
          .replaceAll('{url}', e!.url)
          .replaceAll('{hash}', e.hash)
          .replaceAll('{width}', e.width.toString())
          .replaceAll('{height}', e.height.toString());
    }).join(_selectedSeparator);
  }

  Future<List<BlurHashData?>> _generateBlurHashes(List<String> urls) async {
    final futures = urls.map(
      (url) async {
        return _generateBlurHashIsolate(url);
      },
    ).toList();
    return Future.wait(
      futures.map((future) async {
        final result = await future;
        if (result == null) {
          return null;
        }
        return BlurHashData.fromMap(result);
      }),
    );
  }

  Future<Uint8List> _fetchImage(String url) async {
    final response = await http.get(Uri.parse(url));
    if (response.statusCode == 200) {
      return response.bodyBytes;
    } else {
      throw Exception('Failed to load image from $url');
    }
  }

  Future<Map<String, dynamic>?> _generateBlurHashIsolate(
    String url,
  ) async {
    final imageBytes = await _fetchImage(url);

    return compute(
      (message) async {
        final image = img.decodeImage(message);
        if (image == null) {
          throw Exception('Failed to decode image');
        }

        final blurHash = BlurHash.encode(image, numCompX: 4, numCompY: 4);
        final width = image.width;
        final height = image.height;

        return {
          'url': url,
          'hash': blurHash.hash,
          'width': width,
          'height': height,
        };
      },
      imageBytes,
    );
  }
}

class BlurHashData {
  const BlurHashData({
    required this.url,
    required this.hash,
    required this.width,
    required this.height,
  });

  final String url;
  final String hash;
  final int width;
  final int height;

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'url': url,
      'hash': hash,
      'width': width,
      'height': height,
    };
  }

  factory BlurHashData.fromMap(Map<String, dynamic> map) {
    return BlurHashData(
      url: (map['url'] ?? '') as String,
      hash: (map['hash'] ?? '') as String,
      width: (map['width'] ?? 0) as int,
      height: (map['height'] ?? 0) as int,
    );
  }
}

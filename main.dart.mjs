// Returns whether the `js-string` built-in is supported.
function detectJsStringBuiltins() {
  let bytes = [
    0,   97,  115, 109, 1,   0,   0,  0,   1,   4,   1,   96,  0,
    0,   2,   23,  1,   14,  119, 97, 115, 109, 58,  106, 115, 45,
    115, 116, 114, 105, 110, 103, 4,  99,  97,  115, 116, 0,   0
  ];
  return WebAssembly.validate(
    new Uint8Array(bytes), {builtins: ['js-string']});
}

// Compiles a dart2wasm-generated wasm modules from `source` which is then
// instantiatable via the `instantiate` method.
//
// `source` needs to be a `Response` object (or promise thereof) e.g. created
// via the `fetch()` JS API.
export async function compileStreaming(source) {
  const module = await WebAssembly.compileStreaming(
    source,
    detectJsStringBuiltins() ? {builtins: ['js-string']} : {}
  );
  return new CompiledApp(module);
}

// Compiles a dart2wasm-generated wasm modules from `bytes` which is then
// instantiatable via the `instantiate` method.
export async function compile(bytes) {
  const module = await WebAssembly.compile(
    bytes,
    detectJsStringBuiltins() ? {builtins: ['js-string']} : {}
  );
  return new CompiledApp(module);
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export async function instantiate(modulePromise, importObjectPromise) {
  var moduleOrCompiledApp = await modulePromise;
  if (!(moduleOrCompiledApp instanceof CompiledApp)) {
    moduleOrCompiledApp = new CompiledApp(moduleOrCompiledApp);
  }
  const instantiatedApp = await moduleOrCompiledApp.instantiate(await importObjectPromise);
  return instantiatedApp.instantiatedModule;
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export const invoke = (moduleInstance, ...args) => {
  moduleInstance.exports.$invokeMain(args);
}

class CompiledApp {
  constructor(module) {
    this.module = module;
  }

  async instantiate(additionalImports) {
    let dartInstance;

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + js;
    }

    // Converts a Dart List to a JS array. Any Dart objects will be converted, but
    // this will be cheap for JSValues.
    function arrayFromDartList(constructor, list) {
      const exports = dartInstance.exports;
      const read = exports.$listRead;
      const length = exports.$listLength(list);
      const array = new constructor(length);
      for (let i = 0; i < length; i++) {
        array[i] = read(list, i);
      }
      return array;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
      wrapped.dartFunction = dartFunction;
      wrapped[jsWrappedDartFunctionSymbol] = true;
      return wrapped;
    }

    // Imports
    const dart2wasm = {

      _1: (x0,x1,x2) => x0.set(x1,x2),
      _2: (x0,x1,x2) => x0.set(x1,x2),
      _6: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._6(f,arguments.length,x0) }),
      _7: x0 => new window.FinalizationRegistry(x0),
      _8: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
      _9: (x0,x1) => x0.unregister(x1),
      _10: (x0,x1,x2) => x0.slice(x1,x2),
      _11: (x0,x1) => x0.decode(x1),
      _12: (x0,x1) => x0.segment(x1),
      _13: () => new TextDecoder(),
      _14: x0 => x0.buffer,
      _15: x0 => x0.wasmMemory,
      _16: () => globalThis.window._flutter_skwasmInstance,
      _17: x0 => x0.rasterStartMilliseconds,
      _18: x0 => x0.rasterEndMilliseconds,
      _19: x0 => x0.imageBitmaps,
      _192: x0 => x0.select(),
      _193: (x0,x1) => x0.append(x1),
      _194: x0 => x0.remove(),
      _197: x0 => x0.unlock(),
      _202: x0 => x0.getReader(),
      _211: x0 => new MutationObserver(x0),
      _222: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _223: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      _226: x0 => new ResizeObserver(x0),
      _229: (x0,x1) => new Intl.Segmenter(x0,x1),
      _230: x0 => x0.next(),
      _231: (x0,x1) => new Intl.v8BreakIterator(x0,x1),
      _308: x0 => x0.close(),
      _309: (x0,x1,x2,x3,x4) => ({type: x0,data: x1,premultiplyAlpha: x2,colorSpaceConversion: x3,preferAnimation: x4}),
      _310: x0 => new window.ImageDecoder(x0),
      _311: x0 => x0.close(),
      _312: x0 => ({frameIndex: x0}),
      _313: (x0,x1) => x0.decode(x1),
      _316: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._316(f,arguments.length,x0) }),
      _317: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._317(f,arguments.length,x0) }),
      _318: (x0,x1) => ({addView: x0,removeView: x1}),
      _319: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._319(f,arguments.length,x0) }),
      _320: f => finalizeWrapper(f, function() { return dartInstance.exports._320(f,arguments.length) }),
      _321: (x0,x1) => ({initializeEngine: x0,autoStart: x1}),
      _322: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._322(f,arguments.length,x0) }),
      _323: x0 => ({runApp: x0}),
      _324: x0 => new Uint8Array(x0),
      _326: x0 => x0.preventDefault(),
      _327: x0 => x0.stopPropagation(),
      _328: (x0,x1) => x0.addListener(x1),
      _329: (x0,x1) => x0.removeListener(x1),
      _330: (x0,x1) => x0.prepend(x1),
      _331: x0 => x0.remove(),
      _332: x0 => x0.disconnect(),
      _333: (x0,x1) => x0.addListener(x1),
      _334: (x0,x1) => x0.removeListener(x1),
      _336: (x0,x1) => x0.append(x1),
      _337: x0 => x0.remove(),
      _338: x0 => x0.stopPropagation(),
      _342: x0 => x0.preventDefault(),
      _343: (x0,x1) => x0.append(x1),
      _344: x0 => x0.remove(),
      _345: x0 => x0.preventDefault(),
      _350: (x0,x1) => x0.removeChild(x1),
      _351: (x0,x1) => x0.appendChild(x1),
      _352: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _353: (x0,x1) => x0.appendChild(x1),
      _354: (x0,x1) => x0.transferFromImageBitmap(x1),
      _355: (x0,x1) => x0.appendChild(x1),
      _356: (x0,x1) => x0.append(x1),
      _357: (x0,x1) => x0.append(x1),
      _358: (x0,x1) => x0.append(x1),
      _359: x0 => x0.remove(),
      _360: x0 => x0.remove(),
      _361: x0 => x0.remove(),
      _362: (x0,x1) => x0.appendChild(x1),
      _363: (x0,x1) => x0.appendChild(x1),
      _364: x0 => x0.remove(),
      _365: (x0,x1) => x0.append(x1),
      _366: (x0,x1) => x0.append(x1),
      _367: x0 => x0.remove(),
      _368: (x0,x1) => x0.append(x1),
      _369: (x0,x1) => x0.append(x1),
      _370: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _371: (x0,x1) => x0.append(x1),
      _372: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _373: x0 => x0.remove(),
      _374: x0 => x0.remove(),
      _375: (x0,x1) => x0.append(x1),
      _376: x0 => x0.remove(),
      _377: (x0,x1) => x0.append(x1),
      _378: x0 => x0.remove(),
      _379: x0 => x0.remove(),
      _380: x0 => x0.getBoundingClientRect(),
      _381: x0 => x0.remove(),
      _394: (x0,x1) => x0.append(x1),
      _395: x0 => x0.remove(),
      _396: (x0,x1) => x0.append(x1),
      _397: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _398: x0 => x0.preventDefault(),
      _399: x0 => x0.preventDefault(),
      _400: x0 => x0.preventDefault(),
      _401: x0 => x0.preventDefault(),
      _402: x0 => x0.remove(),
      _403: (x0,x1) => x0.observe(x1),
      _404: x0 => x0.disconnect(),
      _405: (x0,x1) => x0.appendChild(x1),
      _406: (x0,x1) => x0.appendChild(x1),
      _407: (x0,x1) => x0.appendChild(x1),
      _408: (x0,x1) => x0.append(x1),
      _409: x0 => x0.remove(),
      _410: (x0,x1) => x0.append(x1),
      _411: (x0,x1) => x0.append(x1),
      _412: (x0,x1) => x0.appendChild(x1),
      _413: (x0,x1) => x0.append(x1),
      _414: x0 => x0.remove(),
      _415: (x0,x1) => x0.append(x1),
      _419: (x0,x1) => x0.appendChild(x1),
      _420: x0 => x0.remove(),
      _979: () => globalThis.window.flutterConfiguration,
      _980: x0 => x0.assetBase,
      _985: x0 => x0.debugShowSemanticsNodes,
      _986: x0 => x0.hostElement,
      _987: x0 => x0.multiViewEnabled,
      _988: x0 => x0.nonce,
      _990: x0 => x0.fontFallbackBaseUrl,
      _991: x0 => x0.useColorEmoji,
      _995: x0 => x0.console,
      _996: x0 => x0.devicePixelRatio,
      _997: x0 => x0.document,
      _998: x0 => x0.history,
      _999: x0 => x0.innerHeight,
      _1000: x0 => x0.innerWidth,
      _1001: x0 => x0.location,
      _1002: x0 => x0.navigator,
      _1003: x0 => x0.visualViewport,
      _1004: x0 => x0.performance,
      _1007: (x0,x1) => x0.dispatchEvent(x1),
      _1008: (x0,x1) => x0.matchMedia(x1),
      _1010: (x0,x1) => x0.getComputedStyle(x1),
      _1011: x0 => x0.screen,
      _1013: (x0,x1) => x0.requestAnimationFrame(x1),
      _1014: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1014(f,arguments.length,x0) }),
      _1018: (x0,x1) => x0.warn(x1),
      _1020: (x0,x1) => x0.debug(x1),
      _1021: () => globalThis.window,
      _1022: () => globalThis.Intl,
      _1023: () => globalThis.Symbol,
      _1026: x0 => x0.clipboard,
      _1027: x0 => x0.maxTouchPoints,
      _1028: x0 => x0.vendor,
      _1029: x0 => x0.language,
      _1030: x0 => x0.platform,
      _1031: x0 => x0.userAgent,
      _1032: x0 => x0.languages,
      _1033: x0 => x0.documentElement,
      _1034: (x0,x1) => x0.querySelector(x1),
      _1038: (x0,x1) => x0.createElement(x1),
      _1039: (x0,x1) => x0.execCommand(x1),
      _1042: (x0,x1) => x0.createTextNode(x1),
      _1043: (x0,x1) => x0.createEvent(x1),
      _1047: x0 => x0.head,
      _1048: x0 => x0.body,
      _1049: (x0,x1) => x0.title = x1,
      _1052: x0 => x0.activeElement,
      _1054: x0 => x0.visibilityState,
      _1055: () => globalThis.document,
      _1056: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _1057: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _1060: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1060(f,arguments.length,x0) }),
      _1061: x0 => x0.target,
      _1063: x0 => x0.timeStamp,
      _1064: x0 => x0.type,
      _1066: x0 => x0.preventDefault(),
      _1069: (x0,x1,x2,x3) => x0.initEvent(x1,x2,x3),
      _1076: x0 => x0.firstChild,
      _1081: x0 => x0.parentElement,
      _1083: x0 => x0.parentNode,
      _1086: (x0,x1) => x0.removeChild(x1),
      _1087: (x0,x1) => x0.removeChild(x1),
      _1088: x0 => x0.isConnected,
      _1089: (x0,x1) => x0.textContent = x1,
      _1091: (x0,x1) => x0.contains(x1),
      _1096: x0 => x0.firstElementChild,
      _1098: x0 => x0.nextElementSibling,
      _1099: x0 => x0.clientHeight,
      _1100: x0 => x0.clientWidth,
      _1101: x0 => x0.offsetHeight,
      _1102: x0 => x0.offsetWidth,
      _1103: x0 => x0.id,
      _1104: (x0,x1) => x0.id = x1,
      _1107: (x0,x1) => x0.spellcheck = x1,
      _1108: x0 => x0.tagName,
      _1109: x0 => x0.style,
      _1110: (x0,x1) => x0.append(x1),
      _1111: (x0,x1) => x0.getAttribute(x1),
      _1113: x0 => x0.getBoundingClientRect(),
      _1116: (x0,x1) => x0.closest(x1),
      _1118: (x0,x1) => x0.querySelectorAll(x1),
      _1120: x0 => x0.remove(),
      _1122: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _1124: (x0,x1) => x0.removeAttribute(x1),
      _1125: (x0,x1) => x0.tabIndex = x1,
      _1128: (x0,x1) => x0.focus(x1),
      _1129: x0 => x0.scrollTop,
      _1130: (x0,x1) => x0.scrollTop = x1,
      _1131: x0 => x0.scrollLeft,
      _1132: (x0,x1) => x0.scrollLeft = x1,
      _1133: x0 => x0.classList,
      _1134: (x0,x1) => x0.className = x1,
      _1139: (x0,x1) => x0.getElementsByClassName(x1),
      _1141: x0 => x0.click(),
      _1143: (x0,x1) => x0.hasAttribute(x1),
      _1146: (x0,x1) => x0.attachShadow(x1),
      _1150: (x0,x1) => x0.getPropertyValue(x1),
      _1152: (x0,x1,x2,x3) => x0.setProperty(x1,x2,x3),
      _1154: (x0,x1) => x0.removeProperty(x1),
      _1156: x0 => x0.offsetLeft,
      _1157: x0 => x0.offsetTop,
      _1158: x0 => x0.offsetParent,
      _1160: (x0,x1) => x0.name = x1,
      _1161: x0 => x0.content,
      _1162: (x0,x1) => x0.content = x1,
      _1176: (x0,x1) => x0.nonce = x1,
      _1181: x0 => x0.now(),
      _1183: (x0,x1) => x0.width = x1,
      _1185: (x0,x1) => x0.height = x1,
      _1190: (x0,x1) => x0.getContext(x1),
      _1265: (x0,x1) => x0.fetch(x1),
      _1266: x0 => x0.status,
      _1267: x0 => x0.headers,
      _1268: x0 => x0.body,
      _1269: x0 => x0.arrayBuffer(),
      _1273: (x0,x1) => x0.get(x1),
      _1275: x0 => x0.read(),
      _1276: x0 => x0.value,
      _1277: x0 => x0.done,
      _1279: x0 => x0.name,
      _1280: x0 => x0.x,
      _1281: x0 => x0.y,
      _1284: x0 => x0.top,
      _1285: x0 => x0.right,
      _1286: x0 => x0.bottom,
      _1287: x0 => x0.left,
      _1297: x0 => x0.height,
      _1298: x0 => x0.width,
      _1299: (x0,x1) => x0.value = x1,
      _1301: (x0,x1) => x0.placeholder = x1,
      _1302: (x0,x1) => x0.name = x1,
      _1303: x0 => x0.selectionDirection,
      _1304: x0 => x0.selectionStart,
      _1305: x0 => x0.selectionEnd,
      _1308: x0 => x0.value,
      _1310: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      _1313: x0 => x0.readText(),
      _1314: (x0,x1) => x0.writeText(x1),
      _1315: x0 => x0.altKey,
      _1316: x0 => x0.code,
      _1317: x0 => x0.ctrlKey,
      _1318: x0 => x0.key,
      _1319: x0 => x0.keyCode,
      _1320: x0 => x0.location,
      _1321: x0 => x0.metaKey,
      _1322: x0 => x0.repeat,
      _1323: x0 => x0.shiftKey,
      _1324: x0 => x0.isComposing,
      _1326: (x0,x1) => x0.getModifierState(x1),
      _1328: x0 => x0.state,
      _1329: (x0,x1) => x0.go(x1),
      _1331: (x0,x1,x2,x3) => x0.pushState(x1,x2,x3),
      _1332: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      _1333: x0 => x0.pathname,
      _1334: x0 => x0.search,
      _1335: x0 => x0.hash,
      _1339: x0 => x0.state,
      _1345: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1345(f,arguments.length,x0,x1) }),
      _1347: (x0,x1,x2) => x0.observe(x1,x2),
      _1350: x0 => x0.attributeName,
      _1351: x0 => x0.type,
      _1352: x0 => x0.matches,
      _1355: x0 => x0.matches,
      _1357: x0 => x0.relatedTarget,
      _1358: x0 => x0.clientX,
      _1359: x0 => x0.clientY,
      _1360: x0 => x0.offsetX,
      _1361: x0 => x0.offsetY,
      _1364: x0 => x0.button,
      _1365: x0 => x0.buttons,
      _1366: x0 => x0.ctrlKey,
      _1367: (x0,x1) => x0.getModifierState(x1),
      _1370: x0 => x0.pointerId,
      _1371: x0 => x0.pointerType,
      _1372: x0 => x0.pressure,
      _1373: x0 => x0.tiltX,
      _1374: x0 => x0.tiltY,
      _1375: x0 => x0.getCoalescedEvents(),
      _1377: x0 => x0.deltaX,
      _1378: x0 => x0.deltaY,
      _1379: x0 => x0.wheelDeltaX,
      _1380: x0 => x0.wheelDeltaY,
      _1381: x0 => x0.deltaMode,
      _1387: x0 => x0.changedTouches,
      _1389: x0 => x0.clientX,
      _1390: x0 => x0.clientY,
      _1392: x0 => x0.data,
      _1395: (x0,x1) => x0.disabled = x1,
      _1396: (x0,x1) => x0.type = x1,
      _1397: (x0,x1) => x0.max = x1,
      _1398: (x0,x1) => x0.min = x1,
      _1399: (x0,x1) => x0.value = x1,
      _1400: x0 => x0.value,
      _1401: x0 => x0.disabled,
      _1402: (x0,x1) => x0.disabled = x1,
      _1403: (x0,x1) => x0.placeholder = x1,
      _1404: (x0,x1) => x0.name = x1,
      _1405: (x0,x1) => x0.autocomplete = x1,
      _1406: x0 => x0.selectionDirection,
      _1407: x0 => x0.selectionStart,
      _1408: x0 => x0.selectionEnd,
      _1412: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      _1418: (x0,x1) => x0.add(x1),
      _1421: (x0,x1) => x0.noValidate = x1,
      _1422: (x0,x1) => x0.method = x1,
      _1423: (x0,x1) => x0.action = x1,
      _1448: x0 => x0.orientation,
      _1449: x0 => x0.width,
      _1450: x0 => x0.height,
      _1451: (x0,x1) => x0.lock(x1),
      _1467: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1467(f,arguments.length,x0,x1) }),
      _1478: x0 => x0.length,
      _1480: (x0,x1) => x0.item(x1),
      _1481: x0 => x0.length,
      _1482: (x0,x1) => x0.item(x1),
      _1483: x0 => x0.iterator,
      _1484: x0 => x0.Segmenter,
      _1485: x0 => x0.v8BreakIterator,
      _1488: x0 => x0.done,
      _1489: x0 => x0.value,
      _1490: x0 => x0.index,
      _1494: (x0,x1) => x0.adoptText(x1),
      _1495: x0 => x0.first(),
      _1496: x0 => x0.next(),
      _1497: x0 => x0.current(),
      _1508: x0 => x0.hostElement,
      _1509: x0 => x0.viewConstraints,
      _1511: x0 => x0.maxHeight,
      _1512: x0 => x0.maxWidth,
      _1513: x0 => x0.minHeight,
      _1514: x0 => x0.minWidth,
      _1515: x0 => x0.loader,
      _1516: () => globalThis._flutter,
      _1517: (x0,x1) => x0.didCreateEngineInitializer(x1),
      _1518: (x0,x1,x2) => x0.call(x1,x2),
      _1519: () => globalThis.Promise,
      _1520: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1520(f,arguments.length,x0,x1) }),
      _1524: x0 => x0.length,
      _1527: x0 => x0.tracks,
      _1531: x0 => x0.image,
      _1536: x0 => x0.codedWidth,
      _1537: x0 => x0.codedHeight,
      _1540: x0 => x0.duration,
      _1544: x0 => x0.ready,
      _1545: x0 => x0.selectedTrack,
      _1546: x0 => x0.repetitionCount,
      _1547: x0 => x0.frameCount,
      _1591: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _1592: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
      _1593: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1593(f,arguments.length,x0) }),
      _1594: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _1595: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1595(f,arguments.length,x0) }),
      _1596: x0 => x0.send(),
      _1597: () => new XMLHttpRequest(),
      _1600: x0 => x0.play(),
      _1601: x0 => x0.pause(),
      _1604: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _1609: (x0,x1) => x0.removeAttribute(x1),
      _1610: x0 => x0.load(),
      _1611: (x0,x1) => x0.start(x1),
      _1612: (x0,x1) => x0.end(x1),
      _1613: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _1614: (x0,x1) => x0.createElement(x1),
      _1621: (x0,x1,x2,x3) => x0.removeEventListener(x1,x2,x3),
      _1624: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _1625: x0 => x0.createRange(),
      _1626: (x0,x1) => x0.selectNode(x1),
      _1627: x0 => x0.getSelection(),
      _1628: x0 => x0.removeAllRanges(),
      _1629: (x0,x1) => x0.addRange(x1),
      _1630: (x0,x1) => x0.createElement(x1),
      _1631: (x0,x1) => x0.add(x1),
      _1632: (x0,x1) => x0.append(x1),
      _1633: (x0,x1,x2) => x0.insertRule(x1,x2),
      _1634: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1634(f,arguments.length,x0) }),
      _1635: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1635(f,arguments.length,x0) }),
      _1636: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1636(f,arguments.length,x0) }),
      _1637: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1637(f,arguments.length,x0) }),
      _1638: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1638(f,arguments.length,x0) }),
      _1639: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1639(f,arguments.length,x0) }),
      _1640: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1640(f,arguments.length,x0) }),
      _1641: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1641(f,arguments.length,x0) }),
      _1642: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1642(f,arguments.length,x0) }),
      _1643: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1643(f,arguments.length,x0) }),
      _1644: x0 => x0.load(),
      _1645: (x0,x1) => x0.removeAttribute(x1),
      _1646: x0 => x0.load(),
      _1647: (x0,x1) => x0.end(x1),
      _1649: x0 => x0.play(),
      _1650: x0 => x0.pause(),
      _1653: () => globalThis.removeSplashFromWeb(),
      _1664: x0 => new Array(x0),
      _1665: x0 => x0.length,
      _1667: (x0,x1) => x0[x1],
      _1668: (x0,x1,x2) => x0[x1] = x2,
      _1671: (x0,x1,x2) => new DataView(x0,x1,x2),
      _1674: x0 => new Int8Array(x0),
      _1675: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      _1676: x0 => new Uint8Array(x0),
      _1682: x0 => new Uint16Array(x0),
      _1684: x0 => new Int32Array(x0),
      _1686: x0 => new Uint32Array(x0),
      _1688: x0 => new Float32Array(x0),
      _1690: x0 => new Float64Array(x0),
      _1691: (o, t) => typeof o === t,
      _1692: (o, c) => o instanceof c,
      _1696: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1696(f,arguments.length,x0) }),
      _1697: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1697(f,arguments.length,x0) }),
      _1723: (decoder, codeUnits) => decoder.decode(codeUnits),
      _1724: () => new TextDecoder("utf-8", {fatal: true}),
      _1725: () => new TextDecoder("utf-8", {fatal: false}),
      _1726: x0 => new WeakRef(x0),
      _1727: x0 => x0.deref(),
      _1733: Date.now,
      _1735: s => new Date(s * 1000).getTimezoneOffset() * 60,
      _1736: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      _1737: () => {
        let stackString = new Error().stack.toString();
        let frames = stackString.split('\n');
        let drop = 2;
        if (frames[0] === 'Error') {
            drop += 1;
        }
        return frames.slice(drop).join('\n');
      },
      _1738: () => typeof dartUseDateNowForTicks !== "undefined",
      _1739: () => 1000 * performance.now(),
      _1740: () => Date.now(),
      _1741: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      _1742: () => {
        return typeof process != "undefined" &&
               Object.prototype.toString.call(process) == "[object process]" &&
               process.platform == "win32"
      },
      _1743: () => new WeakMap(),
      _1744: (map, o) => map.get(o),
      _1745: (map, o, v) => map.set(o, v),
      _1746: () => globalThis.WeakRef,
      _1756: s => JSON.stringify(s),
      _1757: s => printToConsole(s),
      _1758: a => a.join(''),
      _1759: (o, a, b) => o.replace(a, b),
      _1761: (s, t) => s.split(t),
      _1762: s => s.toLowerCase(),
      _1763: s => s.toUpperCase(),
      _1764: s => s.trim(),
      _1765: s => s.trimLeft(),
      _1766: s => s.trimRight(),
      _1767: (s, n) => s.repeat(n),
      _1768: (s, p, i) => s.indexOf(p, i),
      _1769: (s, p, i) => s.lastIndexOf(p, i),
      _1770: (s) => s.replace(/\$/g, "$$$$"),
      _1771: Object.is,
      _1772: s => s.toUpperCase(),
      _1773: s => s.toLowerCase(),
      _1774: (a, i) => a.push(i),
      _1775: (a, i) => a.splice(i, 1)[0],
      _1778: a => a.pop(),
      _1779: (a, i) => a.splice(i, 1),
      _1781: (a, s) => a.join(s),
      _1782: (a, s, e) => a.slice(s, e),
      _1784: (a, b) => a == b ? 0 : (a > b ? 1 : -1),
      _1785: a => a.length,
      _1787: (a, i) => a[i],
      _1788: (a, i, v) => a[i] = v,
      _1790: (o, offsetInBytes, lengthInBytes) => {
        var dst = new ArrayBuffer(lengthInBytes);
        new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
        return new DataView(dst);
      },
      _1791: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      _1792: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      _1793: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      _1794: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      _1795: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      _1796: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      _1797: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      _1799: (o, start, length) => new BigInt64Array(o.buffer, o.byteOffset + start, length),
      _1800: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      _1801: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      _1802: (t, s) => t.set(s),
      _1803: l => new DataView(new ArrayBuffer(l)),
      _1804: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      _1806: o => o.buffer,
      _1807: o => o.byteOffset,
      _1808: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      _1809: (b, o) => new DataView(b, o),
      _1810: (b, o, l) => new DataView(b, o, l),
      _1811: Function.prototype.call.bind(DataView.prototype.getUint8),
      _1812: Function.prototype.call.bind(DataView.prototype.setUint8),
      _1813: Function.prototype.call.bind(DataView.prototype.getInt8),
      _1814: Function.prototype.call.bind(DataView.prototype.setInt8),
      _1815: Function.prototype.call.bind(DataView.prototype.getUint16),
      _1816: Function.prototype.call.bind(DataView.prototype.setUint16),
      _1817: Function.prototype.call.bind(DataView.prototype.getInt16),
      _1818: Function.prototype.call.bind(DataView.prototype.setInt16),
      _1819: Function.prototype.call.bind(DataView.prototype.getUint32),
      _1820: Function.prototype.call.bind(DataView.prototype.setUint32),
      _1821: Function.prototype.call.bind(DataView.prototype.getInt32),
      _1822: Function.prototype.call.bind(DataView.prototype.setInt32),
      _1825: Function.prototype.call.bind(DataView.prototype.getBigInt64),
      _1826: Function.prototype.call.bind(DataView.prototype.setBigInt64),
      _1827: Function.prototype.call.bind(DataView.prototype.getFloat32),
      _1828: Function.prototype.call.bind(DataView.prototype.setFloat32),
      _1829: Function.prototype.call.bind(DataView.prototype.getFloat64),
      _1830: Function.prototype.call.bind(DataView.prototype.setFloat64),
      _1832: () => globalThis.performance,
      _1833: () => globalThis.JSON,
      _1834: x0 => x0.measure,
      _1835: x0 => x0.mark,
      _1836: x0 => x0.clearMeasures,
      _1837: x0 => x0.clearMarks,
      _1838: (x0,x1,x2,x3) => x0.measure(x1,x2,x3),
      _1839: (x0,x1,x2) => x0.mark(x1,x2),
      _1840: x0 => x0.clearMeasures(),
      _1841: x0 => x0.clearMarks(),
      _1842: (x0,x1) => x0.parse(x1),
      _1843: (o, t) => o instanceof t,
      _1845: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1845(f,arguments.length,x0) }),
      _1846: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1846(f,arguments.length,x0) }),
      _1847: o => Object.keys(o),
      _1848: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      _1849: (handle) => clearTimeout(handle),
      _1850: (ms, c) =>
      setInterval(() => dartInstance.exports.$invokeCallback(c), ms),
      _1851: (handle) => clearInterval(handle),
      _1852: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      _1853: () => Date.now(),
      _1854: (x0,x1,x2) => x0.transaction(x1,x2),
      _1855: (x0,x1) => x0.objectStore(x1),
      _1856: (x0,x1) => x0.getAllKeys(x1),
      _1857: (x0,x1) => x0.getAll(x1),
      _1859: (x0,x1) => x0.delete(x1),
      _1860: (x0,x1,x2) => x0.put(x1,x2),
      _1862: x0 => x0.close(),
      _1864: (x0,x1,x2) => x0.open(x1,x2),
      _1869: (x0,x1) => x0.contains(x1),
      _1870: (x0,x1) => x0.createObjectStore(x1),
      _1871: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1871(f,arguments.length,x0) }),
      _1872: (x0,x1) => x0.contains(x1),
      _1873: (x0,x1) => x0.contains(x1),
      _1874: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1874(f,arguments.length,x0) }),
      _1905: () => new XMLHttpRequest(),
      _1906: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _1907: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
      _1908: (x0,x1) => x0.send(x1),
      _1910: x0 => x0.getAllResponseHeaders(),
      _1911: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1911(f,arguments.length,x0) }),
      _1912: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1912(f,arguments.length,x0) }),
      _1913: x0 => x0.openCursor(),
      _1914: x0 => x0.continue(),
      _1915: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1915(f,arguments.length,x0) }),
      _1916: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1916(f,arguments.length,x0) }),
      _1923: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1923(f,arguments.length,x0) }),
      _1924: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1924(f,arguments.length,x0) }),
      _1933: (x0,x1) => x0.appendChild(x1),
      _1934: (x0,x1) => x0.item(x1),
      _1950: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      _1951: (x0,x1) => x0.exec(x1),
      _1952: (x0,x1) => x0.test(x1),
      _1953: (x0,x1) => x0.exec(x1),
      _1954: (x0,x1) => x0.exec(x1),
      _1955: x0 => x0.pop(),
      _1957: o => o === undefined,
      _1976: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      _1978: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      _1979: o => o instanceof RegExp,
      _1980: (l, r) => l === r,
      _1981: o => o,
      _1982: o => o,
      _1983: o => o,
      _1984: b => !!b,
      _1985: o => o.length,
      _1988: (o, i) => o[i],
      _1989: f => f.dartFunction,
      _1990: l => arrayFromDartList(Int8Array, l),
      _1991: l => arrayFromDartList(Uint8Array, l),
      _1992: l => arrayFromDartList(Uint8ClampedArray, l),
      _1993: l => arrayFromDartList(Int16Array, l),
      _1994: l => arrayFromDartList(Uint16Array, l),
      _1995: l => arrayFromDartList(Int32Array, l),
      _1996: l => arrayFromDartList(Uint32Array, l),
      _1997: l => arrayFromDartList(Float32Array, l),
      _1998: l => arrayFromDartList(Float64Array, l),
      _1999: x0 => new ArrayBuffer(x0),
      _2000: (data, length) => {
        const getValue = dartInstance.exports.$byteDataGetUint8;
        const view = new DataView(new ArrayBuffer(length));
        for (let i = 0; i < length; i++) {
          view.setUint8(i, getValue(data, i));
        }
        return view;
      },
      _2001: l => arrayFromDartList(Array, l),
      _2002: (s, length) => {
        if (length == 0) return '';
      
        const read = dartInstance.exports.$stringRead1;
        let result = '';
        let index = 0;
        const chunkLength = Math.min(length - index, 500);
        let array = new Array(chunkLength);
        while (index < length) {
          const newChunkLength = Math.min(length - index, 500);
          for (let i = 0; i < newChunkLength; i++) {
            array[i] = read(s, index++);
          }
          if (newChunkLength < chunkLength) {
            array = array.slice(0, newChunkLength);
          }
          result += String.fromCharCode(...array);
        }
        return result;
      },
      _2003: (s, length) => {
        if (length == 0) return '';
      
        const read = dartInstance.exports.$stringRead2;
        let result = '';
        let index = 0;
        const chunkLength = Math.min(length - index, 500);
        let array = new Array(chunkLength);
        while (index < length) {
          const newChunkLength = Math.min(length - index, 500);
          for (let i = 0; i < newChunkLength; i++) {
            array[i] = read(s, index++);
          }
          if (newChunkLength < chunkLength) {
            array = array.slice(0, newChunkLength);
          }
          result += String.fromCharCode(...array);
        }
        return result;
      },
      _2004: (s) => {
        let length = s.length;
        let range = 0;
        for (let i = 0; i < length; i++) {
          range |= s.codePointAt(i);
        }
        const exports = dartInstance.exports;
        if (range < 256) {
          if (length <= 10) {
            if (length == 1) {
              return exports.$stringAllocate1_1(s.codePointAt(0));
            }
            if (length == 2) {
              return exports.$stringAllocate1_2(s.codePointAt(0), s.codePointAt(1));
            }
            if (length == 3) {
              return exports.$stringAllocate1_3(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2));
            }
            if (length == 4) {
              return exports.$stringAllocate1_4(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3));
            }
            if (length == 5) {
              return exports.$stringAllocate1_5(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3), s.codePointAt(4));
            }
            if (length == 6) {
              return exports.$stringAllocate1_6(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3), s.codePointAt(4), s.codePointAt(5));
            }
            if (length == 7) {
              return exports.$stringAllocate1_7(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3), s.codePointAt(4), s.codePointAt(5), s.codePointAt(6));
            }
            if (length == 8) {
              return exports.$stringAllocate1_8(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3), s.codePointAt(4), s.codePointAt(5), s.codePointAt(6), s.codePointAt(7));
            }
            if (length == 9) {
              return exports.$stringAllocate1_9(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3), s.codePointAt(4), s.codePointAt(5), s.codePointAt(6), s.codePointAt(7), s.codePointAt(8));
            }
            if (length == 10) {
              return exports.$stringAllocate1_10(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3), s.codePointAt(4), s.codePointAt(5), s.codePointAt(6), s.codePointAt(7), s.codePointAt(8), s.codePointAt(9));
            }
          }
          const dartString = exports.$stringAllocate1(length);
          const write = exports.$stringWrite1;
          for (let i = 0; i < length; i++) {
            write(dartString, i, s.codePointAt(i));
          }
          return dartString;
        } else {
          const dartString = exports.$stringAllocate2(length);
          const write = exports.$stringWrite2;
          for (let i = 0; i < length; i++) {
            write(dartString, i, s.charCodeAt(i));
          }
          return dartString;
        }
      },
      _2005: () => ({}),
      _2006: () => [],
      _2007: l => new Array(l),
      _2008: () => globalThis,
      _2009: (constructor, args) => {
        const factoryFunction = constructor.bind.apply(
            constructor, [null, ...args]);
        return new factoryFunction();
      },
      _2010: (o, p) => p in o,
      _2011: (o, p) => o[p],
      _2012: (o, p, v) => o[p] = v,
      _2013: (o, m, a) => o[m].apply(o, a),
      _2015: o => String(o),
      _2016: (p, s, f) => p.then(s, f),
      _2017: o => {
        if (o === undefined) return 1;
        var type = typeof o;
        if (type === 'boolean') return 2;
        if (type === 'number') return 3;
        if (type === 'string') return 4;
        if (o instanceof Array) return 5;
        if (ArrayBuffer.isView(o)) {
          if (o instanceof Int8Array) return 6;
          if (o instanceof Uint8Array) return 7;
          if (o instanceof Uint8ClampedArray) return 8;
          if (o instanceof Int16Array) return 9;
          if (o instanceof Uint16Array) return 10;
          if (o instanceof Int32Array) return 11;
          if (o instanceof Uint32Array) return 12;
          if (o instanceof Float32Array) return 13;
          if (o instanceof Float64Array) return 14;
          if (o instanceof DataView) return 15;
        }
        if (o instanceof ArrayBuffer) return 16;
        return 17;
      },
      _2018: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _2019: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _2020: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI16ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _2021: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI16ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _2022: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _2023: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _2024: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _2025: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _2026: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF64ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _2027: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF64ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _2028: s => {
        if (/[[\]{}()*+?.\\^$|]/.test(s)) {
            s = s.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
        }
        return s;
      },
      _2031: x0 => x0.index,
      _2035: (x0,x1) => x0.exec(x1),
      _2037: x0 => x0.flags,
      _2038: x0 => x0.multiline,
      _2039: x0 => x0.ignoreCase,
      _2040: x0 => x0.unicode,
      _2041: x0 => x0.dotAll,
      _2042: (x0,x1) => x0.lastIndex = x1,
      _2043: (o, p) => p in o,
      _2044: (o, p) => o[p],
      _2047: v => v.toString(),
      _2048: (d, digits) => d.toFixed(digits),
      _2052: x0 => x0.random(),
      _2053: x0 => x0.random(),
      _2054: (x0,x1) => x0.getRandomValues(x1),
      _2055: () => globalThis.crypto,
      _2057: () => globalThis.Math,
      _2059: () => globalThis.document,
      _2060: () => globalThis.window,
      _2065: (x0,x1) => x0.height = x1,
      _2067: (x0,x1) => x0.width = x1,
      _2071: x0 => x0.head,
      _2073: x0 => x0.classList,
      _2078: (x0,x1) => x0.innerText = x1,
      _2079: x0 => x0.style,
      _2080: x0 => x0.sheet,
      _2082: x0 => x0.offsetX,
      _2083: x0 => x0.offsetY,
      _2084: x0 => x0.button,
      _2097: x0 => x0.status,
      _2098: (x0,x1) => x0.responseType = x1,
      _2100: x0 => x0.response,
      _2104: () => globalThis.window.flutterCanvasKit,
      _2105: () => globalThis.window._flutter_skwasmInstance,
      _2157: (x0,x1) => x0.withCredentials = x1,
      _2159: x0 => x0.responseURL,
      _2160: x0 => x0.status,
      _2161: x0 => x0.statusText,
      _2163: (x0,x1) => x0.responseType = x1,
      _2164: x0 => x0.response,
      _2244: x0 => x0.style,
      _2722: (x0,x1) => x0.src = x1,
      _2817: x0 => x0.videoWidth,
      _2818: x0 => x0.videoHeight,
      _2822: (x0,x1) => x0.playsInline = x1,
      _2851: x0 => x0.error,
      _2852: x0 => x0.src,
      _2853: (x0,x1) => x0.src = x1,
      _2861: (x0,x1) => x0.preload = x1,
      _2862: x0 => x0.buffered,
      _2865: x0 => x0.currentTime,
      _2866: (x0,x1) => x0.currentTime = x1,
      _2867: x0 => x0.duration,
      _2872: (x0,x1) => x0.playbackRate = x1,
      _2879: (x0,x1) => x0.autoplay = x1,
      _2881: (x0,x1) => x0.loop = x1,
      _2883: (x0,x1) => x0.controls = x1,
      _2885: (x0,x1) => x0.volume = x1,
      _2887: (x0,x1) => x0.muted = x1,
      _2902: x0 => x0.code,
      _2903: x0 => x0.message,
      _2979: x0 => x0.length,
      _3488: x0 => x0.src,
      _3489: (x0,x1) => x0.src = x1,
      _3491: (x0,x1) => x0.type = x1,
      _3495: (x0,x1) => x0.async = x1,
      _3509: (x0,x1) => x0.charset = x1,
      _3976: () => globalThis.window,
      _4018: x0 => x0.self,
      _4023: x0 => x0.history,
      _4041: x0 => x0.navigator,
      _4298: x0 => x0.indexedDB,
      _4432: x0 => x0.userAgent,
      _6637: x0 => x0.target,
      _6692: x0 => x0.length,
      _6758: () => globalThis.document,
      _6853: x0 => x0.head,
      _7202: (x0,x1) => x0.id = x1,
      _7229: x0 => x0.children,
      _10787: x0 => x0.result,
      _10788: x0 => x0.error,
      _10793: (x0,x1) => x0.onsuccess = x1,
      _10795: (x0,x1) => x0.onerror = x1,
      _10799: (x0,x1) => x0.onupgradeneeded = x1,
      _10820: x0 => x0.version,
      _10821: x0 => x0.objectStoreNames,
      _10893: x0 => x0.key,
      _10896: x0 => x0.value,
      _11467: (x0,x1) => x0.border = x1,
      _11909: (x0,x1) => x0.height = x1,
      _12599: (x0,x1) => x0.width = x1,
      _12976: x0 => x0.name,
      _12977: x0 => x0.message,

    };

    const baseImports = {
      dart2wasm: dart2wasm,


      Math: Math,
      Date: Date,
      Object: Object,
      Array: Array,
      Reflect: Reflect,
    };

    const jsStringPolyfill = {
      "charCodeAt": (s, i) => s.charCodeAt(i),
      "compare": (s1, s2) => {
        if (s1 < s2) return -1;
        if (s1 > s2) return 1;
        return 0;
      },
      "concat": (s1, s2) => s1 + s2,
      "equals": (s1, s2) => s1 === s2,
      "fromCharCode": (i) => String.fromCharCode(i),
      "length": (s) => s.length,
      "substring": (s, a, b) => s.substring(a, b),
    };

    dartInstance = await WebAssembly.instantiate(this.module, {
      ...baseImports,
      ...additionalImports,
      "wasm:js-string": jsStringPolyfill,
    });

    return new InstantiatedApp(this, dartInstance);
  }
}

class InstantiatedApp {
  constructor(compiledApp, instantiatedModule) {
    this.compiledApp = compiledApp;
    this.instantiatedModule = instantiatedModule;
  }

  // Call the main function with the given arguments.
  invokeMain(...args) {
    this.instantiatedModule.exports.$invokeMain(args);
  }
}


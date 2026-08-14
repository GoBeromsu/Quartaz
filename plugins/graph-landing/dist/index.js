var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  __defProp(target, "default", { value: mod, enumerable: true }) ,
  mod
));

// node_modules/inline-style-parser/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/inline-style-parser/cjs/index.js"(exports, module) {
    var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
    var NEWLINE_REGEX = /\n/g;
    var WHITESPACE_REGEX = /^\s*/;
    var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
    var COLON_REGEX = /^:\s*/;
    var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
    var SEMICOLON_REGEX = /^[;\s]*/;
    var TRIM_REGEX = /^\s+|\s+$/g;
    var NEWLINE = "\n";
    var FORWARD_SLASH = "/";
    var ASTERISK = "*";
    var EMPTY_STRING = "";
    var TYPE_COMMENT = "comment";
    var TYPE_DECLARATION = "declaration";
    function index2(style, options) {
      if (typeof style !== "string") {
        throw new TypeError("First argument must be a string");
      }
      if (!style) return [];
      options = options || {};
      var lineno = 1;
      var column = 1;
      function updatePosition(str) {
        var lines = str.match(NEWLINE_REGEX);
        if (lines) lineno += lines.length;
        var i2 = str.lastIndexOf(NEWLINE);
        column = ~i2 ? str.length - i2 : column + str.length;
      }
      function position3() {
        var start2 = { line: lineno, column };
        return function(node) {
          node.position = new Position(start2);
          whitespace2();
          return node;
        };
      }
      function Position(start2) {
        this.start = start2;
        this.end = { line: lineno, column };
        this.source = options.source;
      }
      Position.prototype.content = style;
      function error(msg) {
        var err = new Error(
          options.source + ":" + lineno + ":" + column + ": " + msg
        );
        err.reason = msg;
        err.filename = options.source;
        err.line = lineno;
        err.column = column;
        err.source = style;
        if (options.silent) ;
        else {
          throw err;
        }
      }
      function match(re2) {
        var m2 = re2.exec(style);
        if (!m2) return;
        var str = m2[0];
        updatePosition(str);
        style = style.slice(str.length);
        return m2;
      }
      function whitespace2() {
        match(WHITESPACE_REGEX);
      }
      function comments(rules) {
        var c2;
        rules = rules || [];
        while (c2 = comment()) {
          if (c2 !== false) {
            rules.push(c2);
          }
        }
        return rules;
      }
      function comment() {
        var pos = position3();
        if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
        var i2 = 2;
        while (EMPTY_STRING != style.charAt(i2) && (ASTERISK != style.charAt(i2) || FORWARD_SLASH != style.charAt(i2 + 1))) {
          ++i2;
        }
        i2 += 2;
        if (EMPTY_STRING === style.charAt(i2 - 1)) {
          return error("End of comment missing");
        }
        var str = style.slice(2, i2 - 2);
        column += 2;
        updatePosition(str);
        style = style.slice(i2);
        column += 2;
        return pos({
          type: TYPE_COMMENT,
          comment: str
        });
      }
      function declaration() {
        var pos = position3();
        var prop = match(PROPERTY_REGEX);
        if (!prop) return;
        comment();
        if (!match(COLON_REGEX)) return error("property missing ':'");
        var val = match(VALUE_REGEX);
        var ret = pos({
          type: TYPE_DECLARATION,
          property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
          value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
        });
        match(SEMICOLON_REGEX);
        return ret;
      }
      function declarations() {
        var decls = [];
        comments(decls);
        var decl;
        while (decl = declaration()) {
          if (decl !== false) {
            decls.push(decl);
            comments(decls);
          }
        }
        return decls;
      }
      whitespace2();
      return declarations();
    }
    function trim(str) {
      return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
    }
    module.exports = index2;
  }
});

// node_modules/style-to-object/cjs/index.js
var require_cjs2 = __commonJS({
  "node_modules/style-to-object/cjs/index.js"(exports) {
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = StyleToObject;
    var inline_style_parser_1 = __importDefault(require_cjs());
    function StyleToObject(style, iterator) {
      let styleObject = null;
      if (!style || typeof style !== "string") {
        return styleObject;
      }
      const declarations = (0, inline_style_parser_1.default)(style);
      const hasIterator = typeof iterator === "function";
      declarations.forEach((declaration) => {
        if (declaration.type !== "declaration") {
          return;
        }
        const { property, value } = declaration;
        if (hasIterator) {
          iterator(property, value, declaration);
        } else if (value) {
          styleObject = styleObject || {};
          styleObject[property] = value;
        }
      });
      return styleObject;
    }
  }
});

// node_modules/style-to-js/cjs/utilities.js
var require_utilities = __commonJS({
  "node_modules/style-to-js/cjs/utilities.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.camelCase = void 0;
    var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9_-]+$/;
    var HYPHEN_REGEX = /-([a-z])/g;
    var NO_HYPHEN_REGEX = /^[^-]+$/;
    var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
    var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
    var skipCamelCase = function(property) {
      return !property || NO_HYPHEN_REGEX.test(property) || CUSTOM_PROPERTY_REGEX.test(property);
    };
    var capitalize = function(match, character) {
      return character.toUpperCase();
    };
    var trimHyphen = function(match, prefix) {
      return "".concat(prefix, "-");
    };
    var camelCase = function(property, options) {
      if (options === void 0) {
        options = {};
      }
      if (skipCamelCase(property)) {
        return property;
      }
      property = property.toLowerCase();
      if (options.reactCompat) {
        property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
      } else {
        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
      }
      return property.replace(HYPHEN_REGEX, capitalize);
    };
    exports.camelCase = camelCase;
  }
});

// node_modules/style-to-js/cjs/index.js
var require_cjs3 = __commonJS({
  "node_modules/style-to-js/cjs/index.js"(exports, module) {
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    var style_to_object_1 = __importDefault(require_cjs2());
    var utilities_1 = require_utilities();
    function StyleToJS(style, options) {
      var output = {};
      if (!style || typeof style !== "string") {
        return output;
      }
      (0, style_to_object_1.default)(style, function(property, value) {
        if (property && value) {
          output[(0, utilities_1.camelCase)(property, options)] = value;
        }
      });
      return output;
    }
    StyleToJS.default = StyleToJS;
    module.exports = StyleToJS;
  }
});

// node_modules/comma-separated-tokens/index.js
function stringify(values, options) {
  const settings = {};
  const input = values[values.length - 1] === "" ? [...values, ""] : values;
  return input.join(
    (settings.padRight ? " " : "") + "," + (settings.padLeft === false ? "" : " ")
  ).trim();
}

// node_modules/devlop/lib/default.js
function ok() {
}

// node_modules/estree-util-is-identifier-name/lib/index.js
var nameRe = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
var nameReJsx = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
var emptyOptions = {};
function name(name2, options) {
  const settings = emptyOptions;
  const re2 = settings.jsx ? nameReJsx : nameRe;
  return re2.test(name2);
}

// node_modules/hast-util-whitespace/lib/index.js
var re = /[ \t\n\f\r]/g;
function whitespace(thing) {
  return typeof thing === "object" ? thing.type === "text" ? empty(thing.value) : false : empty(thing);
}
function empty(value) {
  return value.replace(re, "") === "";
}

// node_modules/property-information/lib/util/schema.js
var Schema = class {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(property, normal, space) {
    this.normal = normal;
    this.property = property;
    if (space) {
      this.space = space;
    }
  }
};
Schema.prototype.normal = {};
Schema.prototype.property = {};
Schema.prototype.space = void 0;

// node_modules/property-information/lib/util/merge.js
function merge(definitions, space) {
  const property = {};
  const normal = {};
  for (const definition of definitions) {
    Object.assign(property, definition.property);
    Object.assign(normal, definition.normal);
  }
  return new Schema(property, normal, space);
}

// node_modules/property-information/lib/normalize.js
function normalize(value) {
  return value.toLowerCase();
}

// node_modules/property-information/lib/util/info.js
var Info = class {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(property, attribute) {
    this.attribute = attribute;
    this.property = property;
  }
};
Info.prototype.attribute = "";
Info.prototype.booleanish = false;
Info.prototype.boolean = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.commaSeparated = false;
Info.prototype.defined = false;
Info.prototype.mustUseProperty = false;
Info.prototype.number = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.property = "";
Info.prototype.spaceSeparated = false;
Info.prototype.space = void 0;

// node_modules/property-information/lib/util/types.js
var types_exports = {};
__export(types_exports, {
  boolean: () => boolean,
  booleanish: () => booleanish,
  commaOrSpaceSeparated: () => commaOrSpaceSeparated,
  commaSeparated: () => commaSeparated,
  number: () => number,
  overloadedBoolean: () => overloadedBoolean,
  spaceSeparated: () => spaceSeparated
});
var powers = 0;
var boolean = increment();
var booleanish = increment();
var overloadedBoolean = increment();
var number = increment();
var spaceSeparated = increment();
var commaSeparated = increment();
var commaOrSpaceSeparated = increment();
function increment() {
  return 2 ** ++powers;
}

// node_modules/property-information/lib/util/defined-info.js
var checks = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(types_exports)
);
var DefinedInfo = class extends Info {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(property, attribute, mask, space) {
    let index2 = -1;
    super(property, attribute);
    mark(this, "space", space);
    if (typeof mask === "number") {
      while (++index2 < checks.length) {
        const check = checks[index2];
        mark(this, checks[index2], (mask & types_exports[check]) === types_exports[check]);
      }
    }
  }
};
DefinedInfo.prototype.defined = true;
function mark(values, key, value) {
  if (value) {
    values[key] = value;
  }
}

// node_modules/property-information/lib/util/create.js
function create(definition) {
  const properties = {};
  const normals = {};
  for (const [property, value] of Object.entries(definition.properties)) {
    const info = new DefinedInfo(
      property,
      definition.transform(definition.attributes || {}, property),
      value,
      definition.space
    );
    if (definition.mustUseProperty && definition.mustUseProperty.includes(property)) {
      info.mustUseProperty = true;
    }
    properties[property] = info;
    normals[normalize(property)] = property;
    normals[normalize(info.attribute)] = property;
  }
  return new Schema(properties, normals, definition.space);
}

// node_modules/property-information/lib/aria.js
var aria = create({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  },
  transform(_2, property) {
    return property === "role" ? property : "aria-" + property.slice(4).toLowerCase();
  }
});

// node_modules/property-information/lib/util/case-sensitive-transform.js
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute;
}

// node_modules/property-information/lib/util/case-insensitive-transform.js
function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase());
}

// node_modules/property-information/lib/html.js
var html = create({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alpha: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    blocking: spaceSeparated,
    capture: null,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    closedBy: null,
    colorSpace: null,
    cols: number,
    colSpan: number,
    command: null,
    commandFor: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: overloadedBoolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: boolean,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shadowRootClonable: boolean,
    shadowRootCustomElementRegistry: boolean,
    shadowRootDelegatesFocus: boolean,
    shadowRootMode: null,
    shadowRootSerializable: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: number,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: boolean,
    // Lists. Use CSS to reduce space between items instead
    declare: boolean,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: number,
    // `<img>` and `<object>`
    leftMargin: number,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: number,
    // `<body>`
    marginWidth: number,
    // `<body>`
    noResize: boolean,
    // `<frame>`
    noHref: boolean,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: boolean,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: boolean,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: number,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: booleanish,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: number,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    credentialless: boolean,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    exportParts: commaSeparated,
    part: spaceSeparated,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: caseInsensitiveTransform
});

// node_modules/property-information/lib/svg.js
var svg = create({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    maskType: "mask-type",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskType: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: caseSensitiveTransform
});

// node_modules/property-information/lib/xlink.js
var xlink = create({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(_2, property) {
    return "xlink:" + property.slice(5).toLowerCase();
  }
});

// node_modules/property-information/lib/xmlns.js
var xmlns = create({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: caseInsensitiveTransform
});

// node_modules/property-information/lib/xml.js
var xml = create({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(_2, property) {
    return "xml:" + property.slice(3).toLowerCase();
  }
});

// node_modules/property-information/lib/hast-to-react.js
var hastToReact = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
};

// node_modules/property-information/lib/find.js
var cap = /[A-Z]/g;
var dash = /-[a-z]/g;
var valid = /^data[-\w.:]+$/i;
function find(schema, value) {
  const normal = normalize(value);
  let property = value;
  let Type = Info;
  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]];
  }
  if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
    if (value.charAt(4) === "-") {
      const rest = value.slice(5).replace(dash, camelcase);
      property = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
    } else {
      const rest = value.slice(4);
      if (!dash.test(rest)) {
        let dashes = rest.replace(cap, kebab);
        if (dashes.charAt(0) !== "-") {
          dashes = "-" + dashes;
        }
        value = "data" + dashes;
      }
    }
    Type = DefinedInfo;
  }
  return new Type(property, value);
}
function kebab($0) {
  return "-" + $0.toLowerCase();
}
function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}

// node_modules/property-information/index.js
var html2 = merge([aria, html, xlink, xmlns, xml], "html");
var svg2 = merge([aria, svg, xlink, xmlns, xml], "svg");

// node_modules/space-separated-tokens/index.js
function stringify2(values) {
  return values.join(" ").trim();
}

// node_modules/hast-util-to-jsx-runtime/lib/index.js
var import_style_to_js = __toESM(require_cjs3());
var pointStart = point("start");
function point(type) {
  return point3;
  function point3(node) {
    const point4 = node && node.position && node.position[type] || {};
    if (typeof point4.line === "number" && point4.line > 0 && typeof point4.column === "number" && point4.column > 0) {
      return {
        line: point4.line,
        column: point4.column,
        offset: typeof point4.offset === "number" && point4.offset > -1 ? point4.offset : void 0
      };
    }
  }
}

// node_modules/unist-util-stringify-position/lib/index.js
function stringifyPosition(value) {
  if (!value || typeof value !== "object") {
    return "";
  }
  if ("position" in value || "type" in value) {
    return position2(value.position);
  }
  if ("start" in value || "end" in value) {
    return position2(value);
  }
  if ("line" in value || "column" in value) {
    return point2(value);
  }
  return "";
}
function point2(point3) {
  return index(point3 && point3.line) + ":" + index(point3 && point3.column);
}
function position2(pos) {
  return point2(pos && pos.start) + "-" + point2(pos && pos.end);
}
function index(value) {
  return value && typeof value === "number" ? value : 1;
}

// node_modules/vfile-message/lib/index.js
var VFileMessage = class extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(causeOrReason, optionsOrParentOrPlace, origin) {
    super();
    if (typeof optionsOrParentOrPlace === "string") {
      origin = optionsOrParentOrPlace;
      optionsOrParentOrPlace = void 0;
    }
    let reason = "";
    let options = {};
    let legacyCause = false;
    if (optionsOrParentOrPlace) {
      if ("line" in optionsOrParentOrPlace && "column" in optionsOrParentOrPlace) {
        options = { place: optionsOrParentOrPlace };
      } else if ("start" in optionsOrParentOrPlace && "end" in optionsOrParentOrPlace) {
        options = { place: optionsOrParentOrPlace };
      } else if ("type" in optionsOrParentOrPlace) {
        options = {
          ancestors: [optionsOrParentOrPlace],
          place: optionsOrParentOrPlace.position
        };
      } else {
        options = { ...optionsOrParentOrPlace };
      }
    }
    if (typeof causeOrReason === "string") {
      reason = causeOrReason;
    } else if (!options.cause && causeOrReason) {
      legacyCause = true;
      reason = causeOrReason.message;
      options.cause = causeOrReason;
    }
    if (!options.ruleId && !options.source && typeof origin === "string") {
      const index2 = origin.indexOf(":");
      if (index2 === -1) {
        options.ruleId = origin;
      } else {
        options.source = origin.slice(0, index2);
        options.ruleId = origin.slice(index2 + 1);
      }
    }
    if (!options.place && options.ancestors && options.ancestors) {
      const parent = options.ancestors[options.ancestors.length - 1];
      if (parent) {
        options.place = parent.position;
      }
    }
    const start2 = options.place && "start" in options.place ? options.place.start : options.place;
    this.ancestors = options.ancestors || void 0;
    this.cause = options.cause || void 0;
    this.column = start2 ? start2.column : void 0;
    this.fatal = void 0;
    this.file = "";
    this.message = reason;
    this.line = start2 ? start2.line : void 0;
    this.name = stringifyPosition(options.place) || "1:1";
    this.place = options.place || void 0;
    this.reason = this.message;
    this.ruleId = options.ruleId || void 0;
    this.source = options.source || void 0;
    this.stack = legacyCause && options.cause && typeof options.cause.stack === "string" ? options.cause.stack : "";
    this.actual = void 0;
    this.expected = void 0;
    this.note = void 0;
    this.url = void 0;
  }
};
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.column = void 0;
VFileMessage.prototype.line = void 0;
VFileMessage.prototype.ancestors = void 0;
VFileMessage.prototype.cause = void 0;
VFileMessage.prototype.fatal = void 0;
VFileMessage.prototype.place = void 0;
VFileMessage.prototype.ruleId = void 0;
VFileMessage.prototype.source = void 0;

// node_modules/hast-util-to-jsx-runtime/lib/index.js
var own = {}.hasOwnProperty;
var emptyMap = /* @__PURE__ */ new Map();
var cap2 = /[A-Z]/g;
var tableElements = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]);
var tableCellElement = /* @__PURE__ */ new Set(["td", "th"]);
var docs = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function toJsxRuntime(tree, options) {
  if (!options || options.Fragment === void 0) {
    throw new TypeError("Expected `Fragment` in options");
  }
  const filePath = options.filePath || void 0;
  let create2;
  if (options.development) {
    if (typeof options.jsxDEV !== "function") {
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    }
    create2 = developmentCreate(filePath, options.jsxDEV);
  } else {
    if (typeof options.jsx !== "function") {
      throw new TypeError("Expected `jsx` in production options");
    }
    if (typeof options.jsxs !== "function") {
      throw new TypeError("Expected `jsxs` in production options");
    }
    create2 = productionCreate(filePath, options.jsx, options.jsxs);
  }
  const state = {
    Fragment: options.Fragment,
    ancestors: [],
    components: options.components || {},
    create: create2,
    elementAttributeNameCase: options.elementAttributeNameCase || "react",
    evaluater: options.createEvaluater ? options.createEvaluater() : void 0,
    filePath,
    ignoreInvalidStyle: options.ignoreInvalidStyle || false,
    passKeys: options.passKeys !== false,
    passNode: options.passNode || false,
    schema: options.space === "svg" ? svg2 : html2,
    stylePropertyNameCase: options.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: options.tableCellAlignToStyle !== false
  };
  const result = one(state, tree, void 0);
  if (result && typeof result !== "string") {
    return result;
  }
  return state.create(
    tree,
    state.Fragment,
    { children: result || void 0 },
    void 0
  );
}
function one(state, node, key) {
  if (node.type === "element") {
    return element(state, node, key);
  }
  if (node.type === "mdxFlowExpression" || node.type === "mdxTextExpression") {
    return mdxExpression(state, node);
  }
  if (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") {
    return mdxJsxElement(state, node, key);
  }
  if (node.type === "mdxjsEsm") {
    return mdxEsm(state, node);
  }
  if (node.type === "root") {
    return root(state, node, key);
  }
  if (node.type === "text") {
    return text(state, node);
  }
}
function element(state, node, key) {
  const parentSchema = state.schema;
  let schema = parentSchema;
  if (node.tagName.toLowerCase() === "svg" && parentSchema.space === "html") {
    schema = svg2;
    state.schema = schema;
  }
  state.ancestors.push(node);
  const type = findComponentFromName(state, node.tagName, false);
  const props = createElementProps(state, node);
  let children = createChildren(state, node);
  if (tableElements.has(node.tagName)) {
    children = children.filter(function(child) {
      return typeof child === "string" ? !whitespace(child) : true;
    });
  }
  addNode(state, props, type, node);
  addChildren(props, children);
  state.ancestors.pop();
  state.schema = parentSchema;
  return state.create(node, type, props, key);
}
function mdxExpression(state, node) {
  if (node.data && node.data.estree && state.evaluater) {
    const program = node.data.estree;
    const expression = program.body[0];
    ok(expression.type === "ExpressionStatement");
    return (
      /** @type {Child | undefined} */
      state.evaluater.evaluateExpression(expression.expression)
    );
  }
  crashEstree(state, node.position);
}
function mdxEsm(state, node) {
  if (node.data && node.data.estree && state.evaluater) {
    return (
      /** @type {Child | undefined} */
      state.evaluater.evaluateProgram(node.data.estree)
    );
  }
  crashEstree(state, node.position);
}
function mdxJsxElement(state, node, key) {
  const parentSchema = state.schema;
  let schema = parentSchema;
  if (node.name === "svg" && parentSchema.space === "html") {
    schema = svg2;
    state.schema = schema;
  }
  state.ancestors.push(node);
  const type = node.name === null ? state.Fragment : findComponentFromName(state, node.name, true);
  const props = createJsxElementProps(state, node);
  const children = createChildren(state, node);
  addNode(state, props, type, node);
  addChildren(props, children);
  state.ancestors.pop();
  state.schema = parentSchema;
  return state.create(node, type, props, key);
}
function root(state, node, key) {
  const props = {};
  addChildren(props, createChildren(state, node));
  return state.create(node, state.Fragment, props, key);
}
function text(_2, node) {
  return node.value;
}
function addNode(state, props, type, node) {
  if (typeof type !== "string" && type !== state.Fragment && state.passNode) {
    props.node = node;
  }
}
function addChildren(props, children) {
  if (children.length > 0) {
    const value = children.length > 1 ? children : children[0];
    if (value) {
      props.children = value;
    }
  }
}
function productionCreate(_2, jsx, jsxs) {
  return create2;
  function create2(_3, type, props, key) {
    const isStaticChildren = Array.isArray(props.children);
    const fn = isStaticChildren ? jsxs : jsx;
    return key ? fn(type, props, key) : fn(type, props);
  }
}
function developmentCreate(filePath, jsxDEV) {
  return create2;
  function create2(node, type, props, key) {
    const isStaticChildren = Array.isArray(props.children);
    const point3 = pointStart(node);
    return jsxDEV(
      type,
      props,
      key,
      isStaticChildren,
      {
        columnNumber: point3 ? point3.column - 1 : void 0,
        fileName: filePath,
        lineNumber: point3 ? point3.line : void 0
      },
      void 0
    );
  }
}
function createElementProps(state, node) {
  const props = {};
  let alignValue;
  let prop;
  for (prop in node.properties) {
    if (prop !== "children" && own.call(node.properties, prop)) {
      const result = createProperty(state, prop, node.properties[prop]);
      if (result) {
        const [key, value] = result;
        if (state.tableCellAlignToStyle && key === "align" && typeof value === "string" && tableCellElement.has(node.tagName)) {
          alignValue = value;
        } else {
          props[key] = value;
        }
      }
    }
  }
  if (alignValue) {
    const style = (
      /** @type {Style} */
      props.style || (props.style = {})
    );
    style[state.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = alignValue;
  }
  return props;
}
function createJsxElementProps(state, node) {
  const props = {};
  for (const attribute of node.attributes) {
    if (attribute.type === "mdxJsxExpressionAttribute") {
      if (attribute.data && attribute.data.estree && state.evaluater) {
        const program = attribute.data.estree;
        const expression = program.body[0];
        ok(expression.type === "ExpressionStatement");
        const objectExpression = expression.expression;
        ok(objectExpression.type === "ObjectExpression");
        const property = objectExpression.properties[0];
        ok(property.type === "SpreadElement");
        Object.assign(
          props,
          state.evaluater.evaluateExpression(property.argument)
        );
      } else {
        crashEstree(state, node.position);
      }
    } else {
      const name2 = attribute.name;
      let value;
      if (attribute.value && typeof attribute.value === "object") {
        if (attribute.value.data && attribute.value.data.estree && state.evaluater) {
          const program = attribute.value.data.estree;
          const expression = program.body[0];
          ok(expression.type === "ExpressionStatement");
          value = state.evaluater.evaluateExpression(expression.expression);
        } else {
          crashEstree(state, node.position);
        }
      } else {
        value = attribute.value === null ? true : attribute.value;
      }
      props[name2] = /** @type {Props[keyof Props]} */
      value;
    }
  }
  return props;
}
function createChildren(state, node) {
  const children = [];
  let index2 = -1;
  const countsByName = state.passKeys ? /* @__PURE__ */ new Map() : emptyMap;
  while (++index2 < node.children.length) {
    const child = node.children[index2];
    let key;
    if (state.passKeys) {
      const name2 = child.type === "element" ? child.tagName : child.type === "mdxJsxFlowElement" || child.type === "mdxJsxTextElement" ? child.name : void 0;
      if (name2) {
        const count = countsByName.get(name2) || 0;
        key = name2 + "-" + count;
        countsByName.set(name2, count + 1);
      }
    }
    const result = one(state, child, key);
    if (result !== void 0) children.push(result);
  }
  return children;
}
function createProperty(state, prop, value) {
  const info = find(state.schema, prop);
  if (value === null || value === void 0 || typeof value === "number" && Number.isNaN(value)) {
    return;
  }
  if (Array.isArray(value)) {
    value = info.commaSeparated ? stringify(value) : stringify2(value);
  }
  if (info.property === "style") {
    let styleObject = typeof value === "object" ? value : parseStyle(state, String(value));
    if (state.stylePropertyNameCase === "css") {
      styleObject = transformStylesToCssCasing(styleObject);
    }
    return ["style", styleObject];
  }
  return [
    state.elementAttributeNameCase === "react" && info.space ? hastToReact[info.property] || info.property : info.attribute,
    value
  ];
}
function parseStyle(state, value) {
  try {
    return (0, import_style_to_js.default)(value, { reactCompat: true });
  } catch (error) {
    if (state.ignoreInvalidStyle) {
      return {};
    }
    const cause = (
      /** @type {Error} */
      error
    );
    const message = new VFileMessage("Cannot parse `style` attribute", {
      ancestors: state.ancestors,
      cause,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    message.file = state.filePath || void 0;
    message.url = docs + "#cannot-parse-style-attribute";
    throw message;
  }
}
function findComponentFromName(state, name2, allowExpression) {
  let result;
  if (!allowExpression) {
    result = { type: "Literal", value: name2 };
  } else if (name2.includes(".")) {
    const identifiers = name2.split(".");
    let index2 = -1;
    let node;
    while (++index2 < identifiers.length) {
      const prop = name(identifiers[index2]) ? { type: "Identifier", name: identifiers[index2] } : { type: "Literal", value: identifiers[index2] };
      node = node ? {
        type: "MemberExpression",
        object: node,
        property: prop,
        computed: Boolean(index2 && prop.type === "Literal"),
        optional: false
      } : prop;
    }
    result = node;
  } else {
    result = name(name2) && !/^[a-z]/.test(name2) ? { type: "Identifier", name: name2 } : { type: "Literal", value: name2 };
  }
  if (result.type === "Literal") {
    const name3 = (
      /** @type {string | number} */
      result.value
    );
    return own.call(state.components, name3) ? state.components[name3] : name3;
  }
  if (state.evaluater) {
    return state.evaluater.evaluateExpression(result);
  }
  crashEstree(state);
}
function crashEstree(state, place) {
  const message = new VFileMessage(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: state.ancestors,
      place,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  message.file = state.filePath || void 0;
  message.url = docs + "#cannot-handle-mdx-estrees-without-createevaluater";
  throw message;
}
function transformStylesToCssCasing(domCasing) {
  const cssCasing = {};
  let from;
  for (from in domCasing) {
    if (own.call(domCasing, from)) {
      cssCasing[transformStyleToCssCasing(from)] = domCasing[from];
    }
  }
  return cssCasing;
}
function transformStyleToCssCasing(from) {
  let to = from.replace(cap2, toDash);
  if (to.slice(0, 3) === "ms-") to = "-" + to;
  return to;
}
function toDash($0) {
  return "-" + $0.toLowerCase();
}
var l;
function S(n2) {
  return n2.children;
}
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/htmlToJsx.ts
function htmlToJsx(tree) {
  return toJsxRuntime(tree, {
    Fragment: S,
    jsx: u2,
    jsxs: u2,
    elementAttributeNameCase: "html"
  });
}

// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'var U="0.179.1",ce="https://esm.sh/force-graph@1.51.4",ue=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${U}`,de=`https://esm.sh/three-spritetext@1.9.2?deps=three@${U}`,ge=`https://esm.sh/three@${U}/examples/jsm/postprocessing/UnrealBloomPass.js`,fe=8,pe=6,V=2.6,J=11,me=.05,he=.25,_=.15,re="graph-landing:lens",be=.35,ye={tight:{charge:-26,distance:64},normal:{charge:-52,distance:118},wide:{charge:-88,distance:190}};function oe(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function Q(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function ke(e){let n=[];for(let r of Object.values(e)){let o=oe(r),i=typeof o.slug=="string"?o.slug:"";if(i.length===0)continue;let a=o.multilingual,l=a&&typeof a=="object"?a:void 0;n.push({slug:i,title:typeof o.title=="string"?o.title:i,links:Q(o.links),tags:Q(o.tags),multilingual:l})}return n}function we(e){return e==="index"||e.endsWith("/index")}function Te(e){return e==="tags"||e.startsWith("tags/")}function ve(e){return e.multilingual?.translationKey==="home"}function Le(e,n){return e.multilingual?.locale?e.multilingual.locale===n.localeId:e.slug.startsWith(`${n.localeId}/`)?!0:!n.prefixes.some(o=>e.slug.startsWith(`${o}/`))&&n.localeId===n.sourceLocale}function Ee(e,n,r){return Math.min(r,Math.max(n,e))}function Ce(e){let n=e.split("/").filter(r=>r.length>0);return n.length<2?"root":n[0]??"root"}function Se(e,n){return e.length===0?"":[...e].sort((o,i)=>(n.get(i)??0)-(n.get(o)??0))[0]??""}function xe(e,n){let r=e.filter(c=>we(c.slug)||Te(c.slug)||ve(c)?!1:Le(c,n)),o=new Set(r.map(c=>c.slug)),i=new Map,a=[],l=new Set,p=new Map,k=c=>{i.set(c,(i.get(c)??0)+1)},E=(c,m,N)=>{let I=c<m?`${c}|${m}|${N}`:`${m}|${c}|${N}`;l.has(I)||(l.add(I),a.push({source:c,target:m,kind:N}),k(c),k(m))};for(let c of r)for(let m of c.links)o.has(m)&&m!==c.slug&&E(c.slug,m,"wikilink");let M=new Set;for(let c of r)for(let m of c.tags){p.set(m,(p.get(m)??0)+1);let N=`tag:${m}`;M.add(N),E(c.slug,N,"tag")}let S=[...i.values()],C=S.length>0?Math.min(...S):0,T=(S.length>0?Math.max(...S):0)-C,G=c=>{let m=i.get(c)??0;return T===0?(V+J)/2:V+(m-C)/T*(J-V)},v=[...r].sort((c,m)=>(i.get(m.slug)??0)-(i.get(c.slug)??0)),b=new Set(v.filter(c=>(i.get(c.slug)??0)>0).slice(0,fe).map(c=>c.slug)),B=r.map(c=>({id:c.slug,name:c.title,type:"note",val:G(c.slug),degree:i.get(c.slug)??0,isHub:b.has(c.slug),tag:"",slug:c.slug,folder:Ce(c.slug),tags:c.tags,dominantTag:Se(c.tags,p)}));for(let c of M){let m=c.slice(4);B.push({id:c,name:m,type:"tag",val:Ee(G(c)*.75,1.8,6.5),degree:i.get(c)??0,isHub:!1,tag:m,slug:`tags/${m}`,folder:"tag",tags:[m],dominantTag:m})}return{nodes:B,links:a}}function Pe(e){let n=new Map,r=(o,i)=>{let a=n.get(o)??new Set;a.add(i),n.set(o,a)};for(let o of e){let i=L(o.source),a=L(o.target);r(i,a),r(a,i)}return n}function L(e){return typeof e=="string"?e:e.id}function F(e,n){let r=document.createElement("span");r.style.color=`var(${e})`,r.style.position="absolute",r.style.visibility="hidden",document.body.appendChild(r);let o=getComputedStyle(r).color;return r.remove(),o||n}function ae(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:F("--light","#ffffff"),ink:F("--darkgray","#0f0f0f"),accent:F("--secondary","#a52142"),tertiary:F("--tertiary","#c75b75"),gray:F("--gray","#737373"),font:e.length>0?e:"Inter, sans-serif"}}function z(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ge(){return window.matchMedia("(pointer: fine)").matches}function Ne(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function Me(){return Ge()&&Ne()&&window.innerWidth>700&&!z()}function j(){return document.documentElement.getAttribute("saved-theme")==="dark"}function H(e,n){let r=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(r&&r[1]&&r[2]&&r[3])return`rgba(${r[1]}, ${r[2]}, ${r[3]}, ${n})`;let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let i=parseInt(o[1],16);return`rgba(${i>>16&255}, ${i>>8&255}, ${i&255}, ${n})`}return e}function se(e,n){let r=0;for(let o of e)r=r*31+o.charCodeAt(0)>>>0;return n[r%n.length]??n[0]??e}function Z(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:se(e,[n.accent,n.tertiary,n.ink,n.gray])}function De(e,n){return e.length===0?n.ink:se(e,[n.accent,n.tertiary])}function Re(e){let n=e.split("/").map(a=>encodeURIComponent(a)).join("/"),r=document.querySelector("base")?.getAttribute("href"),o="/";r&&r.startsWith("/")&&!r.startsWith("//")&&(o=r.endsWith("/")?r:`${r}/`);let i=`${o}${n}`.replace(/\\/{2,}/g,"/");return new URL(i,window.location.origin)}function He(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let n=Re(e);window.location.assign(n.toString())}function Ae(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function ee(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function Ie(e){let r=await import(e?ue:ce);return e&&typeof r.default=="function"?r.default({controlType:"orbit"}):Ae(r)}function _e(){try{let e=sessionStorage.getItem(re);if(e==="all"||e==="tag"||e==="folder"||e==="hub")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function te(e){try{sessionStorage.setItem(re,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function Fe(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function Be(e){return e==="type"||e==="folder"}function $e(e){return e==="tight"||e==="normal"||e==="wide"}function ze(e,n){let r=e.nodes.filter(i=>i.type==="note").sort((i,a)=>a.degree-i.degree).slice(0,pe),o=new Set;for(let i of r){o.add(i.id);for(let a of n.get(i.id)??[])o.add(a)}return o}function Oe(e,n){return{nodes:e.nodes.filter(r=>n.has(r.id)),links:e.links.filter(r=>n.has(L(r.source))&&n.has(L(r.target)))}}function Ve(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function ne(e,n){let r=L(n),o=e.find(i=>i.id===r);return!o||o.type!=="note"?null:o.folder}function je(e,n,r){let o=new Map;if(n==="folder"){let i=[...new Set(e.nodes.filter(a=>a.type==="note").map(a=>a.folder))];return i.forEach((a,l)=>{let p=Math.PI*2*l/Math.max(i.length,1),k={x:Math.cos(p)*r,y:Math.sin(p)*r,z:0};for(let E of e.nodes)E.type==="note"&&E.folder===a&&o.set(E.id,k)}),o}if(n==="tag"){let i=e.nodes.filter(l=>l.type==="tag"),a=new Map;i.forEach((l,p)=>{let k=Math.PI*2*p/Math.max(i.length,1);a.set(l.tag,{x:Math.cos(k)*r,y:Math.sin(k)*r,z:0})});for(let l of e.nodes)if(l.type==="tag"){let p=a.get(l.tag);p&&o.set(l.id,p)}else if(l.dominantTag.length>0){let p=a.get(l.dominantTag);p&&o.set(l.id,p)}}return o}function Ue(e,n){let r=[],o=i=>{let a=n*i;for(let l of r){let p=e(l);p&&(l.vx=(l.vx??0)+(p.x-(l.x??0))*a,l.vy=(l.vy??0)+(p.y-(l.y??0))*a,l.vz=(l.vz??0)+(p.z-(l.z??0))*a)}};return o.initialize=i=>{r=i},o}function A(e,n,r,o){for(let i of e.querySelectorAll(n)){if(!(i instanceof HTMLElement))continue;let a=i.getAttribute(o);i.setAttribute("aria-pressed",a===r?"true":"false")}}function We(e,n,r,o){let i=Pe(n.links),a={lens:_e(),colorBy:"type",spacing:"normal",allLabels:!1,focusTag:null},l=null,p=t=>{let s=t.val;return t.isHub&&(s*=1.28),a.lens==="tag"&&t.type==="tag"&&(s*=1.65),a.focusTag&&t.id===`tag:${a.focusTag}`&&(s*=1.25),s},k=t=>{if(l!==null)return l===t||(i.get(l)?.has(t)??!1);if(a.focusTag===null)return!0;let s=n.nodes.find(u=>u.id===t);return s?Ve(s,a.focusTag):!1},E=t=>a.lens==="tag"?t.type==="tag"?r.current.tertiary:De(t.dominantTag,r.current):a.lens==="folder"||a.colorBy==="folder"?t.type==="tag"?r.current.tertiary:Z(t.folder,r.current):t.type==="tag"?r.current.tertiary:r.current.ink,M=t=>{if(l!==null&&(l===t.id||i.get(l)?.has(t.id)))return r.current.accent;let s=E(t);return k(t.id)?s:H(s,_)},S=t=>{let s=L(t.source),u=L(t.target);if(l!==null&&(s===l||u===l))return r.current.accent;if(l!==null||a.focusTag!==null){let f=k(s),d=k(u);if(!f||!d)return H(r.current.gray,_)}return H(r.current.gray,o.use3d?.55:.7)},C=()=>a.lens!=="hub"?n:Oe(n,ze(n,i)),x=()=>{let t=ye[a.spacing],s=e.d3Force("charge");s?.strength&&s.strength(t.charge);let u=e.d3Force("link");u?.distance&&u.distance(h=>a.lens==="tag"&&h.kind==="tag"?t.distance*.72:t.distance),u?.strength&&u.strength(h=>{if(a.lens==="tag"&&h.kind==="tag")return .95;if(a.lens==="folder"){let w=ne(n.nodes,h.source),P=ne(n.nodes,h.target);if(w!==null&&w===P)return .72}return h.kind==="tag"?.28:.42});let f=e.d3Force("center");f?.strength&&f.strength(me);let d=a.spacing==="wide"?220:a.spacing==="tight"?110:160,y=je(n,a.lens,d),g=a.lens==="folder"||a.lens==="tag"?.08:0;e.d3Force("cluster",Ue(h=>y.get(h.id)??null,g))},T=()=>{if(!o.use3d||!o.spriteText||typeof e.nodeThreeObject!="function")return;let t=o.spriteText;typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(!0),e.nodeThreeObject(s=>{if(!(a.allLabels||s.isHub))return!1;let f=new t(s.name);return f.color=k(s.id)?r.current.ink:H(r.current.ink,_),f.textHeight=s.isHub?3.4:2.6,f.position.y=8,f})},G=()=>{!o.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{if(l===null)return 0;let s=L(t.source),u=L(t.target);return s===l||u===l?2:0})},v=()=>{e.nodeVal(p),e.nodeColor(M),e.linkColor(S),e.linkWidth(t=>{let s=L(t.source),u=L(t.target);return l!==null&&(s===l||u===l)?1.35:.55}),G(),o.use3d||e.nodeCanvasObjectMode(()=>"replace")},b=()=>{let t=o.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let s=(d,y)=>{let g=document.createElement("span");g.className="graph-landing__legend-item";let h=document.createElement("span");h.className="graph-landing__dot",h.setAttribute("aria-hidden","true"),h.style.background=d;let w=document.createElement("span");return w.textContent=y,g.append(h,w),g};if(a.lens==="folder"||a.colorBy==="folder"){let d=[...new Set(n.nodes.filter(g=>g.type==="note").map(g=>g.folder))],y=o.root.dataset.folderRootLabel??"root";t.replaceChildren(...d.map(g=>s(Z(g,r.current),g==="root"?y:g)));return}let u=o.root.dataset.legendNotes??"Notes",f=o.root.dataset.legendTags??"Tags";t.replaceChildren(s(r.current.ink,u),s(r.current.tertiary,f))},B=()=>{let t=o.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let s=n.nodes.filter(d=>d.type==="tag").sort((d,y)=>y.degree-d.degree).slice(0,16),u=o.root.querySelector(".graph-landing__tags");u instanceof HTMLElement&&(u.hidden=s.length===0);let f=s.map(d=>{let y=document.createElement("li"),g=document.createElement("button");g.type="button",g.className="graph-landing__tag-item",g.dataset.graphTag=d.tag,g.setAttribute("aria-pressed",a.focusTag===d.tag?"true":"false");let h=document.createElement("span");h.textContent=d.tag;let w=document.createElement("span");return w.className="graph-landing__tag-count",w.textContent=String(d.degree),g.append(h,w),y.append(g),y});t.replaceChildren(...f)},c=t=>{if(o.use3d&&typeof e.cameraPosition=="function"){let s=t.x??0,u=t.y??0,f=t.z??0;e.cameraPosition({x:s+36,y:u+18,z:f+150},{x:s,y:u,z:f},700);return}typeof e.centerAt=="function"&&typeof e.zoom=="function"&&(e.centerAt(t.x??0,t.y??0,600),e.zoom(2.3,600))},m=()=>{e.graphData(C()),x(),v(),T(),b(),A(o.root,"[data-graph-lens]",a.lens,"data-graph-lens"),A(o.root,"[data-graph-color]",a.colorBy,"data-graph-color"),A(o.root,"[data-graph-spacing]",a.spacing,"data-graph-spacing");for(let t of o.root.querySelectorAll("[data-graph-tag]"))t instanceof HTMLElement&&t.setAttribute("aria-pressed",t.dataset.graphTag===a.focusTag?"true":"false");e.d3ReheatSimulation()},N=t=>{a.lens=t,t!=="tag"&&(a.focusTag=null),t==="folder"&&(a.colorBy="folder"),te(t),m()},I=t=>{a.focusTag=a.focusTag===t?null:t,a.focusTag&&(a.lens="tag",te("tag")),m();let s=n.nodes.find(u=>u.id===`tag:${t}`);s&&a.focusTag&&c(s)};if(e.graphData(C()),e.backgroundColor(r.current.bg),e.nodeLabel(t=>t.name),e.nodeRelSize(5.5),typeof e.linkOpacity=="function"&&e.linkOpacity(he),x(),v(),e.onNodeHover(t=>{l=t?t.id:null,v(),o.use3d&&T()}),o.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!z()&&typeof e.controls=="function"){let t=e.controls();t.autoRotate=!0,t.autoRotateSpeed=be}if(typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>r.current.accent),o.bloomPass&&typeof e.postProcessingComposer=="function"&&(o.bloomPass.strength=j()?.48:0,o.bloomPass.radius=.36,o.bloomPass.threshold=.28,e.postProcessingComposer().addPass(o.bloomPass)),!z()&&typeof e.cameraPosition=="function"&&(e.cameraPosition({x:0,y:160,z:860}),window.requestAnimationFrame(()=>{e.cameraPosition?.({x:0,y:0,z:280},{x:0,y:0,z:0},1600)})),typeof e.zoomToFit=="function"){let t=window.setTimeout(()=>{e.zoomToFit?.(1100,90)},1700);window.addCleanup(()=>window.clearTimeout(t))}T()}else e.warmupTicks(60),e.cooldownTicks(180),e.nodeCanvasObject((t,s,u)=>{let f=Math.max(3.4,p(t)*1.15),d=t.x??0,y=t.y??0;if(s.save(),s.beginPath(),s.arc(d,y,f,0,Math.PI*2),s.fillStyle=M(t),s.fill(),t.isHub&&(s.strokeStyle=k(t.id)?r.current.accent:H(r.current.accent,_),s.lineWidth=1.15/u,s.stroke()),a.allLabels||t.isHub||l===t.id){let h=12/u;s.font=`${h}px ${r.current.font}`,s.fillStyle=k(t.id)?r.current.ink:H(r.current.ink,_),s.textAlign="left",s.textBaseline="middle",s.fillText(t.name,d+f+4,y)}s.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,s,u)=>{let f=Math.max(3.4,p(t)*1.15)+6;u.beginPath(),u.arc(t.x??0,t.y??0,f,0,Math.PI*2),u.fillStyle=s,u.fill()});let W=t=>{if(t.type==="tag"){I(t.tag);return}He(t.slug)},O=!1;e.onNodeClick((t,s)=>{t&&(O=!0,s&&typeof s.stopPropagation=="function"&&s.stopPropagation(),W(t))});let D=o.root.querySelector("#graph-landing-mount");if(D instanceof HTMLElement){let t=null,s=d=>{t={x:d.clientX,y:d.clientY}},u=(d,y)=>{if(typeof e.graph2ScreenCoords!="function")return null;let g=D.getBoundingClientRect(),h=d-g.left,w=y-g.top,P=null,X=4096;for(let R of C().nodes){if(R.x===void 0||R.y===void 0)continue;let $=e.graph2ScreenCoords(R.x,R.y,R.z??0),ie=($.x-h)**2+($.y-w)**2,le=($.x-d)**2+($.y-y)**2,Y=Math.min(ie,le);Y<X&&(X=Y,P=R)}return P},f=d=>{let y=t;t=null,!(!y||(d.clientX-y.x)**2+(d.clientY-y.y)**2>25)&&window.setTimeout(()=>{if(O){O=!1;return}let h=u(d.clientX,d.clientY);h&&W(h)},0)};D.addEventListener("pointerdown",s,!0),D.addEventListener("pointerup",f,!0),window.addCleanup(()=>{D.removeEventListener("pointerdown",s,!0),D.removeEventListener("pointerup",f,!0)})}A(o.root,"[data-graph-lens]",a.lens,"data-graph-lens"),b(),B(),a.lens!=="all"&&m();let q=()=>{r.current=ae(),e.backgroundColor(r.current.bg),o.bloomPass&&(o.bloomPass.strength=j()?.48:0),v(),T(),b()};document.addEventListener("themechange",q),window.addCleanup(()=>document.removeEventListener("themechange",q));let K=t=>{let s=t.target;if(!(s instanceof Element))return;let u=s.closest("[data-graph-lens]");if(u instanceof HTMLElement&&u.dataset.graphLens&&Fe(u.dataset.graphLens)){N(u.dataset.graphLens);return}let f=s.closest("[data-graph-color]");if(f instanceof HTMLElement&&f.dataset.graphColor&&Be(f.dataset.graphColor)){a.colorBy=f.dataset.graphColor,v(),b(),A(o.root,"[data-graph-color]",a.colorBy,"data-graph-color");return}let d=s.closest("[data-graph-spacing]");if(d instanceof HTMLElement&&d.dataset.graphSpacing&&$e(d.dataset.graphSpacing)){a.spacing=d.dataset.graphSpacing,x(),e.d3ReheatSimulation(),A(o.root,"[data-graph-spacing]",a.spacing,"data-graph-spacing");return}let y=s.closest("[data-graph-tag]");if(y instanceof HTMLElement&&y.dataset.graphTag){I(y.dataset.graphTag);return}if(s.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let g=s.closest("[data-graph-labels]");if(g instanceof HTMLButtonElement){a.allLabels=!a.allLabels,g.setAttribute("aria-pressed",a.allLabels?"true":"false");let w=g.dataset.labelShow??"Labels",P=g.dataset.labelHide??"Labels";g.textContent=a.allLabels?P:w,T();return}if(s.closest("[data-graph-theme]")){let w=j()?"light":"dark";document.documentElement.setAttribute("saved-theme",w),localStorage.setItem("theme",w),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${w}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:w}}));return}let h=s.closest("[data-graph-tags-toggle]");if(h instanceof HTMLButtonElement){let w=o.root.querySelector(".graph-landing__tags");if(w instanceof HTMLElement){let P=w.dataset.open==="true";w.dataset.open=P?"false":"true",h.setAttribute("aria-expanded",P?"false":"true")}}};o.root.addEventListener("click",K),window.addCleanup(()=>o.root.removeEventListener("click",K))}async function qe(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1";let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let r=e.querySelector("[data-graph-counts]"),o=e.dataset.locale??"ko",i=e.dataset.sourceLocale??"ko",a=(e.dataset.localePrefixes??"").split(",").map(b=>b.trim()).filter(b=>b.length>0),l=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",p=!1,k=null,E={current:ae()},M=()=>{p=!0,k&&(k._destructor(),k=null),delete e.dataset.graphReady};window.addCleanup(M);let S;try{S=oe(await fetchData)}catch(b){throw ee(n,"Graph could not load content index."),b}if(p)return;let C=xe(ke(S),{localeId:o,sourceLocale:i,prefixes:a});r&&(r.textContent=l.replace("{n}",String(C.nodes.length)).replace("{m}",String(C.links.length)));let x=Me(),T;try{T=await Ie(x)}catch(b){throw ee(n,"Graph could not load. Check your network connection."),b}if(p)return;let G=null,v=null;if(x){try{G=(await import(de)).default??null}catch(b){console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",b),G=null}try{let b=await import(ge);v=b.UnrealBloomPass?new b.UnrealBloomPass:null}catch(b){console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",b),v=null}}if(!p&&(n.replaceChildren(),k=T(n),We(k,C,E,{use3d:x,root:e,spriteText:G,bloomPass:v}),x&&!z())){let b=()=>{!k||typeof k.controls!="function"||(k.controls().autoRotate=!1)};n.addEventListener("pointerdown",b,{once:!0}),window.addCleanup(()=>n.removeEventListener("pointerdown",b))}}document.addEventListener("nav",()=>{qe()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = ".center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  background: var(--light);\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n.graph-landing__hero {\n  background: var(--light);\n  height: 100dvh;\n  max-width: 100%;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  width: 100%;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  z-index: 2;\n}\n\n.graph-landing__top-left,\n.graph-landing__top-right,\n.graph-landing__bottom-left {\n  padding: 1.25rem 1.5rem;\n  position: absolute;\n}\n\n.graph-landing__top-left {\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n  left: 0;\n  max-width: min(18rem, 100% - 10rem);\n  pointer-events: none;\n  top: 0;\n}\n\n.graph-landing__top-left > * {\n  pointer-events: auto;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem 1rem;\n  justify-content: flex-end;\n  max-width: min(28rem, 100% - 2rem);\n  pointer-events: auto;\n  right: 0;\n  top: 0;\n}\n\n.graph-landing__bottom-left {\n  bottom: 0;\n  left: 0;\n}\n\n.graph-landing__title-block {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem 0.75rem;\n  align-items: baseline;\n}\n\n.graph-landing__title {\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n}\n\n.graph-landing__counts {\n  color: var(--gray);\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.15rem 0.85rem;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 0;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.3;\n  min-height: 32px;\n  padding: 0.2rem 0;\n}\n\n.graph-landing__chip:hover,\n.graph-landing__chip:focus-visible {\n  color: var(--secondary);\n  outline: none;\n}\n\n.graph-landing__chip:focus-visible {\n  box-shadow: 0 2px 0 0 var(--secondary);\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  color: var(--secondary);\n  box-shadow: 0 1px 0 0 var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__controls {\n  align-items: center;\n  color: var(--gray);\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem 1rem;\n}\n\n.graph-landing__seg {\n  align-items: center;\n  display: inline-flex;\n  flex-wrap: wrap;\n  gap: 0.35rem 0.55rem;\n}\n\n.graph-landing__seg-label {\n  color: var(--gray);\n  font-size: 12px;\n}\n\n.graph-landing__text-btn,\n.graph-landing__nav-link,\n.graph-landing__locale,\n.graph-landing__tags-toggle {\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.3;\n  min-height: 32px;\n  padding: 0.2rem 0;\n  text-decoration: none;\n}\n\n.graph-landing__text-btn:hover,\n.graph-landing__text-btn:focus-visible,\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale:hover,\n.graph-landing__locale:focus-visible,\n.graph-landing__tags-toggle:hover,\n.graph-landing__tags-toggle:focus-visible {\n  color: var(--secondary);\n  outline: none;\n}\n\n.graph-landing__text-btn:focus-visible,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale:focus-visible,\n.graph-landing__tags-toggle:focus-visible {\n  box-shadow: 0 2px 0 0 var(--secondary);\n}\n\n.graph-landing__text-btn[aria-pressed=true] {\n  color: var(--dark);\n}\n\n.graph-landing__nav-link {\n  color: var(--dark);\n}\n\n.graph-landing__locales {\n  display: inline-flex;\n  flex-wrap: wrap;\n  gap: 0.45rem 0.55rem;\n}\n\n.graph-landing__locale--current {\n  color: var(--dark);\n  cursor: default;\n  font-weight: 600;\n}\n\n.graph-landing__tags {\n  max-width: 16rem;\n}\n\n.graph-landing__tags-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  list-style: none;\n  margin: 0;\n  max-height: 28vh;\n  overflow: auto;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 0.45rem;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 28px;\n  padding: 0.15rem 0;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover,\n.graph-landing__tag-item:focus-visible {\n  color: var(--secondary);\n  outline: none;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--secondary);\n}\n\n.graph-landing__tag-count {\n  color: var(--gray);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--gray);\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 13px;\n  gap: 0.85rem;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 0.4rem;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: var(--darkgray);\n}\n\n.graph-landing__dot--tag {\n  background: var(--tertiary);\n}\n\n.graph-landing__scroll {\n  align-items: center;\n  bottom: 1.25rem;\n  color: var(--gray);\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  left: 50%;\n  pointer-events: auto;\n  position: absolute;\n  text-decoration: none;\n  transform: translateX(-50%);\n}\n\n.graph-landing__scroll:hover,\n.graph-landing__scroll:focus-visible {\n  color: var(--secondary);\n  outline: none;\n}\n\n.graph-landing__scroll-label {\n  font-size: 12px;\n}\n\n.graph-landing__chevron {\n  border-right: 1px solid currentColor;\n  border-bottom: 1px solid currentColor;\n  display: block;\n  height: 7px;\n  transform: rotate(45deg);\n  width: 7px;\n}\n\n.graph-landing__body {\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  line-height: 1.5;\n  margin: 0 auto;\n  max-width: 40rem;\n  padding: 2rem 2rem 4rem;\n  width: min(40rem, 100% - 2.5rem);\n}\n\n.graph-landing__error {\n  align-items: center;\n  color: var(--gray);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing,\n:root[saved-theme=dark] .graph-landing__hero {\n  background: var(--light);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__top-left,\n  .graph-landing__top-right,\n  .graph-landing__bottom-left {\n    padding: 1rem 1.15rem;\n  }\n  .graph-landing__top-left {\n    max-width: calc(100% - 1.5rem);\n  }\n  .graph-landing__top-right {\n    max-width: calc(100% - 1.5rem);\n  }\n  .graph-landing__tags-toggle {\n    display: inline-flex;\n  }\n  .graph-landing__tag-list {\n    display: none;\n    max-height: 28vh;\n  }\n  .graph-landing__tags[data-open=true] .graph-landing__tag-list {\n    display: flex;\n  }\n  .graph-landing__bottom-left {\n    bottom: 2.75rem;\n  }\n  .graph-landing__scroll {\n    bottom: 0.85rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .graph-landing__chevron {\n    animation: none;\n  }\n}";

// src/components/GraphLanding.tsx
function collectText(node) {
  if (node.type === "text" && "value" in node && typeof node.value === "string") {
    return node.value;
  }
  if ("children" in node && Array.isArray(node.children)) {
    return node.children.map((child) => collectText(child)).join("");
  }
  return "";
}
function hasMeaningfulBody(tree) {
  return collectText(tree).trim().length > 0;
}
function overlayCopyForLocale(localeId) {
  if (localeId === "ko") {
    return {
      labelsShow: "\uB77C\uBCA8 \uBCF4\uC774\uAE30",
      labelsHide: "\uB77C\uBCA8 \uC228\uAE30\uAE30",
      relayout: "\uB2E4\uC2DC \uC815\uB82C",
      notes: "\uB178\uD2B8",
      tags: "\uD0DC\uADF8",
      countsTemplate: "{n} \uB178\uB4DC \xB7 {m} \uC5E3\uC9C0",
      lensAll: "\uC804\uCCB4",
      lensTag: "\uD0DC\uADF8\uBCC4",
      lensFolder: "\uD3F4\uB354\uBCC4",
      lensHub: "\uD5C8\uBE0C",
      colorBy: "\uC0C9\uC0C1 \uAE30\uC900",
      colorType: "\uC720\uD615",
      colorFolder: "\uD3F4\uB354",
      spacing: "\uB178\uB4DC \uAC04\uACA9",
      spacingTight: "\uC881\uAC8C",
      spacingNormal: "\uBCF4\uD1B5",
      spacingWide: "\uB113\uAC8C",
      articles: "\uAE00",
      about: "About",
      theme: "\uD14C\uB9C8",
      tagsToggle: "\uD0DC\uADF8",
      scrollHint: "\uC544\uB798\uB85C",
      folderRoot: "\uB8E8\uD2B8"
    };
  }
  return {
    labelsShow: "Show labels",
    labelsHide: "Hide labels",
    relayout: "Re-layout",
    notes: "Notes",
    tags: "Tags",
    countsTemplate: "{n} nodes \xB7 {m} edges",
    lensAll: "All",
    lensTag: "Tags",
    lensFolder: "Folders",
    lensHub: "Hubs",
    colorBy: "Color",
    colorType: "Type",
    colorFolder: "Folder",
    spacing: "Spacing",
    spacingTight: "Tight",
    spacingNormal: "Mid",
    spacingWide: "Wide",
    articles: "Writing",
    about: "About",
    theme: "Theme",
    tagsToggle: "Tags",
    scrollHint: "Scroll",
    folderRoot: "Root"
  };
}
function slugToAbsHref(slug) {
  const withoutIndex = slug === "index" || slug.endsWith("/index") ? slug.replace(/\/?index$/, "") : slug;
  if (withoutIndex.length === 0) {
    return "/";
  }
  const encoded = withoutIndex.split("/").map((segment) => encodeURIComponent(segment)).join("/");
  return `/${encoded}/`;
}
function homeLocaleLinks(allFiles, locales, currentLocale) {
  const homes = allFiles.filter((file) => {
    const frontmatter = file.frontmatter;
    return frontmatter?.translationKey === "home" && typeof file.slug === "string" && file.slug !== "index";
  });
  const links = [];
  for (const locale of locales) {
    const home = homes.find((file) => {
      const multilingual = file.multilingual;
      return multilingual?.locale === locale.id;
    });
    if (!home || typeof home.slug !== "string") {
      continue;
    }
    links.push({
      id: locale.id,
      href: slugToAbsHref(home.slug),
      label: locale.id,
      current: locale.id === currentLocale
    });
  }
  return links;
}
var GraphLanding_default = (() => {
  const GraphLanding = ({ fileData, tree, cfg, allFiles }) => {
    const multilingual = fileData.multilingual;
    const slug = typeof fileData.slug === "string" ? fileData.slug : "";
    const localeId = multilingual?.locale ?? slug.split("/")[0] ?? "ko";
    const multilingualCfg = cfg.multilingual;
    const sourceLocale = multilingualCfg?.sourceLocale ?? "ko";
    const locales = multilingualCfg?.locales ?? [];
    const localePrefixes = locales.map((locale) => locale.id).join(",");
    const copy = overlayCopyForLocale(localeId);
    const localeLinks = homeLocaleLinks(allFiles, locales, localeId);
    const showBody = hasMeaningfulBody(tree);
    const body = showBody ? htmlToJsx(tree) : null;
    return /* @__PURE__ */ u2(
      "div",
      {
        class: "graph-landing",
        "data-locale": localeId,
        "data-source-locale": sourceLocale,
        "data-locale-prefixes": localePrefixes,
        "data-counts-template": copy.countsTemplate,
        "data-folder-root-label": copy.folderRoot,
        "data-legend-notes": copy.notes,
        "data-legend-tags": copy.tags,
        children: [
          /* @__PURE__ */ u2("section", { class: "graph-landing__hero", "aria-label": "Knowledge graph", children: [
            /* @__PURE__ */ u2("div", { class: "graph-landing__canvas", id: "graph-landing-mount" }),
            /* @__PURE__ */ u2("div", { class: "graph-landing__overlay", children: [
              /* @__PURE__ */ u2("div", { class: "graph-landing__top-left", children: [
                /* @__PURE__ */ u2("div", { class: "graph-landing__title-block", children: [
                  /* @__PURE__ */ u2("p", { class: "graph-landing__title", children: "Beomsu Koh" }),
                  /* @__PURE__ */ u2("p", { class: "graph-landing__counts", "data-graph-counts": true, children: copy.countsTemplate.replace("{n}", "\u2013").replace("{m}", "\u2013") })
                ] }),
                /* @__PURE__ */ u2("div", { class: "graph-landing__lenses", role: "tablist", "aria-label": "Graph lens", children: [
                  /* @__PURE__ */ u2("button", { type: "button", class: "graph-landing__chip", "data-graph-lens": "all", "aria-pressed": "true", children: copy.lensAll }),
                  /* @__PURE__ */ u2("button", { type: "button", class: "graph-landing__chip", "data-graph-lens": "tag", "aria-pressed": "false", children: copy.lensTag }),
                  /* @__PURE__ */ u2("button", { type: "button", class: "graph-landing__chip", "data-graph-lens": "folder", "aria-pressed": "false", children: copy.lensFolder }),
                  /* @__PURE__ */ u2("button", { type: "button", class: "graph-landing__chip", "data-graph-lens": "hub", "aria-pressed": "false", children: copy.lensHub })
                ] }),
                /* @__PURE__ */ u2("div", { class: "graph-landing__controls", children: [
                  /* @__PURE__ */ u2("span", { class: "graph-landing__seg", "data-graph-color-group": true, children: [
                    /* @__PURE__ */ u2("span", { class: "graph-landing__seg-label", children: copy.colorBy }),
                    /* @__PURE__ */ u2("button", { type: "button", class: "graph-landing__text-btn", "data-graph-color": "type", "aria-pressed": "true", children: copy.colorType }),
                    /* @__PURE__ */ u2(
                      "button",
                      {
                        type: "button",
                        class: "graph-landing__text-btn",
                        "data-graph-color": "folder",
                        "aria-pressed": "false",
                        children: copy.colorFolder
                      }
                    )
                  ] }),
                  /* @__PURE__ */ u2("span", { class: "graph-landing__seg", "data-graph-spacing-group": true, children: [
                    /* @__PURE__ */ u2("span", { class: "graph-landing__seg-label", children: copy.spacing }),
                    /* @__PURE__ */ u2(
                      "button",
                      {
                        type: "button",
                        class: "graph-landing__text-btn",
                        "data-graph-spacing": "tight",
                        "aria-pressed": "false",
                        children: copy.spacingTight
                      }
                    ),
                    /* @__PURE__ */ u2(
                      "button",
                      {
                        type: "button",
                        class: "graph-landing__text-btn",
                        "data-graph-spacing": "normal",
                        "aria-pressed": "true",
                        children: copy.spacingNormal
                      }
                    ),
                    /* @__PURE__ */ u2(
                      "button",
                      {
                        type: "button",
                        class: "graph-landing__text-btn",
                        "data-graph-spacing": "wide",
                        "aria-pressed": "false",
                        children: copy.spacingWide
                      }
                    )
                  ] }),
                  /* @__PURE__ */ u2("button", { type: "button", class: "graph-landing__text-btn", "data-graph-relayout": true, children: copy.relayout }),
                  /* @__PURE__ */ u2(
                    "button",
                    {
                      type: "button",
                      class: "graph-landing__text-btn",
                      "data-graph-labels": true,
                      "data-label-show": copy.labelsShow,
                      "data-label-hide": copy.labelsHide,
                      "aria-pressed": "false",
                      children: copy.labelsShow
                    }
                  )
                ] }),
                /* @__PURE__ */ u2("div", { class: "graph-landing__tags", children: [
                  /* @__PURE__ */ u2(
                    "button",
                    {
                      type: "button",
                      class: "graph-landing__tags-toggle",
                      "data-graph-tags-toggle": true,
                      "aria-expanded": "false",
                      children: copy.tagsToggle
                    }
                  ),
                  /* @__PURE__ */ u2("ul", { class: "graph-landing__tag-list", "data-graph-tags": true })
                ] })
              ] }),
              /* @__PURE__ */ u2("nav", { class: "graph-landing__top-right", "aria-label": "Site", children: [
                /* @__PURE__ */ u2("a", { class: "graph-landing__nav-link", href: "/articles/", children: copy.articles }),
                /* @__PURE__ */ u2("a", { class: "graph-landing__nav-link", href: "/about", children: copy.about }),
                /* @__PURE__ */ u2("span", { class: "graph-landing__locales", children: localeLinks.map(
                  (link) => link.current ? /* @__PURE__ */ u2("span", { class: "graph-landing__locale graph-landing__locale--current", "aria-current": "page", children: link.label }) : /* @__PURE__ */ u2("a", { class: "graph-landing__locale", href: link.href, lang: link.id, children: link.label })
                ) }),
                /* @__PURE__ */ u2("button", { type: "button", class: "graph-landing__text-btn", "data-graph-theme": true, children: copy.theme })
              ] }),
              /* @__PURE__ */ u2("div", { class: "graph-landing__bottom-left", children: /* @__PURE__ */ u2("span", { class: "graph-landing__legend", "data-graph-legend": true, children: [
                /* @__PURE__ */ u2("span", { class: "graph-landing__legend-item", children: [
                  /* @__PURE__ */ u2("span", { class: "graph-landing__dot graph-landing__dot--note", "aria-hidden": "true" }),
                  copy.notes
                ] }),
                /* @__PURE__ */ u2("span", { class: "graph-landing__legend-item", children: [
                  /* @__PURE__ */ u2("span", { class: "graph-landing__dot graph-landing__dot--tag", "aria-hidden": "true" }),
                  copy.tags
                ] })
              ] }) }),
              showBody ? /* @__PURE__ */ u2("a", { class: "graph-landing__scroll", href: "#graph-landing-body", children: [
                /* @__PURE__ */ u2("span", { class: "graph-landing__scroll-label", children: copy.scrollHint }),
                /* @__PURE__ */ u2("span", { class: "graph-landing__chevron", "aria-hidden": "true" })
              ] }) : null
            ] })
          ] }),
          body ? /* @__PURE__ */ u2("article", { class: "graph-landing__body popover-hint", id: "graph-landing-body", children: /* @__PURE__ */ u2("div", { class: "markdown-preview-view markdown-rendered", children: body }) }) : null
        ]
      }
    );
  };
  GraphLanding.css = graph_landing_default;
  GraphLanding.afterDOMLoaded = graph_landing_inline_default;
  return GraphLanding;
});

// src/pageType.ts
var homeMatcher = ({ slug, fileData }) => {
  if (slug === "index") {
    return false;
  }
  const frontmatter = fileData.frontmatter;
  return frontmatter?.translationKey === "home";
};
var GraphLandingPage = () => ({
  name: "GraphLanding",
  priority: 20,
  match: homeMatcher,
  layout: "index",
  frame: "minimal",
  body: GraphLanding_default
});
var pageType_default = GraphLandingPage;

export { pageType_default as default };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
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
var graph_landing_inline_default = 'var Y="0.179.1",kn="https://esm.sh/force-graph@1.51.4",Tn=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${Y}`,Ln=`https://esm.sh/three-spritetext@1.9.2?deps=three@${Y}`,vn=`https://esm.sh/three@${Y}/examples/jsm/postprocessing/UnrealBloomPass.js`,En=8,Sn=5,Cn=6,V=1,K=3.5,Pn=.065,xn=1.8,Gn=1,on=1,H=.15,dn="graph-landing:lens",Nn=.18,Mn=100,An=1.18,Dn=1.35,_n=1.15,Rn={tight:{charge:-80,distance:52},normal:{charge:-130,distance:70},wide:{charge:-180,distance:98}};function gn(n){if(n&&typeof n=="object")return n;throw new Error("graph-landing: expected an object in content index")}function sn(n){return Array.isArray(n)?n.filter(e=>typeof e=="string"):[]}function In(n){let e=[];for(let r of Object.values(n)){let o=gn(r),i=typeof o.slug=="string"?o.slug:"";if(i.length===0)continue;let a=o.multilingual,l=a&&typeof a=="object"?a:void 0;e.push({slug:i,title:typeof o.title=="string"?o.title:i,links:sn(o.links),tags:sn(o.tags),multilingual:l})}return e}function Hn(n){return n==="index"||n.endsWith("/index")}function On(n){return n==="tags"||n.startsWith("tags/")}function Fn(n){return n.multilingual?.translationKey==="home"}function $n(n,e){return n.multilingual?.locale?n.multilingual.locale===e.localeId:n.slug.startsWith(`${e.localeId}/`)?!0:!e.prefixes.some(o=>n.slug.startsWith(`${o}/`))&&e.localeId===e.sourceLocale}function zn(n,e,r){return Math.min(r,Math.max(e,n))}function Bn(n){let e=n.split("/").filter(r=>r.length>0);return e.length<2?"root":e[0]??"root"}function Vn(n,e){return n.length===0?"":[...n].sort((o,i)=>(e.get(i)??0)-(e.get(o)??0))[0]??""}function Un(n,e){let r=n.filter(c=>Hn(c.slug)||On(c.slug)||Fn(c)?!1:$n(c,e)),o=new Set(r.map(c=>c.slug)),i=new Map,a=[],l=new Set,p=new Map,w=c=>{i.set(c,(i.get(c)??0)+1)},T=(c,h,S)=>{let M=c<h?`${c}|${h}|${S}`:`${h}|${c}|${S}`;l.has(M)||(l.add(M),a.push({source:c,target:h,kind:S}),w(c),w(h))};for(let c of r)for(let h of c.links)o.has(h)&&h!==c.slug&&T(c.slug,h,"wikilink");let L=new Set;for(let c of r)for(let h of c.tags){p.set(h,(p.get(h)??0)+1);let S=`tag:${h}`;L.add(S),T(c.slug,S,"tag")}let C=[...i.values()],G=C.length>0?Math.min(...C):0,N=C.length>0?Math.max(...C):0,P=c=>{let h=i.get(c)??0,S=Math.sqrt(h),M=Math.sqrt(G),z=Math.sqrt(N)-M;return z===0?(V+K)/2:V+(S-M)/z*(K-V)},x=[...r].sort((c,h)=>(i.get(h.slug)??0)-(i.get(c.slug)??0)),v=new Set(x.filter(c=>(i.get(c.slug)??0)>0).slice(0,En).map(c=>c.slug)),y=r.map(c=>({id:c.slug,name:c.title,type:"note",val:P(c.slug),degree:i.get(c.slug)??0,isHub:v.has(c.slug),tag:"",slug:c.slug,folder:Bn(c.slug),tags:c.tags,dominantTag:Vn(c.tags,p)}));for(let c of L){let h=c.slice(4);y.push({id:c,name:h,type:"tag",val:zn(P(c)*.7,V,K),degree:i.get(c)??0,isHub:!1,tag:h,slug:`tags/${h}`,folder:"tag",tags:[h],dominantTag:h})}return{nodes:y,links:a}}function jn(n){let e=new Map,r=(o,i)=>{let a=e.get(o)??new Set;a.add(i),e.set(o,a)};for(let o of n){let i=E(o.source),a=E(o.target);r(i,a),r(a,i)}return e}function E(n){return typeof n=="string"?n:n.id}function O(n,e){let r=document.createElement("span");r.style.color=`var(${n})`,r.style.position="absolute",r.style.visibility="hidden",document.body.appendChild(r);let o=getComputedStyle(r).color;return r.remove(),o||e}function fn(){let n=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:O("--light","#ffffff"),ink:O("--darkgray","#0f0f0f"),accent:O("--secondary","#a52142"),tertiary:O("--tertiary","#c75b75"),gray:O("--gray","#737373"),font:n.length>0?n:"Inter, sans-serif"}}function I(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Wn(){return window.matchMedia("(pointer: fine)").matches}function qn(){let n=document.createElement("canvas");return(n.getContext("webgl")??n.getContext("experimental-webgl"))!==null}function Kn(){return Wn()&&qn()&&window.innerWidth>700&&!I()}function F(){return document.documentElement.getAttribute("saved-theme")==="dark"}function mn(n){let e=n.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(e&&e[1]&&e[2]&&e[3])return{r:Number(e[1]),g:Number(e[2]),b:Number(e[3])};let r=n.match(/^#([0-9a-f]{6})$/i);if(r&&r[1]){let o=parseInt(r[1],16);return{r:o>>16&255,g:o>>8&255,b:o&255}}return null}function D(n,e){let r=mn(n);return r?`rgba(${r.r}, ${r.g}, ${r.b}, ${e})`:n}function Yn(n,e){let r=mn(n);if(!r)return n;let o=i=>Math.min(255,Math.round(i+(255-i)*e));return`rgb(${o(r.r)}, ${o(r.g)}, ${o(r.b)})`}function pn(n,e){let r=0;for(let o of n)r=r*31+o.charCodeAt(0)>>>0;return e[r%e.length]??e[0]??n}function an(n,e){return n==="articles"?e.accent:n==="inbox"?e.tertiary:n==="root"?e.ink:pn(n,[e.accent,e.tertiary,e.ink,e.gray])}function Xn(n,e){return n.length===0?e.ink:pn(n,[e.accent,e.tertiary])}function Zn(n){let e=n.split("/").map(a=>encodeURIComponent(a)).join("/"),r=document.querySelector("base")?.getAttribute("href"),o="/";r&&r.startsWith("/")&&!r.startsWith("//")&&(o=r.endsWith("/")?r:`${r}/`);let i=`${o}${e}`.replace(/\\/{2,}/g,"/");return new URL(i,window.location.origin)}function Jn(n){if(n.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let e=Zn(n);window.location.assign(e.toString())}function Qn(n){let e=n.default;if(typeof e!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return e()}function cn(n,e){n.textContent=e,n.classList.add("graph-landing__error")}async function nt(n){let r=await import(n?Tn:kn);return n&&typeof r.default=="function"?r.default({controlType:"orbit"}):Qn(r)}function tt(){try{let n=sessionStorage.getItem(dn);if(n==="all"||n==="tag"||n==="folder"||n==="hub")return n}catch(n){console.error("[graph-landing] sessionStorage unavailable for lens persistence",n)}return"all"}function ln(n){try{sessionStorage.setItem(dn,n)}catch(e){console.error("[graph-landing] could not persist lens",e)}}function et(n){return n==="all"||n==="tag"||n==="folder"||n==="hub"}function rt(n){return n==="tight"||n==="normal"||n==="wide"}function ot(n,e){let r=n.nodes.filter(i=>i.type==="note").sort((i,a)=>a.degree-i.degree).slice(0,Cn),o=new Set;for(let i of r){o.add(i.id);for(let a of e.get(i.id)??[])o.add(a)}return o}function st(n,e){return{nodes:n.nodes.filter(r=>e.has(r.id)),links:n.links.filter(r=>e.has(E(r.source))&&e.has(E(r.target)))}}function at(n,e){return n.type==="tag"?n.tag===e:n.tags.includes(e)}function un(n,e){let r=E(e),o=n.find(i=>i.id===r);return!o||o.type!=="note"?null:o.folder}function it(n,e,r){let o=new Map;if(e==="folder"){let i=[...new Set(n.nodes.filter(a=>a.type==="note").map(a=>a.folder))];return i.forEach((a,l)=>{let p=Math.PI*2*l/Math.max(i.length,1),w={x:Math.cos(p)*r,y:Math.sin(p)*r,z:0};for(let T of n.nodes)T.type==="note"&&T.folder===a&&o.set(T.id,w)}),o}if(e==="tag"){let i=n.nodes.filter(l=>l.type==="tag"),a=new Map;i.forEach((l,p)=>{let w=Math.PI*2*p/Math.max(i.length,1);a.set(l.tag,{x:Math.cos(w)*r,y:Math.sin(w)*r,z:0})});for(let l of n.nodes)if(l.type==="tag"){let p=a.get(l.tag);p&&o.set(l.id,p)}else if(l.dominantTag.length>0){let p=a.get(l.dominantTag);p&&o.set(l.id,p)}}return o}function ct(n,e){let r=[],o=i=>{let a=e*i;for(let l of r){let p=n(l);p&&(l.vx=(l.vx??0)+(p.x-(l.x??0))*a,l.vy=(l.vy??0)+(p.y-(l.y??0))*a,l.vz=(l.vz??0)+(p.z-(l.z??0))*a)}};return o.initialize=i=>{r=i},o}function U(n,e,r,o){for(let i of n.querySelectorAll(e)){if(!(i instanceof HTMLElement))continue;let a=i.getAttribute(o);i.setAttribute("aria-pressed",a===r?"true":"false")}}function lt(n,e,r,o){let i=jn(e.links),a={lens:tt(),spacing:"normal",allLabels:!1,focusTag:null},l=null,p=new Set(e.nodes.filter(t=>t.type==="note").sort((t,s)=>s.degree-t.degree).slice(0,Sn).map(t=>t.id)),w=t=>{let s=t.val;return t.isHub&&(s*=An),a.lens==="tag"&&t.type==="tag"&&(s*=Dn),a.focusTag&&t.id===`tag:${a.focusTag}`&&(s*=_n),s},T=t=>a.allLabels||l===t.id?!0:p.has(t.id),L=t=>{if(l!==null)return l===t||(i.get(l)?.has(t)??!1);if(a.focusTag===null)return!0;let s=e.nodes.find(u=>u.id===t);return s?at(s,a.focusTag):!1},C=t=>a.lens==="tag"?t.type==="tag"?r.current.tertiary:Xn(t.dominantTag,r.current):a.lens==="folder"?t.type==="tag"?r.current.tertiary:an(t.folder,r.current):a.lens==="hub"?t.type==="tag"?r.current.tertiary:t.isHub?r.current.accent:r.current.ink:t.type==="tag"?r.current.tertiary:r.current.ink,G=t=>{if(l!==null&&(l===t.id||i.get(l)?.has(t.id)))return r.current.accent;let s=C(t);return L(t.id)?F()?Yn(s,.16):s:D(s,H)},N=t=>{let s=E(t.source),u=E(t.target);if(l!==null&&(s===l||u===l))return r.current.accent;if(l!==null||a.focusTag!==null){let d=L(s),m=L(u);if(!d||!m)return D(r.current.gray,H)}let b=F();return t.kind==="tag"?D(r.current.gray,b?.2:.12):D(r.current.gray,b?.34:.2)},P=()=>a.lens!=="hub"?e:st(e,ot(e,i)),x=()=>{let t=Rn[a.spacing],s=n.d3Force("charge");s?.strength&&s.strength(t.charge);let u=n.d3Force("link");u?.distance&&u.distance(g=>a.lens==="tag"&&g.kind==="tag"?t.distance*.72:t.distance),u?.strength&&u.strength(g=>{if(a.lens==="tag"&&g.kind==="tag")return .95;if(a.lens==="folder"){let k=un(e.nodes,g.source),A=un(e.nodes,g.target);if(k!==null&&k===A)return .72}return g.kind==="tag"?.5:.6});let b=n.d3Force("center");b?.strength&&b.strength(Pn);let d=a.spacing==="wide"?260:a.spacing==="tight"?130:190,m=it(e,a.lens,d),f=a.lens==="folder"||a.lens==="tag"?.08:0;n.d3Force("cluster",ct(g=>m.get(g.id)??null,f))},v=()=>{if(!o.use3d||!o.spriteText||typeof n.nodeThreeObject!="function")return;let t=o.spriteText;typeof n.nodeThreeObjectExtend=="function"&&n.nodeThreeObjectExtend(!0),n.nodeThreeObject(s=>{if(!T(s))return!1;let u=new t(s.name);return u.color=L(s.id)?r.current.ink:D(r.current.ink,H),u.textHeight=p.has(s.id)?7.2:5.6,u.position.y=10,u})},y=()=>{!o.use3d||typeof n.linkDirectionalParticles!="function"||n.linkDirectionalParticles(t=>{if(l===null)return 0;let s=E(t.source),u=E(t.target);return s===l||u===l?2:0})},c=()=>{n.nodeVal(w),n.nodeColor(G),n.linkColor(N),n.linkWidth(t=>{let s=E(t.source),u=E(t.target);return l!==null&&(s===l||u===l)?1.1:t.kind==="tag"?.45:.7}),typeof n.linkOpacity=="function"&&n.linkOpacity(on),y(),o.use3d||n.nodeCanvasObjectMode(()=>"replace")},h=()=>{let t=o.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let s=(d,m)=>{let f=document.createElement("span");f.className="graph-landing__legend-item";let g=document.createElement("span");g.className="graph-landing__dot",g.setAttribute("aria-hidden","true"),g.style.background=d;let k=document.createElement("span");return k.textContent=m,f.append(g,k),f};if(a.lens==="folder"){let d=[...new Set(e.nodes.filter(f=>f.type==="note").map(f=>f.folder))],m=o.root.dataset.folderRootLabel??"root";t.replaceChildren(...d.map(f=>s(an(f,r.current),f==="root"?m:f)));return}let u=o.root.dataset.legendNotes??"Notes",b=o.root.dataset.legendTags??"Tags";t.replaceChildren(s(r.current.ink,u),s(r.current.tertiary,b))},S=()=>{let t=o.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let s=e.nodes.filter(d=>d.type==="tag").sort((d,m)=>m.degree-d.degree).slice(0,16),u=o.root.querySelector(".graph-landing__tags");u instanceof HTMLElement&&(u.hidden=s.length===0);let b=s.map(d=>{let m=document.createElement("li"),f=document.createElement("button");f.type="button",f.className="graph-landing__tag-item",f.dataset.graphTag=d.tag,f.setAttribute("aria-pressed",a.focusTag===d.tag?"true":"false");let g=document.createElement("span");g.textContent=d.tag;let k=document.createElement("span");return k.className="graph-landing__tag-count",k.textContent=String(d.degree),f.append(g,k),m.append(f),m});t.replaceChildren(...b)},M=t=>{if(o.use3d&&typeof n.cameraPosition=="function"){let s=t.x??0,u=t.y??0,b=t.z??0;n.cameraPosition({x:s+36,y:u+18,z:b+150},{x:s,y:u,z:b},700);return}typeof n.centerAt=="function"&&typeof n.zoom=="function"&&(n.centerAt(t.x??0,t.y??0,600),n.zoom(2.3,600))},$=0;window.addCleanup(()=>window.clearTimeout($));let z=()=>window.innerWidth<=700?72:Mn,X=t=>{typeof n.zoomToFit=="function"&&n.zoomToFit(t,z())},j=(t,s)=>{window.clearTimeout($),$=window.setTimeout(()=>{X(s)},t)},W=t=>{n.graphData(P()),x(),c(),v(),h(),U(o.root,"[data-graph-lens]",a.lens,"data-graph-lens"),U(o.root,"[data-graph-spacing]",a.spacing,"data-graph-spacing");for(let s of o.root.querySelectorAll("[data-graph-tag]"))s instanceof HTMLElement&&s.setAttribute("aria-pressed",s.dataset.graphTag===a.focusTag?"true":"false");n.d3ReheatSimulation(),t&&j(280,I()?0:900)},hn=t=>{a.lens=t,t!=="tag"&&(a.focusTag=null),ln(t),W(!0)},Z=t=>{a.focusTag=a.focusTag===t?null:t,a.focusTag&&(a.lens="tag",ln("tag")),W(!1);let s=e.nodes.find(u=>u.id===`tag:${t}`);if(s&&a.focusTag){M(s);return}j(280,I()?0:900)};if(n.graphData(P()),n.backgroundColor(r.current.bg),n.nodeLabel(t=>t.name),n.nodeRelSize(xn),typeof n.nodeOpacity=="function"&&n.nodeOpacity(Gn),typeof n.linkOpacity=="function"&&n.linkOpacity(on),x(),c(),n.onNodeHover(t=>{l=t?t.id:null,c(),o.use3d&&v()}),o.use3d){if(typeof n.showNavInfo=="function"&&n.showNavInfo(!1),typeof n.enableNavigationControls=="function"&&n.enableNavigationControls(!0),!I()&&typeof n.controls=="function"){let t=n.controls();t.autoRotate=!1,t.autoRotateSpeed=Nn;let s=window.setTimeout(()=>{typeof n.controls=="function"&&(n.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(s))}n.warmupTicks(50),n.cooldownTicks(200),typeof n.linkDirectionalParticleWidth=="function"&&n.linkDirectionalParticleWidth(1.1),typeof n.linkDirectionalParticleSpeed=="function"&&n.linkDirectionalParticleSpeed(.004),typeof n.linkDirectionalParticleColor=="function"&&n.linkDirectionalParticleColor(()=>r.current.accent),o.bloomPass&&typeof n.postProcessingComposer=="function"&&(o.bloomPass.strength=F()?.22:0,o.bloomPass.radius=.4,o.bloomPass.threshold=.42,n.postProcessingComposer().addPass(o.bloomPass)),typeof n.cameraPosition=="function"&&n.cameraPosition({x:0,y:80,z:720}),v()}else n.warmupTicks(60),n.cooldownTicks(180),n.nodeCanvasObject((t,s,u)=>{let b=1.6+w(t)*.55,d=t.x??0,m=t.y??0;if(s.save(),s.beginPath(),s.arc(d,m,b,0,Math.PI*2),s.fillStyle=G(t),s.fill(),t.isHub&&(s.strokeStyle=L(t.id)?r.current.accent:D(r.current.accent,H),s.lineWidth=.7/u,s.stroke()),T(t)){let f=13/u;s.font=`${f}px ${r.current.font}`,s.fillStyle=L(t.id)?r.current.ink:D(r.current.ink,H),s.textAlign="center",s.textBaseline="bottom",s.fillText(t.name,d,m-b-4)}s.restore()}),typeof n.nodePointerAreaPaint=="function"&&n.nodePointerAreaPaint((t,s,u)=>{let b=1.6+w(t)*.55+8;u.beginPath(),u.arc(t.x??0,t.y??0,b,0,Math.PI*2),u.fillStyle=s,u.fill()});let J=t=>{if(t.type==="tag"){Z(t.tag);return}Jn(t.slug)},q=!1;n.onNodeClick((t,s)=>{t&&(q=!0,s&&typeof s.stopPropagation=="function"&&s.stopPropagation(),J(t))});let _=o.root.querySelector("#graph-landing-mount");if(_ instanceof HTMLElement){let t=null,s=d=>{t={x:d.clientX,y:d.clientY}},u=(d,m)=>{if(typeof n.graph2ScreenCoords!="function")return null;let f=_.getBoundingClientRect(),g=d-f.left,k=m-f.top,A=null,en=4096;for(let R of P().nodes){if(R.x===void 0||R.y===void 0)continue;let B=n.graph2ScreenCoords(R.x,R.y,R.z??0),yn=(B.x-g)**2+(B.y-k)**2,wn=(B.x-d)**2+(B.y-m)**2,rn=Math.min(yn,wn);rn<en&&(en=rn,A=R)}return A},b=d=>{let m=t;t=null,!(!m||(d.clientX-m.x)**2+(d.clientY-m.y)**2>25)&&window.setTimeout(()=>{if(q){q=!1;return}let g=u(d.clientX,d.clientY);g&&J(g)},0)};_.addEventListener("pointerdown",s,!0),_.addEventListener("pointerup",b,!0),window.addCleanup(()=>{_.removeEventListener("pointerdown",s,!0),_.removeEventListener("pointerup",b,!0)})}U(o.root,"[data-graph-lens]",a.lens,"data-graph-lens"),h(),S(),a.lens!=="all"&&W(!1);let Q=I();j(400,Q?0:800);let bn=window.setTimeout(()=>{X(Q?0:400)},1400);window.addCleanup(()=>window.clearTimeout(bn));let nn=()=>{r.current=fn(),n.backgroundColor(r.current.bg),o.bloomPass&&(o.bloomPass.strength=F()?.22:0),c(),v(),h()};document.addEventListener("themechange",nn),window.addCleanup(()=>document.removeEventListener("themechange",nn));let tn=t=>{let s=t.target;if(!(s instanceof Element))return;let u=s.closest("[data-graph-lens]");if(u instanceof HTMLElement&&u.dataset.graphLens&&et(u.dataset.graphLens)){hn(u.dataset.graphLens);return}let b=s.closest("[data-graph-spacing]");if(b instanceof HTMLElement&&b.dataset.graphSpacing&&rt(b.dataset.graphSpacing)){a.spacing=b.dataset.graphSpacing,x(),n.d3ReheatSimulation(),U(o.root,"[data-graph-spacing]",a.spacing,"data-graph-spacing");return}let d=s.closest("[data-graph-tag]");if(d instanceof HTMLElement&&d.dataset.graphTag){Z(d.dataset.graphTag);return}if(s.closest("[data-graph-relayout]")){n.d3ReheatSimulation();return}let m=s.closest("[data-graph-labels]");if(m instanceof HTMLButtonElement){a.allLabels=!a.allLabels,m.setAttribute("aria-pressed",a.allLabels?"true":"false");let g=m.dataset.labelShow??"Labels",k=m.dataset.labelHide??"Labels",A=m.querySelector("[data-graph-labels-text]");A&&(A.textContent=a.allLabels?k:g),v();return}if(s.closest("[data-graph-theme]")){let g=F()?"light":"dark";document.documentElement.setAttribute("saved-theme",g),localStorage.setItem("theme",g),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${g}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:g}}));return}let f=s.closest("[data-graph-tags-toggle]");if(f instanceof HTMLButtonElement){let g=o.root.querySelector(".graph-landing__tags");if(g instanceof HTMLElement){let k=g.dataset.open==="true";g.dataset.open=k?"false":"true",f.setAttribute("aria-expanded",k?"false":"true")}}};o.root.addEventListener("click",tn),window.addCleanup(()=>o.root.removeEventListener("click",tn))}async function ut(){let n=document.querySelector(".graph-landing");if(!(n instanceof HTMLElement)||n.dataset.graphReady==="1")return;n.dataset.graphReady="1";let e=n.querySelector("#graph-landing-mount");if(!(e instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let r=n.querySelector("[data-graph-counts]"),o=n.dataset.locale??"ko",i=n.dataset.sourceLocale??"ko",a=(n.dataset.localePrefixes??"").split(",").map(y=>y.trim()).filter(y=>y.length>0),l=n.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",p=!1,w=null,T={current:fn()},L=()=>{p=!0,w&&(w._destructor(),w=null),delete n.dataset.graphReady};window.addCleanup(L);let C;try{C=gn(await fetchData)}catch(y){throw cn(e,"Graph could not load content index."),y}if(p)return;let G=Un(In(C),{localeId:o,sourceLocale:i,prefixes:a});r&&(r.textContent=l.replace("{n}",String(G.nodes.length)).replace("{m}",String(G.links.length)));let N=Kn(),P;try{P=await nt(N)}catch(y){throw cn(e,"Graph could not load. Check your network connection."),y}if(p)return;let x=null,v=null;if(N){try{x=(await import(Ln)).default??null}catch(y){console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",y),x=null}try{let y=await import(vn);v=y.UnrealBloomPass?new y.UnrealBloomPass:null}catch(y){console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",y),v=null}}if(!p&&(e.replaceChildren(),w=P(e),lt(w,G,T,{use3d:N,root:n,spriteText:x,bloomPass:v}),N&&!I())){let y=()=>{!w||typeof w.controls!="function"||(w.controls().autoRotate=!1)};e.addEventListener("pointerdown",y,{once:!0}),window.addCleanup(()=>e.removeEventListener("pointerdown",y))}}document.addEventListener("nav",()=>{ut()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = ".center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  background: var(--light);\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n.graph-landing__hero {\n  background: var(--light);\n  height: 100dvh;\n  max-width: 100%;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  width: 100%;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(6px);\n  background: color-mix(in srgb, var(--light) 82%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 0 0 8px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 0;\n  max-width: 240px;\n  padding: 16px;\n  pointer-events: auto;\n  position: absolute;\n  top: 0;\n  width: 240px;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem 1rem;\n  justify-content: flex-end;\n  max-width: min(28rem, 100% - 16rem);\n  padding: 1.25rem 1.5rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n}\n\n.graph-landing__counts {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n}\n\n.graph-landing__chip:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__chip:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  box-shadow: inset 0 -2px 0 0 var(--secondary);\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__section-label {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__text-btn,\n.graph-landing__nav-link,\n.graph-landing__locale,\n.graph-landing__filters-toggle {\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.3;\n  min-height: 32px;\n  padding: 0.2rem 0;\n  text-decoration: none;\n}\n\n.graph-landing__text-btn:hover,\n.graph-landing__text-btn:focus-visible,\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale:hover,\n.graph-landing__locale:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--secondary);\n  outline: none;\n}\n\n.graph-landing__text-btn:focus-visible,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link {\n  color: var(--dark);\n}\n\n.graph-landing__locales {\n  display: inline-flex;\n  flex-wrap: wrap;\n  gap: 0.45rem 0.55rem;\n}\n\n.graph-landing__locale--current {\n  color: var(--dark);\n  cursor: default;\n  font-weight: 600;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  max-height: 28vh;\n  overflow: auto;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__tag-count {\n  color: var(--gray);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--lightgray);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__spacing {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__pills {\n  border: 1px solid var(--lightgray);\n  border-radius: 999px;\n  display: inline-flex;\n  overflow: hidden;\n  width: fit-content;\n}\n\n.graph-landing__pill {\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.2;\n  min-height: 32px;\n  padding: 6px 10px;\n}\n\n.graph-landing__pill:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__pill:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: -2px;\n  z-index: 1;\n}\n\n.graph-landing__pill[aria-pressed=true] {\n  background: color-mix(in srgb, var(--secondary) 14%, transparent);\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__ghosts {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.graph-landing__ghost {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  gap: 6px;\n  line-height: 1.2;\n  min-height: 32px;\n  padding: 6px 8px;\n}\n\n.graph-landing__ghost svg {\n  flex-shrink: 0;\n}\n\n.graph-landing__ghost:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__ghost:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__ghost[aria-pressed=true] {\n  background: color-mix(in srgb, var(--secondary) 12%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--gray);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: var(--darkgray);\n}\n\n.graph-landing__dot--tag {\n  background: var(--tertiary);\n}\n\n.graph-landing__scroll {\n  align-items: center;\n  bottom: 1.25rem;\n  color: var(--gray);\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  left: 50%;\n  pointer-events: auto;\n  position: absolute;\n  text-decoration: none;\n  transform: translateX(-50%);\n}\n\n.graph-landing__scroll:hover,\n.graph-landing__scroll:focus-visible {\n  color: var(--secondary);\n  outline: none;\n}\n\n.graph-landing__scroll-label {\n  font-size: 12px;\n}\n\n.graph-landing__chevron {\n  border-right: 1px solid currentColor;\n  border-bottom: 1px solid currentColor;\n  display: block;\n  height: 7px;\n  transform: rotate(45deg);\n  width: 7px;\n}\n\n.graph-landing__body {\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  line-height: 1.5;\n  margin: 0 auto;\n  max-width: 40rem;\n  padding: 2rem 2rem 4rem;\n  width: min(40rem, 100% - 2.5rem);\n}\n\n.graph-landing__error {\n  align-items: center;\n  color: var(--gray);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing,\n:root[saved-theme=dark] .graph-landing__hero {\n  background: var(--light);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: color-mix(in srgb, var(--light) 82%, transparent);\n  border-color: var(--lightgray);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__rail {\n    border-radius: 0;\n    max-width: 100%;\n    padding: 8px 12px;\n    width: 100%;\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__section-label--tags {\n    display: none;\n  }\n  .graph-landing__filters-toggle {\n    display: inline-flex;\n    min-height: 44px;\n    padding: 8px;\n  }\n  .graph-landing__tag-list {\n    display: none;\n    max-height: 28vh;\n  }\n  .graph-landing__tags[data-open=true] .graph-landing__tag-list {\n    display: flex;\n  }\n  .graph-landing__utils {\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n  .graph-landing__top-right {\n    max-width: calc(100% - 1.5rem);\n    padding: 0.75rem 1rem;\n  }\n  .graph-landing__scroll {\n    bottom: 0.85rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .graph-landing__chevron {\n    animation: none;\n  }\n}";

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
      spacing: "\uB178\uB4DC \uAC04\uACA9",
      spacingTight: "\uC881\uAC8C",
      spacingNormal: "\uBCF4\uD1B5",
      spacingWide: "\uB113\uAC8C",
      articles: "\uAE00",
      about: "About",
      theme: "\uD14C\uB9C8",
      filtersToggle: "\uD544\uD130",
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
    spacing: "Spacing",
    spacingTight: "Tight",
    spacingNormal: "Mid",
    spacingWide: "Wide",
    articles: "Writing",
    about: "About",
    theme: "Theme",
    filtersToggle: "Filters",
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
              /* @__PURE__ */ u2("div", { class: "graph-landing__rail", children: [
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
                /* @__PURE__ */ u2("div", { class: "graph-landing__tags", children: [
                  /* @__PURE__ */ u2("p", { class: "graph-landing__section-label graph-landing__section-label--tags", children: copy.tags }),
                  /* @__PURE__ */ u2(
                    "button",
                    {
                      type: "button",
                      class: "graph-landing__filters-toggle",
                      "data-graph-tags-toggle": true,
                      "aria-expanded": "false",
                      children: copy.filtersToggle
                    }
                  ),
                  /* @__PURE__ */ u2("ul", { class: "graph-landing__tag-list", "data-graph-tags": true })
                ] }),
                /* @__PURE__ */ u2("div", { class: "graph-landing__utils", children: [
                  /* @__PURE__ */ u2("div", { class: "graph-landing__spacing", "data-graph-spacing-group": true, children: [
                    /* @__PURE__ */ u2("p", { class: "graph-landing__section-label", children: copy.spacing }),
                    /* @__PURE__ */ u2("div", { class: "graph-landing__pills", children: [
                      /* @__PURE__ */ u2(
                        "button",
                        {
                          type: "button",
                          class: "graph-landing__pill",
                          "data-graph-spacing": "tight",
                          "aria-pressed": "false",
                          children: copy.spacingTight
                        }
                      ),
                      /* @__PURE__ */ u2(
                        "button",
                        {
                          type: "button",
                          class: "graph-landing__pill",
                          "data-graph-spacing": "normal",
                          "aria-pressed": "true",
                          children: copy.spacingNormal
                        }
                      ),
                      /* @__PURE__ */ u2(
                        "button",
                        {
                          type: "button",
                          class: "graph-landing__pill",
                          "data-graph-spacing": "wide",
                          "aria-pressed": "false",
                          children: copy.spacingWide
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ u2("div", { class: "graph-landing__ghosts", children: [
                    /* @__PURE__ */ u2("button", { type: "button", class: "graph-landing__ghost", "data-graph-relayout": true, children: [
                      /* @__PURE__ */ u2("svg", { width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: [
                        /* @__PURE__ */ u2(
                          "path",
                          {
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "1.4",
                            "stroke-linecap": "round",
                            d: "M13 8A5 5 0 1 1 11.6 4.4"
                          }
                        ),
                        /* @__PURE__ */ u2("path", { fill: "currentColor", d: "M13.2 2.2v3.1h-3.1z" })
                      ] }),
                      /* @__PURE__ */ u2("span", { children: copy.relayout })
                    ] }),
                    /* @__PURE__ */ u2(
                      "button",
                      {
                        type: "button",
                        class: "graph-landing__ghost",
                        "data-graph-labels": true,
                        "data-label-show": copy.labelsShow,
                        "data-label-hide": copy.labelsHide,
                        "aria-pressed": "false",
                        children: [
                          /* @__PURE__ */ u2("svg", { width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ u2(
                            "path",
                            {
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "1.4",
                              "stroke-linecap": "round",
                              d: "M3 12.5 6.6 3.5h2.8L13 12.5M4.6 9.2h6.8"
                            }
                          ) }),
                          /* @__PURE__ */ u2("span", { "data-graph-labels-text": true, children: copy.labelsShow })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ u2("div", { class: "graph-landing__legend", "data-graph-legend": true, children: [
                    /* @__PURE__ */ u2("span", { class: "graph-landing__legend-item", children: [
                      /* @__PURE__ */ u2("span", { class: "graph-landing__dot graph-landing__dot--note", "aria-hidden": "true" }),
                      copy.notes
                    ] }),
                    /* @__PURE__ */ u2("span", { class: "graph-landing__legend-item", children: [
                      /* @__PURE__ */ u2("span", { class: "graph-landing__dot graph-landing__dot--tag", "aria-hidden": "true" }),
                      copy.tags
                    ] })
                  ] })
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
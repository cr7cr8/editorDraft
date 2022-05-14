"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MentionMenuItem = MentionMenuItem;
exports["default"] = MentionMenu;

var _react = require("react");

var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));

var _Chip = _interopRequireDefault(require("@mui/material/Chip"));

var _Stack = _interopRequireDefault(require("@mui/material/Stack"));

var _styles = require("@mui/material/styles");

var _EditorContextProvider = require("../EditorContextProvider");

var _multiavatar = _interopRequireDefault(require("@multiavatar/multiavatar"));

var _colors = require("@mui/material/colors");

var _excluded = ["tabIndex", "setShowing", "setTabName", "nameList", "insertMention", "blockType"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MentionMenu(_ref) {
  var tabIndex = _ref.tabIndex,
      setShowing = _ref.setShowing,
      setTabName = _ref.setTabName,
      nameList = _ref.nameList,
      insertMention = _ref.insertMention,
      blockType = _ref.blockType,
      props = _objectWithoutProperties(_ref, _excluded);

  var inTab = tabIndex % nameList.length;
  (0, _react.useEffect)(function () {
    setShowing(true);
    return function () {
      setShowing(false);
    };
  }, []);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      right = _useState2[0],
      setRight = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      opacity = _useState4[0],
      setOpacity = _useState4[1];

  var anchor = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var _anchor$current$getBo = anchor.current.getBoundingClientRect(),
        x = _anchor$current$getBo.x,
        width = _anchor$current$getBo.width;

    if (x + width + 50 > window.innerWidth) {
      setRight(1);
    }

    setOpacity(1);
  }, []);
  return /*#__PURE__*/React.createElement(_Stack["default"], {
    direction: "column",
    spacing: 0.2,
    contentEditable: false,
    suppressContentEditableWarning: true,
    ref: anchor,
    sx: _objectSpread({
      width: "fit-content",
      position: "absolute",
      bgcolor: "transparent",
      zIndex: 500,
      opacity: opacity
    }, Boolean(right) && {
      right: 0
    })
  }, nameList.map(function (name, index) {
    if (inTab === index) {
      setTabName(name);
    }

    var avatarString = (0, _multiavatar["default"])(name);
    avatarString = "data:image/svg+xml;base64," + btoa(avatarString);
    return /*#__PURE__*/React.createElement(MentionMenuItem, {
      key: index,
      name: name,
      index: index,
      inTab: inTab,
      insertMention: insertMention
    });
  }));
}

function MentionMenuItem(_ref2) {
  var name = _ref2.name,
      index = _ref2.index,
      inTab = _ref2.inTab,
      insertMention = _ref2.insertMention;
  var theme = (0, _styles.useTheme)();

  var _useContext = (0, _react.useContext)(_EditorContextProvider.EditorContext),
      peopleList = _useContext.peopleList,
      avatarPeopleList = _useContext.avatarPeopleList,
      downloadAvatarUrl = _useContext.downloadAvatarUrl,
      genAvatarLink = _useContext.genAvatarLink;

  var hasAvatar = avatarPeopleList.includes(name);
  var avatarString = hasAvatar ? genAvatarLink(downloadAvatarUrl, name) : "data:image/svg+xml;base64," + btoa((0, _multiavatar["default"])(name));
  var colorObj = theme.colorObj;
  var colorBgObj = theme.colorBgObj;
  return /*#__PURE__*/React.createElement(_Chip["default"], {
    variant: "filled",
    sx: _objectSpread({
      justifyContent: "flex-start",
      zIndex: 1000,
      backdropFilter: "blur(20px)",
      color: theme.palette.text.secondary,
      "&:hover": {
        color: theme.isLight ? colorObj[500] : colorObj[300],
        bgcolor: colorBgObj
      }
    }, inTab === index && {
      color: theme.isLight ? colorObj[500] : colorObj[300],
      bgcolor: colorBgObj
    }),
    key: index,
    clickable: true,
    onMouseDown: function onMouseDown() {
      insertMention(name);
    },
    avatar: /*#__PURE__*/React.createElement(_Avatar["default"], {
      alt: name,
      src: avatarString,
      sx: {
        "&.MuiAvatar-root.MuiChip-avatar": {
          width: theme.scaleSizeObj(1),
          height: theme.scaleSizeObj(1),
          transform: "scale(1.1)"
        }
      }
    }),
    label: name
  });
} // function ConditionalWrapper({ condition, wrapper, children }) {
//     return condition ? wrapper(children) : children;
// }
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = EmojiPanel;

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

var _material = require("@mui/material");

var _iconsMaterial = require("@mui/icons-material");

var _colors = require("@mui/material/colors");

var _reactDeviceDetect = require("react-device-detect");

var _EmojiConfig = _interopRequireWildcard(require("./EmojiConfig"));

var _system = require("@mui/system");

var _EditorContextProvider = require("../EditorContextProvider");

var _excluded = ["insertEmoji", "editorRef", "typeName"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function EmojiPanel(_ref) {
  var insertEmoji = _ref.insertEmoji,
      editorRef = _ref.editorRef,
      typeName = _ref.typeName,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = (0, _system.useTheme)();

  var _useContext = (0, _react.useContext)(_EditorContextProvider.EditorContext),
      editorState = _useContext.editorState,
      setEditorState = _useContext.setEditorState,
      sizeObj = _useContext.sizeObj;

  var _React$useState = _react["default"].useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget); //  if (typeName === "SimpleDraft"){

    setTimeout(function () {
      setEditorState(_draftJs.EditorState.forceSelection(editorState, editorState.getSelection()));
    }, 0); //   }
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
    setTimeout(function () {
      //     const a = EditorState.forceSelection(editorState, editorState.getSelection())
      setEditorState(_draftJs.EditorState.forceSelection(editorState, editorState.getSelection()));
    }, 0);
  };

  var open = Boolean(anchorEl);
  var id = open ? 'simple-popover' : undefined;

  var _React$useState3 = _react["default"].useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      tabValue = _React$useState4[0],
      setTabValue = _React$useState4[1];

  var _useState = (0, _react.useState)(_EmojiConfig["default"]),
      _useState2 = _slicedToArray(_useState, 2),
      dataArr = _useState2[0],
      setDataArr = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      emojiIndex = _useState4[0],
      setEmojiIndex = _useState4[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    size: "small",
    onClick: handleClick,
    sx: _objectSpread({}, typeName !== "SimpleDraft" && {
      alignSelf: "right"
    })
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.EmojiEmotionsOutlined, {
    fontSize: typeName === "SimpleDraft" ? "medium" : "large"
  })), /*#__PURE__*/_react["default"].createElement(_material.Popover, {
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: handleClose,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    sx: {
      "& .MuiPaper-root": {
        height: "300px",
        width: _reactDeviceDetect.isChrome ? "28rem" : "33rem",
        flexDirection: "column",
        display: "flex",
        overflow: "hidden"
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      width: "100%",
      height: "10px",
      display: "block",
      flexGrow: 1,
      wordBreak: "break-all",
      overflow: "auto"
    }
  }, dataArr.map(function (item, index) {
    if (index !== emojiIndex) {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
        key: index
      });
    }

    var match;
    var arr = [];

    while (match = _EmojiConfig.emojiRegex.exec(item.symbolStr)) {
      var emoji = match[0];
      arr.push(emoji);
    }

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: index
    }, arr.map(function (item, index) {
      return /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
        key: index,
        sx: {
          fontSize: "2rem"
        },
        onMouseDown: function onMouseDown() {
          insertEmoji(item);
        } // className={allClassNames}
        // onClick={function () {
        //   if (index > 0) {
        //     setDataArr(pre => {
        //       pre[0].symbolStr = pre[0].symbolStr.replace(item + " ", "")
        //       pre[0].symbolStr = item + " " + pre[0].symbolStr
        //       if (ctx) { setEmojiCtxStr(pre[0].symbolStr) }
        //       return pre
        //     })
        //   }
        //   insertEmoji(item)
        // }}

      }, item);
    }));
  })), /*#__PURE__*/_react["default"].createElement(_material.Divider, null), /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    direction: "row",
    style: {}
  }, dataArr.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      key: index,
      sx: {
        fontSize: "2rem",
        width: "2.5rem",
        height: "2.5rem"
      },
      onClick: function onClick() {
        setEmojiIndex(index);
      }
    }, item.category);
  }))));
}
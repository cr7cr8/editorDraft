"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = EditingBlock;

var _react = _interopRequireWildcard(require("react"));

var _EditorContextProvider = require("../EditorContextProvider");

var _material = require("@mui/material");

var _iconsMaterial = require("@mui/icons-material");

var _styles = require("@mui/material/styles");

var _excluded = ["VoteBlock", "readOnly", "setReadOnly", "markingImageBlock", "markingVoteBlock", "children"];

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

function EditingBlock(_ref) {
  var VoteBlock = _ref.VoteBlock,
      readOnly = _ref.readOnly,
      setReadOnly = _ref.setReadOnly,
      markingImageBlock = _ref.markingImageBlock,
      markingVoteBlock = _ref.markingVoteBlock,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useTransition = (0, _react.useTransition)(),
      _useTransition2 = _slicedToArray(_useTransition, 2),
      isPending = _useTransition2[0],
      startTransition = _useTransition2[1];

  var _useContext = (0, _react.useContext)(_EditorContextProvider.EditorContext),
      currentBlockKey = _useContext.currentBlockKey,
      editorState = _useContext.editorState,
      imageBlockNum = _useContext.imageBlockNum,
      setEditorState = _useContext.setEditorState,
      imageObj = _useContext.imageObj,
      setImageObj = _useContext.setImageObj;

  var hasVoteBlock = Boolean(editorState.getCurrentContent().getBlocksAsArray().filter(function (block) {
    return block.getType() === "voteBlock";
  }).length);
  var selection = editorState.getSelection();

  var _editorState$getSelec = editorState.getSelection().toArray(),
      _editorState$getSelec2 = _slicedToArray(_editorState$getSelec, 6),
      anchorKey = _editorState$getSelec2[0],
      anchorOffset = _editorState$getSelec2[1],
      focusKey = _editorState$getSelec2[2],
      focusOffset = _editorState$getSelec2[3],
      isBackward = _editorState$getSelec2[4],
      hasfocus = _editorState$getSelec2[5];

  var isCollapsed = selection.isCollapsed();
  var block = editorState.getCurrentContent().getBlockForKey(currentBlockKey); //.getText();

  var currentBlockText = block && block.getText();
  var currentBlockType = block && block.getType();
  var theme = (0, _styles.useTheme)();
  var colorObj = theme.colorObj;
  var colorBgObj = theme.colorBgObj;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children.map(function (block) {
    var blockKey = block.key;
    var blockType = editorState.getCurrentContent().getBlockForKey(block.key).getType();
    var blockData = editorState.getCurrentContent().getBlockForKey(block.key).getData().toObject();
    var isCurrentRow = blockKey === currentBlockKey && hasfocus && isCollapsed;

    if (blockType === "imageBlock") {
      return /*#__PURE__*/_react["default"].createElement(_material.Box, {
        key: blockKey,
        sx: {
          bgcolor: colorBgObj,
          "& + &": {
            paddingTop: "2px"
          }
        }
      }, block);
    } else if (blockType === "voteBlock") {
      return /*#__PURE__*/_react["default"].createElement(_material.Box, {
        key: blockKey,
        sx: {
          bgcolor: colorBgObj,
          "& + &": {
            paddingTop: "2px"
          }
        }
      }, block);
    }

    return /*#__PURE__*/_react["default"].createElement(_material.Box, {
      key: blockKey,
      style: {},
      sx: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, blockData.isSmallFont && {
        fontSize: theme.scaleSizeObj(0.8)
      }), blockType === "unstyled" && {
        "& > div": {
          textAlign: "left",
          width: "100%"
        }
      }), blockType === "centerBlock" && {
        "& > div": {
          textAlign: "center",
          width: "100%"
        }
      }), blockType === "rightBlock" && {
        "& > div": {
          textAlign: "right",
          width: "100%"
        }
      }), {}, {
        paddingLeft: "2px",
        paddingRight: "2px",
        // boxShadow: isCurrentRow ? 3 : 0,
        // transform: isCurrentRow ? `scale(1.03)` : `scale(1)`,
        // ...isCurrentRow && { backgroundColor: theme.palette.background.default },
        // ...isCurrentRow && (currentBlockType !== "unstyled") && { transform: `scale(1)` },
        transition: "box-shadow, background-color, transform, 300ms",
        position: "relative",
        zIndex: isCurrentRow ? 100 : 0,
        display: "flex",
        alignItems: "center" // ...(theme.palette.mode === "dark") && isCurrentRow && {
        //     backgroundColor: "rgba(10, 10, 10, 1)"
        // }

      })
    }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      sx: _objectSpread(_objectSpread({
        fontSize: "2rem",
        width: "2.5rem",
        height: "2.5rem",
        position: "absolute"
      }, blockType === "rightBlock" ? {
        left: 0
      } : {
        right: 0
      }), {}, {
        opacity: isCurrentRow && !Boolean(currentBlockText) && imageBlockNum < 3 && blockType !== "imageBlock" && blockType !== "voteBlock" ? 1 : 0,
        transform: isCurrentRow && !Boolean(currentBlockText) && imageBlockNum < 3 && blockType !== "imageBlock" && blockType !== "voteBlock" ? "scale(1)" : "scale(0)",
        transition: "opacity, 300ms"
      }),
      size: "small",
      contentEditable: false,
      suppressContentEditableWarning: true,
      onClick: function onClick() {
        //  startTransition(function (){
        //      markingImageBlock(blockKey)
        //   })
        setTimeout(function () {
          markingImageBlock(blockKey);
        }, 0);
      }
    }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.ImageOutlined, {
      fontSize: "large"
    })), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      sx: _objectSpread(_objectSpread({
        fontSize: "2rem",
        width: "2.5rem",
        height: "2.5rem",
        position: "absolute"
      }, blockType === "rightBlock" ? {
        left: 0
      } : {
        right: 0
      }), {}, {
        opacity: isCurrentRow && !Boolean(currentBlockText) && blockType !== "imageBlock" && blockType !== "voteBlock" ? 1 : 0,
        transform: isCurrentRow && !Boolean(currentBlockText) && blockType !== "imageBlock" && blockType !== "voteBlock" ? "scale(1) translateX(".concat(blockType === "rightBlock" ? "100%" : "-100%", ")") : "scale(0)",
        transition: "opacity, 300ms"
      }, hasVoteBlock && {
        transform: "scale(0)"
      }),
      size: "small",
      contentEditable: false,
      suppressContentEditableWarning: true,
      onClick: function onClick() {
        markingVoteBlock(blockKey);
      }
    }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.StackedBarChart, {
      fontSize: "large",
      sx: {
        transform: "rotate(90deg) scaleX(-1)"
      }
    })), block);
  }));
}
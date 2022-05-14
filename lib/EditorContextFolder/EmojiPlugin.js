"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createEmojiPlugin;

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

var _EmojiPanel = _interopRequireDefault(require("./EmojiPanel"));

var _excluded = ["editorRef", "typeName"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function createEmojiPlugin() {
  var editorState = null;
  var setEditorState = null;
  var newContent = null;

  function emojiStrategy(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(function (character) {
      var entityKey = character.getEntity();
      return entityKey !== null && contentState.getEntity(entityKey).getType() === "EMOJI";
    }, callback);
  }

  ;

  function taggingEmoji() {
    var oldSelection = editorState.getSelection();
    newContent = editorState.getCurrentContent();
    var newSelection = editorState.getSelection();
    editorState = _draftJs.EditorState.push(editorState, newContent, "apply-entity");
    editorState = _draftJs.EditorState.acceptSelection(editorState, oldSelection);
    return editorState;
  }

  function Emoji(props) {
    return props.children;
  }

  function insertEmoji(text) {
    var _editorState$getSelec = editorState.getSelection().toArray(),
        _editorState$getSelec2 = _slicedToArray(_editorState$getSelec, 6),
        anchorKey = _editorState$getSelec2[0],
        anchorOffset = _editorState$getSelec2[1],
        focusKey = _editorState$getSelec2[2],
        focusOffset = _editorState$getSelec2[3],
        isBackward = _editorState$getSelec2[4],
        hasfocus = _editorState$getSelec2[5];

    var _ref = [!isBackward ? anchorKey : focusKey, !isBackward ? anchorOffset : focusOffset, isBackward ? anchorKey : focusKey, isBackward ? anchorOffset : focusOffset],
        anchorStartKey = _ref[0],
        anchorStartOffset = _ref[1],
        anchorFocusKey = _ref[2],
        anchorFocusOffset = _ref[3],
        isAnchorBackward = _ref[4],
        isAnchorFocused = _ref[5];

    var newContent = _draftJs.Modifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), text);

    var newSelection = editorState.getSelection().merge({
      anchorKey: anchorStartKey,
      anchorOffset: anchorStartOffset + text.length,
      focusKey: anchorStartKey,
      focusOffset: anchorStartOffset + text.length,
      isBackward: false,
      hasFocus: true
    });
    editorState = _draftJs.EditorState.push(editorState, newContent, "insert-characters");
    editorState = _draftJs.EditorState.acceptSelection(editorState, newSelection);
    setEditorState(editorState); // setTimeout(() => {
    //   editorState = EditorState.push(editorState, newContent, "insert-characters");
    //   editorState = EditorState.forceSelection(editorState, newSelection)
    //   setEditorState(editorState)
    // }, 0);
  }

  function setFocus(editorState) {
    setTimeout(function () {
      editorState = _draftJs.EditorState.forceSelection(editorState, editorState.getSelection());
      setEditorState(editorState);
    }, 0);
  }

  function EmojiComp(_ref2) {
    var editorRef = _ref2.editorRef,
        typeName = _ref2.typeName,
        props = _objectWithoutProperties(_ref2, _excluded);

    return /*#__PURE__*/_react["default"].createElement(_EmojiPanel["default"], {
      insertEmoji: insertEmoji,
      editorRef: editorRef,
      setFocus: setFocus,
      typeName: typeName
    });
  }

  return {
    emojiPlugin: {
      onChange: function onChange(newState, _ref3) {
        var setEditorState_ = _ref3.setEditorState;
        editorState = newState;
        setEditorState = setEditorState_;
        newContent = newState.getCurrentContent(); //  editorState = taggingEmoji()

        return editorState;
      },
      decorators: [{
        strategy: emojiStrategy,
        component: Emoji
      }]
    },
    EmojiComp: EmojiComp
  };
}
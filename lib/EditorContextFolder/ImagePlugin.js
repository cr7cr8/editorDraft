"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createImagePlugin;

var _draftJs = require("draft-js");

var _ImageBlock = _interopRequireDefault(require("./ImageBlock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createImagePlugin() {
  var editorState = null;
  var setEditorState = null;
  var newContent = null;

  function markingImageBlock(blockKey) {
    var _newSelection$merge;

    var isDeleting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var newSelection = _draftJs.SelectionState.createEmpty(blockKey);

    newSelection = newSelection.merge((_newSelection$merge = {
      focusKey: blockKey,
      focusOffset: 0,
      anchorOffset: blockKey
    }, _defineProperty(_newSelection$merge, "anchorOffset", 0), _defineProperty(_newSelection$merge, "hasFocus", false), _newSelection$merge));

    var newContent = _draftJs.Modifier.setBlockType(editorState.getCurrentContent(), newSelection, isDeleting ? "unstyled" : "imageBlock");

    editorState = _draftJs.EditorState.push(editorState, newContent, 'change-block-type'); // EditorState.forceSelection(externalES, newSelection)

    if (isDeleting) {
      setTimeout(function () {
        setEditorState(_draftJs.EditorState.forceSelection(editorState, editorState.getSelection()));
      }, 0);
    } else {
      //alert("cccaaa")
      // setTimeout(() => {
      //   //  alert("cccaaabbb")
      //     setEditorState(EditorState.forceSelection(editorState, editorState.getSelection()))
      // }, 0);
      return setEditorState(editorState);
    }
  }

  ;
  return {
    imagePlugin: {
      onChange: function onChange(newState, _ref) {
        var setEditorState_ = _ref.setEditorState;
        editorState = newState;
        setEditorState = setEditorState_;
        newContent = newState.getCurrentContent(); //  editorState = taggingEmoji()

        return editorState;
      }
    },
    markingImageBlock: markingImageBlock,
    ImageBlock: _ImageBlock["default"]
  };
}
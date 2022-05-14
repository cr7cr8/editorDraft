"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createLinkPlugin;

var _draftJs = require("draft-js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function genRandom() {
  var random = (Math.random() * 10000).toFixed(0);

  while (random.length < 4) {
    random = "0" + random;
  }

  return "-" + random;
}

function createLinkPlugin() {
  var editorState = null;
  var setEditorState = null;
  var newContent = null;
  var entityKeyObj = {};
  var tagStartPos = 0;
  var tagEndPos = 0;

  function conditionWrap(_ref) {
    var editorState = _ref.editorState,
        _ref$searchAllBlock = _ref.searchAllBlock,
        searchAllBlock = _ref$searchAllBlock === void 0 ? true : _ref$searchAllBlock;
    return searchAllBlock ? editorState.getCurrentContent().getBlockMap() : [editorState.getCurrentContent().getBlockForKey(editorState.getSelection().getStartKey())];
  }

  function taggingLink() {
    var random = genRandom();

    var _editorState$getSelec = editorState.getSelection().toArray(),
        _editorState$getSelec2 = _slicedToArray(_editorState$getSelec, 6),
        anchorKey = _editorState$getSelec2[0],
        anchorOffset = _editorState$getSelec2[1],
        focusKey = _editorState$getSelec2[2],
        focusOffset = _editorState$getSelec2[3],
        isBackward = _editorState$getSelec2[4],
        hasfocus = _editorState$getSelec2[5];

    var _ref2 = [!isBackward ? anchorKey : focusKey, !isBackward ? anchorOffset : focusOffset, isBackward ? anchorKey : focusKey, isBackward ? anchorOffset : focusOffset],
        anchorStartKey = _ref2[0],
        anchorStartOffset = _ref2[1],
        anchorFocusKey = _ref2[2],
        anchorFocusOffset = _ref2[3],
        isAnchorBackward = _ref2[4],
        isAnchorFocused = _ref2[5];
    var regx = /\s([a-zA-Z]{1,10}:\/\/)(([a-zA-Z0-9-_]+\.?)+(:\d{0,6})?)(\/[^\s\r\n\/]+){0,7}(\/)?/g;
    var oldSelection = editorState.getSelection();
    var newContent = editorState.getCurrentContent();
    var newSelection = editorState.getSelection();
    conditionWrap({
      editorState: editorState,
      searchAllBlock: true
    }).forEach(function (block) {
      var blockKey = block.getKey();
      var blockText = block.getText();
      var metaArr = block.getCharacterList();
      metaArr.forEach(function (item, index) {
        var styleArr = item.getStyle().toArray();

        if (styleArr && styleArr.length > 0) {
          styleArr.filter(function (item) {
            return item.indexOf("linkTag") >= 0;
          }).forEach(function (item) {
            newSelection = newSelection.merge({
              anchorKey: blockKey,
              anchorOffset: index,
              focusKey: blockKey,
              focusOffset: index + 1,
              isBackward: false,
              hasFocus: false
            });
            newContent = _draftJs.Modifier.removeInlineStyle(newContent, newSelection, item);
            newContent = _draftJs.Modifier.removeInlineStyle(newContent, newSelection, item);
          }); //   if (styleArr.includes("linkTagOn") || styleArr.includes("linkTagOff")) {
          //     newSelection = newSelection.merge({
          //       anchorKey: blockKey,
          //       anchorOffset: index,
          //       focusKey: blockKey,
          //       focusOffset: index + 1,
          //       isBackward: false,
          //       hasFocus: false,
          //     })
          //     newContent = Modifier.removeInlineStyle(newContent, newSelection, "linkTagOn")
          //     newContent = Modifier.removeInlineStyle(newContent, newSelection, "linkTagOff")
          //   }
        }
      });
      var matchArr;

      while ((matchArr = regx.exec(blockText)) !== null) {
        var start = matchArr.index;
        var end = matchArr.index + matchArr[0].length;
        var contentLenth = end - start;
        var contentFocusAt = anchorFocusOffset - start;
        var mentionOn = hasfocus && blockKey === anchorFocusKey && contentFocusAt > 0 && contentFocusAt <= contentLenth;
        var mentionOff = !mentionOn;

        if (mentionOn) {
          tagStartPos = start;
          tagEndPos = end;
          newSelection = newSelection.merge({
            anchorKey: blockKey,
            focusKey: blockKey,
            anchorOffset: start + 1,
            focusOffset: end,
            //  start + 2,
            isBackward: false,
            hasFocus: false
          });
          newContent = _draftJs.Modifier.applyInlineStyle(newContent, newSelection, "linkTagOn" + random);
        } else if (mentionOff) {
          tagStartPos = start;
          tagEndPos = end;
          newSelection = newSelection.merge({
            anchorKey: blockKey,
            focusKey: blockKey,
            anchorOffset: start + 1,
            focusOffset: end,
            //start + 2,
            isBackward: false,
            hasFocus: false
          });
          newContent = _draftJs.Modifier.applyInlineStyle(newContent, newSelection, "linkTagOff" + random);
        }
      }
    });
    editorState = _draftJs.EditorState.push(editorState, newContent, "change-inline-style");
    editorState = _draftJs.EditorState.acceptSelection(editorState, oldSelection);
    return editorState;
  }

  return {
    linkPlugin: {
      onChange: function onChange(newState, _ref3) {
        var setEditorState_ = _ref3.setEditorState;
        //   alert("Ff")
        editorState = newState;
        setEditorState = setEditorState_;
        newContent = newState.getCurrentContent();
        editorState = taggingLink();
        return editorState;
      }
    },
    taggingLink: taggingLink
  };
}
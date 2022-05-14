"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DraftEditor;
exports.toPreHtml = toPreHtml;

var _react = _interopRequireWildcard(require("react"));

var _draftJsExportHtml = require("draft-js-export-html");

var _draftJs = require("draft-js");

var _NoSsr = _interopRequireDefault(require("@mui/material/NoSsr"));

var _material = require("@mui/material");

var _editor = _interopRequireDefault(require("@draft-js-plugins/editor"));

var _immutable = _interopRequireDefault(require("immutable"));

var _EditorContextProvider = require("../EditorContextProvider");

var _reactDeviceDetect = require("react-device-detect");

var _iconsMaterial = require("@mui/icons-material");

var _styles = require("@mui/material/styles");

var _colors = require("@mui/material/colors");

var _EditingBlock = _interopRequireDefault(require("./EditingBlock"));

var _EmojiPlugin = _interopRequireDefault(require("./EmojiPlugin"));

var _ImagePlugin = _interopRequireDefault(require("./ImagePlugin"));

var _LinkPlugin = _interopRequireDefault(require("./LinkPlugin"));

var _MentionPlugin = _interopRequireDefault(require("./MentionPlugin"));

var _PersonPlugin = _interopRequireDefault(require("./PersonPlugin"));

var _VotePlugin = _interopRequireDefault(require("./VotePlugin"));

var _excluded = ["getEditorState", "setEditorState"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _createEmojiPlugin = (0, _EmojiPlugin["default"])(),
    emojiPlugin = _createEmojiPlugin.emojiPlugin,
    EmojiComp = _createEmojiPlugin.EmojiComp;

var _createImagePlugin = (0, _ImagePlugin["default"])(),
    imagePlugin = _createImagePlugin.imagePlugin,
    markingImageBlock = _createImagePlugin.markingImageBlock,
    ImageBlock = _createImagePlugin.ImageBlock;

var _createLinkPlugin = (0, _LinkPlugin["default"])(),
    linkPlugin = _createLinkPlugin.linkPlugin,
    taggingLink = _createLinkPlugin.taggingLink;

var _createVotePlugin = (0, _VotePlugin["default"])(),
    votePlugin = _createVotePlugin.votePlugin,
    markingVoteBlock = _createVotePlugin.markingVoteBlock,
    VoteBlock = _createVotePlugin.VoteBlock;

var _createMentionPlugin = (0, _MentionPlugin["default"])(),
    mentionPlugin = _createMentionPlugin.mentionPlugin,
    taggingMention = _createMentionPlugin.taggingMention,
    checkShowing = _createMentionPlugin.checkShowing;

var _createPersonPlugin = (0, _PersonPlugin["default"])(),
    personPlugin = _createPersonPlugin.personPlugin;

var hasCommandModifier = _draftJs.KeyBindingUtil.hasCommandModifier;

function DraftEditor() {
  var _useContext = (0, _react.useContext)(_EditorContextProvider.EditorContext),
      editorState = _useContext.editorState,
      setEditorState = _useContext.setEditorState,
      currentBlockKey = _useContext.currentBlockKey,
      setCurrentBlockKey = _useContext.setCurrentBlockKey,
      voteArr = _useContext.voteArr,
      voteTopic = _useContext.voteTopic,
      pollDuration = _useContext.pollDuration,
      voteId = _useContext.voteId,
      imageObj = _useContext.imageObj,
      imageBlockNum = _useContext.imageBlockNum,
      onChange = _useContext.onChange,
      onSubmit = _useContext.onSubmit,
      clearState = _useContext.clearState;

  var theme = (0, _styles.useTheme)();
  var colorObj = theme.colorObj;
  var colorBgObj = theme.colorBgObj;
  var colorArr = theme.colorArr;
  var editorRef = (0, _react.useRef)();
  var specialBackSpace = (0, _react.useRef)(false);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      readOnly = _useState2[0],
      setReadOnly = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      autoFocused = _useState4[0],
      setAutoFocused = _useState4[1];

  (0, _react.useEffect)(function () {
    setTimeout(function () {
      if (!autoFocused) {
        setAutoFocused(true);
        setEditorState(_draftJs.EditorState.forceSelection(editorState, editorState.getSelection()));
      }
    }, 50);
  }, [editorState, autoFocused]);
  (0, _react.useEffect)(function () {
    setEditorState(taggingLink()); // //setEditorState(EditorState.forceSelection(editorState, editorState.getSelection()))
    // document.querySelectorAll("[style*='--mylinkcolor']").forEach(element => {
    //   element.style.setProperty("--mylinkcolor", theme.isLight ? colorObj[500] : colorObj[300])
    // })
  }, [colorObj]);

  var _useState5 = (0, _react.useState)(3),
      _useState6 = _slicedToArray(_useState5, 2),
      shadowValue = _useState6[0],
      setShadowValue = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      disableSubmit = _useState8[0],
      setDisableSubmit = _useState8[1];

  (0, _react.useEffect)(function () {
    onChange && setTimeout(function () {
      var preHtml = toPreHtml({
        editorState: editorState,
        theme: theme,
        voteArr: voteArr,
        voteTopic: voteTopic,
        pollDuration: pollDuration,
        voteId: voteId,
        imageObj: imageObj,
        imageBlockNum: imageBlockNum
      });
      var preHtmlObj = {
        _id: "test___test",
        content: preHtml,
        ownerName: "Bob Wells",
        postDate: new Date()
      };
      onChange(preHtmlObj);
    }, 0);
  });

  var _useState9 = (0, _react.useState)(true),
      _useState10 = _slicedToArray(_useState9, 2),
      colorIn = _useState10[0],
      setColorIn = _useState10[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.Paper, {
    id: "frame-editor" //  ref={frameRef}
    ,
    style: {
      position: "relative",
      wordBreak: "break-all" //top: "5vh"
      //  minHeight: "8rem"

    },
    onClick: function onClick() {// setTimeout(function () {
      //   const es = EditorState.forceSelection(editorState, editorState.getSelection())
      //   setEditorState(es)
      // }, 0)
    },
    sx: {
      //  fontSize: theme.sizeObj,
      bgcolor: 'background.default',
      boxShadow: shadowValue
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      position: "sticky",
      top: 0,
      justifyContent: "space-between",
      zIndex: 600,
      display: "flex",
      backdropFilter: "blur(20px)",
      flexDirection: "column",
      width: "100%",
      // bgcolor: theme.isLight ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)",
      bgcolor: colorBgObj // bgcolor:"background.default",

    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, null, /*#__PURE__*/_react["default"].createElement(EmojiComp, {
    editorRef: editorRef
  }), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    size: "small",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      var blockType = editorState.getCurrentContent().getBlockForKey(currentBlockKey).getType();

      if (blockType === "imageBlock") {
        return;
      }

      var data = editorState.getCurrentContent().getBlockForKey(currentBlockKey).getData().toObject();

      var newContent = _draftJs.Modifier.setBlockData(editorState.getCurrentContent(), _draftJs.SelectionState.createEmpty(currentBlockKey), //  editorState.getSelection(), // SelectionState.createEmpty(currentBlockKey),
      _immutable["default"].Map({
        isSmallFont: !Boolean(data.isSmallFont)
      }));

      var es = _draftJs.EditorState.push(editorState, newContent, 'change-block-data');

      setEditorState(es);
    }
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.FormatSize, {
    fontSize: "large"
  })), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    size: "small",
    onClick: function onClick() {
      var es = _draftJs.RichUtils.toggleBlockType(editorState, // write type to editorState
      "unstyled");

      setTimeout(function () {
        setEditorState(_draftJs.EditorState.forceSelection(es, es.getSelection()));
      }, 0);
    }
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.FormatAlignLeft, {
    fontSize: "large"
  })), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    size: "small",
    onClick: function onClick() {
      var es = _draftJs.RichUtils.toggleBlockType(editorState, // write type to editorState
      "centerBlock");

      setTimeout(function () {
        setEditorState(_draftJs.EditorState.forceSelection(es, es.getSelection()));
      }, 0);
    }
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.FormatAlignCenter, {
    fontSize: "large"
  })), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    size: "small",
    onClick: function onClick() {
      var es = _draftJs.RichUtils.toggleBlockType(editorState, // write type to editorState
      "rightBlock");

      setTimeout(function () {
        setEditorState(_draftJs.EditorState.forceSelection(es, es.getSelection()));
      }, 0);
    }
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.FormatAlignRight, {
    fontSize: "large"
  })), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    size: "small",
    onClick: function onClick() {
      setEditorState(addEmptyBlock(editorState)); // const es = RichUtils.toggleBlockType(
      //   editorState, // write type to editorState
      //   "rightBlock"
      // )
      // setTimeout(() => {
      //   setEditorState(EditorState.forceSelection(es, es.getSelection()))
      // }, 0);
    }
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.HorizontalSplitOutlined, {
    fontSize: "large"
  })), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    size: "small",
    onClick: function onClick() {
      setColorIn(function (pre) {
        return !pre;
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.ColorLensOutlined, {
    fontSize: "large"
  }))), /*#__PURE__*/_react["default"].createElement(_material.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Switch, {
    sx: {
      position: "absolute",
      right: -10
    },
    checked: !theme.isLight,
    onChange: function onChange(event) {
      event.target.checked ? theme.setMode("dark") : theme.setMode("light");
    }
  }))), /*#__PURE__*/_react["default"].createElement(_material.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Collapse, {
    "in": colorIn,
    unmountOnExit: true
  }, colorArr.map(function (colorItem, index) {
    return /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      key: index,
      size: "small",
      onClick: function onClick() {
        theme.setColorObj(index);
      }
    }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.Circle, {
      fontSize: "large",
      sx: {
        color: theme.isLight ? colorItem[500] : colorItem[300]
      }
    }));
  })))), /*#__PURE__*/_react["default"].createElement(_editor["default"], {
    editorKey: (0, _react.useId)(),
    readOnly: readOnly,
    editorState: editorState,
    ref: function ref(element) {
      editorRef.current = element;
    },
    onFocus: function onFocus() {
      setShadowValue(10);
    },
    onBlur: function onBlur() {
      setShadowValue(3);
    },
    onChange: function onChange(newState) {
      newState.getCurrentContent();
      var selection = newState.getSelection();
      var isCollapsed = selection.isCollapsed();
      var startKey = selection.getStartKey();

      if (specialBackSpace.current) {
        var newContentState = _draftJs.Modifier.replaceText(newState.getCurrentContent(), newState.getSelection(), "");

        newState = _draftJs.EditorState.push(newState, newContentState, "insert-characters");
        specialBackSpace.current = false;
      }

      isCollapsed && setCurrentBlockKey(startKey);
      return setEditorState(newState);
    },
    plugins: [emojiPlugin, imagePlugin, linkPlugin, votePlugin, mentionPlugin, personPlugin],
    customStyleFn: function customStyleFn(style, block) {
      var styleNameArr = style.toArray();
      var styleObj = {};
      styleNameArr.forEach(function (item) {
        if (item.indexOf("linkTagOn") >= 0) {
          // styleObj.color = theme.isLight ? colorObj[500] : colorObj[300]
          styleObj.textDecoration = "underline";
          styleObj["--mylinkcolor"] = theme.isLight ? colorObj[500] : colorObj[300];
          styleObj["color"] = "var(--mylinkcolor)";
          styleObj["transition"] = "all 1000ms";
        }

        if (item.indexOf("linkTagOff") >= 0) {
          //   styleObj.color = theme.isLight ? colorObj[500] : colorObj[300]
          styleObj["--mylinkcolor"] = theme.isLight ? colorObj[500] : colorObj[300];
          styleObj["color"] = "var(--mylinkcolor)";
          styleObj["transition"] = "all 1000ms";
        }
      });

      if (styleNameArr.length > 0) {
        return styleObj;
      }
    },
    blockRenderMap: _immutable["default"].Map({
      "unstyled": {
        element: "div",
        wrapper: /*#__PURE__*/_react["default"].createElement(_EditingBlock["default"], {
          editorRef: editorRef,
          markingImageBlock: markingImageBlock,
          markingVoteBlock: markingVoteBlock,
          VoteBlock: VoteBlock,
          readOnly: readOnly,
          setReadOnly: setReadOnly
        })
      }
    }),
    blockRendererFn: function blockRendererFn(block) {
      var text = block.getText();
      var data = block.getData().toObject();
      var type = block.getType();
      var blockKey = block.getKey();
      var selection = editorState.getSelection();

      if (type === "imageBlock") {
        return {
          component: ImageBlock,
          editable: false,
          props: {
            blockKey: blockKey,
            markingImageBlock: markingImageBlock
          }
        };
      } else if (type === "voteBlock") {
        return {
          component: VoteBlock,
          editable: false,
          props: {
            blockKey: blockKey,
            markingVoteBlock: markingVoteBlock,
            readOnly: readOnly,
            setReadOnly: setReadOnly
          }
        };
      }
    },
    keyBindingFn: function keyBindingFn(e, _ref) {
      var getEditorState = _ref.getEditorState,
          setEditorState = _ref.setEditorState,
          obj = _objectWithoutProperties(_ref, _excluded);

      //return undefined to carry on
      var editorState = getEditorState();
      var selection = editorState.getSelection();
      var startKey = selection.getStartKey();
      var startOffset = selection.getStartOffset();
      var endKey = selection.getEndKey();
      var endOffset = selection.getEndOffset();
      var anchorKey = selection.getAnchorKey();
      var anchorOffset = selection.getAnchorOffset();
      var focusKey = selection.getFocusKey();
      var focusOffset = selection.getFocusOffset();
      var isCollapsed = selection.isCollapsed();
      var isInOrder = !selection.getIsBackward();
      var hasFocus = selection.getHasFocus(); // console.log(startKey, startOffset, endKey, endOffset, anchorKey, anchorOffset, focusKey, focusOffset, isCollapsed, isInOrder, hasFocus)

      var contentState = editorState.getCurrentContent();
      var allBlocks = contentState.getBlockMap();
      var block = contentState.getBlockForKey(startKey);
      var blockText = block.getText();
      var keyBefore = contentState.getKeyBefore(startKey);
      var blockBefore = contentState.getBlockBefore(startKey);
      var firstBlockKey = allBlocks.slice(0, 1).toArray().shift().getKey();

      if (e.keyCode === 8 && isCollapsed && blockText.length === 0 && startOffset === 0 && startKey !== firstBlockKey) {
        var newContentState = _draftJs.Modifier.replaceText(contentState, selection, "#");

        var es = _draftJs.EditorState.push(editorState, newContentState, "insert-characters");

        es = deleteBlock2(es, startKey, setEditorState);
        var newSelection = es.getSelection();
        newSelection = newSelection.merge({
          anchorOffset: newSelection.getAnchorOffset() + 0,
          //hilight +0   ,not hilight +1
          focusOffset: newSelection.getFocusOffset() + 1
        });
        es = _draftJs.EditorState.forceSelection(es, newSelection);
        specialBackSpace.current = true;
        setCurrentBlockKey(es.getSelection().getStartKey());
        setEditorState(es);
        return "dummy";
      } else if (e.keyCode === 8 && isCollapsed && startOffset === 0 && startKey !== firstBlockKey) {
        deleteBlock1(editorState, startKey, setEditorState);
        return "done";
      } else if (checkShowing() && e.keyCode === 38) {
        return undefined;
      } else if (checkShowing() && e.keyCode === 40) {
        return undefined;
      } // if ((block.getType() === "imageBlock")) {
      //   return "cancel-delete"
      // }
      else if (e.shiftKey || hasCommandModifier(e) || e.altKey) {
        return (0, _draftJs.getDefaultKeyBinding)(e);
      }

      return undefined;
    },
    handleKeyCommand: function handleKeyCommand(command, editorState, evenTimeStamp, _ref2) {
      var getEditorState = _ref2.getEditorState;

      // return undefiend and return not-handled will be igonred in handleKeyCommand
      //  const newState = RichUtils.handleKeyCommand(editorState, command);
      if (command === "deletemore") {
        alert("fff"); //RichUtils.handleKeyCommand(editorState, "deletemore")

        return editorState; //  alert("dfdf")
      } // if (command === "backspace") {    //builtin command when hit backspace if not binded in keypress
      //   //   RichUtils.handleKeyCommand(editorState, "deletemore")
      // }


      if (command === "moveUp" || command === "moveDown") {
        var selection = editorState.getSelection();
        var startKey = selection.getStartKey();
        var endKey = selection.getEndKey();
        var isCollapsed = selection.isCollapsed();
        var upperBlockKey = editorState.getCurrentContent().getKeyBefore(startKey);
        var block = editorState.getCurrentContent().getBlockForKey(command === "moveUp" ? startKey : endKey);
        var lowerBlockKey = editorState.getCurrentContent().getKeyAfter(endKey);

        if (command === "moveUp" && upperBlockKey || command === "moveDown" && lowerBlockKey) {
          var adjacentBlock = command === "moveUp" ? editorState.getCurrentContent().getBlockBefore(startKey) : editorState.getCurrentContent().getBlockAfter(endKey);
          var text = adjacentBlock.getText();
          var newSelection = selection.merge(_objectSpread(_objectSpread(_objectSpread({}, isCollapsed && {
            anchorKey: adjacentBlock.getKey()
          }), isCollapsed && {
            anchorOffset: text ? text.length : 0
          }), {}, {
            focusKey: adjacentBlock.getKey(),
            focusOffset: adjacentBlock.getKey() ? text.length : 0,
            isBackward: false,
            hasFocus: true
          })); //  externalES = EditorState.push(externalES, newContent, "insert-characters");

          var es = _draftJs.EditorState.forceSelection(editorState, newSelection);

          setEditorState(es);
        } else if (command === "moveUp" && !upperBlockKey || command === "moveDown" && !lowerBlockKey) {
          var _text = block.getText();

          var _newSelection = selection.merge({
            anchorKey: block.getKey(),
            anchorOffset: command === "moveUp" ? 0 : _text ? _text.length : 0,
            focusKey: block.getKey(),
            focusOffset: command === "moveUp" ? 0 : _text ? _text.length : 0,
            isBackward: false,
            hasFocus: true
          });

          var _es = _draftJs.EditorState.forceSelection(editorState, _newSelection);

          setEditorState(_es);
        }
      }

      if (command === "bold") {
        setEditorState(_draftJs.RichUtils.handleKeyCommand(editorState, command));
      }

      if (command === "italic") {
        setEditorState(_draftJs.RichUtils.handleKeyCommand(editorState, command));
      }

      if (command === "underline") {
        setEditorState(_draftJs.RichUtils.handleKeyCommand(editorState, command));
      }

      return 'not-handled';
    },
    handleBeforeInput: function handleBeforeInput(aaa, editorState) {},
    handleReturn: function handleReturn(e, newState, _ref3) {
      var getEditorState = _ref3.getEditorState,
          setEditorState = _ref3.setEditorState;
      var editorState = newState; // getEditorState()

      var selectionState = editorState.getSelection();
      var contentState = newState.getCurrentContent();
      var block = contentState.getBlockForKey(selectionState.getStartKey()); //    console.log(block.getType())

      if (block.getType() === "imageBlock") {
        return "handled";
      } else if (block.getType() === "voteBlock") {
        return "handled";
      } // else if (checkShowing()) {
      //   return "handled"
      // }

    }
  }), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    fullWidth: true,
    disabled: disableSubmit,
    sx: {
      boxShadow: 0,
      borderRadius: 0
    },
    onClick: function onClick() {
      setDisableSubmit(true);
      onSubmit && setTimeout(function () {
        var preHtml = toPreHtml({
          editorState: editorState,
          theme: theme,
          voteArr: voteArr,
          voteTopic: voteTopic,
          pollDuration: pollDuration,
          voteId: voteId,
          imageObj: imageObj,
          imageBlockNum: imageBlockNum
        });
        var preHtmlObj = {
          _id: String("content-" + Date.now()),
          content: preHtml,
          ownerName: "Bob Wells",
          postDate: new Date()
        };
        onSubmit(preHtmlObj, {
          editorState: editorState,
          theme: theme,
          voteArr: voteArr,
          voteTopic: voteTopic,
          pollDuration: pollDuration,
          voteId: voteId,
          imageObj: imageObj,
          imageBlockNum: imageBlockNum,
          setDisableSubmit: setDisableSubmit,
          clearState: clearState
        });
      }, 0);
    }
  }, "Submit")));
}

var addEmptyBlock = function addEmptyBlock(editorState) {
  var newBlock = new _draftJs.ContentBlock({
    key: "m" + String(Math.random()).substring(2, 6),
    type: 'unstyled',
    text: '',
    characterList: _immutable["default"].List()
  }); // console.log(newBlock.key)

  var contentState = editorState.getCurrentContent();
  var newBlockMap = contentState.getBlockMap().set(newBlock.key, newBlock);
  return _draftJs.EditorState.push(editorState, _draftJs.ContentState.createFromBlockArray(newBlockMap.toArray()).set('selectionBefore', contentState.getSelectionBefore()).set('selectionAfter', contentState.getSelectionAfter()));
};

function deleteBlock1(store, blockKey, setEditorState) {
  // const editorState = store.getEditorState();
  var editorState = store;
  var content = editorState.getCurrentContent();
  var beforeKey = content.getKeyBefore(blockKey);
  var beforeBlock = content.getBlockForKey(beforeKey);
  var beforeBlockText = beforeBlock && beforeBlock.getText(); // Note: if the focused block is the first block then it is reduced to an
  // unstyled block with no character

  if (beforeBlock === undefined) {
    var _targetRange = new _draftJs.SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: blockKey,
      focusOffset: 1
    }); // change the blocktype and remove the characterList entry with the sticker


    content = _draftJs.Modifier.removeRange(content, _targetRange, 'backward');
    content = _draftJs.Modifier.setBlockType(content, _targetRange, 'unstyled');

    var _newState = _draftJs.EditorState.push(editorState, content, 'remove-block'); // force to new selection


    var _newSelection2 = new _draftJs.SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: blockKey,
      focusOffset: 0
    });

    return _draftJs.EditorState.forceSelection(_newState, _newSelection2);
  } //alert(`beforeTextLength ${beforeBlock.getText().length}  anchorKey ${beforeKey}  anchorOffset: ${beforeBlock.getLength()}   focusKey ${blockKey}  `)


  var targetRange = new _draftJs.SelectionState({
    anchorKey: beforeKey,
    anchorOffset: beforeBlock.getLength(),
    //beforeBlockText && beforeBlockText.length || 0,// beforeBlock.getLength(),
    focusKey: blockKey,
    focusOffset: 0 // one in colorblock or editingBlock

  });
  content = _draftJs.Modifier.removeRange(content, targetRange, 'backward');

  var newState = _draftJs.EditorState.push(editorState, content, 'remove-block'); // force to new selection


  var newSelection = new _draftJs.SelectionState({
    anchorKey: beforeKey,
    anchorOffset: beforeBlock.getLength(),
    focusKey: beforeKey,
    focusOffset: beforeBlock.getLength()
  });
  setEditorState(_draftJs.EditorState.forceSelection(newState, newSelection)); // return EditorState.acceptSelection(newState, newSelection);
}

function deleteBlock2(store, blockKey) {
  // const editorState = store.getEditorState();
  var editorState = store;
  var content = editorState.getCurrentContent();
  var beforeKey = content.getKeyBefore(blockKey);
  var beforeBlock = content.getBlockForKey(beforeKey);
  var beforeBlockText = beforeBlock && beforeBlock.getText(); // Note: if the focused block is the first block then it is reduced to an
  // unstyled block with no character

  if (beforeBlock === undefined) {
    var _targetRange2 = new _draftJs.SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: blockKey,
      focusOffset: 1
    }); // change the blocktype and remove the characterList entry with the sticker


    content = _draftJs.Modifier.removeRange(content, _targetRange2, 'backward');
    content = _draftJs.Modifier.setBlockType(content, _targetRange2, 'unstyled');

    var _newState2 = _draftJs.EditorState.push(editorState, content, 'remove-block'); // force to new selection


    var _newSelection3 = new _draftJs.SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: blockKey,
      focusOffset: 0
    });

    return _draftJs.EditorState.forceSelection(_newState2, _newSelection3);
  } //alert(`beforeTextLength ${beforeBlock.getText().length}  anchorKey ${beforeKey}  anchorOffset: ${beforeBlock.getLength()}   focusKey ${blockKey}  `)


  var targetRange = new _draftJs.SelectionState({
    anchorKey: beforeKey,
    anchorOffset: beforeBlock.getLength(),
    //beforeBlockText && beforeBlockText.length || 0,// beforeBlock.getLength(),
    focusKey: blockKey,
    focusOffset: 0 // one in colorblock or editingBlock

  });
  content = _draftJs.Modifier.removeRange(content, targetRange, 'backward');

  var newState = _draftJs.EditorState.push(editorState, content, 'remove-block'); // force to new selection


  var newSelection = new _draftJs.SelectionState({
    anchorKey: beforeKey,
    anchorOffset: beforeBlock.getLength(),
    focusKey: beforeKey,
    focusOffset: beforeBlock.getLength()
  }); //setEditorState(EditorState.forceSelection(newState, newSelection))

  return _draftJs.EditorState.forceSelection(newState, newSelection);
}

function toPreHtml(_ref4) {
  var editorState = _ref4.editorState,
      theme = _ref4.theme,
      voteArr = _ref4.voteArr,
      voteTopic = _ref4.voteTopic,
      pollDuration = _ref4.pollDuration,
      voteId = _ref4.voteId,
      imageObj = _ref4.imageObj,
      imageBlockNum = _ref4.imageBlockNum;
  var preHtml = (0, _draftJsExportHtml.stateToHTML)(editorState.getCurrentContent(), {
    defaultBlockTag: "div",
    inlineStyleFn: function inlineStyleFn(styleNameSet) {
      var styleObj = {
        element: "span",
        style: {},
        attributes: {}
      };
      var isLink = styleNameSet.toArray().some(function (item) {
        return item.indexOf("linkTagOn") >= 0 || item.indexOf("linkTagOff") >= 0;
      });

      if (isLink) {
        styleObj.attributes["data-type"] = "link";
      }

      return styleObj;
    },
    entityStyleFn: function entityStyleFn(entity) {
      var _entity$toObject = entity.toObject(),
          type = _entity$toObject.type,
          data = _entity$toObject.data,
          mutablity = _entity$toObject.mutablity; //  console.log(type, data, mutablity)


      if (type.indexOf("mention") >= 0) {
        return {
          element: 'object',
          attributes: {
            "data-type": "mention-tag"
          }
        };
      } else if (type.indexOf("personTag") >= 0) {
        return {
          element: 'object',
          attributes: {
            "data-type": "person-tag"
          }
        };
      }
    },
    blockStyleFn: function blockStyleFn(block) {
      var text = block.getText();
      var data = block.getData().toObject();
      var type = block.getType();
      var key = block.getKey();
      return {
        style: _objectSpread(_objectSpread({}, type === "centerBlock" && {
          textAlign: "center"
        }), type === "rightBlock" && {
          textAlign: "right"
        }),
        attributes: _objectSpread(_objectSpread(_objectSpread({}, data.isSmallFont && {
          "small-font": "small-font"
        }), type === "centerBlock" && {
          "text-align": "center"
        }), type === "rightBlock" && {
          "text-align": "right"
        })
      };
    },
    blockRenderers: {
      imageBlock: function imageBlock(block) {
        var text = block.getText();
        var data = encodeURI(JSON.stringify(block.getData().toObject()));
        var type = block.getType();
        var key = block.getKey(); // object Tag caanot self close

        if (!imageObj[key]) {
          return;
        }

        var imageHtml = imageObj[key].reduce(function (imageHtml, currentValue, index, arr) {
          return imageHtml = imageHtml + "<object data-imageindex=\"".concat(index, "\" data-imgurl=\"").concat(arr[index].imgUrl, "\" data-imgsnap=\"").concat(arr[index].imgSnap, "\" data-blockkey=\"").concat(key, "\" ></object>");
        }, "");
        return "<object data-type=\"image-block\"  data-block_key=\"".concat(key, "\" >") + imageHtml + '</object>';
      },
      voteBlock: function voteBlock(block) {
        var d = pollDuration.d,
            h = pollDuration.h,
            m = pollDuration.m;
        var expireDate = new Date(Date.now() + (3600 * 24 * d + 3600 * h + 60 * m) * 1000);
        var voteTopicHtml = "<object data-topic>".concat(voteTopic || "", "</object>");
        var pollDurationHtml = "<object data-duration>".concat(JSON.stringify(pollDuration).trim(), "</object>");
        var voteArrHtml = voteArr.map(function (vote, index) {
          return "<object data-item-".concat(index, ">").concat(vote, "</object>");
        });
        var data = encodeURI(JSON.stringify(_objectSpread({}, block.getData().toObject())));
        var type = block.getType();
        var key = block.getKey(); // return `< object data - vote_arr="${voteArr}" data - type="vote-block"  data - block_key="${key}" data - block_data="${data}" > ` + encodeURI(block.getText()) + '</object>'

        return "<object data-vote_arr=\"".concat(voteArr, "\" date-vote_id=\"").concat(voteId, "\" date-expire_date=\"").concat(expireDate, "\" data-type=\"vote-block\"  data-block_key=\"").concat(key, "\" data-block_data=\"").concat(data, "\">") + voteTopicHtml + pollDurationHtml + voteArrHtml.join("") + '</object>';
      }
    }
  });
  return preHtml;
}
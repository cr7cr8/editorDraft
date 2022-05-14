"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createMentionPlugin;

var _react = require("react");

var _draftJs = require("draft-js");

var _material = require("@mui/material");

var _EditorContextProvider = require("../EditorContextProvider");

var _styles = require("@mui/material/styles");

var _MentionMenu = _interopRequireDefault(require("./MentionMenu"));

var _excluded = ["getEditorState", "setEditorState"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function createMentionPlugin() {
  var editorState = null;
  var setEditorState = null;
  var newContent = null;
  var entityKeyObj = {};
  var tagStartPos = 0;
  var tagEndPos = 0;
  var tagCurrentStartPos = 0;
  var tagCurrentEndPos = 0;
  var tabIndex = 1006;
  var isShowing = false;
  var tabName = "";

  function checkShowing() {
    return isShowing;
  }

  function setShowing(bool) {
    isShowing = bool;
  }

  function setTabName(name) {
    tabName = name;
  }

  function conditionWrap(_ref) {
    var _ref$searchAllBlock = _ref.searchAllBlock,
        searchAllBlock = _ref$searchAllBlock === void 0 ? true : _ref$searchAllBlock,
        editorState = _ref.editorState;
    return searchAllBlock ? editorState.getCurrentContent().getBlockMap() : [editorState.getCurrentContent().getBlockForKey(editorState.getSelection().getStartKey())];
  }

  function taggingMention() {
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
    var regx = /\s([@][\w_\[\u4E00-\u9FCA\]]*)/g;
    var oldSelection = editorState.getSelection();
    var newSelection = editorState.getSelection();
    newContent = editorState.getCurrentContent();
    conditionWrap({
      editorState: editorState,
      searchAllBlock: true
    }).forEach(function (block) {
      var blockKey = block.getKey();
      var blockText = block.getText();
      var metaArr = block.getCharacterList();
      metaArr.forEach(function (item, index) {
        var itemEntityKey = item.getEntity();

        if (itemEntityKey) {
          var entityType = newContent.getEntity(itemEntityKey).getType();

          if (entityType.indexOf("mention") >= 0) {
            newSelection = newSelection.merge({
              anchorKey: blockKey,
              anchorOffset: index,
              focusKey: blockKey,
              focusOffset: index + 1,
              isBackward: false,
              hasFocus: false
            });
            newContent = _draftJs.Modifier.applyEntity(newContent, newSelection, null);
          }
        }
      });
      var matchArr;

      while ((matchArr = regx.exec(blockText)) !== null) {
        // alert("fdfsf")
        var start = matchArr.index;
        var end = matchArr.index + matchArr[0].length;
        var contentLenth = end - start;
        var contentFocusAt = anchorFocusOffset - start;
        var mentionOn = hasfocus && blockKey === anchorFocusKey && contentFocusAt > 0 && contentFocusAt <= contentLenth;
        var mentionOff = !mentionOn;

        if (mentionOn) {
          tagStartPos = start;
          tagEndPos = end;
          tagCurrentStartPos = start;
          tagCurrentEndPos = end;
          newSelection = newSelection.merge({
            anchorKey: blockKey,
            focusKey: blockKey,
            anchorOffset: start + 1,
            focusOffset: end,
            //  start + 2,
            isBackward: false,
            hasFocus: false
          });
          newContent = _draftJs.Modifier.applyEntity(newContent, newSelection, entityKeyObj["mentionOn"]);
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
          newContent = _draftJs.Modifier.applyEntity(newContent, newSelection, entityKeyObj["mentionOff"]);
        }
      }
    });
    editorState = _draftJs.EditorState.push(editorState, newContent, "apply-entity");
    editorState = _draftJs.EditorState.acceptSelection(editorState, oldSelection);
    return editorState;
  }

  function mentionStrategy(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(function (character) {
      var entityKey = character.getEntity();
      return entityKey !== null && contentState.getEntity(entityKey).getType().indexOf("mention") >= 0;
    }, callback);
  }

  function insertMention(name) {
    var text = name ? " " + name : " " + tabName;
    var contentState = editorState.getCurrentContent();
    var selection = editorState.getSelection();

    var _selection$toArray = selection.toArray(),
        _selection$toArray2 = _slicedToArray(_selection$toArray, 6),
        anchorKey = _selection$toArray2[0],
        anchorOffset = _selection$toArray2[1],
        focusKey = _selection$toArray2[2],
        focusOffset = _selection$toArray2[3],
        isBackward = _selection$toArray2[4],
        hasfocus = _selection$toArray2[5];

    var _ref3 = [!isBackward ? anchorKey : focusKey, !isBackward ? anchorOffset : focusOffset, isBackward ? anchorKey : focusKey, isBackward ? anchorOffset : focusOffset],
        anchorStartKey = _ref3[0],
        anchorStartOffset = _ref3[1],
        anchorFocusKey = _ref3[2],
        anchorFocusOffset = _ref3[3],
        isAnchorBackward = _ref3[4],
        isAnchorFocused = _ref3[5];
    var newSelection = selection.merge({
      anchorKey: anchorStartKey,
      anchorOffset: tagCurrentStartPos,
      focusKey: anchorStartKey,
      focusOffset: tagCurrentEndPos,
      isBackward: false,
      hasFocus: true
    });

    var newContent = _draftJs.Modifier.replaceText(contentState, newSelection, text);

    newContent = _draftJs.Modifier.applyEntity(newContent, editorState.getSelection().merge({
      anchorKey: anchorStartKey,
      anchorOffset: tagCurrentStartPos + 1,
      // +1 for extra space added in tabName
      focusKey: anchorStartKey,
      focusOffset: tagCurrentStartPos + text.length,
      isBackward: false,
      hasFocus: true
    }), entityKeyObj["personTag"]);
    newSelection = editorState.getSelection().merge({
      anchorKey: anchorStartKey,
      anchorOffset: tagCurrentStartPos + text.length,
      focusKey: anchorStartKey,
      focusOffset: tagCurrentStartPos + text.length,
      isBackward: false,
      hasFocus: true
    });

    if (!name) {
      editorState = _draftJs.EditorState.push(editorState, newContent, "insert-characters");
      editorState = _draftJs.EditorState.acceptSelection(editorState, newSelection);
      setEditorState(editorState);
    } else {
      setTimeout(function () {
        editorState = _draftJs.EditorState.push(editorState, newContent, "insert-characters");
        editorState = _draftJs.EditorState.forceSelection(editorState, newSelection);
        setEditorState(editorState);
      }, 0);
    }
  }

  function Mention(_ref4) {
    var props = _extends({}, _ref4);

    var _useContext = (0, _react.useContext)(_EditorContextProvider.EditorContext),
        peopleList = _useContext.peopleList;

    var theme = (0, _styles.useTheme)();
    var contentState = props.contentState,
        entityKey = props.entityKey,
        blockKey = props.blockKey,
        offsetKey = props.offsetKey,
        start = props.start,
        end = props.end,
        decoratedText = props.decoratedText,
        children = props.children;

    var _contentState$getEnti = contentState.getEntity(entityKey).getData(),
        mentionHeadKey = _contentState$getEnti.mentionHeadKey,
        mentionBodyKey = _contentState$getEnti.mentionBodyKey,
        person = _contentState$getEnti.person,
        imgurl = _contentState$getEnti.imgurl,
        mentionType = _contentState$getEnti.mentionType;

    var blockType = contentState.getBlockForKey(blockKey).getType();
    var blockData = contentState.getBlockForKey(blockKey).getData().toObject();
    var regx = new RegExp("".concat(decoratedText.replace("@", "")), "i");
    var text = decoratedText.replace("@", "");

    var cssObj = _objectSpread(_objectSpread({}, text && {
      backgroundColor: theme.colorBgObj
    }), {}, {
      display: "inline-block",
      "& span": {
        fontSize: blockData.isSmallFont ? theme.scaleSizeObj(0.8) : theme.sizeObj
      }
    });

    var nameList = peopleList.filter(function (people) {
      return Boolean(people.match(regx));
    });

    if (mentionType === "mentionOn" && nameList.length !== 0) {
      return /*#__PURE__*/React.createElement(_material.Box, {
        sx: _objectSpread({
          display: "inline-block"
        }, cssObj)
      }, children, /*#__PURE__*/React.createElement(_MentionMenu["default"], {
        tabIndex: tabIndex,
        setShowing: setShowing,
        setTabName: setTabName,
        nameList: nameList,
        insertMention: insertMention,
        blockType: blockType
      }));
    } else {
      return /*#__PURE__*/React.createElement(_material.Box, {
        sx: _objectSpread({
          display: "inline-block"
        }, cssObj)
      }, children);
    }
  }

  return {
    checkShowing: checkShowing,
    mentionPlugin: {
      onChange: function onChange(newState, _ref5) {
        var setEditorState_ = _ref5.setEditorState;
        editorState = newState;
        setEditorState = setEditorState_;
        newContent = newState.getCurrentContent();

        if (Object.keys(entityKeyObj).length === 0) {
          entityKeyObj.mentionOn = newContent.createEntity("mentionOn", "MUTABLE", {
            mentionType: "mentionOn"
          }).getLastCreatedEntityKey();
          entityKeyObj.mentionOff = newContent.createEntity("mentionOff", "MUTABLE", {
            mentionType: "mentionOff"
          }).getLastCreatedEntityKey();
          entityKeyObj.personTag = newContent.createEntity("personTag", "IMMUTABLE", {
            mentionType: "personTag"
          }).getLastCreatedEntityKey();
        }

        editorState = taggingMention();
        return editorState;
      },
      keyBindingFn: function keyBindingFn(e, _ref6) {
        var getEditorState = _ref6.getEditorState,
            setEditorState = _ref6.setEditorState,
            obj = _objectWithoutProperties(_ref6, _excluded);

        if (e.keyCode === 40 && isShowing) {
          tabIndex = tabIndex + 1;
          return "fire-arrow";
        } else if (e.keyCode === 38 && isShowing) {
          tabIndex = tabIndex - 1;
          return "fire-arrow";
        } else {
          return undefined;
        }
      },
      handleKeyCommand: function handleKeyCommand(command, editorState, evenTimeStamp, _ref7) {
        var setEditorState = _ref7.setEditorState;

        if (command === "fire-arrow") {
          setEditorState(editorState);
          return "handled";
        }

        return undefined;
      },
      handleReturn: function handleReturn(e, newState, _ref8) {
        var setEditorState_ = _ref8.setEditorState;

        if (isShowing) {
          editorState = newState;
          setEditorState = setEditorState_;
          insertMention(); //  insertMention(matchFriendArr[tabIndex % matchFriendArr.length]);

          return "handled";
        } else {
          return undefined;
        }
      },
      decorators: [{
        strategy: mentionStrategy,
        component: Mention //MentionWrapFn,//withContext(withTheme(Mention))

      }]
    }
  };
}
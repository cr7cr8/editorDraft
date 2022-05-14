"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createPersonPlugin;

var _react = require("react");

var _material = require("@mui/material");

var _multiavatar = _interopRequireDefault(require("@multiavatar/multiavatar"));

var _privateTheming = require("@mui/private-theming");

var _EditorContextProvider = require("../EditorContextProvider");

var _colors = require("@mui/material/colors");

var _AvatarChip = _interopRequireDefault(require("../EditorViewerFolder/AvatarChip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function createPersonPlugin() {
  function personStrategy(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(function (character) {
      var entityKey = character.getEntity();
      return entityKey !== null && contentState.getEntity(entityKey).getType().indexOf("personTag") >= 0;
    }, callback);
  }

  function Person(_ref) {
    var props = _extends({}, _ref);

    var theme = (0, _privateTheming.useTheme)();
    var contentState = props.contentState,
        entityKey = props.entityKey,
        blockKey = props.blockKey,
        offsetKey = props.offsetKey,
        start = props.start,
        end = props.end,
        decoratedText = props.decoratedText,
        children = props.children;
    var blockData = contentState.getBlockForKey(blockKey).getData().toObject();

    var _useContext = (0, _react.useContext)(_EditorContextProvider.EditorContext),
        peopleList = _useContext.peopleList,
        avatarPeopleList = _useContext.avatarPeopleList,
        downloadAvatarUrl = _useContext.downloadAvatarUrl,
        genAvatarLink = _useContext.genAvatarLink;

    return /*#__PURE__*/React.createElement(_AvatarChip["default"], {
      personName: decoratedText,
      avatarPeopleList: avatarPeopleList,
      downloadAvatarUrl: downloadAvatarUrl,
      genAvatarLink: genAvatarLink
    }, children);
  }

  return {
    personPlugin: {
      decorators: [{
        strategy: personStrategy,
        component: Person
      }]
    }
  };
}
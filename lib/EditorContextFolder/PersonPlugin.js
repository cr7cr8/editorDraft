"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createPersonPlugin;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _multiavatar = _interopRequireDefault(require("@multiavatar/multiavatar"));

var _privateTheming = require("@mui/private-theming");

var _EditorContextProvider = require("../EditorContextProvider");

var _colors = require("@mui/material/colors");

var _AvatarChip = _interopRequireDefault(require("../EditorViewerFolder/AvatarChip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

    return /*#__PURE__*/_react["default"].createElement(_AvatarChip["default"], {
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
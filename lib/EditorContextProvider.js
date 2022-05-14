"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorContext = void 0;
exports.EditorContextProvider = EditorContextProvider;
exports.EditorViewer = EditorViewer;

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

var _DraftEditor = _interopRequireDefault(require("./EditorContextFolder/DraftEditor"));

var _htmlReactParser = _interopRequireWildcard(require("html-react-parser"));

var _reactElementToJsxString = _interopRequireDefault(require("react-element-to-jsx-string"));

var _ImageViewerBlock = _interopRequireDefault(require("./EditorViewerFolder/ImageViewerBlock"));

var _VoteViewerBlock = _interopRequireDefault(require("./EditorViewerFolder/VoteViewerBlock"));

var _AvatarChip = _interopRequireDefault(require("./EditorViewerFolder/AvatarChip"));

var _LinkTag = _interopRequireDefault(require("./EditorViewerFolder/LinkTag"));

var _styles = require("@mui/material/styles");

var _material = require("@mui/material");

var _excluded = ["downloadAvatarUrl", "genAvatarLink", "onChange", "onSubmit"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var EditorContext = /*#__PURE__*/(0, _react.createContext)();
exports.EditorContext = EditorContext;

function EditorContextProvider(_ref) {
  var _ref$downloadAvatarUr = _ref.downloadAvatarUrl,
      downloadAvatarUrl = _ref$downloadAvatarUr === void 0 ? "" : _ref$downloadAvatarUr,
      _ref$genAvatarLink = _ref.genAvatarLink,
      genAvatarLink = _ref$genAvatarLink === void 0 ? function () {} : _ref$genAvatarLink,
      onChange = _ref.onChange,
      onSubmit = _ref.onSubmit,
      props = _objectWithoutProperties(_ref, _excluded);

  var key1 = (0, _react.useId)().replace(":", "").replace(":", "");
  var rawJsText = (0, _react.useMemo)(function () {
    return {
      "entityMap": {},
      "blocks": [{
        "key": key1,
        "text": "",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
      } // {
      //     "key": "2222",
      //     "text": "",
      //     "type": "imageBlock",
      //     "depth": 0,
      //     "inlineStyleRanges": [],
      //     "entityRanges": [],
      //     "data": {}
      // }
      ]
    };
  }, []);

  var _useState = (0, _react.useState)(_draftJs.EditorState.createWithContent((0, _draftJs.convertFromRaw)(rawJsText)) || _draftJs.EditorState.createEmpty()),
      _useState2 = _slicedToArray(_useState, 2),
      editorState = _useState2[0],
      setEditorState = _useState2[1];

  var _useState3 = (0, _react.useState)("ddd"),
      _useState4 = _slicedToArray(_useState3, 2),
      currentBlockKey = _useState4[0],
      setCurrentBlockKey = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      imageObj = _useState6[0],
      setImageObj = _useState6[1];

  var imageBlockNum = editorState.getCurrentContent().getBlocksAsArray().filter(function (block) {
    return block.getType() === "imageBlock";
  }).length; // const [peopleList, setPeopleList] = useState(["UweF23", "UweF22", "TonyCerl", "JimWil", "大发发", "Jimberg", "m大Gsd哈"])

  var _useState7 = (0, _react.useState)(props.peopleList || []),
      _useState8 = _slicedToArray(_useState7, 2),
      peopleList = _useState8[0],
      setPeopleList = _useState8[1];

  var _useState9 = (0, _react.useState)(props.avatarPeopleList || []),
      _useState10 = _slicedToArray(_useState9, 2),
      avatarPeopleList = _useState10[0],
      setAvatarPeopleList = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      voteArr = _useState12[0],
      setVoteArr = _useState12[1];

  var _useState13 = (0, _react.useState)(""),
      _useState14 = _slicedToArray(_useState13, 2),
      voteId = _useState14[0],
      setVoteId = _useState14[1];

  var _useState15 = (0, _react.useState)(""),
      _useState16 = _slicedToArray(_useState15, 2),
      voteTopic = _useState16[0],
      setVoteTopic = _useState16[1];

  var _useState17 = (0, _react.useState)({
    d: 3,
    h: 0,
    m: 0
  }),
      _useState18 = _slicedToArray(_useState17, 2),
      pollDuration = _useState18[0],
      setPollDuration = _useState18[1];

  var clearState = (0, _react.useCallback)(function () {
    setEditorState(_draftJs.EditorState.createEmpty());
    setImageObj({});
    setVoteArr([]);
    setVoteId("");
    setVoteTopic("");
  }, []);
  return /*#__PURE__*/_react["default"].createElement(EditorContext.Provider, {
    value: {
      editorState: editorState,
      setEditorState: setEditorState,
      currentBlockKey: currentBlockKey,
      setCurrentBlockKey: setCurrentBlockKey,
      // savedImageObj, setSavedImageObj,
      imageObj: imageObj,
      setImageObj: setImageObj,
      imageBlockNum: imageBlockNum,
      peopleList: peopleList,
      setPeopleList: setPeopleList,
      avatarPeopleList: avatarPeopleList,
      setAvatarPeopleList: setAvatarPeopleList,
      downloadAvatarUrl: downloadAvatarUrl,
      genAvatarLink: genAvatarLink,
      voteArr: voteArr,
      setVoteArr: setVoteArr,
      voteTopic: voteTopic,
      setVoteTopic: setVoteTopic,
      pollDuration: pollDuration,
      setPollDuration: setPollDuration,
      voteId: voteId,
      setVoteId: setVoteId,
      onChange: onChange,
      onSubmit: onSubmit,
      clearState: clearState
    }
  }, /*#__PURE__*/_react["default"].createElement(_DraftEditor["default"], null));
}

function EditorViewer(_ref2) {
  var preHtml = _ref2.preHtml,
      _ref2$peopleList = _ref2.peopleList,
      peopleList = _ref2$peopleList === void 0 ? [] : _ref2$peopleList,
      _ref2$avatarPeopleLis = _ref2.avatarPeopleList,
      avatarPeopleList = _ref2$avatarPeopleLis === void 0 ? [] : _ref2$avatarPeopleLis,
      _ref2$genAvatarLink = _ref2.genAvatarLink,
      genAvatarLink = _ref2$genAvatarLink === void 0 ? function () {} : _ref2$genAvatarLink,
      _ref2$downloadImageUr = _ref2.downloadImageUrl,
      downloadImageUrl = _ref2$downloadImageUr === void 0 ? "" : _ref2$downloadImageUr,
      _ref2$downloadVoteUrl = _ref2.downloadVoteUrl,
      downloadVoteUrl = _ref2$downloadVoteUrl === void 0 ? "" : _ref2$downloadVoteUrl,
      _ref2$downloadAvatarU = _ref2.downloadAvatarUrl,
      downloadAvatarUrl = _ref2$downloadAvatarU === void 0 ? "" : _ref2$downloadAvatarU;
  var theme = (0, _styles.useTheme)();
  var colorObj = theme.colorObj;
  var colorBgObj = theme.colorBgObj;
  var options = (0, _react.useMemo)(function () {
    return {
      replace: function replace(domNode) {
        var name = domNode.name,
            type = domNode.type,
            attribs = domNode.attribs,
            children = domNode.children;

        if (name === "object" && attribs["data-type"] === "image-block") {
          var imgSnapArr = [];
          var imgUrlArr = [];
          children.forEach(function (item, index) {
            if (downloadImageUrl) {
              imgSnapArr.push(downloadImageUrl + item.attribs["data-imgsnap"].substr(item.attribs["data-imgsnap"].lastIndexOf("/") + 1) + "-snap");
              imgUrlArr.push(downloadImageUrl + item.attribs["data-imgurl"].substr(item.attribs["data-imgurl"].lastIndexOf("/") + 1) + "-img");
            } else {
              imgSnapArr.push(item.attribs["data-imgsnap"]);
              imgUrlArr.push(item.attribs["data-imgurl"]);
            }
          }); //     Object.keys(imageObj).forEach((objKey, index) => {
          //         imageObj[objKey].forEach(img => {
          //             img.imgSnap = "/api/picture/downloadPicture/" + img.imgSnap.substr(img.imgSnap.lastIndexOf("/") + 1) + "-snap"
          //             img.imgUrl = "/api/picture/downloadPicture/" + img.imgUrl.substr(img.imgUrl.lastIndexOf("/") + 1) + "-img"
          //         })
          //     })

          return /*#__PURE__*/_react["default"].createElement(_ImageViewerBlock["default"], {
            imgSnapArr: imgSnapArr,
            imgUrlArr: imgUrlArr
          });
        } else if (name === "object" && attribs["data-type"] === "vote-block") {
          var _children$0$children$, _children$, _children$$children, _children$$children$, _children$2, _children$2$children, _children$2$children$;

          var voteId = attribs["date-vote_id"];
          var expireDate = attribs["date-expire_date"];
          var topic = (_children$0$children$ = children === null || children === void 0 ? void 0 : (_children$ = children[0]) === null || _children$ === void 0 ? void 0 : (_children$$children = _children$.children) === null || _children$$children === void 0 ? void 0 : (_children$$children$ = _children$$children[0]) === null || _children$$children$ === void 0 ? void 0 : _children$$children$.data) !== null && _children$0$children$ !== void 0 ? _children$0$children$ : "";
          var duration = children === null || children === void 0 ? void 0 : (_children$2 = children[1]) === null || _children$2 === void 0 ? void 0 : (_children$2$children = _children$2.children) === null || _children$2$children === void 0 ? void 0 : (_children$2$children$ = _children$2$children[0]) === null || _children$2$children$ === void 0 ? void 0 : _children$2$children$.data;
          var voteArr = children.slice(2).map(function (item) {
            var _item$children$0$data, _item$children, _item$children$;

            return (_item$children$0$data = item === null || item === void 0 ? void 0 : (_item$children = item.children) === null || _item$children === void 0 ? void 0 : (_item$children$ = _item$children[0]) === null || _item$children$ === void 0 ? void 0 : _item$children$.data) !== null && _item$children$0$data !== void 0 ? _item$children$0$data : "";
          });
          return /*#__PURE__*/_react["default"].createElement(_VoteViewerBlock["default"], {
            topic: topic,
            duration: duration,
            voteArr: voteArr,
            expireDate: expireDate,
            voteId: voteId,
            downloadVoteUrl: downloadVoteUrl
          });
        } else if (name === "object" && attribs["data-type"] === "person-tag") {
          //only children and domNode are dom
          //children[0] children[1] ... are NOT 
          return /*#__PURE__*/_react["default"].createElement(_AvatarChip["default"], {
            personName: extractText(children),
            downloadAvatarUrl: downloadAvatarUrl,
            avatarPeopleList: avatarPeopleList,
            genAvatarLink: genAvatarLink
          }, (0, _htmlReactParser.domToReact)(children));
        }

        if (name === "div" && !attribs["small-font"]) {
          return /*#__PURE__*/_react["default"].createElement(_material.Box, {
            sx: _objectSpread(_objectSpread({
              bgcolor: theme.isLight ? theme.palette.background["default"] : "transparent",
              //  bgcolor: theme.isLight?theme.palette.background.default:colorObj[500],
              fontSize: theme.sizeObj
            }, attribs["text-align"] && {
              textAlign: attribs["text-align"]
            }), {}, {
              // "& .MuiChip-root.MuiChip-filled": { fontSize: theme.scaleSizeObj(0.8), }
              "& .MuiChip-root.MuiChip-filled": {
                fontSize: theme.sizeObj
              }
            })
          }, (0, _htmlReactParser.domToReact)(children, options));
        } else if (name === "div" && attribs["small-font"]) {
          return /*#__PURE__*/_react["default"].createElement(_material.Box, {
            sx: _objectSpread(_objectSpread({
              bgcolor: theme.isLight ? theme.palette.background["default"] : "transparent",
              //   bgcolor: theme.isLight?theme.palette.background.default:colorBgObj,
              fontSize: theme.scaleSizeObj(0.8)
            }, attribs["text-align"] && {
              textAlign: attribs["text-align"]
            }), {}, {
              "& .MuiChip-root.MuiChip-filled": {
                fontSize: theme.scaleSizeObj(0.8)
              }
            })
          }, (0, _htmlReactParser.domToReact)(children, options));
        }

        if (name === "span" && attribs["data-type"] === "link") {
          var linkAdd = extractText(children);
          return /*#__PURE__*/_react["default"].createElement(_LinkTag["default"], {
            linkAdd: linkAdd
          });
        }
      }
    };
  }, [preHtml, theme]);
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: function sx(theme) {
      return {
        bgcolor: theme.colorBgObj,
        marginTop: "32px",
        marginBottom: "32px",
        borderRadius: "4px",
        boxShadow: 5,
        overflow: "hidden"
      };
    }
  }, (0, _htmlReactParser["default"])(preHtml, options));
}

function extractText(dom) {
  var text = "";
  var option = {
    replace: function replace(domNode) {
      var name = domNode.name,
          type = domNode.type,
          attribs = domNode.attribs,
          children = domNode.children;

      if (type === "text") {
        text = text + domNode.data;
      }
    }
  };
  (0, _htmlReactParser.domToReact)(dom, option);
  return text;
}
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = VoteViewerBlock;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _styles = require("@mui/material/styles");

var _reactCountdown = _interopRequireDefault(require("react-countdown"));

var _colors = require("@mui/material/colors");

var _iconsMaterial = require("@mui/icons-material");

var _axios = _interopRequireDefault(require("axios"));

var _excluded = ["days", "hours", "minutes", "seconds", "completed"],
    _excluded2 = ["days", "hours", "minutes", "seconds", "completed", "expireTime", "totalVotes"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function VoteViewerBlock(_ref) {
  var topic = _ref.topic,
      duration = _ref.duration,
      voteArr = _ref.voteArr,
      voteId = _ref.voteId,
      expireDate = _ref.expireDate,
      downloadVoteUrl = _ref.downloadVoteUrl;
  var theme = (0, _styles.useTheme)();
  var colorObj = theme.colorObj;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      expireTime = _useState2[0],
      setExpireTime = _useState2[1];

  var _useState3 = (0, _react.useState)(Date.parse(new Date(expireDate)) - Date.now() > 0),
      _useState4 = _slicedToArray(_useState3, 2),
      isVotting = _useState4[0],
      setIsVotting = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoaded = _useState6[0],
      setIsLoaded = _useState6[1];

  var _useState7 = (0, _react.useState)(voteArr.map(function (item) {
    return 0; //return Number(Number(Math.random() * 100).toFixed(0))
  })),
      _useState8 = _slicedToArray(_useState7, 2),
      voteCountArr = _useState8[0],
      setVoteCountArr = _useState8[1];

  var totalVotes = voteCountArr.reduce(function (totalVotes_, itemVote) {
    //console.log(voteCountArr, itemVote)
    return totalVotes_ + itemVote;
  }, 0);
  var percentageArr = voteCountArr.map(function (count) {
    if (count === 0) {
      return 0;
    } else {
      return Number(Number(count / totalVotes * 100).toFixed(0));
    }
  }); //const [totalVotes, setTotalVotes] = useState(0)

  (0, _react.useEffect)(function () {
    if (Number.isNaN(totalVotes) || percentageArr.length !== voteArr.length) {
      setVoteCountArr(function (pre) {
        return new Array(voteArr.length).fill(0);
      });
    }
  });
  (0, _react.useEffect)(function () {
    downloadVoteUrl && _axios["default"].get("/api/voteBlock/getVoteCount/".concat(voteId)).then(function (response) {
      var _response$data;

      if ((_response$data = response.data) !== null && _response$data !== void 0 && _response$data.voteCountArr) {
        var _response$data2;

        setVoteCountArr((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.voteCountArr);
        setIsLoaded(true);
      }
    });
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_material.Box, null, topic && /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    sx: {
      textAlign: "center"
    }
  }, topic), voteArr.map(function (choice, index) {
    return /*#__PURE__*/_react["default"].createElement(_material.Box, {
      key: index,
      sx: _objectSpread(_objectSpread({
        position: "relative"
      }, isVotting && _objectSpread({
        "& > span": {
          // bgcolor: theme.palette.action.disabledBackground,
          bgcolor: "transparent",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: theme.isLight ? colorObj[300] === "#e0e0e0" ? "darkgray" : colorObj[300] : colorObj[600]
        },
        "& > span > span": {
          bgcolor: theme.isLight ? colorObj[300] === "#e0e0e0" ? "darkgray" : colorObj[300] : colorObj[600] //bgcolor: hexToRGB(avatarColor, 0.5),
          //  transition: "all, 300ms",
          //  opacity:0.6,

        }
      }, (isLoaded || !downloadVoteUrl) && {
        "&:hover": {
          cursor: "pointer",
          transition: "all, 300ms",
          "& > span": {
            bgcolor: theme.palette.action.disabledBackground
          },
          "& > span > span": {//  bgcolor: hexToRGB(avatarColor, 1),
            //    transition: "all, 300ms",
            //    opacity:1,
          }
        }
      })), !isVotting && {
        "& > span": {
          bgcolor: theme.palette.action.disabledBackground //bgcolor:"transparent"

        },
        "& > span > span": {
          bgcolor: theme.isLight ? colorObj[300] === "#e0e0e0" ? "darkgray" : colorObj[300] : colorObj[600] // hexToRGB(avatarColor, 0.5), transition: "all, 300ms"

        }
      }),
      onClick: function onClick() {
        if (isVotting && downloadVoteUrl && isLoaded) {
          setVoteCountArr(function (pre) {
            var newCountArr = _toConsumableArray(pre);

            newCountArr[index] = newCountArr[index] + 1;
            console.log(newCountArr);
            return newCountArr;
          });
          setIsVotting(false);

          _axios["default"].put("/api/voteBlock/updateVoteCount/".concat(voteId, "/").concat(index)).then(function (resposne) {});
        } else if (isVotting && !downloadVoteUrl) {
          setVoteCountArr(function (pre) {
            var newCountArr = _toConsumableArray(pre);

            newCountArr[index] = newCountArr[index] + 1; //console.log(newCountArr)

            return newCountArr;
          });
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      variant: "body2",
      alt: "sdfsddf",
      sx: {
        position: "absolute",
        left: 4,
        zIndex: 20,
        display: "block",
        width: "calc(100% - 64px )",
        //bgcolor: "yellow", 
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        top: 0 // transform: "translateY(-50%)",

      }
    }, choice.length >= 25 ? choice.substring(0, 25) : choice), /*#__PURE__*/_react["default"].createElement(_material.LinearProgress, {
      variant: "determinate" // value={percentageArr.length === 0 ? 0 : percentageArr[index]}  
      //value={Math.min(100, index * 15 + 20)}             //value={Number(Math.random() * 100).toFixed(0)}
      ,
      value: percentageArr[index] || 0,
      sx: {
        height: theme.scaleSizeObj(1.5),
        marginBottom: "2px"
      }
    }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      variant: "body2",
      sx: {
        display: "block",
        position: "absolute",
        right: 4,
        zIndex: 20,
        top: 0 //    transform: "translateY(-50%)",

      }
    }, percentageArr[index], "%"));
  }), /*#__PURE__*/_react["default"].createElement(_reactCountdown["default"], {
    date: Date.parse(new Date(expireDate)),
    intervalDelay: 1 * 1000,
    renderer: function renderer(_ref2) {
      var days = _ref2.days,
          hours = _ref2.hours,
          minutes = _ref2.minutes,
          seconds = _ref2.seconds,
          completed = _ref2.completed,
          props = _objectWithoutProperties(_ref2, _excluded);

      return /*#__PURE__*/_react["default"].createElement(TimeRender, _objectSpread({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        completed: completed,
        expireTime: expireTime,
        totalVotes: totalVotes
      }, props));
    },
    onComplete: function onComplete() {
      setIsVotting(false);
    },
    overtime: true
  }));
}

function TimeRender(_ref3) {
  var days = _ref3.days,
      hours = _ref3.hours,
      minutes = _ref3.minutes,
      seconds = _ref3.seconds,
      completed = _ref3.completed,
      expireTime = _ref3.expireTime,
      totalVotes = _ref3.totalVotes,
      props = _objectWithoutProperties(_ref3, _excluded2);

  var theme = (0, _styles.useTheme)();
  var message = completed //  ? `Finished on ${format(Date.parse(expireTime), "yyyy-MM-dd hh:mm")}`
  ? days > 0 ? "Closed ".concat(days, " days ago") : hours > 0 ? "Closed ".concat(hours, " hours ago") : minutes > 0 ? "Closed ".concat(minutes, " min ago") : "Closed ".concat(seconds, " sec ago") : days > 0 ? "".concat(days, "+ days Left") : hours > 0 ? "".concat(hours, "+ hours Left") : minutes > 0 ? "".concat(minutes, "+ min Left") : "".concat(seconds, " sec Left");
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      paddingLeft: "4px",
      paddingRight: "4px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    className: "count-down",
    sx: {
      color: theme.palette.text.secondary
    }
  }, message, " "), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    className: "count-down",
    sx: {
      color: theme.palette.text.secondary
    }
  }, "Total ", totalVotes, " "));
}
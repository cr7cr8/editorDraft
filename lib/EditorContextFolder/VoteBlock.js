"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = VoteBlock;

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

var _styles = require("@mui/material/styles");

var _material = require("@mui/material");

var _EditorContextProvider = require("../EditorContextProvider");

var _iconsMaterial = require("@mui/icons-material");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function VoteBlock(props) {
  var theme = (0, _styles.useTheme)();

  var _useContext = (0, _react.useContext)(_EditorContextProvider.EditorContext),
      editorState = _useContext.editorState,
      setEditorState = _useContext.setEditorState,
      voteArr = _useContext.voteArr,
      setVoteArr = _useContext.setVoteArr,
      voteTopic = _useContext.voteTopic,
      setVoteTopic = _useContext.setVoteTopic,
      pollDuration = _useContext.pollDuration,
      setPollDuration = _useContext.setPollDuration,
      voteId = _useContext.voteId,
      setVoteId = _useContext.setVoteId;

  var colorObj = theme.colorObj;
  var _props$blockProps = props.blockProps,
      readOnly = _props$blockProps.readOnly,
      setReadOnly = _props$blockProps.setReadOnly,
      markingVoteBlock = _props$blockProps.markingVoteBlock;
  (0, _react.useEffect)(function () {
    if (voteArr.length === 0) {
      setVoteArr([""]);
    }

    setVoteId("VoteId-" + Date.now());
    return function () {
      setVoteId(function (pre) {
        return "";
      });
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      // bgcolor: "pink", 
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "8px",
      // backgroundColor: theme.palette.action.disabledBackground,
      // backgroundColor: theme.isLight
      //     ? `rgba( ${hexToRgb(colorObj[100]).r}, ${hexToRgb(colorObj[100]).g}, ${hexToRgb(colorObj[100]).b},   0.5)`
      //     : `rgba( ${hexToRgb(colorObj[900]).r}, ${hexToRgb(colorObj[900]).g}, ${hexToRgb(colorObj[900]).b},   0.5)`,
      position: "relative",
      "& label": {
        fontSize: theme.scaleSizeObj(0.8)
      },
      "& input": {
        fontSize: theme.sizeObj
      },
      "& textarea": {
        fontSize: theme.sizeObj
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    sx: {
      fontSize: "2rem",
      width: "2.5rem",
      height: "2.5rem",
      position: "absolute",
      right: 0,
      zIndex: 100
    },
    size: "small",
    contentEditable: false,
    suppressContentEditableWarning: true,
    onClick: function onClick() {
      markingVoteBlock(props.block.getKey(), true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.Close, {
    fontSize: "large",
    sx: {
      "&:hover": {
        bgcolor: "rgba(255,255,255,0.5)",
        borderRadius: "1000px"
      }
    }
  })), /*#__PURE__*/_react["default"].createElement(_material.TextField, {
    contentEditable: false,
    suppressContentEditableWarning: true,
    id: "outlined-textarea",
    label: voteTopic ? "" : "Eneter Topic",
    multiline: true,
    value: voteTopic,
    onChange: function onChange(e) {
      setVoteTopic(e.target.value);
    } //placeholder="Enter Topic"
    ,
    sx: {
      width: "100%",
      // bgcolor:"transparent",
      // bgcolor: theme.palette.background.default,
      alignItems: "center",
      "& > div": {
        width: "100%"
      },
      '& label.Mui-focused': {
        color: theme.isLight ? colorObj[300] : colorObj[500]
      },
      '& .MuiFilledInput-root.MuiFilledInput-underline::after': {
        borderBottomColor: theme.isLight ? colorObj[300] : colorObj[500]
      },
      '& .MuiFilledInput-root.MuiFilledInput-underline::before': {
        borderBottomColor: theme.isLight ? colorObj[300] : colorObj[500] //content: `"hihihi"`,

      },
      '& .MuiFilledInput-root.MuiFilledInput-underline': {
        bgcolor: "transparent"
      } // '& .MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-filled.MuiFormLabel-root.MuiFormLabel-colorPrimary': {
      //     color: theme.palette.text.secondary,
      // },
      // '& .MuiFilledInput-root.MuiFilledInput-underline.MuiInputBase-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.MuiInputBase-multiline': {
      //     bgcolor: "transparent",
      // },
      // '& .MuiFilledInput-root.MuiFilledInput-underline.MuiInputBase-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.MuiInputBase-multiline::after': {
      //     borderBottomColor: theme.isLight ? colorObj[300] : colorObj[500],
      // },

    },
    variant: "filled",
    onFocus: function onFocus(e) {
      setReadOnly(true);
      var newSelection = editorState.getSelection().merge({
        hasFocus: false
      });
      setTimeout(function () {
        setEditorState(_draftJs.EditorState.acceptSelection(editorState, newSelection));
      }, 0);
    },
    onBlur: function onBlur(e) {
      setReadOnly(false);
    }
  }), voteArr.map(function (item, index, arr) {
    return /*#__PURE__*/_react["default"].createElement(_material.Box, {
      sx: {
        width: "100%",
        //bgcolor: "orange",
        display: "flex",
        alignItems: "center"
      },
      key: index
    }, /*#__PURE__*/_react["default"].createElement(_material.TextField, {
      contentEditable: false,
      suppressContentEditableWarning: true,
      id: "outlined-textarea" + index,
      label: "Choice " + (index + 1),
      onKeyDown: function onKeyDown(e) {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
          voteArr.splice(index + 1, 0, "");
          setVoteArr(function (pre) {
            return _toConsumableArray(voteArr);
          });
          setTimeout(function () {
            document.getElementById("outlined-textarea" + (index + 1)).focus();
          }, 0);
        } else if (e.code === "ArrowUp") {
          setTimeout(function () {
            document.getElementById("outlined-textarea" + Math.max(0, index - 1)).focus();
          }, 0);
        } else if (e.code === "ArrowDown") {
          setTimeout(function () {
            document.getElementById("outlined-textarea" + Math.min(voteArr.length - 1, index + 1)).focus();
          }, 0);
        } else if (e.code === "Backspace") {
          if (!e.target.value && voteArr.length > 1) {
            voteArr.splice(index, 1);
            setVoteArr(voteArr);
            setTimeout(function () {
              document.getElementById("outlined-textarea" + Math.max(0, index - 1)).focus();
            }, 0);
          }
        }
      },
      sx: {
        width: "90%",
        transform: "translateX(8px)",
        //   bgcolor: "skyblue", 
        bgcolor: theme.palette.background["default"],
        alignItems: "center",
        "& > div": {
          width: "100%"
        },
        '& label.Mui-focused': {
          color: theme.isLight ? colorObj[300] : colorObj[500]
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: theme.isLight ? colorObj[300] : colorObj[500]
          },
          '&:hover fieldset': {
            borderColor: theme.isLight ? colorObj[300] : colorObj[500]
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.isLight ? colorObj[300] : colorObj[500]
          }
        }
      },
      placeholder: "Choice " + (index + 1),
      value: voteArr[index],
      onFocus: function onFocus(e) {
        setReadOnly(true);
        var newSelection = editorState.getSelection().merge({
          hasFocus: false
        });
        setTimeout(function () {
          setEditorState(_draftJs.EditorState.acceptSelection(editorState, newSelection));
        }, 0);
      },
      onBlur: function onBlur(e) {
        setReadOnly(false);
      },
      onChange: function onChange(e) {
        setVoteArr(function (pre) {
          pre[index] = e.target.value;
          return _toConsumableArray(pre);
        });
      }
    }), voteArr.length !== 1 && /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      sx: {
        fontSize: "2rem",
        width: "2.5rem",
        height: "2.5rem",
        position: "absolute",
        right: 0
      },
      disabled: voteArr.length <= 1,
      size: "small",
      contentEditable: false,
      suppressContentEditableWarning: true,
      onClick: function onClick() {
        setVoteArr(function (pre) {
          return pre.filter(function (item, pos) {
            return pos !== index;
          });
        });
      }
    }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.RemoveCircleOutline, {
      fontSize: "large",
      sx: {
        "&:hover": {
          bgcolor: "rgba(255,255,255,0.5)",
          borderRadius: "1000px"
        }
      }
    })), voteArr.length - 1 === index && /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      sx: {
        fontSize: "2rem",
        width: "2.5rem",
        height: "2.5rem",
        //margin:"auto auto",
        position: "absolute",
        right: 0,
        transform: "translateX(".concat(voteArr.length === 1 ? "0" : "100%", ")")
      },
      size: "small",
      contentEditable: false,
      suppressContentEditableWarning: true,
      onClick: function onClick() {
        setVoteArr(function (pre) {
          return [].concat(_toConsumableArray(pre), [""]);
        });
      }
    }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.AddCircleOutline, {
      fontSize: "large",
      sx: {
        "&:hover": {
          bgcolor: "rgba(255,255,255,0.5)",
          borderRadius: "1000px"
        }
      }
    })));
  }), /*#__PURE__*/_react["default"].createElement(TimeBar, null));
}

function TimeBar() {
  var theme = (0, _styles.useTheme)();

  var _useContext2 = (0, _react.useContext)(_EditorContextProvider.EditorContext),
      pollDuration = _useContext2.pollDuration,
      setPollDuration = _useContext2.setPollDuration;

  var colorObj = theme.colorObj;
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      width: "100%",
      height: "5rem",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      overflow: "hidden",
      transition: "height, 300ms",
      // bgcolor: "yellow",
      position: "relative"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h6",
    sx: {
      position: "absolute",
      transform: "translateY(-50%)",
      right: 10,
      color: "text.secondary"
    }
  }, "Poll duration ", "".concat(pollDuration.d, "d").concat(pollDuration.h, "h").concat(pollDuration.m, "m")), /*#__PURE__*/_react["default"].createElement(_material.Slider, {
    size: "medium",
    valueLabelDisplay: "auto" //       value={zoom}
    ,
    valueLabelFormat: function valueLabelFormat(numOfMins_) {
      return numOfMins_ + "days";
    },
    onChange: function onChange(e, value) {
      setPollDuration(function (pre) {
        return _objectSpread(_objectSpread({}, pre), {}, {
          d: value
        });
      });
    },
    min: 0,
    max: 7,
    step: 1,
    marks: true,
    value: pollDuration.d //   value={200}
    ,
    "aria-labelledby": "Zoom" //  classes={{ root: classes.slider }}
    //  onChange={(e, zoom) => setZoom(zoom)}
    ,
    sx: {
      m: "auto, auto",
      width: "20%",
      color: theme.isLight ? colorObj[300] : colorObj[500],
      transform: "translateY(10px)"
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.Slider, {
    size: "medium",
    valueLabelDisplay: "auto" //       value={zoom}
    ,
    valueLabelFormat: function valueLabelFormat(numOfMins_) {
      return numOfMins_ + " hours";
    },
    onChange: function onChange(e, value) {
      setPollDuration(function (pre) {
        return _objectSpread(_objectSpread({}, pre), {}, {
          h: value
        });
      });
    },
    min: 0,
    max: 23,
    step: 1,
    marks: true,
    value: pollDuration.h //   value={200}
    ,
    "aria-labelledby": "Zoom" //  classes={{ root: classes.slider }}
    //  onChange={(e, zoom) => setZoom(zoom)}
    ,
    sx: {
      m: "auto, auto",
      width: "30%",
      color: theme.isLight ? colorObj[300] : colorObj[500],
      transform: "translateY(10px)"
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.Slider, {
    size: "medium",
    valueLabelDisplay: "auto" //       value={zoom}
    ,
    valueLabelFormat: function valueLabelFormat(numOfMins_) {
      return numOfMins_ + "mins";
    },
    onChange: function onChange(e, value) {
      setPollDuration(function (pre) {
        return _objectSpread(_objectSpread({}, pre), {}, {
          m: value
        });
      });
    },
    min: 0,
    max: 59,
    step: 1,
    marks: true,
    value: pollDuration.m //   value={200}
    ,
    "aria-labelledby": "Zoom" //  classes={{ root: classes.slider }}
    //  onChange={(e, zoom) => setZoom(zoom)}
    ,
    sx: {
      m: "auto, auto",
      width: "40%",
      color: theme.isLight ? colorObj[300] : colorObj[500],
      transform: "translateY(10px)"
    }
  }));
}
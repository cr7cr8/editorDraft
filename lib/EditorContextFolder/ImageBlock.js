"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ImageBlock;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@mui/material/styles");

var _material = require("@mui/material");

var _EditorContextProvider = require("../EditorContextProvider");

var _reactEasyCrop = _interopRequireDefault(require("react-easy-crop"));

var _cropImage = _interopRequireDefault(require("./cropImage"));

var _iconsMaterial = require("@mui/icons-material");

var _excluded = ["imageUrl", "imageId", "imageSnap", "blockKey", "numOfImage"],
    _excluded2 = ["imageUrl", "imageId", "imageSnap", "blockKey", "numOfImage"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var arr = [[{
  gridColumn: "1/3",
  gridRow: "1/3"
}], [{
  gridColumn: "1/2",
  gridRow: "1/3"
}, {
  gridColumn: "2/3",
  gridRow: "1/3"
}], [// { gridColumn: "1/2", gridRow: "1/3" },
// { gridColumn: "2/3", gridRow: "1/2" },
// { gridColumn: "2/3", gridRow: "2/3" },
{
  gridColumn: "1/2",
  gridRow: "1/2"
}, {
  gridColumn: "2/3",
  gridRow: "1/2"
}, {
  gridColumn: "3/4",
  gridRow: "1/2"
}], [{
  gridColumn: "1/2",
  gridRow: "1/2"
}, {
  gridColumn: "2/3",
  gridRow: "1/2"
}, {
  gridColumn: "1/2",
  gridRow: "2/3"
}, {
  gridColumn: "2/3",
  gridRow: "2/3"
}]];

function ImageBlock(_ref) {
  var props = _extends({}, _ref);

  var theme = (0, _styles.useTheme)();
  var colorObj = theme.colorObj;

  var _useContext = (0, _react.useContext)(_EditorContextProvider.EditorContext),
      imageObj = _useContext.imageObj,
      setImageObj = _useContext.setImageObj,
      editorState = _useContext.editorState,
      setEditorState = _useContext.setEditorState;

  var _props$blockProps = props.blockProps,
      blockKey = _props$blockProps.blockKey,
      markingImageBlock = _props$blockProps.markingImageBlock;
  var target = (0, _react.useRef)();

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      size = _useState2[0],
      setSize = _useState2[1];

  var inputRef = (0, _react.useRef)();
  var numOfImage = Boolean(imageObj[blockKey]) ? imageObj[blockKey].length : 0;
  var height = (0, _react.useMemo)(function () {
    var width = size ? size.width : 0;
    return [width / 16 * 9, width / 16 * 9, width / 2, width / 3, width / 16 * 9][numOfImage];
  }, [size, numOfImage]);
  var baseGrid = [{
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr"
  }, {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr"
  }, {
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr"
  }, {
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr"
  }, {
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr"
  }][numOfImage];
  var imageHeight = size ? [{
    height: 0
  }, {
    height: size.width / 16 * 9
  }, {
    height: size.width / 2
  }, {
    height: size.width / 3
  }, {
    height: size.width / 16 * 9 / 2
  }][numOfImage] : {
    height: 0
  };

  var cssObj = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
    display: 'grid'
  }, baseGrid), {}, {
    // gridTemplateColumns: "1fr 1fr",
    // gridTemplateRows: "1fr 1fr",
    gridGap: "2px",
    //   marginTop: "2px",
    //  marginBottom: "2px",
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: "100%",
    height: height
  }, numOfImage > 0 && {
    "& > *:nth-type(1)": _objectSpread({
      position: "relative"
    }, arr[numOfImage - 1][0])
  }), numOfImage > 1 && {
    "& > *:nth-type(2)": _objectSpread({
      position: "relative",
      backgroundColor: "#ffa"
    }, arr[numOfImage - 1][1])
  }), numOfImage > 2 && {
    "& > *:nth-type(3)": _objectSpread({
      position: "relative",
      backgroundColor: "#afa"
    }, arr[numOfImage - 1][2])
  }), numOfImage > 3 && {
    "& > *:nth-type(4)": _objectSpread({
      position: "relative",
      backgroundColor: "#aaf"
    }, arr[numOfImage - 1][3])
  }), numOfImage > 4 && {
    "& > *:nth-type( n + 5 )": {
      display: "none"
    }
  });

  (0, _react.useEffect)(function () {
    var resizeObserver = new ResizeObserver(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
          element = _ref3[0];

      //console.log(element.contentRect.width)
      setSize(element.contentRect);
    });
    resizeObserver.observe(target.current);
    return function () {
      resizeObserver.disconnect();
    };
  }, []);

  function update(e) {
    e.preventDefault();
    e.stopPropagation();

    if (e.currentTarget.files[0].name.trim().match(/\.(gif|jpe?g|tiff|png|webp|bmp)$/i)) {
      var files = e.currentTarget.files; //    console.log(URL.createObjectURL(files[0]))

      var newFileArr = [files[0] && URL.createObjectURL(files[0]), files[1] && URL.createObjectURL(files[1]), files[2] && URL.createObjectURL(files[2]), files[3] && URL.createObjectURL(files[3])].filter(function (item) {
        return Boolean(item);
      }).filter(function (item, index) {
        return index < 4;
      }).map(function (file) {
        return {
          imgId: Math.random(),
          imgUrl: file,
          imgSnap: file,
          isEditing: false
        };
      });
      setImageObj(function (pre) {
        var preBlock = pre[blockKey] ? pre[blockKey] : [];
        return _objectSpread(_objectSpread({}, pre), {}, _defineProperty({}, blockKey, [].concat(_toConsumableArray(preBlock), _toConsumableArray(newFileArr))));
      });
    }
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {
    ref: inputRef,
    type: "file",
    multiple: true,
    style: {
      display: "none"
    },
    accept: "image/*",
    onClick: function onClick(e) {
      e.currentTarget.value = null;
    },
    onChange: update
  }), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      //backgroundColor: "wheat", 
      width: "100%",
      position: "relative" // bgcolor: theme.isLight
      //     ? `rgba( ${hexToRgb(colorObj[100]).r}, ${hexToRgb(colorObj[100]).g}, ${hexToRgb(colorObj[100]).b},   0.5)`
      //     : `rgba( ${hexToRgb(colorObj[900]).r}, ${hexToRgb(colorObj[900]).g}, ${hexToRgb(colorObj[900]).b},   0.5)`,
      // ...numOfImage === 0 && {
      //     backgroundColor: theme.palette.mode === "light" ? "lightgray" : "darkgray",
      // }

    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    contentEditable: false,
    sx: cssObj,
    ref: target
  }, numOfImage >= 1 && numOfImage < 4 && /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    sx: {
      fontSize: "2rem",
      width: "2.5rem",
      height: "2.5rem",
      position: "absolute",
      right: 0,
      transform: "translateX(100%)",
      zIndex: 80
    },
    size: "small",
    contentEditable: false,
    suppressContentEditableWarning: true,
    onClick: function onClick() {
      if (!imageObj[blockKey] || imageObj[blockKey].length < 4) {
        inputRef.current.click();
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.AddCircleOutline, {
    fontSize: "large",
    sx: {
      "&:hover": {
        bgcolor: "rgba(255,255,255,0.5)",
        borderRadius: "1000px"
      }
    }
  })), numOfImage === 0 && /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    sx: {
      fontSize: "2rem",
      width: "2.5rem",
      height: "2.5rem",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translateX(-50%) translateY(-50%) scale(3)",
      zIndex: 80
    },
    size: "small",
    contentEditable: false,
    suppressContentEditableWarning: true,
    onClick: function onClick() {
      if (!imageObj[blockKey] || imageObj[blockKey].length < 4) {
        inputRef.current.click();
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.AddCircleOutline, {
    fontSize: "large",
    sx: {
      "&:hover": {
        bgcolor: "rgba(255,255,255,0.5)",
        borderRadius: "1000px"
      }
    }
  })), numOfImage === 0 && /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    sx: {
      fontSize: "2rem",
      width: "2.5rem",
      height: "2.5rem",
      position: "absolute",
      right: 0,
      // transform: "translateX(180%)",
      zIndex: 80
    },
    size: "small",
    contentEditable: false,
    suppressContentEditableWarning: true,
    onClick: function onClick() {
      markingImageBlock(blockKey, true);
      setImageObj(function (pre) {
        delete pre[blockKey];
        return _objectSpread({}, pre);
      }); // setTimeout(() => {
      //   setEditorState(EditorState.forceSelection(editorState, editorState.getSelection()))
      // }, 1000);
    }
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.Close, {
    fontSize: "large",
    sx: {
      "&:hover": {
        bgcolor: "rgba(255,255,255,0.5)",
        borderRadius: "1000px"
      }
    }
  })), Array.isArray(imageObj[blockKey]) && imageObj[blockKey].map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
      style: _objectSpread(_objectSpread({
        // backgroundColor: "pink",
        width: "100%"
      }, imageHeight), {}, {
        display: "block",
        position: "relative"
      }),
      key: index
    }, item.isEditing ? /*#__PURE__*/_react["default"].createElement(ImageAdjuster, {
      imageUrl: item.imgUrl,
      imageSnap: item.imgSnap,
      imageId: item.imgId,
      image: item.imgSnap,
      blockKey: blockKey,
      numOfImage: numOfImage
    }) : /*#__PURE__*/_react["default"].createElement(ImageSnap, {
      imageUrl: item.imgUrl,
      imageSnap: item.imgSnap,
      imageId: item.imgId,
      image: item.imgSnap,
      blockKey: blockKey,
      numOfImage: numOfImage
    })));
  }))));
}

function ImageSnap(_ref4) {
  var imageUrl = _ref4.imageUrl,
      imageId = _ref4.imageId,
      imageSnap = _ref4.imageSnap,
      blockKey = _ref4.blockKey,
      numOfImage = _ref4.numOfImage,
      props = _objectWithoutProperties(_ref4, _excluded);

  var _useContext2 = (0, _react.useContext)(_EditorContextProvider.EditorContext),
      imageObj = _useContext2.imageObj,
      setImageObj = _useContext2.setImageObj;

  function setIsEidting() {
    setImageObj(function (pre) {
      var arr = pre[blockKey].map(function (item) {
        if (item.imgId !== imageId) {
          return item;
        } else {
          return _objectSpread(_objectSpread({}, item), {}, {
            isEditing: true
          });
        }
      });
      return _objectSpread(_objectSpread({}, pre), {}, _defineProperty({}, blockKey, arr));
    });
  }

  function closeImage() {
    setImageObj(function (pre) {
      var arr = pre[blockKey].filter(function (item) {
        return item.imgId !== imageId;
      });
      return _objectSpread(_objectSpread({}, pre), {}, _defineProperty({}, blockKey, arr));
    });
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    sx: {
      fontSize: "2rem",
      width: "2.5rem",
      height: "2.5rem",
      position: "absolute",
      left: 0,
      zIndex: 80,
      bgcolor: "rgba(255,255,255,0.3)"
    },
    size: "small",
    contentEditable: false,
    suppressContentEditableWarning: true,
    onClick: function onClick() {
      //   alert("Fdsf")
      setIsEidting(); // showCroppedImage()
    }
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.Crop, {
    fontSize: "large",
    sx: {
      "&:hover": {
        bgcolor: "rgba(255,255,255,0.5)",
        borderRadius: "1000px"
      }
    }
  })), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    sx: {
      fontSize: "2rem",
      width: "2.5rem",
      height: "2.5rem",
      position: "absolute",
      right: 0,
      zIndex: 80,
      bgcolor: "rgba(255,255,255,0.3)"
    },
    size: "small",
    contentEditable: false,
    suppressContentEditableWarning: true,
    onClick: function onClick() {
      closeImage();
    }
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.Close, {
    fontSize: "large",
    sx: {
      "&:hover": {
        bgcolor: "rgba(255,255,255,0.5)",
        borderRadius: "1000px"
      }
    }
  })), /*#__PURE__*/_react["default"].createElement("img", {
    src: imageSnap,
    style: {
      objectFit: "cover",
      width: "100%",
      height: "100%"
    }
  }));
}

function ImageAdjuster(_ref5) {
  var imageUrl = _ref5.imageUrl,
      imageId = _ref5.imageId,
      imageSnap = _ref5.imageSnap,
      blockKey = _ref5.blockKey,
      numOfImage = _ref5.numOfImage,
      props = _objectWithoutProperties(_ref5, _excluded2);

  var _useContext3 = (0, _react.useContext)(_EditorContextProvider.EditorContext),
      imageObj = _useContext3.imageObj,
      setImageObj = _useContext3.setImageObj;

  var _useState3 = (0, _react.useState)({
    x: 0,
    y: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      crop = _useState4[0],
      setCrop = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      rotation = _useState6[0],
      setRotation = _useState6[1];

  var _useState7 = (0, _react.useState)(1),
      _useState8 = _slicedToArray(_useState7, 2),
      zoom = _useState8[0],
      setZoom = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      croppedAreaPixels = _useState10[0],
      setCroppedAreaPixels = _useState10[1];

  var onCropComplete = (0, _react.useCallback)(function (croppedArea, croppedAreaPixels) {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  var aspectArr = [1 / 1, 16 / 9, 1 / 1, 1 / 1, 16 / 9];

  function setIsEidting() {
    return _setIsEidting.apply(this, arguments);
  }

  function _setIsEidting() {
    _setIsEidting = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var croppedImage;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _cropImage["default"])( // dogImg,
              imageUrl, croppedAreaPixels, rotation);

            case 2:
              croppedImage = _context.sent;
              setImageObj(function (pre) {
                var arr = pre[blockKey].map(function (item) {
                  if (item.imgId !== imageId) {
                    return item;
                  } else {
                    return _objectSpread(_objectSpread({}, item), {}, {
                      isEditing: false,
                      imgSnap: croppedImage
                    });
                  }
                });
                return _objectSpread(_objectSpread({}, pre), {}, _defineProperty({}, blockKey, arr));
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _setIsEidting.apply(this, arguments);
  }

  function closeImage() {
    setImageObj(function (pre) {
      var arr = pre[blockKey].filter(function (item) {
        return item.imgId !== imageId;
      });
      return _objectSpread(_objectSpread({}, pre), {}, _defineProperty({}, blockKey, arr));
    });
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    sx: {
      fontSize: "2rem",
      width: "2.5rem",
      height: "2.5rem",
      position: "absolute",
      left: 0,
      zIndex: 80,
      bgcolor: "rgba(255,255,255,0.3)"
    },
    size: "small",
    contentEditable: false,
    suppressContentEditableWarning: true,
    onClick: function onClick() {
      setIsEidting(); // showCroppedImage()
    }
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.DoneRounded, {
    fontSize: "large",
    sx: {
      "&:hover": {
        bgcolor: "rgba(255,255,255,0.5)",
        borderRadius: "1000px"
      }
    }
  })), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    sx: {
      fontSize: "2rem",
      width: "2.5rem",
      height: "2.5rem",
      position: "absolute",
      right: 0,
      zIndex: 80,
      bgcolor: "rgba(255,255,255,0.3)"
    },
    size: "small",
    contentEditable: false,
    suppressContentEditableWarning: true,
    onClick: function onClick() {
      closeImage();
    }
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.Close, {
    fontSize: "large",
    sx: {
      "&:hover": {
        bgcolor: "rgba(255,255,255,0.5)",
        borderRadius: "1000px"
      }
    }
  })), /*#__PURE__*/_react["default"].createElement(_reactEasyCrop["default"], {
    image: imageUrl //"https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
    ,
    aspect: aspectArr[numOfImage],
    crop: crop,
    rotation: rotation,
    zoom: zoom,
    onCropChange: setCrop,
    onRotationChange: setRotation,
    onCropComplete: onCropComplete,
    onZoomChange: setZoom
  }), /*#__PURE__*/_react["default"].createElement(_material.Slider, {
    size: "medium",
    value: zoom,
    min: 1,
    max: 3,
    step: 0.1,
    "aria-labelledby": "Zoom" //  classes={{ root: classes.slider }}
    ,
    onChange: function onChange(e, zoom) {
      return setZoom(zoom);
    },
    sx: {
      //  padding: '22px 0px',
      //  marginLeft: "",
      marginLeft: "20px",
      marginRight: "20px",
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto",
      width: "90%",
      color: "skyblue"
    }
  }));
}
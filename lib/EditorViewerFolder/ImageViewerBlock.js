"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ImageViewerBlock;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _styles = require("@mui/material/styles");

var _reactImageLightbox = _interopRequireDefault(require("react-image-lightbox"));

require("react-image-lightbox/style.css");

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

function ImageViewerBlock(_ref) {
  var imgSnapArr = _ref.imgSnapArr,
      imgUrlArr = _ref.imgUrlArr;
  var theme = (0, _styles.useTheme)();
  var numOfImage = imgSnapArr.length;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var height = [width / 16 * 9, width / 16 * 9, width / 2, width / 3, width / 16 * 9][numOfImage];
  var target = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var resizeObserver = new ResizeObserver(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
          element = _ref3[0];

      //   console.log(element.contentRect.width)
      setWidth(element.contentRect.width);
    });
    resizeObserver.observe(target.current);
    return function () {
      resizeObserver.disconnect();
    };
  }, []);
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
  var arr = [[{
    gridColumn: "1/3",
    gridRow: "1/3"
  }], [{
    gridColumn: "1/2",
    gridRow: "1/3"
  }, {
    gridColumn: "2/3",
    gridRow: "1/3"
  }], [{
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
  var imageHeight = width ? [{
    height: 0
  }, {
    height: width / 16 * 9
  }, {
    height: width / 2
  }, {
    height: width / 3
  }, {
    height: width / 16 * 9 / 2
  }][numOfImage] : {
    height: 0
  };

  var cssObj = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
    display: 'grid'
  }, baseGrid), {}, {
    // gridTemplateColumns: "1fr 1fr",
    // gridTemplateRows: "1fr 1fr",
    gridGap: "2px",
    position: "relative",
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

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      photoIndex = _useState6[0],
      setPhotoIndex = _useState6[1];

  var images = imgUrlArr;
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: cssObj,
    ref: target
  }, isOpen && /*#__PURE__*/_react["default"].createElement(_reactImageLightbox["default"], {
    mainSrc: images[photoIndex],
    nextSrc: images[(photoIndex + 1) % images.length],
    prevSrc: images[(photoIndex + images.length - 1) % images.length],
    onCloseRequest: function onCloseRequest() {
      setIsOpen(false);
    },
    onMovePrevRequest: function onMovePrevRequest() {
      return setPhotoIndex(function (pre) {
        return (pre + images.length - 1) % images.length;
      });
    },
    onMoveNextRequest: function onMoveNextRequest() {
      return setPhotoIndex(function (pre) {
        return (pre + images.length + 1) % images.length;
      });
    },
    onAfterOpen: function onAfterOpen() {}
  }), imgSnapArr.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_material.Box, {
      key: index,
      sx: _objectSpread(_objectSpread({
        bgcolor: "pink",
        width: "100%"
      }, imageHeight), {}, {
        position: "relative"
      }),
      onClick: function onClick() {
        setPhotoIndex(index);
        setIsOpen(true);
      }
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item,
      style: {
        width: "100%",
        height: "100%",
        verticalAlign: "bottom",
        objectFit: "cover"
      }
    }));
  }));
}
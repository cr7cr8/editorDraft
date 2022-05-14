"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ThemeContextProvider;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@mui/material/styles");

var _material = require("@mui/material");

var _colors = require("@mui/material/colors");

var _excluded = ["cssBaseLine"],
    _excluded2 = ["ownerState", "theme"],
    _excluded3 = ["ownerState", "theme"],
    _excluded4 = ["ownerState", "theme"],
    _excluded5 = ["ownerState", "theme"],
    _excluded6 = ["ownerState", "theme"],
    _excluded7 = ["ownerState", "theme"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var colorArr = [_colors.red, _colors.pink, _colors.purple, _colors.deepPurple, _colors.indigo, _colors.blue, _colors.lightBlue, _colors.cyan, _colors.teal, _colors.green, _colors.lightGreen, _colors.lime, _colors.yellow, _colors.amber, _colors.orange, _colors.deepOrange, _colors.brown, _colors.grey, _colors.blueGrey];

function useColorObj() {
  var colorIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

  var _useState = (0, _react.useState)(colorArr[colorIndex]),
      _useState2 = _slicedToArray(_useState, 2),
      colorObj = _useState2[0],
      setColorIndex = _useState2[1];

  function setColorObj(index) {
    setColorIndex(colorArr[index]);
  }

  return [colorObj, setColorObj];
}

function ThemeContextProvider(_ref) {
  var _ref$cssBaseLine = _ref.cssBaseLine,
      cssBaseLine = _ref$cssBaseLine === void 0 ? true : _ref$cssBaseLine,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState3 = (0, _react.useState)(props.sizeObj || {
    xs: "1.5rem",
    sm: "1.5rem",
    md: "1.5rem",
    lg: "1.5rem",
    xl: "1.5rem"
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      sizeObj = _useState4[0],
      setSizeObj = _useState4[1];

  var _useColorObj = useColorObj(5),
      _useColorObj2 = _slicedToArray(_useColorObj, 2),
      colorObj = _useColorObj2[0],
      setColorObj = _useColorObj2[1];

  var scaleSizeObj = (0, _react.useCallback)(function () {
    var factor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var obj = {};
    Object.keys(sizeObj).forEach(function (itemKey) {
      var num = Number(sizeObj[itemKey].replace(/[^\d\.]/g, '')) * factor;
      var unit = String(sizeObj[itemKey].replace(/[\d\.]/g, ''));
      obj[itemKey] = num + unit;
    });
    return obj;
  }, [sizeObj]);
  var addingSizeObj = (0, _react.useCallback)(function () {
    var numOfPix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var obj = {};
    Object.keys(sizeObj).forEach(function (itemKey) {
      //  const num = Number(sizeObj[itemKey].replace(/[^\d\.]/g, '')) * factor
      //  const unit = String(sizeObj[itemKey].replace(/[\d\.]/g, ''))
      obj[itemKey] = "calc(".concat(sizeObj[itemKey], " ").concat(numOfPix >= 0 ? "+" : "-", " ").concat(Math.abs(numOfPix), "px)");
    });
    return obj;
  }, [sizeObj]);

  var _React$useState = _react["default"].useState(props.mode || 'light'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mode = _React$useState2[0],
      setMode = _React$useState2[1];

  var colorBgObj = mode === "light" ? "rgba( ".concat(hexToRgb(colorObj[100]).r, ", ").concat(hexToRgb(colorObj[100]).g, ", ").concat(hexToRgb(colorObj[100]).b, ",   0.5)") : "rgba( ".concat(hexToRgb(colorObj[900]).r, ", ").concat(hexToRgb(colorObj[900]).g, ", ").concat(hexToRgb(colorObj[900]).b, ",   0.5)");

  var myTheme = _react["default"].useMemo(function () {
    return (0, _styles.createTheme)({
      typography: {
        button: {
          textTransform: 'none'
        }
      },
      palette: {
        mode: mode,
        panelColor: mode === "light" ? "lightgray" : "darkgray",
        mentionBg: mode === "light" ? "aliceblue" : "skyblue"
      },
      sizeObj: sizeObj,
      setSizeObj: setSizeObj,
      colorArr: colorArr,
      colorObj: colorObj,
      setColorObj: setColorObj,
      colorBgObj: colorBgObj,
      setMode: setMode,
      scaleSizeObj: scaleSizeObj,
      addingSizeObj: addingSizeObj,
      mode: mode,
      isLight: mode === "light",
      isDark: mode === "dark",
      components: {
        MuiButton: {
          defaultProps: {
            variant: "contained",
            disableRipple: false
          },
          styleOverrides: {
            root: function root(_ref2) {
              var ownerState = _ref2.ownerState,
                  theme = _ref2.theme,
                  props = _objectWithoutProperties(_ref2, _excluded2);

              return [//  ownerState.variant === 'body2' &&
              (0, _styles.experimental_sx)({
                bgcolor: theme.isLight ? "rgba( ".concat(hexToRgb(colorObj[100]).r, ", ").concat(hexToRgb(colorObj[100]).g, ", ").concat(hexToRgb(colorObj[100]).b, ",   0.5)") : "rgba( ".concat(hexToRgb(colorObj[900]).r, ", ").concat(hexToRgb(colorObj[900]).g, ", ").concat(hexToRgb(colorObj[900]).b, ",   0.5)"),
                color: theme.palette.text.secondary,
                fontSize: theme.addingSizeObj(-5),
                "&:hover": {
                  bgcolor: theme.isLight ? colorObj[300] : colorObj[500]
                },
                backdropFilter: "blur(20px)"
              })];
            }
          }
        },
        MuiPaper: {
          defaultProps: {},
          styleOverrides: {
            root: function root(_ref3) {
              var ownerState = _ref3.ownerState,
                  theme = _ref3.theme,
                  props = _objectWithoutProperties(_ref3, _excluded3);

              return [//  ownerState.variant === 'body2' &&
              (0, _styles.experimental_sx)({
                fontSize: theme.sizeObj
              })];
            }
          }
        },
        MuiTypography: {
          styleOverrides: {
            root: function root(_ref4) {
              var ownerState = _ref4.ownerState,
                  theme = _ref4.theme,
                  props = _objectWithoutProperties(_ref4, _excluded4);

              return [ownerState.variant === 'body2' && (0, _styles.experimental_sx)({
                fontSize: theme.sizeObj
              })];
            }
          }
        },
        MuiSvgIcon: {
          styleOverrides: {
            root: function root(_ref5) {
              var ownerState = _ref5.ownerState,
                  theme = _ref5.theme,
                  props = _objectWithoutProperties(_ref5, _excluded5);

              return [//  ownerState.variant === 'body2' &&
              (0, _styles.experimental_sx)({
                color: theme.palette.text.secondary
              })];
            }
          }
        },
        MuiSwitch: {
          styleOverrides: {
            root: function root(_ref6) {
              var ownerState = _ref6.ownerState,
                  theme = _ref6.theme,
                  props = _objectWithoutProperties(_ref6, _excluded6);

              return [//  ownerState.variant === 'body2' &&
              theme.isDark && (0, _styles.experimental_sx)({
                "& .MuiSwitch-thumb": {
                  color: colorObj[300]
                }
              })];
            }
          }
        },
        MuiSlider: {
          styleOverrides: {
            root: function root(_ref7) {
              var ownerState = _ref7.ownerState,
                  theme = _ref7.theme,
                  props = _objectWithoutProperties(_ref7, _excluded7);

              return [//  ownerState.variant === 'body2' &&
                // theme.isDark && sx({
                //     "& .MuiSwitch-thumb": {
                //         color: colorObj[300]
                //     },
                // }),
              ];
            }
          }
        }
      }
    });
  }, [mode, sizeObj, colorObj]);

  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: myTheme
  }, cssBaseLine && /*#__PURE__*/_react["default"].createElement(_material.CssBaseline, null), props.children);
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
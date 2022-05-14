"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AvatarChip;

var _react = require("react");

var _material = require("@mui/material");

var _styles = require("@mui/material/styles");

var _multiavatar = _interopRequireDefault(require("@multiavatar/multiavatar"));

var _colors = require("@mui/material/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AvatarChip(_ref) {
  var _ref2;

  var personName = _ref.personName,
      children = _ref.children,
      _ref$downloadAvatarUr = _ref.downloadAvatarUrl,
      downloadAvatarUrl = _ref$downloadAvatarUr === void 0 ? "" : _ref$downloadAvatarUr,
      _ref$avatarPeopleList = _ref.avatarPeopleList,
      avatarPeopleList = _ref$avatarPeopleList === void 0 ? [] : _ref$avatarPeopleList,
      _ref$genAvatarLink = _ref.genAvatarLink,
      genAvatarLink = _ref$genAvatarLink === void 0 ? function () {} : _ref$genAvatarLink;
  var theme = (0, _styles.useTheme)();
  var colorObj = theme.colorObj;
  var colorBgObj = theme.colorBgObj;
  var backgroundImage = avatarPeopleList.includes(personName) ? "url(".concat(genAvatarLink(downloadAvatarUrl, personName), ")") : "url(".concat("data:image/svg+xml;base64," + btoa((0, _multiavatar["default"])(personName)), ")");
  return /*#__PURE__*/React.createElement(_material.Box //contentEditable={false} suppressContentEditableWarning={true}
  , {
    sx: (_ref2 = {
      display: "inline-flex",
      verticalAlign: "text-top",
      //verticalAlign: blockData.isSmallFont ? "text-top" : "top",
      lineHeight: 1,
      bgcolor: colorBgObj,
      alignItems: "center",
      padding: "4px",
      color: theme.isLight ? colorObj[500] : colorObj[300]
    }, _defineProperty(_ref2, "padding", "4px"), _defineProperty(_ref2, "paddingRight", "12px"), _defineProperty(_ref2, "borderRadius", "1000px"), _defineProperty(_ref2, "borderStyle", "solid"), _defineProperty(_ref2, "borderWidth", "1px"), _defineProperty(_ref2, "borderColor", "transparent"), _defineProperty(_ref2, "transition", "all 200ms ease"), _defineProperty(_ref2, "&::before", {
      content: "\"\"",
      backgroundImage: backgroundImage,
      backgroundSize: "contain",
      // paddingLeft: theme.scaleSizeObj(blockData.isSmallFont ? 1.2 : 1.2),
      // paddingRight: theme.scaleSizeObj(blockData.isSmallFont ? 0.4 : 0.5),
      width: theme.scaleSizeObj(1),
      height: theme.scaleSizeObj(1),
      transform: "scale(1.2)",
      borderRadius: "1000px",
      backgroundRepeat: "no-repeat",
      overflow: "hidden",
      //   backgroundSize: theme.sizeObj,
      backgroundPositionX: "left",
      backgroundPositionY: "center",
      display: "inline-block",
      marginRight: "7px"
    }), _defineProperty(_ref2, "&:hover", {
      //  bgcolor: theme.palette.action.hover,
      bgcolor: "transparent",
      cursor: "pointer",
      borderColor: theme.isLight ? colorObj[500] : colorObj[300]
    }), _defineProperty(_ref2, "& > *", {
      transform: "translateY(-2px)"
    }), _ref2)
  }, children);
}
/*

export default function AvatarChip({ personName, labelDom, downloadAvatarUrl = "", children }) {

    let avatarString = multiavatar(personName)
    avatarString = "data:image/svg+xml;base64," + btoa(avatarString)
    const theme = useTheme()
    const colorObj = theme.colorObj
    const colorBgObj = theme.colorBgObj




    return (
        <Chip
            variant="filled"
            sx={{
                justifyContent: "flex-start",
                //   zIndex: 1000,

                //fontSize:theme.sizeObj,
                // ...inTab === index && { bgcolor: "pink" }

                // bgcolor: "background.default",
                // borderWidth: "1px",
                // borderStyle: "solid",
                // borderColor: theme.isLight ? colorObj[500] : colorObj[300],
                color: theme.isLight ? colorObj[500] : colorObj[300],
                bgcolor: colorBgObj,


            }}

            clickable={true}

            avatar={
                <Avatar alt={personName}

                    // {...{ src: downloadAvatarUrl ? downloadAvatarUrl + "/" + personName.length*80 : avatarString }}

                    {...{ src: avatarString }}
                    sx={{
                        "&.MuiAvatar-root.MuiChip-avatar": {
                            width: theme.scaleSizeObj(1),
                            height: theme.scaleSizeObj(1),
                            transform: "scale(1.1)",
                            //marginLeft: "1px",
                            // marginRight: "-8px",
                        }


                    }}
                />}
            label={labelDom}

        />

    )



}

*/
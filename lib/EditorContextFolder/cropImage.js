"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createImage = void 0;
exports["default"] = getCroppedImg;
exports.getRadianAngle = getRadianAngle;
exports.rotateSize = rotateSize;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createImage = function createImage(url) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.addEventListener('load', function () {
      return resolve(image);
    });
    image.addEventListener('error', function (error) {
      return reject(error);
    });
    image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox

    image.src = url;
  });
};

exports.createImage = createImage;

function getRadianAngle(degreeValue) {
  return degreeValue * Math.PI / 180;
}
/**
 * Returns the new bounding area of a rotated rectangle.
 */


function rotateSize(width, height, rotation) {
  var rotRad = getRadianAngle(rotation);
  return {
    width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height)
  };
}
/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 */


function getCroppedImg(_x, _x2) {
  return _getCroppedImg.apply(this, arguments);
}

function _getCroppedImg() {
  _getCroppedImg = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(imageSrc, pixelCrop) {
    var rotation,
        flip,
        image,
        canvas,
        ctx,
        rotRad,
        _rotateSize,
        bBoxWidth,
        bBoxHeight,
        data,
        picW,
        picH,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            rotation = _args.length > 2 && _args[2] !== undefined ? _args[2] : 0;
            flip = _args.length > 3 && _args[3] !== undefined ? _args[3] : {
              horizontal: false,
              vertical: false
            };
            _context.next = 4;
            return createImage(imageSrc);

          case 4:
            image = _context.sent;
            canvas = document.createElement('canvas');
            ctx = canvas.getContext('2d');

            if (ctx) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", null);

          case 9:
            rotRad = getRadianAngle(rotation); // calculate bounding box of the rotated image

            _rotateSize = rotateSize(image.width, image.height, rotation), bBoxWidth = _rotateSize.width, bBoxHeight = _rotateSize.height; // set canvas size to match the bounding box

            canvas.width = bBoxWidth;
            canvas.height = bBoxHeight; // translate canvas context to a central location to allow rotating and flipping around the center

            ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
            ctx.rotate(rotRad);
            ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
            ctx.translate(-image.width / 2, -image.height / 2); // draw rotated image

            ctx.drawImage(image, 0, 0); // croppedAreaPixels values are bounding box relative
            // extract the cropped image using these values

            data = ctx.getImageData(pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height); // set canvas width to final desired crop size - this will clear existing context

            picW = pixelCrop.width;
            picH = pixelCrop.height; // const dimension = 600
            // if (pixelCrop.width * pixelCrop.height >= dimension * dimension) {
            //   if (pixelCrop.width >= pixelCrop.height) {
            //     picW = dimension
            //     picH = pixelCrop.height * (dimension / pixelCrop.width)
            //   }
            //   else {
            //     picH = dimension
            //     picW = pixelCrop.width * (dimension / pixelCrop.height)
            //   }
            // }

            canvas.width = picW;
            canvas.height = picH; // paste generated rotate image at the top left corner

            ctx.putImageData(data, 0, 0); // As Base64 string
            // return canvas.toDataURL('image/jpeg');
            // As a blob

            return _context.abrupt("return", new Promise(function (resolve, reject) {
              canvas.toBlob(function (file) {
                //  console.log(file)
                resolve(URL.createObjectURL(file));
              }, 'image/jpeg');
            }));

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getCroppedImg.apply(this, arguments);
}
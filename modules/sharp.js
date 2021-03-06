'use strict';

var sharp = require('sharp');

exports.process = function (fullImagePath, fullImagePathResult, size, callback) {
  // Disable experimental SIMD support - this is the default behaviour
  sharp.simd(false);

  sharp(fullImagePath)
    .resize(size[0], size[1])
    .toFile(fullImagePathResult, callback);
}

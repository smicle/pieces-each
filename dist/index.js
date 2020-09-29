"use strict";
exports.__esModule = true;
var PiecesEach = function (array, n) {
    var l = Array(Math.ceil(array.length / n));
    return Array.from(l, function (_, i) { return i; }).map(function (_, i) { return array.slice(i * n, (i + 1) * n); });
};
exports["default"] = PiecesEach;

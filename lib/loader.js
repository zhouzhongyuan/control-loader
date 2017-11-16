'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = loader;

var _loaderUtils = require('loader-utils');

function generateControl(data) {
    var sourceData = JSON.parse(data);
    var outputStr = '';
    var exportedObject = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.keys(sourceData)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            var value = sourceData[key];
            var packageName = value.substr(0, value.lastIndexOf('/'));
            var entryName = value.substr(value.lastIndexOf('/') + 1);
            outputStr += `import { ${entryName} as ${key} } from '${packageName}';\n`;
            exportedObject.push(key);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    outputStr += `\nexport default { ${exportedObject.join(', ')} };\n`;
    return outputStr;
}

function loader(source) {
    var options = (0, _loaderUtils.getOptions)(this);
    var outputStr = generateControl(source);
    return outputStr;
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This function makes string starts with current file name
 * @param errorMsg discribes error
 */
const path = require('path');
function log(errorMsg, enableConsoleLog = true) {
    const filename = `[${path.basename(__filename)}] `;
    if (enableConsoleLog)
        console.log(filename + errorMsg);
    return filename + errorMsg;
}
exports.default = log;

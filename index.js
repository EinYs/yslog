"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This function makes string starts with current file name
 * @param errorMsg discribes error
 */
const path = require('path');
function log(message, enableConsoleLog = true) {
    if (typeof message === 'object')
        message = JSON.stringify(message, null, 2);
    if (typeof message !== 'string')
        message = message.toString();
    const filename = `[${path.basename(__filename)}] `;
    if (enableConsoleLog)
        console.log(filename + message);
    return filename + message;
}
exports.default = log;

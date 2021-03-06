"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
class Logis {
    constructor(filepath, options = { enableConsoleLog: true }) {
        this.enableConsoleLog = options.enableConsoleLog;
        this.filename = `[${path.basename(filepath)}] `;
        this.prefix = '';
    }
    setPrefix(prefix) {
        this.prefix = prefix + ' : ';
    }
    log(message) {
        if (typeof message === 'object')
            message = JSON.stringify(message, null, 2);
        if (typeof message !== 'string')
            message = message.toString();
        if (this.enableConsoleLog)
            console.log(this.filename + this.prefix + message);
        return this.prefix + message;
    }
}
exports.default = Logis;
//# sourceMappingURL=index.js.map
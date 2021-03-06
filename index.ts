
const path = require('path');

export default class Logis {
    prefix: string;
    enableConsoleLog: boolean;
    filename: string;
    
    constructor(filepath:string, options:{enableConsoleLog:boolean} = {enableConsoleLog: true}){
        this.enableConsoleLog = options.enableConsoleLog
        this.filename = `[${path.basename(filepath)}] `
        this.prefix = ''
    }

    setPrefix(prefix: string){
        this.prefix = prefix + ' : '
    }

    log(message: any) {
        if(typeof message ==='object')
            message = JSON.stringify(message, null, 2)
        if(typeof message !== 'string')
            message = message.toString()

        if(this.enableConsoleLog)
            console.log(this.filename + this.prefix + message)

        return this.prefix + message
    }
}
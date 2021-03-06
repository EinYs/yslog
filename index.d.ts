export default class Logis {
    prefix: string;
    enableConsoleLog: boolean;
    filename: string;
    constructor(filepath: string, options?: {
        enableConsoleLog: boolean;
    });
    setPrefix(prefix: string): void;
    log(message: any): string;
}

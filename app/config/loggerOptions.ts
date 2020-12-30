import { LoggerOptions } from "pino";

const loggerOptions: LoggerOptions = {
    prettyPrint: {
        colorize: true
    },
    level: process.env.LOG_LEVEL || 'info'
}

export default loggerOptions;
import { LoggerOptions } from "pino";

const loggerOptions: LoggerOptions = {
    level: process.env.LOG_LEVEL || 'info'
}

export default loggerOptions;
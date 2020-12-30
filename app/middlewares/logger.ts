import pino from 'pino';
import expressPino from 'express-pino-logger';
import loggerOptions from '../config/loggerOptions';

const loggerConfig = pino(loggerOptions);

loggerConfig.info('data espectacular');

const logger = expressPino({ logger: loggerConfig });

export default logger;
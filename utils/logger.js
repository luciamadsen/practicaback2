const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;
const path = require('path');

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const developmentLogger = () => {
  return createLogger({
    level: 'debug',
    format: combine(
      colorize(),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      logFormat
    ),
    transports: [new transports.Console()]
  });
};

const productionLogger = () => {
  return createLogger({
    level: 'info',
    format: combine(
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      logFormat
    ),
    transports: [
      new transports.Console(),
      new transports.File({
        filename: path.join(__dirname, '../logs/errors.log'),
        level: 'error'
      })
    ]
  });
};

const logger = process.env.NODE_ENV === 'production' ? productionLogger() : developmentLogger();

module.exports = logger;

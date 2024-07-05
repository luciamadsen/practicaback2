const { createLogger, transports, format } = require('winston');

const logger = createLogger({
    level: 'debug',  
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    defaultMeta: { service: 'your-service-name' },  
    transports: [
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.simple()
            )
        }),
        new transports.File({ filename: 'error.log', level: 'error' })
    ]
});

if (process.env.NODE_ENV === 'production') {
    logger.add(new transports.File({ filename: 'combined.log' }));
}

module.exports = logger;

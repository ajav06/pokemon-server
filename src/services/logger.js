import winston from 'winston'

export const logger = winston.createLogger({
  level: 'error',
  transports: [
    new winston.transports.File({
      level: 'error',
      filename: 'logs/filelog-error.log',
      json: true,
      format: winston.format.combine(winston.format.timestamp({format: 'YYYY-MM-DD hh:mm:ss' }), winston.format.json())
    })
  ]
})
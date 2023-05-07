const moment = require('moment');

// Logger Middleware
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    console.log('Hello');
    next();
}

module.exports = logger;
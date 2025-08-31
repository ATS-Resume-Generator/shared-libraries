const express = require('express');
const logger = require('../lib/logger');
const { formatResponse } = require('../lib/responses');

// Middleware for logging requests
const requestLogger = (req, res, next) => {
    logger.info(`Request: ${req.method} ${req.url}`);
    next();
};

// Middleware for formatting responses
const responseFormatter = (req, res, next) => {
    res.formatResponse = (data, message = 'Success', status = 200) => {
        res.status(status).json(formatResponse(data, message, status));
    };
    next();
};

// Middleware for handling common errors
const errorHandler = (err, req, res, next) => {
    logger.error(err);
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    res.status(status).json({ error: message });
};

module.exports = {
    requestLogger,
    responseFormatter,
    errorHandler,
};
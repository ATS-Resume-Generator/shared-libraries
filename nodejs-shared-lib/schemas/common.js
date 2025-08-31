import Joi from 'joi';

export const userSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    email: Joi.string().email().required(),
    createdAt: Joi.date().default(Date.now),
});

export const productSchema = Joi.object({
    name: Joi.string().min(1).max(100).required(),
    description: Joi.string().max(500),
    price: Joi.number().positive().required(),
    category: Joi.string().valid('electronics', 'clothing', 'food', 'books').required(),
    createdAt: Joi.date().default(Date.now),
});

export const paginationSchema = Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(100).default(10),
});
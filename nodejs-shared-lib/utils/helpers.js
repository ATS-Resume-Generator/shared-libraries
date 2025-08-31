module.exports = {
    // Data transformation utility functions

    // Capitalizes the first letter of a string
    capitalize: (str) => {
        if (typeof str !== 'string') return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    // Converts a string to a number, returning null if conversion fails
    toNumber: (value) => {
        const number = Number(value);
        return isNaN(number) ? null : number;
    },

    // Merges two objects recursively
    mergeDeep: (target, source) => {
        const output = { ...target };
        for (const key in source) {
            if (source[key] instanceof Object && key in target) {
                output[key] = mergeDeep(target[key], source[key]);
            } else {
                output[key] = source[key];
            }
        }
        return output;
    },

    // Formats a date to a specified format
    formatDate: (date, format) => {
        const moment = require('moment');
        return moment(date).format(format);
    },

    // Generates a unique identifier
    generateId: () => {
        return require('crypto').randomBytes(16).toString('hex');
    },

    // Checks if an object is empty
    isEmpty: (obj) => {
        return Object.keys(obj).length === 0;
    }
};
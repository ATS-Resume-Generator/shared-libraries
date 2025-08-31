# Node.js Shared Libraries for Microservices

This project provides a collection of shared utilities designed for use in microservices architecture. It includes various modules that facilitate common tasks such as database connections, HTTP requests, logging, validation, and more.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Modules](#modules)
- [Configuration](#configuration)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the package, run the following command:

```bash
npm install nodejs-shared-lib
```

## Usage

To use the library in your microservice, import the necessary modules as follows:

```javascript
const { connectToDatabase, logger, httpClient } = require('nodejs-shared-lib');
```

## Modules

### Database Connection Utilities
- Connect to MongoDB and Redis with ease.
- Handle disconnections gracefully.

### HTTP Client
- Make HTTP requests with built-in retry logic and error handling.

### Logging Utility
- Integrated with Winston for flexible logging.

### Validation Schemas
- Define and validate incoming data using Joi.

### Error Handling
- Standardized error codes and middleware for consistent error responses.

### Configuration Loader
- Load configuration settings from environment variables with defaults.

### JWT Utilities
- Generate, verify, and decode JWT tokens for authentication.

### API Response Formatters
- Format API responses for success, error, and pagination.

### File Processing Utilities
- Parse PDF and DOCX files to extract content.

### Date/Time Formatting Helpers
- Utility functions for formatting dates and times.

### Encryption/Decryption Utilities
- Securely encrypt and decrypt data.

### Rate Limiting Helpers
- Implement rate limiting for your services.

### Health Check Utilities
- Perform health checks on services to ensure they are operational.

## Configuration

The library uses environment variables for configuration. An example `.env` file is provided as `.env.example`. Make sure to create your own `.env` file based on this template.

## Error Handling

Standardized error codes and messages are defined in `constants/errorCodes.js`. Use the provided error handling middleware to ensure consistent error responses across your services.

## Testing

Unit tests are included in the `test` directory. You can run the tests using:

```bash
npm test
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
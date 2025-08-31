// This file contains mock data and functions for testing purposes. 
// It exports mock implementations for various services.

const mockDatabaseConnection = {
    connect: jest.fn().mockResolvedValue(true),
    disconnect: jest.fn().mockResolvedValue(true),
};

const mockHttpClient = {
    get: jest.fn().mockResolvedValue({ data: 'mock data' }),
    post: jest.fn().mockResolvedValue({ data: 'mock post data' }),
};

const mockLogger = {
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
};

const mockJwt = {
    generate: jest.fn().mockReturnValue('mockToken'),
    verify: jest.fn().mockReturnValue({ userId: 'mockUserId' }),
    decode: jest.fn().mockReturnValue({ userId: 'mockUserId' }),
};

const mockResponses = {
    success: jest.fn().mockReturnValue({ status: 'success', data: {} }),
    error: jest.fn().mockReturnValue({ status: 'error', message: 'mock error' }),
};

module.exports = {
    mockDatabaseConnection,
    mockHttpClient,
    mockLogger,
    mockJwt,
    mockResponses,
};
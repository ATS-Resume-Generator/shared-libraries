export interface Config {
    port: number;
    mongoUri: string;
    redisUri: string;
    jwtSecret: string;
    logLevel: 'info' | 'warn' | 'error' | 'debug';
}

export interface DatabaseConnection {
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
}

export interface HttpClient {
    get: (url: string, options?: object) => Promise<any>;
    post: (url: string, data: any, options?: object) => Promise<any>;
    put: (url: string, data: any, options?: object) => Promise<any>;
    delete: (url: string, options?: object) => Promise<any>;
}

export interface Logger {
    info: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
    debug: (message: string) => void;
}

export interface JwtToken {
    generate: (payload: object) => string;
    verify: (token: string) => object | null;
    decode: (token: string) => object | null;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    pagination?: {
        total: number;
        page: number;
        limit: number;
    };
}

export interface ValidationSchema {
    validate: (data: object) => { error?: object; value?: object };
}

export interface ErrorResponse {
    code: string;
    message: string;
}

export interface HealthCheck {
    status: string;
    uptime: number;
}

export interface FileProcessor {
    parsePdf: (filePath: string) => Promise<string>;
    parseDocx: (filePath: string) => Promise<string>;
}

export interface Encryption {
    encrypt: (data: string, key: string) => string;
    decrypt: (data: string, key: string) => string;
}

export interface RateLimiter {
    limit: (req: any, res: any, next: any) => void;
}

export interface HealthCheckUtil {
    check: () => Promise<HealthCheck>;
}
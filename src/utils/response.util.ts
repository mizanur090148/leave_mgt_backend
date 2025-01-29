export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
    error?: any;
}

export function formatResponse<T>(
    success: boolean,
    message: string,
    data?: T,
    error?: any
): ApiResponse<T> {
    return {
        success,
        message,
        data,
        error,
    };
}

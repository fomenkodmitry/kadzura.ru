import {
    ACCESS_CONTROL_ALLOW_ORIGIN_HEADER,
    CACHE_CONTROL_HEADER,
    CONTENT_TYPE_HEADER, MULTIPART_FORM_DATA,
    PRAGMA_HEADER,
    TIMEOUT_HEADER
} from "../constants/requestHeader";
import {ErrorDto} from "../models/ErrorDto";

class RestService {
    private readonly baseUrl;

    private static instance: RestService | undefined;

    constructor() {
        this.baseUrl = process.env.REACT_APP_API_URL;

        if (!RestService.instance) {
            RestService.instance = this;
        }
        return RestService.instance;
    }

    private defaultRequestHeaders: Record<string, string> = {
        [PRAGMA_HEADER]: 'no-cache',
        [CACHE_CONTROL_HEADER]: 'no-cache',
        [CONTENT_TYPE_HEADER]: 'application/json',
        [TIMEOUT_HEADER]: '5000',
        [ACCESS_CONTROL_ALLOW_ORIGIN_HEADER]: '*',
    };

    private async request<T>(url: string, options: RequestInit = {}): Promise<T> {
        const requestUrl = this.baseUrl + url;
        const requestOptions: RequestInit = {
            ...options,
            headers: {
                ...this.defaultRequestHeaders,
                ...options.headers,
            },
        };

        const requestHeaders = requestOptions.headers as Record<string, string>;
        // Remove CONTENT_TYPE so that, browser setup it with actual boundary
        if (requestHeaders[CONTENT_TYPE_HEADER] === MULTIPART_FORM_DATA) {
            delete requestHeaders[CONTENT_TYPE_HEADER];
        }

        const response = await fetch(requestUrl, requestOptions);
        return this.handleResponse(response);
    }

    private async handleResponse<T>(response: Response): Promise<T> {
        if (!response.ok) {
            const body = (await response.json()) as ErrorDto;
            const errorMessage = body?.error?.description ?? body?.error?.code;
            throw new Error(errorMessage);
        }

        const responseBody = await response.text();
        return responseBody.length ? JSON.parse(responseBody) : '';
    }

    addDefaultHeader(key: string, value: string) {
        this.defaultRequestHeaders = {
            ...this.defaultRequestHeaders,
            [key]: value,
        };
    }

    removeDefaultHeader(key: string) {
        const { [key]: removedHeader, ...restHeaders } = this.defaultRequestHeaders;
        this.defaultRequestHeaders = restHeaders;
    }

    GET<TResponse>(url: string, options?: RequestInit): Promise<TResponse> {
        return this.request<TResponse>(url, { ...options, method: 'GET' });
    }
    POST<TResponse>(url: string, options?: RequestInit): Promise<TResponse> {
        return this.request<TResponse>(url, { ...options, method: 'POST' });
    }
    PUT<TResponse>(url: string, options?: RequestInit): Promise<TResponse> {
        return this.request<TResponse>(url, { ...options, method: 'PUT' });
    }
    DELETE<TResponse>(url: string, options?: RequestInit): Promise<TResponse> {
        return this.request<TResponse>(url, { ...options, method: 'DELETE' });
    }
    
    public static readonly GetInstance = new RestService();
}

export { RestService };

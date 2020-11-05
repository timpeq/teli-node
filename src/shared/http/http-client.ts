import axios, {AxiosInstance, AxiosRequestConfig, Method,} from 'axios';

export default class HttpClient {
    private axiosInstance: AxiosInstance;
    private _callApiSIDToken: string;
    private _apiToken: string;

    constructor(callApiSIDToken: string, apiToken: string) {
        this.axiosInstance = axios.create();
        this._callApiSIDToken = callApiSIDToken;
        this._apiToken = apiToken;
    }

    get callApiSIDToken(): string {
        return this._callApiSIDToken;
    }

    get apiToken(): string {
        return this._apiToken;
    }

    public async fetch<T>(
        method: Method,
        url: string,
        data: any = {},
        addtionalConfig: Partial<AxiosRequestConfig> = {},
    ): Promise<T> {
        const config: AxiosRequestConfig = {
            method: <Method>method,
            url,
            auth: {
                username: this.apiToken,
                password: ''
            },
            params: {
                token: this.apiToken
            },
            ...addtionalConfig,
        };

        Object.keys(data).forEach((key) => {
            if (data[key] === null || data[key] === '') {
                delete data[key];
            }
        });

        if (typeof data === "object") {
            config.params = {
                ...config.params,
                ...data,
            };
        }

        config.data = data;

        const response = await this.axiosInstance.request(config);

        return response.data;
    }
}

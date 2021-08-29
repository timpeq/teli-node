export default class HttpClient {
    private _callApiSIDToken: string;
    private _apiToken: string;

    constructor(callApiSIDToken: string, apiToken: string) {
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
        method: string,
        url: string,
        data: any = {},
        additionalConfig: Partial<RequestInit> = {},
    ): Promise<T> {
        console.log(method)
        const config: RequestInit = {
            method: method,
            ...additionalConfig,
        };

        Object.keys(data).forEach((key) => {
            if (data[key] === null || data[key] === '') {
                delete data[key];
            }
        });

        // if (typeof data === "object") {
        //     config.params = {
        //         ...config.params,
        //         ...data,
        //     };
        // }
        // config.data = data;

        var fetchURL = new URL(url);
        fetchURL.search = new URLSearchParams({token:this.apiToken}).toString();
        console.log(fetchURL.search);
        const response = await fetch(fetchURL, config);

        return response.json();
        
    }
}

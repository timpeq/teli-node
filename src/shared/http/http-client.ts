export default class HttpClient {
    readonly callApiSIDToken: string;
    readonly apiToken: string;

    constructor(callApiSIDToken: string, apiToken: string) {
        this.callApiSIDToken = callApiSIDToken;
        this.apiToken = apiToken;
    }

    public async fetch<T>(
        method: string,
        url: string,
        data: any = {},
        additionalConfig: Partial<RequestInit> = {},
    ): Promise<T> {
        const config: RequestInit = {
            method: method,
            ...additionalConfig,
        };

        Object.keys(data).forEach((key) => {
            if (data[key] === null || data[key] === '') {
                console.debug(`http fetch is removing blank or null data. Key: ${key}  Data: ${data}`);
                delete data[key];
            }
        });

        var fetchURL = new URL(url);
        fetchURL.search = new URLSearchParams({token:this.apiToken}).toString();
    
        const response = await fetch(fetchURL, config);

        return response.json();
        
    }
}

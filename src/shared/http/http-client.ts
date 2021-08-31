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
//        additionalConfig: Partial<RequestInit> = {}, // TODO: Is this used anywhere?
    ): Promise<T> {
        let config:RequestInit;
        config = {
            method: method,
        };

        if (method === "POST" || method ==="PUT"){
          config.body = data;
        }

        Object.keys(data).forEach((key) => {
            if (data[key] === null || data[key] === '' || data[key] === undefined) {
                delete data[key];
            }
        });

        var fetchURL = new URL(url);
        fetchURL.search = new URLSearchParams({token:this.apiToken, ...data}).toString();
        const response = await fetch(fetchURL, config);
        const body = await response.json();

        return body;
    }
}

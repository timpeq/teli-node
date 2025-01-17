import * as queryString from "https://deno.land/x/querystring@v1.0.2/mod.js";

export function parseQueryString(query: string) {
    if (query.startsWith('?')) {
        query = query.replace('?', '');
    }
    const parsed: any = queryString.parse(query);
    const keysToBeParsedAsInt: Array<string> = ['page', 'limit'];

    keysToBeParsedAsInt.forEach((key: string) => {
        if (parsed[key] && parsed[key] !== '') {
            parsed[key] = parseInt(parsed[key], 10);
        }
    });
    return parsed;
}

export function generateQueryString(payload: any) {
    return queryString.stringify(payload);
}

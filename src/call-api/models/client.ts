export default interface Client{
    sid: string;
    date_created: string;
    date_updated: string;
    account_sid: string;
    api_version: string;
    friendly_name: string;
    login: string;
    password: string;
    status: string;
    voice_method: string;
    voice_fallback_method: string;
    uri: string;
}
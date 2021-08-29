import {StatusCallbackEventEnum} from "../enums/status-callback-event.enum.ts";

export default interface MakeCallDto {
    From: number;
    To: number;
    Url: string;
    Method?: string;
    FallbackUrl?: string;
    FallbackMethod?: string;
    StatusCallbackEvent?: StatusCallbackEventEnum | string;
    StatusCallback?: string;
    StatusCallbackMethod?: string;
    Timeout?: number;
}
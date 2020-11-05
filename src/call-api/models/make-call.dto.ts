import {StatusCallbackEventEnum} from "../enums/status-callback-event.enum";

export default class MakeCallDto {
    From: number;
    To: number;
    Url: string;
    Method?: string = 'POST';
    FallbackUrl?: string;
    FallbackMethod?: string = 'POST';
    StatusCallbackEvent?: StatusCallbackEventEnum | string = 'none';
    StatusCallback?: string = 'none';
    StatusCallbackMethod?: string = 'POST';
    Timeout?: number = 60;
}
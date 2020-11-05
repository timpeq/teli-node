import HttpClient from "../../shared/http/http-client";
import SendMmsEmbedDto from "../models/send-mms-embed.dto";
import SendMmsUrlDto from "../models/send-mms-url.dto";
import IMMSBuilder from "../contracts/mms-builder.interface";

const MMSBuilder = (httpClient: HttpClient): IMMSBuilder => {
    return {
        sendEmbedded: function(payload: SendMmsEmbedDto): Promise<String> {
            return httpClient.fetch('POST' , `https://sms.teleapi.net/mms/send`, payload);
        },
        sendUrl: function(payload: SendMmsUrlDto): Promise<String> {
            return httpClient.fetch('GET', `https://sms.teleapi.net/mms/send`, payload);
        }
    }
}

export default MMSBuilder;
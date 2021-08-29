import SendSmsDto from "../models/send-sms.dto.ts";
import ISMSBuilder from "../contracts/sms-builder.interface.ts";
import GetSmsRecordDto from "../models/get-sms-record.dto.ts";
import HttpClient from "../../shared/http/http-client.ts";

const SMSBuilder = (httpClient: HttpClient): ISMSBuilder => {
    return {
        send: function(payload: SendSmsDto): Promise<string> {
            return httpClient.fetch('GET', `https://sms.teleapi.net/sms/send`, payload);
        },
        getRecords: function(startDate: string, endDate: string, payload?: GetSmsRecordDto): Promise<string> {
            return httpClient.fetch('GET', `https://cdr.teleapi.net/sms/${startDate}/${endDate}`, payload);
        },
    }
}

export default SMSBuilder;
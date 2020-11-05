import SendSmsDto from "../models/send-sms.dto";
import ISMSBuilder from "../contracts/sms-builder.interface";
import GetSmsRecordDto from "../models/get-sms-record.dto";
import HttpClient from "../../shared/http/http-client";

const SMSBuilder = (httpClient: HttpClient): ISMSBuilder => {
    return {
        send: function(payload: SendSmsDto): Promise<String> {
            return httpClient.fetch('GET', `https://sms.teleapi.net/sms/send`, payload);
        },
        getRecords: function(startDate: string, endDate: string, payload?: GetSmsRecordDto): Promise<String> {
            return httpClient.fetch('GET', `https://cdr.teleapi.net/sms/${startDate}/${endDate}`, payload);
        },
    }
}

export default SMSBuilder;
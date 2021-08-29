import HttpClient from "../../shared/http/http-client.ts";
import ICallBuilder from "../contracts/call-builder.interface.ts";
import CallRecord from "../models/recording.ts";
import GetCallRecordDto from "../models/get-call-record.dto.ts";

const CallBuilder = (httpClient: HttpClient): ICallBuilder => {
    return {
        listRecordings: function (): Promise<Array<CallRecord>> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/recordings/list')
        },
        getRecording: function (recording_id): Promise<CallRecord>{
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/recordings/get', {
                recording_id
            })
        },
        removeRecording: function (recording_id): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/recordings/remove', {
                recording_id
            })
        },
        getRecords: function (startDate: string, endDate: string, payload: GetCallRecordDto): Promise<Response> {
            return httpClient.fetch('GET', `https://cdr.teleapi.net/cdr/${startDate}/${endDate}`, payload);
        },
    }
}

export default CallBuilder;
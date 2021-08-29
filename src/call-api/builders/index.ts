import HttpClient from "../../shared/http/http-client.ts";
import MakeCallDto from "../models/make-call.dto.ts";
import CreateCallQueueDto from "../models/create-call-queue.dto.ts";
import CreateCallClientDto from "../models/create-call-client.dto.ts";
import CallQueue from "../models/call-queue.ts";
import Call from "../models/call.ts";
import {generateQueryString} from "../../shared/url/url-formatter.ts";
import ChangeClientPasswordDto from "../models/change-client-password.dto.ts";
import Client from "../models/client.ts";
import ICallApiBuilder from "../contracts/call-api-builder.interface.ts";

const CallApiBuilder = (httpClient: HttpClient): ICallApiBuilder => {
    return {
        setIncomingCallURL(did: number, url: string): Promise<Response> {
            return httpClient.fetch('POST', 'https://api.teleapi.net/user/dids/callapi', {
                did,
                url
            });
        },
        list(): Promise<Array<Call>> {
            return httpClient.fetch('GET', `https://api.teleapi.net/call/2012-04-24/Accounts/${httpClient.callApiSIDToken}/Calls.json`)
        },
        detail(call_sid: number): Promise<Call> {
            return httpClient.fetch('GET', `https://api.teleapi.net/call/2012-04-24/Accounts/${httpClient.callApiSIDToken}/Calls.json/${call_sid}`)
        },
        make(payload: MakeCallDto): Promise<Call> {
            return httpClient.fetch('POST', `https://api.teleapi.net/call/2012-04-24/Accounts/${httpClient.callApiSIDToken}/Calls.json`, generateQueryString(payload))
        },
        createQueue(payload: CreateCallQueueDto): Promise<CallQueue> {
            return httpClient.fetch('POST', 'https://api.teleapi.net/callqueue/provisioning', payload)
        },
        listConference(): Promise<Response> {
            return httpClient.fetch('GET',`https://api.teleapi.net/call/2012-04-24/Accounts/${httpClient.callApiSIDToken}/Conferences.json`)
        },
        getConference(conference_sid: number): Promise<Response> {
            return httpClient.fetch('GET',`https://api.teleapi.net/call/2012-04-24/Accounts/${httpClient.callApiSIDToken}/Conferences/${conference_sid}.json`)
        },
        listConferenceParticipant(conference_sid: number, call_sid: number): Promise<Response> {
            return httpClient.fetch('GET',`https://api.teleapi.net/call/2012-04-24/Accounts/${httpClient.callApiSIDToken}/Conferences/${conference_sid}/Participants/${call_sid}.json`)
        },
        createClient(payload: CreateCallClientDto): Promise<Client> {
                return httpClient.fetch('POST', `https://api.teleapi.net/call/2012-04-24/Accounts/${httpClient.callApiSIDToken}/Clients.json`, generateQueryString(payload))
        },
        changeClientPassword(client_id: number, payload: ChangeClientPasswordDto): Promise<Response> {
            return httpClient.fetch('POST', `https://api.teleapi.net/call/2012-04-24/Accounts/${httpClient.callApiSIDToken}/Clients.json/${client_id}`, payload)
        },
        deleteClient(client_id: number): Promise<Response> {
            return httpClient.fetch('DELETE', `https://api.teleapi.net/call/2012-04-24/Accounts/${httpClient.callApiSIDToken}/Clients.json/${client_id}`)
        },
        listClient(): Promise<Array<Client>> {
            return httpClient.fetch('GET',`https://api.teleapi.net/call/2012-04-24/Accounts/${httpClient.callApiSIDToken}/Clients.json`)
        },
        listRecordings(): Promise<Response> {
            return httpClient.fetch('GET',`https://api.teleapi.net/call/2012-04-24/Accounts/${httpClient.callApiSIDToken}/Recordings.json`);
        },
        listCallRecordings(call_sid: number): Promise<Response> {
            return httpClient.fetch('GET', `https://api.teleapi.net/call/2012-04-24/Accounts/${httpClient.callApiSIDToken}/Calls/${call_sid}/Recordings.json`)
        },
        deleteRecordingRecords(recording_sid: number): Promise<Response> {
            return httpClient.fetch('DELETE', `https://api.teleapi.net/call/2012-04-24/Accounts/${httpClient.callApiSIDToken}/Recordings.json/${recording_sid}`)
        },
    }
}

export default CallApiBuilder;
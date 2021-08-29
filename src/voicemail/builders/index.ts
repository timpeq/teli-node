import IVoicemailBuilder from "../contracts/voicemail-builder.interface.ts";
import CreateVoicemailAccountDto from "../models/create-voicemail-account.dto.ts";
import HttpClient from "../../shared/http/http-client.ts";
import Voicemail from "../models/voicemail.ts";

const VoicemailBuilder = (httpClient: HttpClient): IVoicemailBuilder => {
    return {
        createAccount: function (payload: CreateVoicemailAccountDto): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/voicemail/inbox/create', payload)
        },
        getAccount: function (inbox_id: number): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/voicemail/inbox/get', {
                inbox_id
            })
        },
        listAccount: function (): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/voicemail/inbox/list')
        },
        updateAccount: function (inbox_id, payload): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/voicemail/inbox/update', {
                inbox_id,
                ...payload
            })
        },
        removeAccount: function (inbox_id: number): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/voicemail/inbox/remove', {
                inbox_id
            })
        },
        addInboxEmail: function (inbox_id: number, email_address: string): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/voicemail/inbox/email/add', {
                inbox_id,
                email_address
            })
        },
        removeInboxEmail: function (inbox_id: number, email_id: number): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/voicemail/inbox/email/remove', {
                inbox_id,
                email_id
            })
        },
        listVoicemail: function (inbox_id: number): Promise<Array<Voicemail>> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/voicemail/inbox/vms/list', {
                inbox_id
            })
        },
        getVoicemail: function (inbox_id: number, message_id: number, raw: boolean): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/voicemail/inbox/vms/get', {
                inbox_id,
                message_id,
                raw,
            })
        },
        removeVoicemail: function (inbox_id, message_id): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/voicemail/inbox/vms/remove', {
                inbox_id,
                message_id
            })
        }
    }
}

export default VoicemailBuilder;
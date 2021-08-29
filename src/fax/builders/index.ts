import HttpClient from "../../shared/http/http-client.ts";
import IFaxBuilder from "../contracts/fax-builder.interface.ts";
import SendFaxDto from "../models/send-fax.dto.ts";
import Fax from "../models/fax.ts";

const FaxBuilder = (httpClient: HttpClient): IFaxBuilder => {
    return {
        listAllFaxes: function (did_id: number): Promise<Array<Fax>> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/fax/list', {
                did_id
            })
        },
        download: function (fax_id: number): Promise<Array<Fax>> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/fax/get', {
                fax_id
            })
        },
        send: function (did_id: number, payload: SendFaxDto): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/fax/send', {
                did_id,
                ...payload
            })
        },
        delete: function (fax_id: number): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/fax/remove', {
                fax_id
            })
        },
        listAllEmails: function (did_id: number): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/fax/emails/list', {
                did_id
            })
        },
        addAnEmailToFax: function (did_id: number, email: string): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/fax/emails/add', {
                did_id,
                email
            })
        },
        removeAnEmail: function (did_id: number, email: string): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/fax/emails/remove', {
                did_id,
                email
            })
        }
    }
}

export default FaxBuilder;
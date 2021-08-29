import HttpClient from "../../shared/http/http-client.ts";
import ILNPBuilder from "../contracts/lnp-builder.interface.ts";
import CreateLnpOrderDto from "../models/create-lnp-order.dto.ts";

const LNPBuilder = (httpClient: HttpClient): ILNPBuilder => {
    return {
        createOrder: function(payload: CreateLnpOrderDto): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/lnp/create', payload)
        },
        listOrder: function (): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/lnp/list')
        },
        getSpecificInformation: function (request_id: number): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/lnp/get', { request_id })
        },
        checkNumberPortability: function (numbers: string): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/lnp/check',{ numbers })
        },
        bulkCheckNumberPortability: function (numbers: string): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/lnp/check/portability/bulk',{numbers})
        },
        submitSignature: function (request_id: number, signature: string): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/lnp/signature/submit', {
                request_id,
                signature
            })
        },
        requestCSVList: function (request_id: number) {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/lnp/request/csv', {
                request_id
            })
        },
    }
}

export default LNPBuilder;

import HttpClient from "../../shared/http/http-client.ts";
import IIPBuilder from "../contracts/ip-builder.interface.ts";
import CreateIpEndpointDto from "../models/create-ip-endpoint.dto.ts";
import Ip from "../models/ip.ts";

const IPBuilder = (httpClient: HttpClient): IIPBuilder => {
    return {
        createEndpoint: function(payload: CreateIpEndpointDto): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/ipendpoints/create', payload)
        },
        listEndpoint: function(): Promise<Array<Ip>> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/ipendpoints/list')
        },
        removeEndpoint: function(endpoint_id: number): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/ipendpoints/remove', { endpoint_id })
        }
    }
}

export default IPBuilder;
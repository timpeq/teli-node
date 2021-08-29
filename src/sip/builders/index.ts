import HttpClient from "../../shared/http/http-client.ts";
import ISIPBuilder from "../contracts/sip-builder.interface.ts";
import CreateSipAccountDto from "../models/create-sip-account.dto.ts";
import UpdateSipAccountDto from "../models/update-sip-account.dto.ts";
import SIP from "../models/sip.ts";

const SIPBuilder = (httpClient: HttpClient): ISIPBuilder => {
    return {
        createAccount: function(payload: CreateSipAccountDto): Promise<string> {
            return httpClient.fetch('GET', `https://apiv1.teleapi.net/sipaccounts/create`, payload);
        },
        updateAccount: function(payload: UpdateSipAccountDto): Promise<string> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/sipaccounts/update', payload);
        },
        listAccount: function(): Promise<Array<SIP>> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/sipaccounts/list')
        },
        removeAccount: function (sipaccount_id:number): Promise<string> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/sipaccounts/remove',{
                sipaccount_id
            })
        }
    }
}

export default SIPBuilder;
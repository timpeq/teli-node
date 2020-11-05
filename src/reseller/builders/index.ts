import IResellerBuilder from "../contracts/reseller-builder.interface";
import CreateResellerDto from "../models/create-reseller.dto";
import HttpClient from "../../shared/http/http-client";
import UpdateResellerDto from "../models/update-reseller.dto";
import UpdateResellerBrandingDto from "../models/update-reseller-branding.dto";

const ResellerBuilder = (httpClient: HttpClient): IResellerBuilder => {
    return {
        create: function(payload: CreateResellerDto): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/resellers/create', payload);
        },
        get: function (reseller_id: number): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/resellers/get', {
                reseller_id
            })
        },
        list: function (): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/resellers/list')
        },
        enableAccount: function (reseller_id: number): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/resellers/enable', {
                reseller_id
            })
        },
        disableAccount: function (reseller_id: number): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/resellers/disable', {
                reseller_id
            })
        },
        showRates: function (reseller_id: number): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/resellers/rates', {
                reseller_id
            })
        },
        addFunds: function (reseller_id :number, amount: number): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/resellers/fund', {
                reseller_id,
                amount
            })
        },
        updateAccount: function (id: number, payload: UpdateResellerDto): Promise<Response> {
            return httpClient.fetch('GET','https://apiv1.teleapi.net/resellers/update', {
                id,
                ...payload
            })
        },
        reassignNumberToResellerOrCustomer: function (did_id: number, new_user_id: number): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/assign', {
                did_id,
                new_user_id
            })
        },
        updateBranding: function (reseller_id: number, payload: UpdateResellerBrandingDto) {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/resellers/update_branding', {
                reseller_id,
                ...payload
            })
        },
        removeCSS: function (reseller_id: number): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/resellers/remove_css', {
                reseller_id
            })
        },
        removeLogo: function (reseller_id: number): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/resellers/remove_logo', {
                reseller_id
            })
        },
        updateRates: function (reseller_id: number, rates: string) {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/resellers/rates/update', {
                reseller_id,
                rates
            })
        },
        setCreditLine: function (reseller_id: number,credit_line: number): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/resellers/credit/set', {
                reseller_id,
                credit_line
            })
        },
        resetPassword: function (reseller_id: number): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/resellers/password/reset', {
                reseller_id
            })
        },
        getToken: function (reseller_id: number): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/resellers/token', {
                reseller_id
            })
        },
        enableOffnet: function (reseller_id: number): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/resellers/offnet/enable', {
                reseller_id
            })
        },
        setChannelLimits: function (reseller_id: number, inbound: number, outbound: number): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/resellers/channel/limits', {
                reseller_id,
                inbound,
                outbound
            })
        }
    }
}

export default ResellerBuilder;
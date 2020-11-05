import HttpClient from "../../shared/http/http-client";
import IRestrictedUser from "../contracts/restricted-user.interface";
import RestrictedUser from "../models/restricted-user";
import RestrictedUserRates from "../models/restricted-user-rates";
import RestrictedUserGroupPermission from "../models/restricted-user-group-permission";

const RestrictedUserBuilder = (httpClient: HttpClient): IRestrictedUser => {
    return {
        createUser: function (payload): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/create', payload)
        },
        getUser: function (ruser_id: number): Promise<RestrictedUser> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/get', {
                ruser_id
            })
        },
        listUser: function (): Promise<Array<RestrictedUser>> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/list')
        },
        updateUser: function (ruser_id, payload): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/update', {
                ruser_id,
                ...payload
            })
        },
        enableUser: function (ruser_id: number): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/enable', {
                ruser_id
            })
        },
        disableUser: function (ruser_id): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/disable', {
                ruser_id
            })
        },
        listUserRates: function (ruser_id): Promise<RestrictedUserRates> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/rates/get', {
                ruser_id
            })
        },
        fundUser: function (ruser_id, amount): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/fund', {
                ruser_id,
                amount
            })
        },
        listPermissionGroups: function (): Promise<Array<RestrictedUserGroupPermission>> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/groups/available', {

            })
        },
        listPermissionUser: function(ruser_id): Promise<Array<RestrictedUserGroupPermission>> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/groups/list', {
                ruser_id
            })
        },
        setSecurityGroup: function(ruser_id, group_id: number, enabled: boolean = false): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/groups/set', {
                ruser_id,
                group_id,
                enabled: enabled ? "yes" : "no"
            })
        },
        updateUserRates: function(ruser_id, rates): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/rates/update', {
                ruser_id,
                rates
            })
        },
        setCreditLine: function(ruser_id, rates): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/credit/set', {
                ruser_id,
                rates,
                credit_line: '123'
            })
        },
        resetPassword: function(ruser_id): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/password/reset', {
                ruser_id
            })
        },
        updateBranding: function(ruser_id, payload): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/update_branding', {
                ruser_id,
                ...payload
            })
        },
        removeCSS: function(ruser_id): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/remove_css', {
                ruser_id
            })
        },
        removeLogo: function(ruser_id): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/remove_logo', {
                ruser_id
            })
        },
        getToken: function(ruser_id): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/token', {
                ruser_id
            })
        },
        enableOffnet: function (ruser_id): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/offnet/enable', {
                ruser_id
            })
        },
        setPostpay: function (ruser_id): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/postpay/enable', {
                ruser_id
            })
        },
        setChannelLimits: function (ruser_id, inbound, outbound): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/rusers/channel/limits', {
                ruser_id,
                inbound,
                outbound
            })
        }
    }
}

export default RestrictedUserBuilder;
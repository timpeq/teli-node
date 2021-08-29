import HttpClient from "../../shared/http/http-client.ts";
import IUserBuilder from "../contracts/user-builder.interface.ts";
import BillingDetailSummaryDto from "../models/billing-detail-summary.dto.ts";
import UpdateAccountInfoDto from "../models/update-account-info.dto.ts";
import UpdatePasswordDto from "../models/update-password.dto.ts";
import UpdateBrandingDto from "../models/update-branding.dto.ts";
import CreateSubUserDto from "../models/create-sub-user.dto.ts";
import UpdateSubUserDto from "../models/update-sub-user.dto.ts";
import UpdateFraudSettingsDto from "../models/update-fraud-settings.dto.ts";
import GetInvoiceDto from "../models/get-invoice.dto.ts";
import GetInvoiceByEmailDto from "../models/get-invoice-by-email.dto.ts";
import ListTransactionsDto from "../models/list-transactions.dto.ts";
import BillingDetail from "../models/billing-detail.ts";
import Subuser from "../models/subuser.ts";
import Invoice from "../models/invoice.ts";
import Transaction from "../models/transaction.ts";
import BalanceDetail from "../models/balance-detail.ts";
import TransactionItem from "../models/transaction-item.ts";

const UserBuilder = (httpClient: HttpClient): IUserBuilder => {
    return {
        getBillingDetailSummary: function(payload: BillingDetailSummaryDto): Promise<Array<BillingDetail>> {
            return httpClient.fetch('GET', `https://apiv1.teleapi.net/user/detail`, payload);
        },
        updateAccountInfo: function(payload: UpdateAccountInfoDto): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/update', payload)
        },
        updatePassword: function(payload: UpdatePasswordDto): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/password/update', payload)
        },
        updateBranding: function(payload: UpdateBrandingDto): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/branding/update', payload)
        },
        createSubUser: function(payload: CreateSubUserDto): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/subusers/create', payload)
        },
        listSubUser: function (): Promise<Array<Subuser>> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/subusers/list')
        },
        updateSubUser: function(subuser_id: number, payload: UpdateSubUserDto): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/subusers/update', {
                subuser_id,
                ...payload
            })
        },
        removeSubUser: function(subuser_id: number): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/subusers/remove', {
                subuser_id
            })
        },
        updateFraudSettings: function(payload: UpdateFraudSettingsDto): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/fraud/update', payload)
        },
        removeCSS: function(): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/css/remove')
        },
        removeLogo: function (): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/logo/remove')
        },
        setSMSUrl: function (url): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/api/smsurl', {
                url
            })
        },
        setWebHookUrl: function (url: string): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/hook/set', {
                url
            })
        },
        setSMSDeliveryUrl: function (url: string): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/sms/delivery/set', {
                url
            })
        },
        setAffiliatePaypal: function (address: string): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/affiliate/paypal', {
                address
            })
        },
        resetSubUserPassword: function (subuser_id: number, new_password: string): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/subusers/password/reset', {
                subuser_id,
                new_password
            })
        },
        listSubUserSecurityGroups: function (subuser_id: number): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/subusers/groups/list', {
                subuser_id
            })
        },
        outboundChannelCount: function (): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/channels/outbound')
        },
        getInvoice: function (payload: GetInvoiceDto): Promise<Array<Invoice>> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/billing/invoice/get', payload)
        },
        getInvoiceByEmail: function (payload: GetInvoiceByEmailDto): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/billing/invoice/email', payload)
        },
        getBalance: function (): Promise<Number> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/billing/balance')
        },
        getDetailedBalance: function (): Promise<BalanceDetail> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/billing/balance/detailed')
        },
        listTransactions: function(payload: ListTransactionsDto): Promise<Array<Transaction>> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/billing/transactions/list')
        },
        getTransactionItems: function (): Promise<Array<TransactionItem>> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/billing/transaction/items', '')
        },
    }
}

export default UserBuilder;
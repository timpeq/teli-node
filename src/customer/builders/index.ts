import ICustomerBuilder from "../contracts/customer-builder.interface";
import CreateCustomerDto from "../models/create-customer.dto";
import HttpClient from "../../shared/http/http-client";
import UpdateCustomerDto from "../models/update-customer.dto";
import UpdateCustomerBrandDto from "../models/update-customer-brand.dto";
import SetChannelLimitDto from "../models/set-channel-limit.dto";
import CreateCustomerResponse from "../models/create-customer.response";
import Customer from "../models/customer";
import CustomerRates from "../models/customer-rates";

const CustomerBuilder = (httpClient: HttpClient): ICustomerBuilder => {
    return {
        create: function (payload: CreateCustomerDto): Promise<CreateCustomerResponse> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/customers/create', payload)
        },
        get: function (customer_id: number): Promise<Customer> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/customers/get', {
                customer_id
            })
        },
        list: function (): Promise<Array<Customer>> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/customers/list')
        },
        enableAccount: function (customer_id: number): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/customers/enable', {
                customer_id
            })
        },
        disableAccount: function (customer_id: number): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/customers/disable', {
                customer_id
            })
        },
        showRates: function (customer_id: number): Promise<CustomerRates> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/customers/rates', {
                customer_id
            })
        },
        addFunds: function (customer_id: number, amount: number): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/customers/fund', {
                customer_id,
                amount
            })
        },
        updateAccount: function (id: number, payload: UpdateCustomerDto): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/customers/update', {
                id,
                ...payload
            })
        },
        updateBranding: function (customer_id: number, payload: UpdateCustomerBrandDto): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/customers/update_branding', {
                customer_id,
                ...payload
            })
        },
        removeCSS: function (customer_id: number): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/customers/remove_css', {
                customer_id
            })
        },
        removeLogo: function (customer_id: number): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/customers/remove_logo', {
                customer_id
            })
        },
        updateRates: function (customer_id: number, rates: string): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/customers/rates/update', {
                customer_id,
                rates
            })
        },
        setCreditLine: function (customer_id: number, credit_line: number): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/customers/credit/set', {
                customer_id,
                credit_line
            })
        },
        resetPassword: function (customer_id: number): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/customers/password/reset', {
                customer_id
            })
        },
        setChannelLimits: function (customer_id: number, payload: SetChannelLimitDto): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/customers/channel/limits', {
                customer_id,
                ...payload
            })
        }
    }
}

export default CustomerBuilder;
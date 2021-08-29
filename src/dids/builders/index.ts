import HttpClient from "../../shared/http/http-client.ts";
import IDidsBuilderInterface from "../contracts/dids-builder.interface.ts";
import State from "../models/state.ts";
import ListLocalNumberDto from "../models/list-local-number.dto.ts";
import OrderSingleNumberDto from "../models/order-single-number.dto.ts";
import InternationalCountryDto from "../models/international-country.dto.ts";
import InternationalStateDto from "../models/international-state.dto.ts";

const DidsBuilder = (httpClient: HttpClient): IDidsBuilderInterface =>{
    return{
        states: (): Promise<State> =>  {
            return httpClient.fetch<State>('GET', `https://apiv1.teleapi.net/dids/states`);
        },
        rateCenters: (state: string): Promise<Response> =>  {
            return httpClient.fetch('GET',`https://apiv1.teleapi.net/dids/ratecenters`, {
                state
            });
        },
        localNumbers: (payload: ListLocalNumberDto): Promise<Response> =>  {
            return httpClient.fetch('GET',`https://apiv1.teleapi.net/dids/list`, payload);
        },
        tollfreeNumbers: (): Promise<Response> =>  {
            return httpClient.fetch('GET',`https://apiv1.teleapi.net/dids/list`, {
                type: 'tollfree'
            });
        },
        orderSingleNumber: (payload: OrderSingleNumberDto): Promise<Response> =>  {
            return httpClient.fetch('POST', 'https://apiv1.teleapi.net/dids/order', payload);
        },
        searchVanityTollfreeNumbers: (search: string): Promise<Response> =>  {
            return httpClient.fetch('POST', 'https://apiv1.teleapi.net/dids/tollfree/vanity', { search });
        },
        orderVanityTollfreeNumber: (did_number: number,
                                    vanity_tf?: string): Promise<Response> =>  {
            return httpClient.fetch('POST', 'https://apiv1.teleapi.net/dids/cart', {
                did_number,
                vanity_tf: vanity_tf ? "yes" : "no"
            });
        },
        getNPA(available?: string, type?: string): Promise<Array<String>> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/dids/npas',{
                available,
                type
            });
        },
        getNXX(npa: string, available?: string, type?: string): Promise<Response> {
            return httpClient.fetch('GET','https://apiv1.teleapi.net/dids/nxxs',{
                npa,
                available,
                type
            });
        },
        getIntlRatesCSV(): Promise<String> {
            return httpClient.fetch('GET','https://apiv1.teleapi.net/dids/intl/rates.csv');
        },
        getIntlCountriesList(): Promise<Array<InternationalCountryDto>> {
            return httpClient.fetch('GET','https://apiv1.teleapi.net/dids/intl/countries/list');
        },
        getIntlStatesList(country_id:string): Promise<Array<InternationalStateDto>> {
            return httpClient.fetch('GET','https://apiv1.teleapi.net/dids/intl/states/list',{
                country_id
            });
        },
    }
}

export default DidsBuilder;
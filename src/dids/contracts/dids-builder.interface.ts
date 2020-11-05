import State from "../models/state";
import ListLocalNumberDto from "../models/list-local-number.dto";
import InternationalCountryDto from "../models/international-country.dto";
import InternationalStateDto from "../models/international-state.dto";
import OrderSingleNumberDto from "../models/order-single-number.dto";

export default interface IDidsBuilderInterface{
    /**
     * List all states available for ordering numbers
     */
    states(): Promise<State>;

    /**
     * List all states available for ordering numbers
     * @param state {String} Abbreviated state
     */
    rateCenters(state: string): Promise<Response>;

    /**
     * List all phone numbers in a specific ratecenter and state
     * @param payload {Object} List local number information
     */
    localNumbers(payload: ListLocalNumberDto): Promise<Response>;

    /**
     * List all available toll free numbers
     */
    tollfreeNumbers(): Promise<Response>;

    /**
     * Order a specific number
     * @param payload {Object} Order single number information
     */
    orderSingleNumber(payload: OrderSingleNumberDto): Promise<Response>;

    /**
     * Search for vanity toll free numbers
     * @param search {String} Search keyword
     */
    searchVanityTollfreeNumbers(search: string): Promise<Response>;

    /**
     * Order a vanity toll free number
     * @param did_number {Number} Number
     * @param vanity_tf {String} Vanity toll free
     */
    orderVanityTollfreeNumber(did_number: number,
                              vanity_tf?: string): Promise<Response>;

    /**
     * List all NPA
     * @param available
     * @param type
     */
    getNPA(available?: string, type?: string): Promise<Array<String>>;

    /**
     * List all NXX
     * @param available
     * @param npa
     * @param type
     */
    getNXX(npa: string, available?: string, type?: string): Promise<Response>;

    /**
     * Get International Numbers Rates CSV
     */
    getIntlRatesCSV(): Promise<String>;

    /**
     * Get international countries list
     */
    getIntlCountriesList(): Promise<Array<InternationalCountryDto>>;

    /**
     *  * Get international states list
     * @param country_id {String}
     */
    getIntlStatesList(country_id: string): Promise<Array<InternationalStateDto>>;
}
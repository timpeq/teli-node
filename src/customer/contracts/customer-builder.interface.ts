import CreateCustomerDto from "../models/create-customer.dto.ts";
import UpdateAccountInfoDto from "../../user/models/update-account-info.dto.ts";
import UpdateCustomerBrandDto from "../models/update-customer-brand.dto.ts";
import UpdateCustomerDto from "../models/update-customer.dto.ts";
import SetChannelLimitDto from "../models/set-channel-limit.dto.ts";
import CreateCustomerResponse from "../models/create-customer.response.ts";
import Customer from "../models/customer.ts";
import CustomerRates from "../models/customer-rates.ts";

export default interface ICustomerBuilder {
    /**
     * Create a customer
     * @param payload {Object} Customer information
     */
    create(payload: CreateCustomerDto): Promise<CreateCustomerResponse>;

    /**
     * Get info about a customerGet a list of all of your customers
     * @param customer_id {Number} Customer ID
     */
    get(customer_id: number): Promise<Customer>;

    /**
     * Get a list of all of your customers
     */
    list(): Promise<Array<Customer>>;

    /**
     * Enable customers status that have a user_status of "inactive-disabled"
     * @param customer_id {Number} Customer ID
     */
    enableAccount(customer_id: number): Promise<String>;

    /**
     * Disable customers that have a user_status of "active"
     * @param customer_id {Number} Customer ID
     */
    disableAccount(customer_id: number): Promise<String>;

    /**
     * Get a specified customer's rates
     * @param customer_id {Number} Customer ID
     */
    showRates(customer_id: number): Promise<CustomerRates>;

    /**
     * Allocate a given number of dollars to the customer's account
     * @param customer_id {Number} Customer ID
     * @param amount {Number} Number of dollars to be allocated
     */
    addFunds(customer_id: number, amount: number): Promise<String>;

    /**
     * Update customer account information
     * @param id {Number} Account ID
     * @param payload {Object} Customer information you want to update
     */
    updateAccount(id: number, payload: UpdateCustomerDto): Promise<String>;

    /**
     * Update customer's branding
     * @param customer_id {Number} Customer ID
     * @param payload {Object} Customer branding information you want to change
     */
    updateBranding(customer_id: number, payload: UpdateCustomerBrandDto): Promise<String>;

    /**
     * Remove customer's custom CSS
     * @param customer_id {Number} Customer ID
     */
    removeCSS(customer_id: number): Promise<String>;

    /**
     * Remove customer's custom logo
     * @param customer_id {Number} Customer ID
     */
    removeLogo(customer_id: number): Promise<String>;

    /**
     * Set a customer's rates
     * @param customer_id {Number} Customer ID
     * @param rates {String} Customer's rates in json string
     */
    updateRates(customer_id: number, rates: string): Promise<String>;

    /**
     * Sets the customer's credit line amount
     * @param customer_id {Number} Customer ID
     * @param credit_line {Number} Credit line amount
     */
    setCreditLine(customer_id: number, credit_line: number): Promise<String>;

    /**
     * Reset customer's password
     * @param customer_id {Number} Customer ID
     */
    resetPassword(customer_id: number): Promise<String>;

    /**
     * Set inbound and outbound channel limits for a customer
     * @param customer_id {Number} Customer ID
     * @param payload {Object} Channel limits information
     */
    setChannelLimits(customer_id: number, payload: SetChannelLimitDto): Promise<String>;
}

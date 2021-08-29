import CreateResellerDto from "../models/create-reseller.dto.ts";
import UpdateResellerDto from "../models/update-reseller.dto.ts";
import UpdateResellerBrandingDto from "../models/update-reseller-branding.dto.ts";

export default interface IResellerBuilder {
    /**
     * Create a reseller
     * @param payload {Object} Reseller information
     */
    create(payload: CreateResellerDto): Promise<Response>;

    /**
     * Get info on the requested reseller
     * @param reseller_id {Number} Reseller ID
     */
    get(reseller_id: number): Promise<Response>;

    /**
     * Retrieves a list of all your resellers
     */
    list(): Promise<Response>;

    /**
     * Enable resellers that have a user_status of "inactive-disabled"
     * @param reseller_id {Number} Reseller ID
     */
    enableAccount(reseller_id: number): Promise<Response>;

    /**
     * Disable resellers that have a user_status of "active"
     * @param reseller_id {Number} Reseller ID
     */
    disableAccount(reseller_id: number): Promise<Response>;

    /**
     * Get a specified reseller's rates
     * @param reseller_id {Number} Reseller ID
     */
    showRates(reseller_id: number): Promise<Response>;

    /**
     * Allocate a given number of dollars to the resellers "account"
     * @param reseller_id {Number} Reseller ID
     * @param amount {Number} Amount to be allocated
     */
    addFunds(reseller_id: number, amount: number): Promise<Response>;

    /**
     * Update reseller account
     * @param id {Number} Reseller ID
     * @param payload {Object} Reseller information you want to update
     */
    updateAccount(id: number, payload: UpdateResellerDto): Promise<Response>;

    /**
     * Assign a phone number to a particular reseller or customer
     * @param did_id {Number} Phone ID
     * @param new_user_id {Number} Any of your resellers/customers or your own user id
     */
    reassignNumberToResellerOrCustomer(did_id: number, new_user_id: number): Promise<Response>;

    /**
     * Set a reseller's branding
     * @param reseller_id {Number} Reseller ID
     * @param payload {Object} Branding information
     */
    updateBranding(reseller_id: number, payload: UpdateResellerBrandingDto): Promise<Response>;

    /**
     * Remove the provided CSS file for a reseller
     * @param reseller_id {Number} Reseller ID
     */
    removeCSS(reseller_id: number): Promise<Response>;

    /**
     * Remove the provided logo for a reseller
     * @param reseller_id {Number} Reseller ID
     */
    removeLogo(reseller_id: number): Promise<Response>;

    /**
     * Update a reseller's rates
     * @param reseller_id {Number} Reseller ID
     * @param rates {String} Reseller rates in JSON string
     */
    updateRates(reseller_id: number, rates: string): Promise<Response>;

    /**
     * Set the credit line for a reseller
     *      They will be allowed to go this far negative on their balance
     * @param reseller_id {Number} Reseller ID
     * @param credit_line {Number} Credit line
     */
    setCreditLine(reseller_id: number, credit_line: number): Promise<Response>;

    /**
     * Reset password for reseller
     * @param reseller_id {Number} Reseller ID
     */
    resetPassword(reseller_id: number): Promise<Response>;

    /**
     * Retrieve a reseller's API token when managing their account directly
     * @param reseller_id {Number} Reseller ID
     */
    getToken(reseller_id: number): Promise<Response>;

    /**
     * Enable the ability to add and manage offnet numbers
     * @param reseller_id {Number} Reseller ID
     */
    enableOffnet(reseller_id: number): Promise<Response>;

    /**
     * Set inbound and outbound channel limits for a reseller
     * @param reseller_id {Number} Reseller ID
     * @param inbound {Number} Inbound channel limits
     * @param outbound {Number} Outbound channel limits
     */
    setChannelLimits(reseller_id: number, inbound: number, outbound: number): Promise<Response>
}
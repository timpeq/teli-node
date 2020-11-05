import CreateSipAccountDto from "../models/create-sip-account.dto";
import UpdateSipAccountDto from "../models/update-sip-account.dto";
import SIP from "../models/sip";

export default interface ISIPBuilder {
    /**
     * Create a sip account
     * @param payload {Object} Sip account information
     */
    createAccount(payload: CreateSipAccountDto): Promise<String>;

    /**
     * Get a list of all of you sip accounts you have with us
     */
    listAccount(): Promise<Array<SIP>>;

    /**
     * Update a sip account
     * @param payload {Object} Sip account information
     *          All fields are required, so if they're not changing just send back what is already there
     */
    updateAccount(payload: UpdateSipAccountDto): Promise<String>;

    /**
     * Remove a sip account
     * @param sipaccount_id {Number} SIP account ID
     */
    removeAccount(sipaccount_id: number): Promise<String>;
}

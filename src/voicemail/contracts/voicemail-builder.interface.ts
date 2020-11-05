import CreateVoicemailAccountDto from "../models/create-voicemail-account.dto";
import UpdateVoicemailAccountDto from "../models/update-voicemail-account.dto";
import Voicemail from "../models/voicemail";

export default interface IVoicemailBuilder {
    /**
     * Create a voicemail account / inbox you can assign to DIDs
     * @param payload {Object} Voicemail data
     */
    createAccount(payload: CreateVoicemailAccountDto): Promise<String>;

    /**
     * Lists all voicemails currently available for the given inbox_id
     * @param inbox_id {Number} Inbox ID
     */
    getAccount(inbox_id: number): Promise<Response>;

    /**
     * Lists all voicemails
     */
    listAccount(): Promise<Response>;

    /**
     * Update voicemail data for a given inbox_id
     * @param inbox_id {Number} Inbox ID
     * @param payload {Object} Voicemail data you want to change
     */
    updateAccount(inbox_id: number, payload: UpdateVoicemailAccountDto): Promise<String>;

    /**
     * Remove voicemail account data by inbox_id
     * @param inbox_id {Number} Inbox ID
     */
    removeAccount(inbox_id: number): Promise<String>;

    /**
     * Sets an email address to a given inbox_id
     * @param inbox_id {Number} Inbox ID
     * @param email_address {String} Email address
     */
    addInboxEmail(inbox_id: number, email_address: string): Promise<String>;

    /**
     * Removes the associated email address from the voicemail inbox
     * @param inbox_id {Number} Inbox ID
     * @param email_id {Number} Email address ID
     */
    removeInboxEmail(inbox_id: number, email_id: number): Promise<String>;

    /**
     * List current voicemail messages for a given inbox_id
     * @param inbox_id {Number} Inbox ID
     */
    listVoicemail(inbox_id: number): Promise<Array<Voicemail>>;

    /**
     * Attempts to retrieve a given message from a given inbox
     * @param inbox_id {Number} Inbox ID
     * @param message_id {Number} Message ID
     * @param raw {Boolean} Flag to determine the result type
     */
    getVoicemail(inbox_id: number, message_id: number, raw: boolean): Promise<String>;

    /**
     * Removes a given message from a desired inbox
     * @param inbox_id {Number} Inbox ID
     * @param message_id {Number} Message ID
     */
    removeVoicemail(inbox_id: number, message_id: number): Promise<Response>;
}
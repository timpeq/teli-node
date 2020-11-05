import SendFaxDto from "../models/send-fax.dto";
import Fax from "../models/fax";

export default interface IFaxBuilder {
    /**
     * List all the faxes for a given did_id
     * @param did_id {Number} Can be obtained from the "List Detail on Specific #" at the URL
     */
    listAllFaxes(did_id: number): Promise<Array<Fax>>;

    /**
     * Get the actual fax data about a given fax_id
     * @param fax_id {Number} Fax ID
     */
    download(fax_id: number): Promise<Array<Fax>>;

    /**
     * Sending a fax
     * @param did_id Can be obtained from the "List Detail on Specific #" at the URL
     * @param payload {Object} Fax information
     */
    send(did_id: number, payload: SendFaxDto): Promise<String>;

    /**
     * Permanently delete a fax from servers
     * @param fax_id {Number} Fax ID
     */
    delete(fax_id: number): Promise<Response>;

    /**
     * List all the email addresses that get the inbound faxes to the associated fax number
     * @param did_id {Number} Can be obtained from the "List Detail on Specific #" at the URL
     */
    listAllEmails(did_id: number): Promise<Response>;

    /**
     * Add an additional email address to receive inbound faxes for associated fax number
     * @param did_id {Number} Can be obtained from the "List Detail on Specific #" at the URL
     * @param email {String} Email address
     */
    addAnEmailToFax(did_id: number, email: string): Promise<String>;

    /**
     * Remove an email address as a recipient of inbound faxes to a fax number
     * @param did_id {Number} Can be obtained from the "List Detail on Specific #" at the URL
     * @param email {String} Email address
     */
    removeAnEmail(did_id: number, email: string): Promise<String>
}
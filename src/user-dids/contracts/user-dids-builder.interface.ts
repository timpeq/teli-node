import Phone from "../models/phone.ts";
import DisableCnamDto from "../models/disable-cnam.dto.ts";
import EnableCnamDto from "../models/enable-cnam.dto.ts";
import SetPhoneListingDto from "../models/set-phone-listing.dto.ts";
import SetCallForwardingDto from "../models/set-call-forwarding.dto.ts";
import CreateFlowDto from "../models/create-flow.dto.ts";
import UpdateFlowDto from "../models/update-flow.dto.ts";
import {NumberTypeEnum} from "../enums/number-type.enum.ts";

export default interface IUserDidsBuilderInterface{
    /**
     * List of the phone numbers that you own
     *      Includes those that are owned by your resellers and customers
     * @param number_type {NumberTypeEnum} Number type
     */
    listAll(number_type?: NumberTypeEnum): Promise<Array<Phone>>;

    /**
     * Retrieve a list of the phone numbers that you own in a simplified format
     * @param number_type {NumberTypeEnum} Number type
     * @param limit {Number}
     * @param offset {Number}
     */
    listAllSimple(number_type?: NumberTypeEnum, limit?: number, offset?: number): Promise<Response>;

    /**
     * Get info related to a single DID number
     * @param number {Number} Number
     */
    detail(number: number): Promise<Response>;

    /**
     * Remove a phone number from your account
     * @param did_id {Number} Can be obtained from the "List Detail on Specific #"
     * @param did_number {Number} Phone Number
     */
    remove(did_id: number, did_number: number): Promise<String>;

    /**
     * Assign a routing call flow to a specified phone number
     * @param did_id {Number} Can be obtained from the "List Detail on Specific #"
     * @param flow_id {Number} Flow ID
     */
    changeCallFlow(did_id: number, flow_id?: number): Promise<String>;

    /**
     * Assign a phone number to a channel group
     * @param did_id {Number} Can be obtained from the "List Detail on Specific #"
     * @param channel_group_id {Number} Channel group ID
     */
    assignToChannelGroup(did_id: number, channel_group_id?: number): Promise<String>;

    /**
     * Assign a voicemail inbox to a phone number
     * @param did_id {Number} Can be obtained from the "List Detail on Specific #"
     * @param inbox_id {Number} Pass voicemail_inbox_id of null to remove inbox from did
     * @param stv {Boolean} If you would like the number to go straight to voicemail (no routing to your PBX or SIP account)
     */
    assignVoicemailBox(did_id: number, inbox_id: number | null, stv?: boolean): Promise<String>;

    /**
     * Convert a did from a voice number to a fax number
     *      This will remove any associated call flows, channel groups and voicemail inboxes from the did
     * @param did_id {Number} Can be obtained from the "List Detail on Specific #"
     */
    convertToFax(did_id: number): Promise<String>;

    /**
     * Convert a did from a fax number to a voice number
     * @param did_id {Number} Can be obtained from the "List Detail on Specific #"
     */
    convertToVoiceIfFax(did_id: number): Promise<String>;

    /**
     * Enable inbound CNAM lookups for a number
     * @param payload {Object} Criteria
     */
    enableCNAM(payload: EnableCnamDto): Promise<String>;

    /**
     * Disable inbound CNAM lookups for a number
     * @param payload {Object} Criteria
     */
    disableCNAM(payload: DisableCnamDto): Promise<String>;

    /**
     * Change note
     *      Do not pass the note parameter in order to remove a note
     * @param did_id {Number} Can be obtained from the "List Detail on Specific #"
     * @param note {String} Note
     */
    changeNoteOnDid(did_id: number, note?: string): Promise<String>;

    /**
     * Removes the note applied to a given did
     * @param did_id {Number} Can be obtained from the "List Detail on Specific #"
     */
    removeNoteOnDid(did_id: number): Promise<String>;

    /**
     * Retrieve the value submitted for CNAM/LIDB on a number
     *      Returns an empty string if it is not set
     * @param did_id {Number} Can be obtained from the "List Detail on Specific #"
     */
    showCallerIDSetLIDB(did_id: number): Promise<Response>;

    /**
     * Submits a CNAM/LIDB entry for processing on a number
     *      Any charges for CNAM/LIDB services will be charged to your account immediately upon submission
     * @param did_id {Number} Can be obtained from the "List Detail on Specific #"
     * @param value {String} Caller ID
     */
    setCallerIDLIDB(did_id: number, value: string): Promise<Response>;

    /**
     * Set an SMS URL specific to a phone number
     *      This will override the account-wide SMS URL,
     *      messages will be delivered to this URL instead of the account-wide URL
     * @param did_id {Number} Can be obtained from the "List Detail on Specific #"
     * @param url {String} SMS URL
     */
    setUrlSMSOnSpecificPhone(did_id: number, url: string): Promise<Response>;

    /**
     * Remove the phone number specific SMS URL
     *      SMS delivery will revert to the account-wide SMS URL
     * @param did_id {Number} Can be obtained from the "List Detail on Specific #"
     */
    removeUrlSMS(did_id: number): Promise<Response>;

    /**
     * Set Listing
     * @param payload {Object} Phone listing information
     */
    setListing(payload: SetPhoneListingDto): Promise<Response>;

    /**
     * Retrieve the listing that is stored for a number
     * @param did_id {Number} Can be obtained from the "List Detail on Specific #"
     */
    getListing(did_id: number): Promise<Response>;

    /**
     * Remove the listing for a number
     * @param did_id {Number} Can be obtained from the "List Detail on Specific #"
     */
    removeListing(did_id: number): Promise<String>;

    /**
     * Set call forwarding
     * @param payload {Object} Call forwarding information
     */
    setCallForwarding(payload: SetCallForwardingDto): Promise<String>;

    /**
     * Get a list of your backorders
     * @param limit {Number} Limit of data
     * @param offset {Number} Amount of data to be escaped
     */
    listBackorders(limit?: number,
                   offset?: number): Promise<Response>;

    /**
     * Set Delivery URL
     * @param did_id {Number} Can be obtained from the "List Detail on Specific #"
     * @param dn_url {String} Delivery url
     */
    setDeliveryURL(did_id: number, dn_url: string): Promise<String>;

    /**
     * Returns a list of offnet DIDs
     */
    listHiddenOffsetDids(): Promise<Response>;

    /**
     * Creates a new call flow
     * @param payload {Object} Flow information
     */
    createFlow(payload: CreateFlowDto): Promise<Number>;

    /**
     * Get the call flow detail
     * @param flow_id {Number} Flow ID
     */
    getFlow(flow_id: number): Promise<Response>;

    /**
     * List current call flows
     */
    listFlows(): Promise<Response>;

    /**
     * Updates an existing call flow
     * @param payload {Object} Flow information you want to update
     */
    updateFlow(payload: UpdateFlowDto): Promise<String>;

    /**
     * Remove a call flow
     * @param flow_id {Number} Flow ID
     */
    removeFlow(flow_id: number): Promise<String>;

    /**
     * Marks the inbound flow_id as the default call flow
     * @param flow_id {Number} Flow ID
     */
    setDefaultFlow(flow_id: number): Promise<String>;

    /**
     * Remove a series of phone numbers from your account
     * @param numbers {Number} JSON formatted array of dids
     */
    bulkRemoveNumbers(numbers: Array<number>): Promise<Response>;

    /**
     * Block inbound sms from reaching your number
     * @param did {Number} Phone number ID
     * @param source {Number} Source number to be blocked
     */
    blockInboundSMS(did: number, source: number): Promise<String>;

    /**
     * Remove the inbound sms block for your number
     * @param did {Number} Phone number ID
     * @param source {Number} Source number to be unblocked
     */
    removeInboundSMSBlock(did: number, source: number): Promise<String>;
}
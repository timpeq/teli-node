import MakeCallDto from "../models/make-call.dto";
import CreateCallQueueDto from "../models/create-call-queue.dto";
import CreateCallClientDto from "../models/create-call-client.dto";
import CallQueue from "../models/call-queue";
import Call from "../models/call";
import ChangeClientPasswordDto from "../models/change-client-password.dto";
import Client from "../models/client";
import ListCallFilterDto from "../models/list-call-filter.dto";

export default interface ICallApiBuilder {
    /**
     * Set incoming Call URL
     * @param did {Number} Phone Number
     * @param url {String} URL to accept incoming call URL
     */
    setIncomingCallURL(did: number, url: string): Promise<Response>

    /**
     * List of call data
     * @param filter {Object}
     */
    list(filter: ListCallFilterDto): Promise<Array<Call>>

    /**
     * Representation of a Call resource
     * @param call_sid {Number}
     */
    detail(call_sid: number): Promise<Call>

    /**
     * Making an outbound call
     * @param payload {Object}
     */
    make(payload: MakeCallDto): Promise<Call>

    /**
     * Create call queue
     * @param payload {Object} Payload to create call's queue
     */
    createQueue(payload: CreateCallQueueDto): Promise<CallQueue>;

    /**
     * List representation of all the Conference resources for this Account
     */
    listConference(): Promise<Response>;

    /**
     * Get call reference detail
     * @param conference_sid {Number} Conference ID
     */
    getConference(conference_sid: number): Promise<Response>;

    /**
     * List representation of all the Participant resources for this AccounList representation of all the Participant resources for this Account
     * @param conference_id {Number} Conference ID
     * @param call_sid {Number} Call ID
     */
    listConferenceParticipant(conference_id: number, call_sid: number): Promise<Response>;

    /**
     * Create call client
     * @param payload {Object}
     */
    createClient(payload: CreateCallClientDto): Promise<Client>;

    /**
     * Change call client's password
     * @param client_id {Number} Client ID
     * @param payload {Object}
     */
    changeClientPassword(client_id: number, payload: ChangeClientPasswordDto): Promise<Response>;

    /**
     * Delete call client
     * @param client_id {Number}
     */
    deleteClient(client_id: number): Promise<Response>;

    /**
     * List all client
     */
    listClient(): Promise<Array<Client>>;

    /**
     * List all recording
     */
    listRecordings(): Promise<Response>;

    /**
     * Get call recording record
     * @param call_sid {Number} Call ID
     */
    listCallRecordings(call_sid: number): Promise<Response>;

    /**
     * Delete call recording record
     * @param recording_sid {Number}
     */
    deleteRecordingRecords(recording_sid: number): Promise<Response>;
}

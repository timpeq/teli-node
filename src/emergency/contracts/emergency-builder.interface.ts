import Create911RecordDto from "../models/create-911-record.dto.ts";
import Update911RecordDto from "../models/update-911-record.dto.ts";
import Validate911RecordDto from "../models/validate-911-record.dto.ts";
import Lookup911AlertGroupDto from "../models/lookup-911-alert-group.dto.ts";
import AssignNumberTo911AlertGroupDto from "../models/assign-number-to-911-alert-group.dto.ts";
import UnassignNumberTo911AlertGroupDto from "../models/unassign-number-to-911-alert-group.dto.ts";
import AddNotificationToAlertGroupDto from "../models/add-notification-to-alert-group.dto.ts";
import Emergency from "../models/emergency.ts";
import AlertGroup from "../models/alert-group.ts";
import CreateAlertGroupResponse from "../models/create-alert-group.response.ts";

export default interface IEmergencyBuilder {
    /**
     * Add 911 address to a phone number
     * @param payload {Object} 911 record information
     */
    createRecord(payload: Create911RecordDto): Promise<Emergency>;

    /**
     * Look up the address on file (or lack thereof) for a phone number
     * @param did_id {Number} 911 record ID
     *                  If did_number not sent
     * @param did_number {Number} 911 record number
     *                      If did_id not sent
     */
    lookupRecord(did_id: number, did_number: number): Promise<Emergency>;

    /**
     * Retrieves the entire list of 911 records on the users account
     * @param all {Boolean} You can choose to retrieves the entire list or not all
     */
    listRecord(all?: boolean): Promise<Array<Emergency>>;

    /**
     * Update 911 emergency records
     * @param did_id {Number} 911 record ID
     * @param payload {Object} 911 record information
     */
    updateRecord(did_id: number, payload: Update911RecordDto): Promise<Emergency>;

    /**
     * Remove all 911 information from a phone number
     * @param did_id {Number} 911 record ID
     */
    removeRecord(did_id: number): Promise<String>;

    /**
     * Validate an address before trying to create or update
     * @param payload {Object} 911 record information you want to validate
     */
    validateRecord(payload: Validate911RecordDto): Promise<String>;

    /**
     * Create a new 911 alert group
     * @param group_name {String} Group name of alert group
     */
    createAlertGroup(group_name: string): Promise<CreateAlertGroupResponse>;

    /**
     * List all of your 911 alert groups
     */
    listAlertGroup(): Promise<Array<AlertGroup>>;

    /**
     * Get all 911 alert group information associated with a 911 entry
     * @param payload {Object} 911 group information
     */
    lookupAlertGroup(payload: Lookup911AlertGroupDto): Promise<AlertGroup>;

    /**
     * Permanently remove all 911 alert group information and endpoints
     *      Any connected 911 addresses will be left intact
     * @param group_id {Number} Group ID
     */
    removeAlertGroup(group_id: number): Promise<String>;

    /**
     * Associate a 911 alert group with a 911 entry
     *      Groups can be associated with multiple 911 entries,
     *      but a 911 entry can only be associated with one group
     * @param payload {Object} Associating information
     */
    assignNumberToAlertGroup(payload: AssignNumberTo911AlertGroupDto): Promise<String>;

    /**
     * Unassociate a 911 Alert Group from a 911 entry
     * @param payload {Object} Unassociating information
     */
    unAssignNumberToAlertGroup(payload: UnassignNumberTo911AlertGroupDto): Promise<String>;

    /**
     * Add an endpoint to a group
     *      When a 911 call is made from an associated 911 entry,
     *      this endpoint will be notified in the appropriate way
     * @param group_id {Number} Group ID
     * @param payload {Object} Notification information
     */
    addNotificationToAlertGroup(group_id: number, payload: AddNotificationToAlertGroupDto): Promise<String>;

    /**
     * Remove an endpoint from a 911 alert group
     * @param endpoint_id {Number} Endpoint ID can be found with the /groups/list or /groups/get commands
     */
    removeNotifyFromAlertGroup(endpoint_id: number): Promise<String>;
}
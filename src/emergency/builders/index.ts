import HttpClient from "../../shared/http/http-client.ts";
import IEmergencyBuilder from "../contracts/emergency-builder.interface.ts";
import Create911RecordDto from "../models/create-911-record.dto.ts";
import Validate911RecordDto from "../models/validate-911-record.dto.ts";
import AssignNumberTo911AlertGroupDto from "../models/assign-number-to-911-alert-group.dto.ts";
import AddNotificationToAlertGroupDto from "../models/add-notification-to-alert-group.dto.ts";
import UnassignNumberTo911AlertGroupDto from "../models/unassign-number-to-911-alert-group.dto.ts";
import Emergency from "../models/emergency.ts";
import AlertGroup from "../models/alert-group.ts";
import CreateAlertGroupResponse from "../models/create-alert-group.response.ts";

const EmergencyBuilder = (httpClient: HttpClient): IEmergencyBuilder => {
    return {
        createRecord: function (payload: Create911RecordDto) : Promise<Emergency> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/911/create', payload)
        },
        lookupRecord: function (did_id, did_number) : Promise<Emergency> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/911/info', {
                did_id,
                did_number
            })
        },
        listRecord: function (all: boolean = false): Promise<Array<Emergency>> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/911/list', {
                all: all ? "yes" : "no"
            })
        },
        updateRecord: function (did_id, payload) : Promise<Emergency>{
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/911/update', {
                did_id,
                ...payload
            })
        },
        removeRecord: function (did_id: number): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/911/remove', {
                did_id
            })
        },
        validateRecord: function (payload: Validate911RecordDto): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/911/validate', payload)
        },
        createAlertGroup: function (group_name): Promise<CreateAlertGroupResponse> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/911/groups/create', {
                group_name
            })
        },
        listAlertGroup: function (): Promise<Array<AlertGroup>> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/911/groups/list')
        },
        lookupAlertGroup: function (payload): Promise<AlertGroup> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/911/groups/get', payload)
        },
        removeAlertGroup: function (group_id): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/911/groups/remove',{
                group_id
            })
        },
        assignNumberToAlertGroup: function (payload: AssignNumberTo911AlertGroupDto): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/911/groups/assign',payload)
        },
        unAssignNumberToAlertGroup: function (payload: UnassignNumberTo911AlertGroupDto): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/911/groups/unassign', payload)
        },
        addNotificationToAlertGroup: function (group_id, payload: AddNotificationToAlertGroupDto): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/911/groups/endpoint/add',{
                group_id,
                payload
            })
        },
        removeNotifyFromAlertGroup: function (endpoint_id): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/911/groups/endpoint/remove',{
                endpoint_id
            })
        }
    }
}

export default EmergencyBuilder;
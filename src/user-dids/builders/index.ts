import HttpClient from "../../shared/http/http-client";
import IUserDidsBuilderInterface from "../contracts/user-dids-builder.interface";
import Phone from "../models/phone";
import {NumberTypeEnum} from "../enums/number-type.enum";
import EnableCnamDto from "../models/enable-cnam.dto";
import DisableCnamDto from "../models/disable-cnam.dto";
import UpdateFlowDto from "../models/update-flow.dto";
import CreateFlowDto from "../models/create-flow.dto";
import SetPhoneListingDto from "../models/set-phone-listing.dto";
import SetCallForwardingDto from "../models/set-call-forwarding.dto";

const UserDidsBuilder = (httpClient: HttpClient): IUserDidsBuilderInterface => {
    return{
        listAll: (number_type?: NumberTypeEnum): Promise<Array<Phone>> =>  {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/list', {
                number_type
            });
        },
        listAllSimple(number_type?: NumberTypeEnum, limit?: number, offset?: number): Promise<Response> {
            return httpClient.fetch('GET','https://apiv1.teleapi.net/user/dids/list/simple',{
                number_type,
                limit,
                offset
            });
        },
        detail: (number: number): Promise<Response> =>  {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/get', { number });
        },
        remove: (did_id?: number, did_number?: number): Promise<String> =>  {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/remove', {
                did_id,
                did_number
            })
        },
        changeCallFlow: (did_id: number,
                         flow_id?: number): Promise<String> =>  {
            return httpClient.fetch('POST', 'https://apiv1.teleapi.net/user/dids/flow', {
                did_id,
                flow_id: flow_id || "none"
            });
        },
        assignToChannelGroup: (did_id: number, channel_group_id?: number): Promise<String> =>  {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/channelgroup', {
                did_id,
                channel_group_id: channel_group_id || "none"
            });
        },
        assignVoicemailBox: (did_id: number, inbox_id: number | null, stv: boolean = false): Promise<String> =>  {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/voicemail', {
                did_id,
                inbox_id: inbox_id || "none",
                stv: stv ? "yes" : "no"
            })
        },
        convertToFax: (did_id: number): Promise<String> =>  {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/convert/fax', {did_id});
        },
        convertToVoiceIfFax: (did_id: number): Promise<String> =>  {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/convert/voice', {
                did_id
            });
        },
        enableCNAM: (payload: EnableCnamDto): Promise<String> =>  {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/cnam/enable', payload);
        },
        disableCNAM: (payload: DisableCnamDto): Promise<String> =>  {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/cnam/disable', payload);
        },
        changeNoteOnDid: (did_id: number,
                          note?: string): Promise<String> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/note', {
                did_id,
                note
            });
        },
        removeNoteOnDid: (did_id: number): Promise<String> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/note/remove', { did_id })
        },
        showCallerIDSetLIDB: (did_id: number): Promise<Response> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/lidb/get', { did_id });
        },
        setCallerIDLIDB: (did_id: number, value: string): Promise<Response> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/lidb/set', {
                did_id,
                value
            });
        },
        setUrlSMSOnSpecificPhone: (did_id: number, url: string): Promise<Response> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/smsurl/set', {
                did_id,
                url
            });
        },
        removeUrlSMS: (did_id: number): Promise<Response> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/smsurl/remove', { did_id });
        },
        setListing: (payload: SetPhoneListingDto): Promise<Response> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/listing/set', payload);
        },
        getListing: (did_id: number): Promise<Response> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/listing/get', { did_id });
        },
        removeListing: (did_id: number): Promise<String> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/listing/remove', { did_id });
        },
        setCallForwarding: (payload: SetCallForwardingDto): Promise<String> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/forward/set', payload);
        },
        setDeliveryURL: (did_id: number, dn_url: string): Promise<String> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/smsdn/set', {
                did_id,
                dn_url
            });
        },
        listHiddenOffsetDids: (): Promise<Response> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/numbers/list')
        },
        createFlow: (payload: CreateFlowDto): Promise<Number> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/flows/create', payload)
        },
        getFlow: (flow_id: number): Promise<Response> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/flows/get', { flow_id });
        },
        listBackorders: (limit?: number,
                         offset?: number): Promise<Response> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/backorders/list', {
                limit, offset
            });
        },
        listFlows: (): Promise<Response> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/flows/list');
        },
        updateFlow: (payload: UpdateFlowDto): Promise<String> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/flows/update', payload);
        },
        removeFlow: (flow_id: number): Promise<String> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/flows/remove', { flow_id });
        },
        setDefaultFlow: (flow_id: number): Promise<String> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/flows/default/set', { flow_id })
        },
        bulkRemoveNumbers: (numbers: Array<number>): Promise<Response> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/remove/bulk', { numbers });
        },
        blockInboundSMS: (did: number, source: number): Promise<String> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/sms/incoming/block', {
                did,
                source,
            });
        },
        removeInboundSMSBlock: (did: number, source: number): Promise<String> => {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/user/dids/sms/incoming/block/remove', {
                did, source
            });
        },
    }
}

export default UserDidsBuilder;
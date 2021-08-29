export default interface Phone {
    id: number;
    user_id: number;
    user_name: string;
    user_type: string;
    country_code: number
    npa: number;
    nxx: number;
    xxxx: number;
    number: number;
    ratecenter: string;
    state: string;
    number_type: string;
    call_flow_id?: number;
    channel_group_id?: number;
    voicemail_inbox_id?: number;
    sms_enabled: number;
}
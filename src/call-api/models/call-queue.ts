export default class CallQueue{
    sid: string;
    phoneNumber: string;
    accountSid: string;
    friendlyName: string;
    dateCreated: string;
    dateUpdated: string;
    voiceUrl: string;
    voiceMethod: string;
    voiceFallbackUrl?: string;
    voiceFallbackMethod:  string;
    voiceCallerIdLookup: string;
    voiceApplicationSid?: number;
    statusCallback: string;
    statusCallbackMethod: string;
    smsUrl?: string;
    smsMethod: string;
    smsFallbackUrl?: string;
    smsFallbackMethod: string;
    smsApplicationSid?: string;
    apiVersion: string;
    isSIP?: boolean;
    uri: string;
}
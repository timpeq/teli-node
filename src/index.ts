import HttpClient from "./shared/http/http-client";
import ISMSBuilder from "./sms/contracts/sms-builder.interface";
import IMMSBuilder from "./mms/contracts/mms-builder.interface";
import ICallBuilder from "./call/contracts/call-builder.interface";
import IUserBuilder from "./user/contracts/user-builder.interface";
import ISIPBuilder from "./sip/contracts/sip-builder.interface";
import IIPBuilder from "./ip/contracts/ip-builder.interface";
import ILNPBuilder from "./lnp/contracts/lnp-builder.interface";
import SMSBuilder from './sms/builders';
import MMSBuilder from "./mms/builders";
import DidsBuilder from "./dids/builders";
import UserDidsBuilder from "./user-dids/builders";
import CallBuilder from "./call/builders";
import CallApiBuilder from "./call-api/builders";
import UserBuilder from "./user/builders";
import SIPBuilder from "./sip/builders";
import IPBuilder from "./ip/builders";
import LNPBuilder from "./lnp/builders";
import ICustomerBuilder from "./customer/contracts/customer-builder.interface";
import CustomerBuilder from "./customer/builders";
import IChannelGroupBuilder from "./channel-group/contracts/channel-group-builder.interface";
import ChannelGroupBuilder from "./channel-group/builders";
import IResellerBuilder from "./reseller/contracts/reseller-builder.interface";
import ResellerBuilder from "./reseller/builders";
import IFaxBuilder from "./fax/contracts/fax-builder.interface";
import FaxBuilder from "./fax/builders";
import IVoicemailBuilder from "./voicemail/contracts/voicemail-builder.interface";
import VoicemailBuilder from "./voicemail/builders";
import IOffnetProvisioningBuilder from "./offnet-provisioning/contracts/offnet-provisioning-builder.interface";
import OffnetProvisioningBuilder from "./offnet-provisioning/builders";
import IRestrictedUserBuilder from "./restricted-user/contracts/restricted-user.interface";
import RestrictedUserBuilder from "./restricted-user/builders";
import ILookupBuilder from "./lookup/contracts/lookup-builder.interface";
import LookupBuilder from "./lookup/builders";
import IEmergencyBuilder from "./emergency/contracts/emergency-builder.interface";
import EmergencyBuilder from "./emergency/builders";
import ICallApiBuilder from "./call-api/contracts/call-api-builder.interface";
import IDidsBuilder from "./dids/contracts/dids-builder.interface";
import IUserDidsBuilder from "./user-dids/contracts/user-dids-builder.interface";

class TeliNode {
    private httpClient: HttpClient;
    public sms: ISMSBuilder;
    public mms: IMMSBuilder;
    public dids: IDidsBuilder;
    public userDids: IUserDidsBuilder;
    public call: ICallBuilder;
    public callApi: ICallApiBuilder;
    public user: IUserBuilder;
    public sip: ISIPBuilder;
    public ip: IIPBuilder;
    public lnp: ILNPBuilder;
    public customer: ICustomerBuilder;
    public channelGroup: IChannelGroupBuilder;
    public reseller: IResellerBuilder;
    public fax: IFaxBuilder;
    public voicemail: IVoicemailBuilder;
    public offnetProvisioning: IOffnetProvisioningBuilder;
    public restrictedUser: IRestrictedUserBuilder;
    public lookup: ILookupBuilder;
    public emergency: IEmergencyBuilder;

    /**
     * SDK Constructor
     * @param callApiSIDToken
     * @param apiToken
     */
    constructor(callApiSIDToken: string, apiToken: string) {
        this.httpClient = new HttpClient(callApiSIDToken, apiToken);

        this.sms = SMSBuilder(this.httpClient);
        this.mms = MMSBuilder(this.httpClient);
        this.dids = DidsBuilder(this.httpClient);
        this.userDids = UserDidsBuilder(this.httpClient);
        this.call = CallBuilder(this.httpClient);
        this.callApi = CallApiBuilder(this.httpClient);
        this.user = UserBuilder(this.httpClient);
        this.sip = SIPBuilder(this.httpClient);
        this.ip = IPBuilder(this.httpClient);
        this.lnp = LNPBuilder(this.httpClient);
        this.customer = CustomerBuilder(this.httpClient);
        this.channelGroup = ChannelGroupBuilder(this.httpClient);
        this.reseller = ResellerBuilder(this.httpClient);
        this.fax = FaxBuilder(this.httpClient);
        this.voicemail = VoicemailBuilder(this.httpClient);
        this.offnetProvisioning = OffnetProvisioningBuilder(this.httpClient);
        this.restrictedUser = RestrictedUserBuilder(this.httpClient);
        this.lookup = LookupBuilder(this.httpClient);
        this.emergency = EmergencyBuilder(this.httpClient);
    }
}

export default TeliNode;
module.exports = TeliNode;

import HttpClient from "./shared/http/http-client.ts";
import ISMSBuilder from "./sms/contracts/sms-builder.interface.ts";
import IMMSBuilder from "./mms/contracts/mms-builder.interface.ts";
import ICallBuilder from "./call/contracts/call-builder.interface.ts";
import IUserBuilder from "./user/contracts/user-builder.interface.ts";
import ISIPBuilder from "./sip/contracts/sip-builder.interface.ts";
import IIPBuilder from "./ip/contracts/ip-builder.interface.ts";
import ILNPBuilder from "./lnp/contracts/lnp-builder.interface.ts";
import SMSBuilder from "./sms/builders/index.ts"
import MMSBuilder from "./mms/builders/index.ts";
import DidsBuilder from "./dids/builders/index.ts";
import UserDidsBuilder from "./user-dids/builders/index.ts";
import CallBuilder from "./call/builders/index.ts";
import CallApiBuilder from "./call-api/builders/index.ts";
import UserBuilder from "./user/builders/index.ts";
import SIPBuilder from "./sip/builders/index.ts";
import IPBuilder from "./ip/builders/index.ts";
import LNPBuilder from "./lnp/builders/index.ts";
import ICustomerBuilder from "./customer/contracts/customer-builder.interface.ts";
import CustomerBuilder from "./customer/builders/index.ts";
import IChannelGroupBuilder from "./channel-group/contracts/channel-group-builder.interface.ts";
import ChannelGroupBuilder from "./channel-group/builders/index.ts";
import IResellerBuilder from "./reseller/contracts/reseller-builder.interface.ts";
import ResellerBuilder from "./reseller/builders/index.ts";
import IFaxBuilder from "./fax/contracts/fax-builder.interface.ts";
import FaxBuilder from "./fax/builders/index.ts";
import IVoicemailBuilder from "./voicemail/contracts/voicemail-builder.interface.ts";
import VoicemailBuilder from "./voicemail/builders/index.ts";
import IOffnetProvisioningBuilder from "./offnet-provisioning/contracts/offnet-provisioning-builder.interface.ts";
import OffnetProvisioningBuilder from "./offnet-provisioning/builders/index.ts";
import IRestrictedUserBuilder from "./restricted-user/contracts/restricted-user.interface.ts";
import RestrictedUserBuilder from "./restricted-user/builders/index.ts";
import ILookupBuilder from "./lookup/contracts/lookup-builder.interface.ts";
import LookupBuilder from "./lookup/builders/index.ts";
import IEmergencyBuilder from "./emergency/contracts/emergency-builder.interface.ts";
import EmergencyBuilder from "./emergency/builders/index.ts";
import ICallApiBuilder from "./call-api/contracts/call-api-builder.interface.ts";
import IDidsBuilder from "./dids/contracts/dids-builder.interface.ts";
import IUserDidsBuilder from "./user-dids/contracts/user-dids-builder.interface.ts";

export class TeliNode {
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
// module.exports = TeliNode;

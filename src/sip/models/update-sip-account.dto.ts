import {SIPAccountType} from "../enums/sip-account-type.enum";

export default interface UpdateSipAccountDto {
    sipaccount_id: number;
    account_type: SIPAccountType;
    username: string;
    password: string;
    caller_id: string;
}

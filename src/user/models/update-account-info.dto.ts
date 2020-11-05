export default interface UpdateAccountInfoDto {
    email?: string;
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: number;
    sms_post_url?: string;
    web_hook_url?: string;
    smpp_password?: string;
}

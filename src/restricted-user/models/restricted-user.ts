export default class RestrictedUser {
    id: number;
    reseller_id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: number;
    address: string;
    city: string;
    state: string;
    zip: string;
    brand?: string;
    domain?: string;
    custom_css: number;
    custom_logo: number;
    user_statu: string;
    create_dt: string;
    modify_dt: string;
}
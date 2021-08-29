export default interface Customer{
    id: number;
    reseller_id?: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: number;
    address: string;
    city: string;
    state: string;
    zip: number;
    brand?: string;
    domain?: string;
    custom_css: number;
    custom_logo: number;
    user_status: string;
    create_dt: string;
    modify_dt: string;
}
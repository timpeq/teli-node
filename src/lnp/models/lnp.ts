export default interface Lnp {
    id: number;
    btn: number;
    location_type: string;
    business_contact: string;
    business_name: string;
    first_name?: string;
    last_name?: string;
    account_number: number;
    service_address: string;
    service_city: string;
    service_state: string;
    service_zip: number;
    partial_port: number;
    partial_port_details?: string;
    wireless_number?: number;
    wireless_pin?: string;
    caller_id?: number;
    foc_date?: string;
    numbers: Array<any>;
}
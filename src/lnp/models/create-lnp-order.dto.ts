export default interface CreateLnpOrderDto {
    numbers: string;
    btn: number;
    location_type: string;
    business_contact: string;
    business_name: string;
    first_name: string;
    last_name: string;
    account_number: string;
    service_address: string;
    service_city: string;
    service_state: string;
    service_zip: string;
    signature: string;
    partial_port: boolean;
    partial_port_details: string;
    wireless_number: boolean;
    wireless_pin: string;
    caller_id: string;
    bill_file: string;
    bill_name: string;
}

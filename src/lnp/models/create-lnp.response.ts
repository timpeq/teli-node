import LnpNumber from "./lnp-number";

export default class CreateLnpResponse{
    id: string;
    ticket_id?: string;
    btn: string;
    location_type: string;
    business_contact: string;
    business_name: string;
    first_name?: string;
    last_name?: string;
    account_number: string;
    service_address: string;
    service_city: string;
    service_state: string;
    service_zip: string;
    partial_port: number;
    partial_port_details?: string;
    wireless_number?: string;
    wireless_pin?: string;
    caller_id?: number;
    foc_date?: string;
    signature_s3_filename?: string;
    bill_s3_filename?: string;
    numbers: Array<LnpNumber>
}
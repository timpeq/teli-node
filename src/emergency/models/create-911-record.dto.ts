export default interface Create911RecordDto {
    did_id: number;
    full_name: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    unit_type?: string;
    unit_number?: string;
}
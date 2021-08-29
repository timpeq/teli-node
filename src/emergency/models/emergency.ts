export default interface Emergency{
    id: number;
    did_id: number;
    did_number: number;
    full_name: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    unit_type: string;
    unit_number: string;
    create_dt: string;
    modify_dt: string;
}
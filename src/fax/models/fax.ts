export default interface Fax{
    id: number;
    did_id: number;
    fax_status: string;
    direction: string;
    source_did: number;
    destination_did: number;
    recipient: string;
    pages: number;
    fail_reason?: string;
    create_dt: string;
    modify_dt: string;
    data: string;
    mime: string;
}
export default interface CallRecord {
    id: number;
    record_date: string;
    user_id: number;
    src: number;
    dst: number;
    uuid: string;
    call_type: string;
    uuid_fs: string;
    note: string;
    file_data: string;
}
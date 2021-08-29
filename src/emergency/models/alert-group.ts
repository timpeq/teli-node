export default interface AlertGroup{
    id: number;
    user_id: number;
    group_name: string;
    enable_conference: string;
    create_dt: string;
    modify_dt: string;
    endpoints: Array<any>;
}
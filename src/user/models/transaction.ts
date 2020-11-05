export default class Transaction {
    id: number;
    user_id: number;
    child_id?: number;
    referenced_transaction_id?: number;
    total: number;
    summary: string;
    transaction_type: string;
    transaction_status: string;
    create_dt: string;
    modify_dt: string;
}
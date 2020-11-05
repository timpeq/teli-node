export default class TransactionItem {
    id: number;
    transaction_id: number;
    product_type: string;
    product_id: number;
    product_description: string;
    product_price: number;
    product_mrc: number;
    processing_flags: string;
    processing_status: string;
    fail_reason?: string;
    create_dt: string;
    modify_dt: string;
}
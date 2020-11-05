export default interface ListTransactionsDto {
    limit?: number;
    offset?: number;
    start: string;
    end: string;
}

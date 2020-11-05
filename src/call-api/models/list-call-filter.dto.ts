export default interface ListCallFilterDto {
    To?: number;
    From?: number;
    Status?: string;
    StartTime?: string;
    EndTime?: string;
    ParentCallSid?: number;

    // For pagination
    Page?: number;
    NumPages?: number;
    PageSize?: number;
    Total?: number;
    Start?: number;
    End?: number;
}
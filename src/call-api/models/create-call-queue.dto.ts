export default interface CreateCallQueueDto {
    applicationUrl: string;
    applicationUrlMethod?: string
    phoneNumber: number;
    override?: boolean;
    byoc?: boolean;
}
export default class CreateCallQueueDto {
    applicationUrl: string;
    applicationUrlMethod?: string = 'POST'
    phoneNumber: number;
    override?: boolean;
    byoc?: boolean = true;
}
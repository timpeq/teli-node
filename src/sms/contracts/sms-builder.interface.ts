import SendSmsDto from "../models/send-sms.dto";
import GetSmsRecordDto from "../models/get-sms-record.dto";

export default interface ISMSBuilder {
    /**
     * Sending SMS
     * @param payload {Object} Send SMS information
     */
    send(payload: SendSmsDto): Promise<String>;

    /**
     * Get SMS CDR Records for a Specific Time Period
     * @param startDate {String} startDate would be month-day-year or 04-24-2017
     * @param end_date {String} endDate would be month-day-year or 04-24-2017
     * @param filter {Object} Criteria you want to find
     */
    getRecords(startDate: string, end_date: string, filter?: GetSmsRecordDto): Promise<String>;
}

import CallRecord from "../models/recording";
import GetCallRecordDto from "../models/get-call-record.dto";

export default interface ICallBuilder {
    /**
     * List calls you have recorded
     */
    listRecordings(): Promise<Array<CallRecord>>;

    /**
     * Get info and data for a recorded call
     * @param recording_id {Number} Recording ID
     */
    getRecording(recording_id: number): Promise<CallRecord>;

    /**
     * Remove recording for a call
     * @param recording_id {Number} Recording ID
     */
    removeRecording(recording_id: number): Promise<String>;

    /**
     * Get CDR Records for a Specific Time Period
     * @param startDate {String} Start date of the record
     *          would be month-day-year or 04-24-2017
     * @param endDate {String} End date of the record
     *          would be month-day-year or 04-24-2017
     * @param filter {Object} The criteria filter
     */
    getRecords(startDate: string, endDate: string, filter: GetCallRecordDto): Promise<Response>;

}

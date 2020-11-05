export default interface IOffnetProvisioningBuilder {
    /**
     * Check if we are able to provision an offnet number on our network.
     * @param numbers {String} Stringified JSON array
     */
    verifyCapability(numbers: string): Promise<Response>;

    /**
     * Submit an offnet insert job
     * @param numbers {String} Stringified JSON array
     * @param enable_sms {Boolean} Enabling sms
     */
    submitNumber(numbers: string, enable_sms?: boolean): Promise<Response>;

    /**
     * List all of the offnet jobs you have submitted
     */
    listOffsetNumbers(): Promise<Response>;

    /**
     * Detailed look at a specific job
     * @param job_id {Number} Offnet job ID
     */
    statusOfSubmit(job_id: number): Promise<String>;

    /**
     * Retrieves a list of numbers for a given offnet job
     * @param job_id {Number} Offnet job ID
     */
    listJobNumbers(job_id: number): Promise<Response>;
}
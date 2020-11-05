import CreateLnpOrderDto from "../models/create-lnp-order.dto";

export default interface ILNPBuilder {
    /**
     * Create LNP
     * @param payload {Object} LNP information
     */
    createOrder(payload: CreateLnpOrderDto): Promise<Response>;

    /**
     * Get a list of all of your lnp requests
     */
    listOrder(): Promise<Response>;

    /**
     * Get all the details about a given port request, with a list of numbers
     * @param request_id {Number} Request ID
     */
    getSpecificInformation(request_id: number): Promise<Response>;

    /**
     * Check to see if a given number or numbers is portable to our platform
     * @param numbers {String} String of comma separated numbers
     */
    checkNumberPortability(numbers: string): Promise<Response>;

    /**
     * Check to see if a bulk given number or numbers is portable to our platform
     */
    bulkCheckNumberPortability(numbers: string): Promise<Response>;

    /**
     * Submit signature
     * @param request_id {Number} Request ID
     * @param signature {String} Signature
     */
    submitSignature(request_id: number, signature: string): Promise<Response>;

    /**
     * Request CSV list
     * @param request_id {Number} Request ID
     */
    requestCSVList(request_id: number): Promise<Response>;
}

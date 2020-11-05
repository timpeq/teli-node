import CreateIpEndpointDto from "../models/create-ip-endpoint.dto";
import Ip from "../models/ip";

export default interface IIPBuilder {
    /**
     * Creates an ip address endpoint for use in call flows
     * @param payload {Object} IP endpoint information
     */
    createEndpoint(payload: CreateIpEndpointDto): Promise<String>;

    /**
     * Get a list of all of your current ip endpoints
     */
    listEndpoint(): Promise<Array<Ip>>;

    /**
     * Remove an ip address endpoint by id
     * @param endpoint_id {Number} Endpoint ID
     */
    removeEndpoint(endpoint_id: number): Promise<String>;
}

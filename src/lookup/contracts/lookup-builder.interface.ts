import CNAMLookup from "../models/cnam-lookup";
import Ownership from "../models/ownership";

export default interface ILookupBuilder {
    /**
     * Lookup LRN information for a provided number
     * @param number {Number} Number
     */
    ownership(number: number): Promise<Ownership>;

    /**
     * Query the Caller ID Name for a provided number
     * @param number {Number} Number
     */
    CNAM(number: number): Promise<CNAMLookup>;
}
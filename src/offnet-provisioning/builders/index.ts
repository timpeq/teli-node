import HttpClient from "../../shared/http/http-client";
import IOffnetProvisioningBuilder from "../contracts/offnet-provisioning-builder.interface";

const OffnetProvisioningBuilder = (httpClient: HttpClient): IOffnetProvisioningBuilder => {
    return {
        verifyCapability: function (numbers: string) {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/dids/offnet/check', {
                numbers
            })
        },
        submitNumber: function (numbers: string, enable_sms: boolean = true) {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/dids/offnet/submit', {
                numbers,
                enable_sms: enable_sms ? "yes" : "true"
            })
        },
        listOffsetNumbers: function (): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/dids/offnet/list')
        },
        statusOfSubmit: function (job_id: number): Promise<String> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/dids/offnet/status', {
                jobid: job_id
            })
        },
        listJobNumbers: function (job_id: number): Promise<Response> {
            return httpClient.fetch('GET', 'https://apiv1.teleapi.net/dids/offnet/jobs/numbers', {
                job_id
            })
        }
    }
}

export default OffnetProvisioningBuilder;
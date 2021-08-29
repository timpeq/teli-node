import SendMmsEmbedDto from "../models/send-mms-embed.dto.ts";
import SendMmsUrlDto from "../models/send-mms-url.dto.ts";

export default interface IMMSBuilder {
    /**
     * Sending an MMS while embedding the file directly in the POST message
     * @param payload {Objecct} MMS detail
     */
    sendEmbedded(payload: SendMmsEmbedDto): Promise<String>;

    /**
     * Send an MMS message if the media you want to send located at a URL
     * @param payload {Object} MMS detail
     */
    sendUrl(payload: SendMmsUrlDto): Promise<String>;
}

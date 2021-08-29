import CreateChannelGroupDto from "../models/create-channel-group.dto.ts";
import UpdateChannelGroupDto from "../models/update-channel-group.dto.ts";
import ChannelGroup from "../models/channel-group.ts";

export default interface IChannelGroupBuilder {
    /**
     * Retrieves the full list of channel groups on your account
     */
    list(): Promise<Array<ChannelGroup>>;

    /**
     * Get detail information of channel group on your account
     * @param channel_group_id {Number} Channel group ID
     */
    get(channel_group_id: number): Promise<ChannelGroup>;

    /**
     * Create channel group on your account
     * @param payload {Object} Channel group information
     */
    create(payload: CreateChannelGroupDto): Promise<String>;

    /**
     * Update channel group information
     * @param channel_group_id {Number} Channel group ID
     * @param payload {Object} Channel group information you want to change
     */
    update(channel_group_id: number, payload: UpdateChannelGroupDto): Promise<String>;

    /**
     * Remove channel group ID on your account
     * @param channel_group_id {Number} Channel group ID
     */
    remove(channel_group_id: number): Promise<String>;
}

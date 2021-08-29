import CreateRestrictedUserDto from "../models/create-restricted-user.dto.ts";
import UpdateRestrictedUserDto from "../models/update-restricted-user.dto.ts";
import UpdateBrandingDto from "../../user/models/update-branding.dto.ts";
import RestrictedUser from "../models/restricted-user.ts";
import RestrictedUserRates from "../models/restricted-user-rates.ts";
import RestrictedUserGroupPermission from "../models/restricted-user-group-permission.ts";

export default interface IRestrictedUserBuilder {
    /**
     * Create a restricted user
     * @param payload {Object} Restricted user information
     */
    createUser(payload: CreateRestrictedUserDto): Promise<String>;

    /**
     * Get info about a restricted user
     * @param ruser_id {Number} Restricted user ID
     */
    getUser(ruser_id: number): Promise<RestrictedUser>;

    /**
     * Get info about a restricted user
     */
    listUser(): Promise<Array<RestrictedUser>>;

    /**
     * Update restricted user
     * @param ruser_id {Number} Restricted user ID
     * @param payload {Object} Restricted user information you want to change
     */
    updateUser(ruser_id: number, payload: UpdateRestrictedUserDto): Promise<String>;

    /**
     * Enable users that have a user_status of "inactive-disabled"
     * @param ruser_id {Number} Restricted user ID
     */
    enableUser(ruser_id: number): Promise<String>;

    /**
     * Disable users that have a user_status of "active"
     * @param ruser_id {Number} Restricted user ID
     */
    disableUser(ruser_id: number): Promise<String>;

    /**
     * Get a specified user's rates
     * @param ruser_id {Number} Restricted user ID
     */
    listUserRates(ruser_id: number): Promise<RestrictedUserRates>;

    /**
     * Allocate a given number of dollars to the user's account
     * @param ruser_id {Number} Restricted user ID
     * @param amount {Number} Amount to be allocated
     */
    fundUser(ruser_id: number, amount: number): Promise<String>;

    /**
     * List the permission groups that are available to you to assign to a restricted user
     */
    listPermissionGroups(): Promise<Array<RestrictedUserGroupPermission>>;

    /**
     * List all the permission groups that are assigned to a specific restricted user
     * @param ruser_id {Number} Restricted user ID
     */
    listPermissionUser(ruser_id: number): Promise<Array<RestrictedUserGroupPermission>>;

    /**
     * Add or remove a permission group from a restricted user
     * @param ruser_id {Number} Restricted user ID
     * @param group_id {Number} Group ID
     * @param enabled {Boolean} Passing Enable status
     */
    setSecurityGroup(ruser_id: number, group_id: number, enabled?: boolean): Promise<String>;

    /**
     * Set rates for a restricted user
     * @param ruser_id {Number} Restricted user ID
     * @param rates {String} Rates for a restricted user in JSON string
     */
    updateUserRates(ruser_id: number, rates: string): Promise<String>;

    /**
     * Set the credit line for a restricted user
     * @param ruser_id {Number} Restricted User ID
     * @param rates Credit line rates for restricted user
     */
    setCreditLine(ruser_id: number, rates: string): Promise<String>;

    /**
     * Send a password reset email to restricted user, using their account email address
     * @param ruser_id {Number} Restricted user ID
     */
    resetPassword(ruser_id: number): Promise<String>;

    /**
     * Updates the Whitelabel options for a restricted user
     * @param ruser_id {Number} Restricted user ID
     * @param payload {Object} Branding information ID
     */
    updateBranding(ruser_id: number, payload: UpdateBrandingDto): Promise<String>;

    /**
     * Attempts to remove the custom whitelabel CSS file
     * @param ruser_id {Number} Restricted user ID
     */
    removeCSS(ruser_id: number): Promise<String>;

    /**
     * Attempts to remove the custom whitelabel logo
     * @param ruser_id {Number} Restricted user ID
     */
    removeLogo(ruser_id: number): Promise<String>;

    /**
     * Retrieve a restricted user's API token
     *      for use when managing their account directly
     * @param ruser_id {Number} Restricted user ID
     */
    getToken(ruser_id: number): Promise<String>;

    /**
     * Enable the ability to add and manage offnet numbers
     * @param ruser_id {Number} Restricted user ID
     */
    enableOffnet(ruser_id: number): Promise<String>;

    /**
     * Mark an account as post paid
     * @param ruser_id {Number} Restricted user ID
     */
    setPostpay(ruser_id: number): Promise<String>;

    /**
     * Set inbound and outbound channel limits for a restricted user
     * @param ruser_id {Number} Restricted user ID
     * @param inbound {Number} Inbound channel limits
     * @param outbound {Number} Outbound channel limits
     */
    setChannelLimits(ruser_id: number, inbound: number, outbound: number): Promise<String>;
}
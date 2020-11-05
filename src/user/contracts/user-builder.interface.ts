import BillingDetailSummaryDto from "../models/billing-detail-summary.dto";
import UpdateAccountInfoDto from "../models/update-account-info.dto";
import UpdatePasswordDto from "../models/update-password.dto";
import UpdateBrandingDto from "../models/update-branding.dto";
import CreateSubUserDto from "../models/create-sub-user.dto";
import UpdateSubUserDto from "../models/update-sub-user.dto";
import UpdateFraudSettingsDto from "../models/update-fraud-settings.dto";
import GetInvoiceDto from "../models/get-invoice.dto";
import GetInvoiceByEmailDto from "../models/get-invoice-by-email.dto";
import ListTransactionsDto from "../models/list-transactions.dto";
import BillingDetail from "../models/billing-detail";
import Subuser from "../models/subuser";
import Invoice from "../models/invoice";
import Transaction from "../models/transaction";
import BalanceDetail from "../models/balance-detail";
import TransactionItem from "../models/transaction-item";

export default interface IUserBuilder {
    /**
     * Retrieve a list of aggregate costs and totals for the master account for a child account
     * @param payload {Object} Criteria
     */
    getBillingDetailSummary(payload: BillingDetailSummaryDto): Promise<Array<BillingDetail>>;

    /**
     * Update account information
     * @param payload {Object} Account information you want to update
     */
    updateAccountInfo(payload: UpdateAccountInfoDto): Promise<String>;

    /**
     * Update password
     * @param payload {Object} Current and new password
     */
    updatePassword(payload: UpdatePasswordDto): Promise<String>;

    /**
     * Update branding
     * @param payload {Object} Branding information you want to update
     */
    updateBranding(payload: UpdateBrandingDto): Promise<String>;

    /**
     * Create a sub user
     * @param payload {Object} Sub user information
     */
    createSubUser(payload: CreateSubUserDto): Promise<String>;

    /**
     * Get a list of all of your sub users
     */
    listSubUser(): Promise<Array<Subuser>>;

    /**
     * Update sub user
     * @param subuser_id {Number} Sub user ID
     * @param payload {Object} Sub user information you want to update
     */
    updateSubUser(subuser_id: number, payload: UpdateSubUserDto): Promise<String>;

    /**
     * Remove sub user
     * @param subuser_id {Number} Sub user ID
     */
    removeSubUser(subuser_id: number): Promise<String>;

    /**
     * Update fraud setting
     * @param payload {Object} Fraud setting information
     */
    updateFraudSettings(payload: UpdateFraudSettingsDto): Promise<String>;

    /**
     * Removes the whitelabeled CSS from the users account
     */
    removeCSS(): Promise<String>;

    /**
     * Removes the whitelabeled Logo from the users account
     */
    removeLogo(): Promise<String>;

    /**
     * Configures the inbound SMS POST URL
     * @param url {String} SMS url
     */
    setSMSUrl(url: string): Promise<String>;

    /**
     * Configures the web hook URL
     * @param url {String} Webhook URL
     */
    setWebHookUrl(url: string): Promise<String>;

    /**
     * Controls the SMS delivery notification URL
     * @param url {String} SMS delivery URL
     */
    setSMSDeliveryUrl(url: string): Promise<String>;

    /**
     * Set affiliate Paypal
     * @param address {String} Paypal address
     */
    setAffiliatePaypal(address: string): Promise<String>;

    /**
     * Reset sub user password
     * @param subuser_id {Number} Sub user ID
     * @param new_password {String} New password
     */
    resetSubUserPassword(subuser_id: number, new_password: string): Promise<String>;

    /**
     * List sub user security groups
     * @param subuser_id Sub user ID
     */
    listSubUserSecurityGroups(subuser_id: number): Promise<Response>;

    /**
     * Returns the number of outbound channels (not channel group channels) currently in use
     */
    outboundChannelCount(): Promise<String>;

    /**
     * Retrieves the invoice for the time period between the start and end dates
     * @param payload {Object} Time periods
     */
    getInvoice(payload: GetInvoiceDto): Promise<Array<Invoice>>;

    /**
     * Retrieves the invoice for the time period between the start and end dates
     *      The invoice data will be delivered to the supplied email address.
     * @param payload {Object} Time period and email information
     */
    getInvoiceByEmail(payload: GetInvoiceByEmailDto): Promise<String>;

    /**
     * Retrieves the current balance on the account
     */
    getBalance(): Promise<Number>;

    /**
     * Retrieves the current balance on the account with additional account details
     */
    getDetailedBalance(): Promise<BalanceDetail>;

    /**
     * Transactions list
     * @param payload {Object} For pagination
     */
    listTransactions(payload: ListTransactionsDto): Promise<Array<Transaction>>;

    /**
     * Retrieves the transaction details for the requested transaction_id
     * @param transaction_id {Number} Transaction ID
     */
    getTransactionItems(transaction_id: number): Promise<Array<TransactionItem>>;
}

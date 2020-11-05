const client = require("./client");

function getBillingDetailSummary() {
    client.user.getBillingDetailSummary({
        start_date: '2019-10-15',
        end_date: '2020-02-07'
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function updateAccountInfo() {
    client.user.updateAccountInfo({
        name: 'pao'
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function updatePassword() {
    client.user.updatePassword({
        curpass: 'abc',
        newpass:'bcd'
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function updateBranding() {
    client.user.updateBranding({
        brand: 'bagenciala',
        domain: '.net'
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function createSubUser() {
    client.user.createSubUser({
        username: "hello113",
        password: "testing123",
        email: "hello@hello1.com",
        first_name: "helloa",
        last_name: "testinga",
        phone_number: "525634711",
        address: "abu dabhi street",
        city: "dubai",
        state: "NY",
        zip: "14420"
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function listSubUser() {
    client.user.listSubUser()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function updateSubUser() {
    client.user.updateSubUser(1545, {
        first_name: 'undoro'
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function removeSubUser() {
    client.user.removeSubUser(1545)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function updateFraudSettings() {
    client.user.updateFraudSettings({
        max_international:'abc'
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function removeCSS() {
    client.user.removeCSS()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function removeLogo() {
    client.user.removeLogo()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function setSMSUrl() {
    client.user.setSMSUrl('https://url.com')
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function setWebHookUrl() {
    client.user.setWebHookUrl('https://url.com')
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function setSMSDeliveryUrl() {
    client.user.setSMSDeliveryUrl('https://url.com')
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function setAffiliatePaypal() {
    client.user.setAffiliatePaypal('abc@abc.com')
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function resetSubUserPassword() {
    client.user.resetSubUserPassword(1545,'vadodo')
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function listSubUserSecurityGroups() {
    client.user.listSubUserSecurityGroups(1545)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

// listSubUserSecurityGroups();

function outboundChannelCount() {
    client.user.outboundChannelCount()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function getInvoice() {
    client.user.getInvoice({
        start: "2019-10-07",
        end: "2020-02-07",
        tzoffset: 123
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function getInvoiceByEmail() {
    client.user.getInvoiceByEmail({
        email: "abc@abc.com",
        start: "2019-10-07",
        end: "2020-02-07",
        tzoffset: 123
    })
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function getBalance() {
    client.user.getBalance()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function getDetailedBalance() {
    client.user.getDetailedBalance()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function listTransactions() {
    client.user.listTransactions({
        start: "2019-10-07",
        end: "2020-02-07"
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function getTransactionItems() {
    client.user.getTransactionItems(3024096)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

updateBranding();
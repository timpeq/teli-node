const client = require("./client");

function create() {
    client.reseller.create({
        username: "hello11",
        password: "testing123",
        email: "hello@hello1.com",
        first_name: "hello",
        last_name: "testing",
        phone_number: "525634731",
        address: "abu dabhi street",
        city: "dubai",
        state: "NY",
        zip: "14420"
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function get() {
    client.reseller.get(21450)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function list() {
    client.reseller.list()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function enableAccount() {
    client.reseller.enableAccount(21450)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function disableAccount() {
    client.reseller.disableAccount(21450)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function showRates() {
    client.reseller.showRates(21450)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function addFunds() {
    client.reseller.addFunds(21450,50000)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function updateAccount() {
    client.reseller.updateAccount(21450, {email: "abc@abc.com"})
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function reassignNumberToResellerOrCustomer() {
    client.reseller.reassignNumberToResellerOrCustomer(21450,21455)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function updateBranding() {
    client.reseller.updateBranding(21450,{
        old_domain: "abc",
        brand: "balen",
        domain: ".com"
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function removeCSS() {
    client.reseller.removeCSS(21455)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function removeLogo() {
    client.reseller.removeLogo(21450)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function updateRates() {
    client.reseller.updateRates(21450, "[25000]")
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function setCreditLine() {
    client.reseller.setCreditLine(21450,21455)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function resetPassword() {
    client.reseller.resetPassword(21450)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function getToken() {
    client.reseller.getToken(21450)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function enableOffnet() {
    client.reseller.enableOffnet(21455)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function setChannelLimits() {
    client.reseller.setChannelLimits(21450,20000,30000)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}
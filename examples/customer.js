const client = require("./client");

function create() {
    client.customer.create({
        username: "budi",
        password: "tono",
        email: "budi@gmail.com",
        first_name: "Budi",
        last_name: "Tono",
        phone_number: "123",
        address: "A Street",
        city: "New York",
        state: "NY",
        zip: "28292"
    })
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function get() {
    client.customer.get(21505)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function list() {
    client.customer.list()
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function enableAccount() {
    client.customer.enableAccount(21505)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function disableAccount() {
    client.customer.disableAccount(21505)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function showRates() {
    client.customer.showRates(21505)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function addFunds() {
    client.customer.addFunds(21505, 10000)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function updateAccount() {
    client.customer.updateAccount(21505, {
        address: 'test'
    })
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function updateBranding() {
    client.customer.updateBranding(21505, {
        old_domain: 'a.com',
        brand: 'Budi',
        domain: 'c.com'
    })
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function removeCSS() {
    client.customer.removeCSS(21505)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function removeLogo() {
    client.customer.removeLogo(21505)
        .then(res => console.log(res))
        .catch(e => console.error(e));
}

function updateRates() {
    client.customer.updateRates(21505, '')
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function setCreditLine() {
    client.customer.setCreditLine(21505, 1000)
        .then(res => console.log(res))
        .catch(e => console.error(e));
}

function resetPassword() {
    client.customer.resetPassword(21505)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function setChannelLimits() {
    client.customer.setChannelLimits(21505, {
        inbound: 1000,
        outbound: 2000
    })
        .then(res => console.log(res))
        .catch(e => console.error(e))
}
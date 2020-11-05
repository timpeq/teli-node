const client = require("./client");

function createUser() {
    client.restrictedUser.createUser({
        username: "hello123",
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

function getUser() {
    client.restrictedUser.getUser(21456)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function listUser() {
    client.restrictedUser.listUser()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function updateUser() {
    client.restrictedUser.updateUser(21456,{
        username: "hello123",
        password: "testing123",
        email: "hello@hello123.com",
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

function enableUser() {
    client.restrictedUser.enableUser(21456)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function disableUser() {
    client.restrictedUser.disableUser(21456)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function listUserRates() {
    client.restrictedUser.listUserRates(21456)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function fundUser() {
    client.restrictedUser.fundUser(21456,50000)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function listPermissionGroups() {
    client.restrictedUser.listPermissionGroups()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function listPermissionUser() {
    client.restrictedUser.listPermissionUser(21456)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function setSecurityGroup() {
    client.restrictedUser.setSecurityGroup(21456, 1)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function updateUserRates() {
    client.restrictedUser.updateUserRates(21456,"[50000]")
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function setCreditLine() {
    client.restrictedUser.setCreditLine(21456,"[20000]")
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function resetPassword() {
    client.restrictedUser.resetPassword(21456)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function updateBranding() {
    client.restrictedUser.updateBranding(21456, {
        brand: "b8",
        domain: "com",
        old_domain: "edu"
    })
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function removeCSS() {
    client.restrictedUser.removeCSS(21456)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function removeLogo() {
    client.restrictedUser.removeLogo(2145)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function getToken() {
    client.restrictedUser.getToken(21456)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function enableOffnet() {
    client.restrictedUser.enableOffnet(21456)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function setPostpay() {
    client.restrictedUser.setPostpay(21456)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function setChannelLimits() {
    client.restrictedUser.setChannelLimits(21456, {
        inbound: 20000,
        outbound: 50000
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}
const client = require("./client");

function createAccount() {
    client.sip.createAccount({
        account_type: "device",
        username: "pekochan",
        password: "pauberd"
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function listAccount() {
    client.sip.listAccount()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function updateAccount() {
    client.sip.updateAccount({
        sipaccount_id: 41514,
        account_type: 'server',
        username: 'pekopelee',
        password: 'lulaby',
        caller_id: '123'
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function removeAccount() {
    client.sip.removeAccount(41514)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}
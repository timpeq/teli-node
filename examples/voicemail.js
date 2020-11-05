const client = require("./client");

function createAccount() {
    client.voicemail.createAccount({
        name: "abc",
        inbox_number: 1,
        pin: 2565,
        transcribe: "yes"
    })
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function getAccount() {
    client.voicemail.getAccount(2478)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function listAccount() {
    client.voicemail.listAccount()
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function updateAccount() {
    client.voicemail.updateAccount(2478, {
        name: 'duuu',
        inbox_number: 123,
        pin: 1121,
        transcribe: 'a'
    })
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function removeAccount() {
    client.voicemail.removeAccount(2478)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function addInboxEmail() {
    client.voicemail.addInboxEmail(2478, 'budi@gmail.com')
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function removeInboxEmail() {
    client.voicemail.removeInboxEmail(2478,123)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

removeInboxEmail();
function listVoicemail() {
    client.voicemail.listVoicemail(2478)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}


function getVoicemail() {
    client.voicemail.getVoicemail(2478,123)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

// getVoicemail();

function removeVoicemail() {
    client.voicemail.removeVoicemail(2478,123)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}
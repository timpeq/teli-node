const client = require("./client");

function verifyCapability() {
    client.offnetProvisioning.verifyCapability('5555555556')
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function submitNumber() {
    client.offnetProvisioning.submitNumber('5555555555', 'yes')
        .then(res => console.log(res))
        .catch(e => console.error(e));
}

function listOffsetNumbers() {
    client.offnetProvisioning.listOffsetNumbers()
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function statusOfSubmit() {
    client.offnetProvisioning.statusOfSubmit(742586)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function listJobNumbers() {
    client.offnetProvisioning.listJobNumbers(742586)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}
const client = require("./client");

function sendSMS() {
    client.sms.send({
        destination: 7205551212,
        source: 2674935581,
        message: 'Hello'
    })
    .then(res => console.log(res))
    .catch(e => console.error(e))
}

function getSMSRecords () {
    client.sms.getRecords('07-03-2020', '07-05-2020')
        .then(res => console.log(res))
        .catch(e => console.error(e))
}
sendSMS();
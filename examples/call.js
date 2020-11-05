const client = require("./client");

function listRecordings(){
    client.call.listRecordings()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function getRecording(){
    client.call.getRecording()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function removeRecording() {
    client.call.removeRecording()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function getRecords() {
    client.call.getRecords("04-20-2020","05-20-2020")
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}
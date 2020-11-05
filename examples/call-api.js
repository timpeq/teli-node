const client= require("./client");

function setIncomingCallURL() {
    client.callApi.setIncomingCallURL(	2674935581,"https://url.com")
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function list() {
    client.callApi.list("2012-04-24")
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function detail(){
    client.callApi.detail("2012-04-24","ID8deb35fc5121429fa96635aebe3976d2-CAd3d6e6c83a66471692563f3803e22a1d")
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function make() {
    client.callApi.make("2012-04-24", {
        From: 16175551212,
        To: 13035551212,
        Url: "https://api.teleapi.net/rcml/fourscore.xml"
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function createQueue() {
    client.callApi.createQueue({
        applicationUrl: "http://www.mocky.io/v2/5dd4a91f2f0000f905d4fb63",
        applicationUrlMethod: 'POST',
        phoneNumber: 13035551212
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function listConference(){
    client.callApi.listConference("2012-04-24")
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function getConference(){
    client.callApi.getConference("2012-04-24", 1)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function listConferenceParticipant() {
    client.callApi.listConferenceParticipant("2012-04-24", 1, 2)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function createClient() {
    client.callApi.createClient("2012-04-24",{
        Login: "andi123",
        Password: "baba12!!!22B"
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

// createClient();

function changeClientPassword() {
    client.callApi.changeClientPassword('2012-04-24', 'CLc391a9aabb2e4917b493e4700ca82961',{password:'123'})
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function deleteClient() {
    client.callApi.deleteClient('2012-04-24','CLc391a9aabb2e4917b493e4700ca82961')
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function listClient(){
    client.callApi.listClient('2012-04-24')
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function listRecordings(){
    client.callApi.listRecordings('2012-04-24')
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function listCallRecordings() {
    client.callApi.listCallRecordings('2012-04-24', 1)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function deleteRecordingRecords() {
    client.callApi.deleteRecordingRecords('2012-04-24', 'REce94b25b2466452ca81824adc87ca3cf')
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

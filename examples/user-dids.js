const client = require("./client");

function listAll() {
    client.userDids.listAll()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function listAllSimple(){
    client.userDids.listAllSimple()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function detail() {
    client.userDids.detail(5303895293)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function remove() {
    client.userDids.remove(25677678)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function changeCallFlow() {
    client.userDids.changeCallFlow( 25687609,41223)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function assignToChannelGroup() {
    client.userDids.assignToChannelGroup(24935020,455)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function assignVoicemailBox() {
    client.userDids.assignVoicemailBox(25687609,2478)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function convertToFax() {
    client.userDids.convertToFax(25687609)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function convertToVoiceIfFax() {
    client.userDids.convertToVoiceIfFax(25687609)
        .then(res=> console.log(res))
        .then(e=> console.error(e))
}

function enableCNAM() {
    client.userDids.enableCNAM({
        did_id: 25687609,
        number: 1
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function disableCNAM() {
    client.userDids.disableCNAM({
        did_id: 25687609,
        number: 1
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function changeNoteOnDid() {
    client.userDids.changeNoteOnDid(25687609,'hello')
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function removeNoteOnDid() {
    client.userDids.removeNoteOnDid(25687609)
        .then(res=>console.log(res))
        .catch(e=> console.error(e))
}

function showCallerIDSetLIDB() {
    client.userDids.showCallerIDSetLIDB(25687609)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function setCallerIDLIDB() {
    client.userDids.setCallerIDLIDB(25687609, 10)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function setUrlSMSOnSpecificPhone() {
    client.userDids.setUrlSMSOnSpecificPhone(25687609, 'https://www.google.com')
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function removeUrlSMS() {
    client.userDids.removeUrlSMS(25687609)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function setListing() {
    client.userDids.setListing()
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function getListing() {
    client.userDids.getListing(25687609)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function removeListing() {
    client.userDids.removeListing(25687609)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function setCallForwarding() {
    client.userDids.setCallForwarding({
        did_id: 25687609,
        forward_to: 2674935581})
        .then(res=> console.log(res))
        .then(e=> console.error(e))
}

function listBackorders() {
    client.userDids.listBackorders()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function setDeliveryURL() {
    client.userDids.setDeliveryURL(25687609,"https://www.google.com/" )
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function listHiddenOffsetDids() {
    client.userDids.listHiddenOffsetDids()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function createFlow() {
    client.userDids.createFlow({
        flow_name: "abc",
        flow_data:  '[{"command":"route","options":{"duration":"15","destination":{"type":"call_forward","value":"123"}}}]'
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function getFlow() {
    client.userDids.getFlow(41223)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function listFlows() {
    client.userDids.listFlows()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function updateFlow() {
    client.userDids.updaxteFlow({
        flow_id: 41437,
        flow_name: "abcd",
        flow_data:  '[{"command":"route","options":{"duration":"15","destination":{"type":"call_forward","value":"123"}}}]'
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function removeFlow() {
    client.userDids.removeFlow(41437)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function setDefaultFlow(){
    client.userDids.setDefaultFlow(41223)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function bulkRemoveNumbers() {
    client.userDids.bulkRemoveNumbers("[5303895293]")
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function blockInboundSMS() {
    client.userDids.blockInboundSMS(25687609)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function removeInboundSMSBlock() {
    client.userDids.removeInboundSMSBlock()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

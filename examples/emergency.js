const client = require('./client')

function createRecord() {
    client.emergency.createRecord({
        did_id: 24935020,
        full_name: "Dur",
        address: "abu dabhi street",
        city: "dubai",
        state: "NY",
        zip: "14420"
    })
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function lookupRecord() {
    client.emergency.lookupRecord()
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

// lookupRecord();
function listRecord() {
    client.emergency.listRecord(true)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function updateRecord() {
    client.emergency.updateRecord(24935020,{
        full_name: "Dur",
        address: "abu dabhi street",
        city: "dubai",
        state: "NY",
        zip: "14420"
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function removeRecord() {
    client.emergency.removeRecord(24935020)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function validateRecord() {
    client.emergency.validateRecord({
        address: "abu dabhi street",
        city: "dubai",
        state: "NY",
        zip: "14420"
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function createAlertGroup() {
    client.emergency.createAlertGroup("testing alert group")
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function listAlertGroup() {
    client.emergency.listAlertGroup()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function lookupAlertGroup() {
    client.emergency.lookupAlertGroup({
        e911_id: 123123,
        group_id: 932,
        group_name: "testing group",
        did: 1234
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function removeAlertGroup() {
    client.emergency.removeAlertGroup(932)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function assignNumberToAlertGroup() {
    client.emergency.assignNumberToAlertGroup({
        group_id: 932,
        e911_id: 123,
        did_id: 123,
        did_number: 123
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function unAssignNumberToAlertGroup() {
    client.emergency.unAssignNumberToAlertGroup()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function addNotificationToAlertGroup() {
    client.emergency.addNotificationToAlertGroup(933,{
        type: "email",
        value: "vandorohery99@gmail.com"
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function removeNotifyFromAlertGroup() {
    client.emergency.removeNotifyFromAlertGroup()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

// unAssignNumberToAlertGroup();
// assignNumberToAlertGroup();
// removeAlertGroup();
// lookupAlertGroup();
// validateRecord();
// removeRecord();
// updateRecord();
listRecord();
// lookupRecord();
// createRecord();
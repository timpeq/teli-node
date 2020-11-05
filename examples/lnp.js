const client = require("./client");

function createOrder() {
    client.lnp.createOrder({
        numbers:5555555559,
        btn: 5555555556,
        location_type: "business",
        business_contact: "Bobby McFrobbys",
        business_name: "Bob's Telecos",
        first_name: null,
        last_name: null,
        account_number: "123456",
        service_address: "123 Some Street",
        service_city: "Englewood",
        service_state: "CO",
        service_zip: "80112",
        partial_port: 0,
        partial_port_details: null,
        wireless_number: 0,
        wireless_pin: null,
        caller_id: null,
        foc_date: null
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function listOrder() {
    client.lnp.listOrder()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function getSpecificInformation() {
    client.lnp.getSpecificInformation(4753)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function checkNumberPortability() {
    client.lnp.checkNumberPortability("5555555555,5555555554")
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function bulkCheckNumberPortability() {
    client.lnp.bulkCheckNumberPortability("5555555555,5555555554")
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function submitSignature() {
    client.lnp.submitSignature(4753,"abc")
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function requestCSVList() {
    client.lnp.requestCSVList(4753)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

// submitSignature();
// bulkCheckNumberPortability();
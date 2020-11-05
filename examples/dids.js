const client = require("./client");

function listStates() {
    client.dids.states()
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function rateCenters() {
    client.dids.rateCenters('UT')
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function localNumbers() {
    client.dids.localNumbers()
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function tollfreeNumbers() {
    client.dids.tollfreeNumbers()
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function orderSingleNumber() {
    client.dids.orderSingleNumber({
        number: "8088256009",
        call_flow: "287"
    })
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function searchVanityTollfreeNumbers() {
    client.dids.searchVanityTollfreeNumbers('')
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function orderVanityTollfreeNumber() {
    client.dids.orderVanityTollfreeNumber(8449900413)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function getNPA() {
    client.dids.getNPA()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function getNXX(){
    client.dids.getNXX('0')
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function getIntlRatesCSV(){
    client.dids.getIntlRatesCSV()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function getIntlCountriesList(){
    client.dids.getIntlCountriesList()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function getIntlStatesList() {
    client.dids.getIntlStatesList('191.195.165.31.230.75.145.255.244.232.18.73.221.195.66.79.105.138.212;b5ddf8ac2c0362de749b3500aa52e5b6d99615f1')
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}
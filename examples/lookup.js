const client = require("./client");

function ownership() {
    client.lookup.ownership(55555555)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function CNAM() {
    client.lookup.CNAM(55555555)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}
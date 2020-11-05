const client = require("./client");

function sendMMSURL() {
    client.mms.sendUrl({
        destination: 7205551212,
        source: 2674935581,
        file_url: 'https://img.freepik.com/free-vector/flat-multiracial-group-people_52683-19067.jpg'
    })
    .then(res => console.log(res))
    .catch(e => console.error(e))
}

function sendMMSEmbedded() {
    client.mms.sendEmbedded({
        destination: 7205551212,
        source: 2674935581,
        file_name: 'Testing',
        file_data: 'test'
    })
        .then(res => console.log(res))
        .catch(e => console.error(e))
}
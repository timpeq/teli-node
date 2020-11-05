const client = require("./client");
const fs = require('fs');

function listAllFaxes() {
    client.fax.listAllFaxes(26423297)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

async function send() {
    const contents = await fs.readFileSync('./images/small.png', {encoding: 'base64'});

    client.fax.send(26423297,{
        destination: '25687609',
        recipient: '5303895293',
        files: contents
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function download() {
    client.fax.download(123)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function deleteFax() {
    client.fax.delete(123)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function listAllEmails() {
    client.fax.listAllEmails(26439278)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function addAnEmailToFax() {
    client.fax.addAnEmailToFax(26423297,"abc@abc.com")
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function removeAnEmail() {
    client.fax.removeAnEmail(26423297,"abc@abc.com")
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}
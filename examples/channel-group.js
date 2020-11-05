const client = require("./client");

function list() {
    client.channelGroup.list()
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function get() {
    client.channelGroup.get(455)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function create() {
    client.channelGroup.create({
        name: 'Group Testing',
        channels: '4'
    })
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function update() {
    client.channelGroup.update(455, {
        name: 'Testing New',
        channels: '7'
    })
        .then(res => console.log(res))
        .catch(e => console.error(e))
}

function remove() {
    client.channelGroup.remove(455)
        .then(res => console.log(res))
        .catch(e => console.error(e))
}
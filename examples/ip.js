const client= require ("./client");

function createEndpoint(){
    client.ip.createEndpoint({
        ip_address: '192.168.1.1',
        ip_name: 'test'
    })
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function listEndpoint(){
    client.ip.listEndpoint()
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}

function removeEndpoint(){
    client.ip.removeEndpoint(4884)
        .then(res=> console.log(res))
        .catch(e=> console.error(e))
}
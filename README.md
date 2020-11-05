# Teli Node

[![NPM](https://nodei.co/npm/teli-node.png?downloads=true&stars=true)](https://nodei.co/npm/teli-node/)

## Documentation
The documentation for the Tele API can be found [here](https://apidocs.teleapi.net/api/).

## Basic Example
```javascript
const callApiSIDToken = process.env.TELI_CALL_API_SID_TOKEN; // Your Call API SID Token from https://control.teli.net
const apiToken = process.env.TELI_API_TOKEN;   // Your API Token from https://control.teli.net

const client = new teli(callApiSIDToken, apiToken);

client.sms.send({
    destination: 123,
    source: 456,
    message: 'Hello World'
})
```
## Getting help
If you need help installing or using the library, please [file a support ticket](https://teli.net/contact/) here.

If you've instead found a bug in the library or would like new features added, go ahead and open issues or pull requests against this repo!
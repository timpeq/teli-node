# Teli ~~Node~~ Deno

This is a fork of [Teli Node](https://github.com/IrinaBocearov/teli-node) modified to work with [Deno](https://deno.land/).

I'm not affiliated with [Teli](https://www.teli.net) in any way other than being a customer.

This is still work-in-progress, but it is at least partially usable.

## Documentation
The documentation for the Tele API can be found [here](https://apidocs.teleapi.net/api/).

## Basic Example
```typescript
import { Teli } from "https://raw.githubusercontent.com/timpeq/teli-node/master/src/index.ts"

const callApiSIDToken = Deno.env.get("TELI_CALL_API_SID_TOKEN"); // Your Call API SID Token from https://control.teli.net
const apiToken = Deno.env.get("TELI_API_TOKEN");   // Your API Token from https://control.teli.net

const teli = new Teli(callApiSIDToken, apiToken);

console.log(await teli.userDids.listAll());

teli.sms.send({
    destination: 123,
    source: 456,
    message: 'Hello World'
})
```

const teli = require('../lib');

const CALL_API_SID_TOKEN = process.env.CALL_API_SID_TOKEN || 'AC129fe07948e80fd295a90ea3b96381c4';
const API_TOKEN = process.env.API_TOKEN || 'e54deae4-40c7-43d7-940e-2c1171412d2b';

const client = new teli(CALL_API_SID_TOKEN, API_TOKEN);

module.exports = client;
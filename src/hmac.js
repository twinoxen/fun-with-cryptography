const { createHmac } = require('crypto')

const key = 'pass-pass'
const message = 'Hey is this like JWT'

const hmac = createHmac('sha256', key).update(message).digest('hex')

console.log(hmac);

const key2 = 'pass-pass-2'
const hmac2 = createHmac('sha256', key2).update(message).digest('hex')

console.log(hmac2);
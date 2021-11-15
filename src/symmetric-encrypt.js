const { createCipheriv, randomBytes, createDecipheriv } = require('crypto')

// Crypt
const message = "I like pineapple on pizza"

// shared keys
const key = randomBytes(32)
const iv = randomBytes(16)

const cipher = createCipheriv('aes256', key, iv)

const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex')

// Decrypt 
const decipher = createDecipheriv('aes256', key, iv)
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf8') + decipher.final('utf8')

console.log(encryptedMessage);
console.log(decryptedMessage);


const { log } = require('console');
const { publicEncrypt, privateDecrypt } = require('crypto')
const { publicKey, privateKey } = require('./keypair')

const message = "Through the cracks in the wall, slow motion for all"

const encryptData = publicEncrypt(
  publicKey,
  Buffer.from(message)
)

console.log(encryptData.toString('hex'));

const decryptData = privateDecrypt(privateKey, encryptData)

console.log(decryptData.toString('utf-8'))
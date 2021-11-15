const { generateKeyPairSync } = require('crypto')

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    // cipher: 'aes-256-cbc',
    // passphrase: 'the derpiest derp'
  }
})

// console.log(privateKey);
// console.log(publicKey);

module.exports = {
  privateKey, publicKey
}


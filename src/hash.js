const { createHash } = require('crypto')

function hash(str) {
  return createHash('sha256').update(str).digest('hex')
}

const password1 = hash('password12345')
console.log(password1);

const password2 = hash('secretPassword')
console.log(password2);

console.log(password1 === password2);


const { scryptSync, randomBytes, timingSafeEqual } = require('crypto')

const users = []

function signup(email, password) {
  const salt = randomBytes(16).toString('hex')
  const hashPassword = scryptSync(password, salt, 64).toString('hex')

  const user = {
    email, password: `${salt}:${hashPassword}`
  }

  users.push(user)

  return user
}

function login(email, password) {
  const user = users.find(user => user.email === email)

  const [salt, key] = user.password.split(':')
  const hashedBuffer = scryptSync(password, salt, 64)
  
  const keyBuffer = Buffer.from(key, 'hex')

  const match = timingSafeEqual(hashedBuffer, keyBuffer);

  if (match) {
    return 'login success!'
  } else {
    return 'login fail!'
  }
}

signup('test@test.com', 'superSecretPassword')

console.log(login('test@test.com', 'notTheRightPassword'))
console.log(login('test@test.com', 'superSecretPassword'))




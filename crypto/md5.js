'use strict'

const crypto = require('crypto')

const _key = 'SaltSolution'
const _src = 'NZDWURKCRI'
const _encrypted = 'i6CEMiyQKuzQHutITVVqiw=='

const hashedKey = crypto.createHash('md5').update(_key, 'utf8').digest()
const notHashedKey = new Buffer(_key)

const encrypted = new Buffer(_encrypted, 'base64')

crypto.getCiphers().filter(alg => alg.indexOf('des') > -1).forEach(alg => {
  const cipher = crypto.createCipher(alg, hashedKey)

  let encoded =
    cipher.update(_src, 'utf8', 'base64')
    + cipher.final('base64')

  console.log(`alg: [${alg}] ; hashedKey: [true] ; encoded: [${encoded}] ; same?: [${encrypted.toString('base64') === encoded}]`)

  const cipher2 = crypto.createCipher(alg, notHashedKey)

  let encoded2 =
    cipher2.update(_src, 'utf8', 'base64')
    + cipher2.final('base64')

  console.log(`alg: [${alg}] ; hashedKey: [false] ; encoded: [${encoded2}] ; same?: [${encrypted.toString('base64') === encoded2}]`)
})

// sweet - testing decipher ...
const decipher = crypto.createDecipher('des-ede', notHashedKey)

let decoded = decipher.update(_encrypted, 'base64', 'utf8')
decoded += decipher.final('utf8')

console.log(`alg: [${'des-ede'}] ; hashedKey: [false] ; decoded: [${decoded}] ; same?: [${_src === decoded}]`)

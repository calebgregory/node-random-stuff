'use strict'

const path = require('path')

const deleter = require('./deleter')

const p = path.resolve(__dirname, '..', 'files', 'test')

deleter(p)
  .then(
    () => console.log('done')
  )

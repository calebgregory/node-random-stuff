'use strict'

const fs = require('fs')

// if dir doesn't exist, make dir, otherwise erase everything in it
module.exports = (path) =>
  new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (!stats) return fs.mkdir(path, resolve)

      fs.readdir(path, (err, files) => {
        if (files.length === 0) return resolve()

        files.forEach((file, i, a) => {
          fs.unlink(path+'/'+file)
          if(i === a.length - 1) return resolve()
        })
      })
    })
  })

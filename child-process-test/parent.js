const cp = require('child_process')
const path = require('path')

const childProcess = cp.spawn('node', [ path.resolve(__dirname, 'child.js') ])

childProcess.stdout.on('data', (data) => console.log(data.toString()))
childProcess.stderr.on('data', (data) => console.error(data.toString()))
childProcess.on('end', (code) => console.log(`Process ended with code [${code}].`))

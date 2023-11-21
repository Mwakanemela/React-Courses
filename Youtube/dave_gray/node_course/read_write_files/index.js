const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data.toString())
})

console.log('Hello...')
process.on('uncaughtException', err => {
    console.error(`uncaught error: ${err}`)
    process.exit(1)
})
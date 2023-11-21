const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data.toString())
})

console.log('Hello...')

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to learn node.',(err) => {
    if (err) throw err;
    console.log('data was written successfully')
})
process.on('uncaughtException', err => {
    console.error(`uncaught error: ${err}`)
    process.exit(1)
})
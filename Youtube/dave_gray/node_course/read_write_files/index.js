const fs = require('fs')

fs.readFile('./files/starte.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data.toString())
})

process.on('uncaughtException', err => {
    console.error(`uncaught error: ${err}`)
    process.exit(1)
})
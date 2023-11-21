const fsPromises = require('fs').promises
const path = require('path')


const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(
            path.join(__dirname, 'files', 'starter.txt'), 'utf-8'
        )
        console.log(data)
        await fsPromises.writeFile(
            path.join(__dirname, 'files', 'promiseWrite.txt'), data
        )
        await fsPromises.appendFile(
            path.join(__dirname, 'files', 'promiseWrite.txt'), '\nbackend developer'
        )
        await fsPromises.rename(
            path.join(__dirname, 'files', 'promiseWrite.txt'), 
            path.join(__dirname, 'files', 'promiseWriteRename.txt')
        )

        const newData = await fsPromises.readFile(
            path.join(__dirname, 'files', 'promiseWriteRename.txt'), 'utf-8'
        )
        console.log(newData)
    } catch (err) {
        console.error(err)
    }
}

fileOps()
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString())
// })

// console.log('Hello...')

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to learn node.',(err) => {
//     if (err) throw err;
//     console.log('data was written successfully')

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\nappend text.',(err) => {
//     if (err) throw err;
//         console.log('data was appended successfully')
        
//         fs.rename(path.join(__dirname, 'files', 'reply.txt') , path.join(__dirname, 'files', 'newreply.txt'), (err) => {
//             if (err) throw err;
//             console.log('rename successfully')
//         })
// })
// })


process.on('uncaughtException', err => {
    console.error(`uncaught error: ${err}`)
    process.exit(1)
})
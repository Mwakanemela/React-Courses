const logEvents = require('./event_emitter/logEvents')
const EventEmitter = require('events')

class MyEmmiter extends EventEmitter{ }

//initilize object
const myEmitter = new MyEmmiter()

myEmitter.on('log', (msg, username) => logEvents(msg, username))

setTimeout(() => {
    myEmitter.emit('log', 'Log event emitted', 'Mwakanemela kayange')
}, 2000)
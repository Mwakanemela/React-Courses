const logEvents = require('./event_emitter/logEvents')
const EventEmitter = require('events')

class MyEmmiter extends EventEmitter{ }

//initilize object
const myEmitter = new MyEmmiter()

myEmitter.on('log', (msg) => logEvents(msg))

setTimeout(() => {
    myEmitter.emit('log', 'Log event emitted')
}, 2000)
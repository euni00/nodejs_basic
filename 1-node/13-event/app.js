const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
    console.log('first callback - ', args);
}
emitter.on('euni', callback1);

emitter.on('euni', (args) => {
    console.log('second callback - ', args);
});

emitter.emit('euni', { message: 1});
emitter.emit('euni', { message: 2});
emitter.removeAllListeners('euni', callback1 );
emitter.emit('euni', { message: 3});

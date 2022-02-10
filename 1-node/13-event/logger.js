const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(callback) {
        this.emit('log', 'started...');
        callback();
        this.emit('log', 'ended!');
    }
}

// function log(callback) {
//     emitter.emit('log', 'started...');
//     callback();
//     emitter.emit('log', 'ended!');
// }

// 외부에서도 쓸 수 있도록 확장
module.exports.Logger = Logger;
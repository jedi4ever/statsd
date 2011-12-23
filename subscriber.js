var ZMQ = require('zmq');

var address = 'tcp://127.0.0.1:3000';
var repeater = ZMQ.createSocket('sub');
repeater.connect(address);
repeater.subscribe('');
repeater.on('message', function (message) {
    console.log(message.toString());
});

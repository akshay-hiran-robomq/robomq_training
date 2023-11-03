const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('Tankfull', () => {
    console.log('Please turn off the Motor!');

    setTimeout(() => {
        console.log('Please turn off the motor!, its gental remainder');
    }, 3000);
});

console.log("The script is running!")
myEmitter.emit('Tankfull');
console.log("The Script is still running!")
// myEmitter.emit('Tankfull');

// const http = require('http');
// const currDateTime = require('./myFirstModeule');
// const uc = require('upper-case');
// const poort = 8080;
// http.createServer((req,res) => {
//     // res.writeHead(200,{'Content-Type':'text/html'});
//     const message = uc.upperCase('hello world');
//     res.end(message + currDateTime.myDateTime());
// }).listen(poort);
// console.log(`app running ${poort}`)

// const fs = require('fs');
// const rs = fs.createReadStream('./demofile.txt');
// rs.on('open', () => { 
//     console.log('The file is open');
// });

// rs.on('data', (data) => {
//     console.log(data.toString());
// });

//initializing eventemitter
const events = require('events');
const eventEmitter = new events.EventEmitter();

//what event handler does
const myEventHandler = () => {
    console.log('I hear a scream');
};
//assign the event handler to an event
eventEmitter.on('scream', myEventHandler);
//fire the scream event
eventEmitter.emit('scream');
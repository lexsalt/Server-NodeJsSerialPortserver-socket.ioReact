
// Import dependencies
const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

// Defining the serial port
// const port = new SerialPort("COM3", {
//     baudRate: 9600,
// });
let port = new SerialPort('/dev/tty.usbmodem14202', {
    baudRate: 115200,
    autoOpen: false
   })
   

// The Serial port parser
const parser = new Readline();
port.pipe(parser);

// Read the data from the serial port
// parser.on("data", (line) => console.log(line));
port.open(() => {
    console.log("Port open");
    parser.on('data', (data) => {
      console.log('Received Data: ' + data.toString());
    //   processData(data);
    });
   })
//    function processData(data) {
//    }

// Write the data to the serial port
// port.write("ROBOT POWER ON");
// port.write("ROBOT POWER ON");
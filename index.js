
const express = require('express')
const app = express()
const io = require('socket.io')(app.listen(3000));
//const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(() => console.log(`Example app listening on port 3000`))

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", ()=> {
  var led = new five.Led(13);
  //conexion con SOCKET
  io.on('connection', (socket)=>{
    socket.on('onLed', ()=>{
      led.on();
    })
    socket.on('onOff', ()=>{
      led.off();
    })
  })
});

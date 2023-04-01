
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hola segundo B')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", ()=> {
  var led = new five.Led(13);
  led.blink(1000);
});

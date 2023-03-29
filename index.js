const { Board, Led } = require("johnny-five");
const board = new Board({ port: "COM3" });
board.on("ready", () => {
    console.log("Arduino listo");
    const led = new Led(13);
    led.blink(500);
});
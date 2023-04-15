let socket = io();

let btnOn = document.getElementById('btnOn');
let btnOff = document.getElementById('btnOff');
btnOn.onclick = () => {
    console.log("Prendido LED dossssssssss");
    socket.emit('onLed');
}

btnOff.onclick = () => {
    console.log("apagar LED dossssssssss");
    socket.emit('onOff');
}
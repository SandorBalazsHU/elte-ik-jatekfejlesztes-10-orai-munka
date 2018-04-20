var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var entities = [];

var ws = new WebSocket('ws://localhost:12345');
ws.onmessage = function (event) {
   entities = JSON.parse(event.data);
   //ws.send('Szia!');
};


setInterval(update, 16);

function update() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(const entity of entities){
        ctx.fillRect(entity.x, entity.y, 100, 100);
    }
}

console.log("Fut???");
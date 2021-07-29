var mouseEvent = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var colour = "red";
width_of_line = 1;

canvas.addEventListener("mousedown", myMousedown );
function myMousedown(e){
    colour = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", myMousemove );
function myMousemove(e){
    current_position_of_mousex = e.clientX - canvas.offsetLeft;
    current_position_of_mousey = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mousex, current_position_of_mousey, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}

canvas.addEventListener("mouseup", myMouseup);
function myMouseup(e){
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", myMouseleave);
function myMouseleave(e){
    mouseEvent = "mouseleave";
}
function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
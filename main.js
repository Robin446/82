var mouseEvent = "Empty";
var mouse_position_x, mouse_position_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "blue";
width = 3;

canvas.addEventListener("mousedown",My_mousedown);

function My_mousedown(e){
    color = document.getElementById("Color1").value;
    width = document.getElementById("width1").value;
    mouseEvent = "mousedown";

}
canvas.addEventListener("mouseup",My_mouseup);

function My_mouseup(e){
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", My_mouseleave);

function My_mouseleave(e){
    mouseEvent = "mouseleave";

}
canvas.addEventListener("mousemove",My_mousemove)

function My_mousemove(e){
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokStyle = color;
        ctx.lineWidth = width;
        console.log("last_Position_of_X and last_position_of_Y = ");
        console.log("X = "+ mouse_position_x + "Y = "+mouse_position_y );
        ctx.moveTo(mouse_position_x,mouse_position_y);
        console.log("current position of X and current position of Y = ");
        console.log("X = "+ current_position_of_x + "Y = "+ current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
    }
    mouse_position_x = current_position_of_x;
    mouse_position_y = current_position_of_y;

}
function clear3(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
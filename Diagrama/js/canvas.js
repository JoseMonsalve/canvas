var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");
console.log("ctx", ctx);

//Titulo: Biblioteca Publica
ctx.font="50px Arial";
ctx.fillStyle = "orange";
ctx.fillText("Biblioteca Pública",10,50);
ctx.stroke();

//Subtitulo: Proceso de Prestamo de Libros
ctx.font="20px Arial";
ctx.fillStyle = "blue";
ctx.fillText("Proceso de Préstamo de Libros",10,70);
ctx.stroke();

//Inicio
ctx.beginPath();
ctx.arc(350,115,15,0,2*Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.arc(450,115,15,0,2*Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.fillStyle = "black";
ctx.fillRect(350,99,100,32);
ctx.font="16px Arial";
ctx.fillStyle = "white";
ctx.fillText("INICIO",375,120);
ctx.stroke();
//Linea
ctx.beginPath();
ctx.moveTo(400,120);
ctx.lineTo(400,165);
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.stroke();

//Solicitud del Libro
ctx.fillStyle = "black";
ctx.fillRect(335,164,130,40);
ctx.font="16px Arial";
ctx.fillStyle = "white";
ctx.fillText("SOLICITUD",360,180);
ctx.stroke();
ctx.fillText("DEL LIBRO",360,200);
ctx.stroke();
//Linea
ctx.beginPath();
ctx.moveTo(400,200);
ctx.lineTo(400,245);
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.stroke();

//Libro disponible
ctx.beginPath();
ctx.moveTo(400,240);
ctx.lineTo(340,280);
ctx.lineTo(400,320);
ctx.lineTo(460,280);
ctx.lineTo(400,240);
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.stroke();
ctx.fillStyle = "rgba(0,0,0,1)";
ctx.fill();
ctx.font="14px Arial";
ctx.fillStyle = "white";
ctx.fillText("LIBRO",380,270);
ctx.stroke();
ctx.fillText("DISPONIBLE?",360,290);
ctx.stroke();
//Linea
ctx.beginPath();
ctx.moveTo(340,280);
ctx.lineTo(260,280);
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.stroke();

//Esperar el Libro
ctx.fillStyle = "black";
ctx.fillRect(135,260,130,40);

ctx.font="16px Arial";
ctx.fillStyle = "white";
ctx.fillText("ESPERAR",165,275);
ctx.stroke();
ctx.fillText("EL LIBRO",165,295);
ctx.stroke();
//Linea
ctx.beginPath();
ctx.moveTo(200,260);
ctx.lineTo(200,183);
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.stroke();
//Linea
ctx.beginPath();
ctx.moveTo(200,185);
ctx.lineTo(335,185);
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.stroke();
//Linea
ctx.beginPath();
ctx.moveTo(400,320);
ctx.lineTo(400,350);
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.stroke();

//Posee carnet
ctx.beginPath();
ctx.moveTo(400,350);
ctx.lineTo(340,390);
ctx.lineTo(400,430);
ctx.lineTo(460,390);
ctx.lineTo(400,350);
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.stroke();
ctx.fillStyle = "rgba(0,0,0,1)";
ctx.fill();
ctx.font="14px Arial";
ctx.fillStyle = "white";
ctx.fillText("POSEE",375,380);
ctx.stroke();
ctx.fillText("CARNET?",370,400);
ctx.stroke();
//Linea
ctx.beginPath();
ctx.moveTo(400,430);
ctx.lineTo(400,460);
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.stroke();

//Registrar usuario
ctx.fillStyle = "black";
ctx.fillRect(135,370,130,40);

ctx.font="16px Arial";
ctx.fillStyle = "white";
ctx.fillText("REGISTRAR",155,385);
ctx.stroke();
ctx.fillText("USUARIO",165,405);
ctx.stroke();
//Linea
ctx.beginPath();
ctx.moveTo(260,390);
ctx.lineTo(340,390);
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.stroke();
//Linea
ctx.beginPath();
ctx.moveTo(200,410);
ctx.lineTo(200,482);
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.stroke();
//Linea
ctx.beginPath();
ctx.moveTo(200,480);
ctx.lineTo(335,480);
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.stroke();

//Registrar prestamo
ctx.fillStyle = "black";
ctx.fillRect(335,460,130,40);
ctx.font="16px Arial";
ctx.fillStyle = "white";
ctx.fillText("REGISTRAR",355,475);
ctx.stroke();
ctx.fillText("PRESTAMO",355,495);
ctx.stroke();
//Linea
ctx.beginPath();
ctx.moveTo(400,500);
ctx.lineTo(400,530);
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.stroke();

//Fin
ctx.beginPath();
ctx.arc(350,546,15,0,2*Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.arc(450,546,15,0,2*Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.fillStyle = "black";
ctx.fillRect(350,529,100,34);
ctx.font="16px Arial";
ctx.fillStyle = "white";
ctx.fillText("FIN",385,550);
ctx.stroke();

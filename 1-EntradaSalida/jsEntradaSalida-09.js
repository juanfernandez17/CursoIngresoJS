/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".

Fernandez Juan Ignacio
Ejercicio 9
*/

function mostrarAumento()
{
	var importe; 
	var	aumento;  
	var total;

	importe = document.getElementById('txtIdSueldo').value;
	importe = parseInt(importe);
	aumento = importe * 0.1;
	total = importe + aumento;
	
	document.getElementById('txtIdResultado').value = total;
}

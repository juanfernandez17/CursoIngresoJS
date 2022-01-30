/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let importe = parseInt(document.getElementById('txtIdSueldo').value);
	let	aumento = importe + 10 * importe / 100;
	document.getElementById('txtIdResultado').value = aumento;
}

/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo = parseInt(document.getElementById('txtIdSueldo').value);
		aumento = 10 * sueldo / 100;
	document.getElementById('txtIdResultado').value = aumento;
}

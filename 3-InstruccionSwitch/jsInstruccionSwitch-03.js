/*
Fernandez Juan Ignacio
Ejercicio: Switch 03
*/

function mostrar()
{
	var mes;

	mes = document.getElementById('txtIdMes').value;
	
	switch (mes) {
		case 'Febrero':
			alert('Este mes no tiene más de 29 días.');
			break;
		default:
			alert('Este mes tiene 30 días o más.');
			break;
	}
}
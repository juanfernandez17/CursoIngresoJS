/*
Fernandez Juan Ignacio
Ejercicio: Switch 04
*/

function mostrar()
{
	var mes;

	mes = document.getElementById('txtIdMes').value;
	
	switch (mes) {
		case 'Febrero':
			alert('Tiene 28 días.');
			break;
		case 'Abril':	
		case 'Julio':
		case 'Septiembre':
		case 'Noviembre':
			alert('Tiene 30 días.');
			break;
		default:
			alert('Tiene 31 días');
			break;
	}
}


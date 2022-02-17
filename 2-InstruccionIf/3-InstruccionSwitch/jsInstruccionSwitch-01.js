/*
Fernandez Juan Ignacio
Ejercicio: Switch 01
*/

function mostrar()
{
	var mes;

	mes = document.getElementById('txtIdMes').value;
	
	switch (mes) {
		case 'Enero':
			alert('Que comiences bien el año!');
			break;
		case 'Marzo':
			alert('A clases!');
			break;
		case 'Julio':
			alert('Se vienen las vacaciones!');
			break;
		case 'Diciembre':
			alert('Felices fiestas!');
			break;
		default:
			alert('Sin novedades.');
			break;
	}	
}
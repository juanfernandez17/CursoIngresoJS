/*
Fernandez Juan Ignacio
Ejercicio: Switch 02
*/

function mostrar()
{
	var mes;
	
	mes = document.getElementById('txtIdMes').value;
	
	switch (mes) {
		
		case 'Julio':
			alert('Abrigate que hace frio.');
			break;
		case 'Agosto':
			alert('Abrigate que hace frio.');
			break;
		case 'Septiembre':
			alert('Ya pasamos el frio, ahora hace calor!');
			break;
		case 'Octubre':
			alert('Ya pasamos el frio, ahora hace calor!');
			break;
		case 'Noviembre':
			alert('Ya pasamos el frio, ahora hace calor!');
			break;
		case 'Diciembre':
			alert('Ya pasamos el frio, ahora hace calor!');
			break;
		default:
			alert('Falta para el invierno.');
			break;
	}
}
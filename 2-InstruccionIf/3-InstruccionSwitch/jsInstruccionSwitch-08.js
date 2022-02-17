/*
Fernandez Juan Ignacio
Ejercicio: Switch 08
*/

function mostrar()
{
	var destino;

	destino = document.getElementById('txtIdDestino').value;

	switch (destino) {
		case 'Mar del plata':
		case 'Cataratas':
			alert('Calor');
			break;
		default :
			alert('Frio');
			break;
	}
}
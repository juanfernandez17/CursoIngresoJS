/*
Fernandez Juan Ignacio
Ejercicio: Switch 10
*/

function mostrar()
{
/* 	var estacion;
	var destino;
	var mensaje;

	estacion = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;

	switch (estacion)
	{
		case 'Invierno':
			if (destino == 'Bariloche'){
				mensaje = 'Se viaja'
			}
			else{
				mensaje = 'No se viaja'
			}
		break;
		case 'Verano':
			if (destino == 'Mar del plata' || destino == 'Cataratas'){
				mensaje = 'Se viaja'
			}
			else{
				mensaje = 'No se viaja'
			}
		break;
		case 'Otoño':
			mensaje = 'Se viaja'
		break;
		case 'Primavera':
			if (destino == 'Bariloche'){
				mensaje = 'No se viaja'
			}
			else{
				mensaje = 'Se viaja'
			}
		break;
	}
	alert(mensaje); */

	var estacion;
	var destino;
	var mensaje;

	estacion = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;
	mensaje = '';

	switch (estacion)
	{
		case 'Invierno':
			switch(destino)
			{
				case 'Bariloche':
					mensaje = 'Se viaja';
					break;
				default:
					mensaje = 'No se viaja';
					break;
			}
		break;
		case 'Verano':
			switch(destino)
			{
				case 'Mar del plata':
				case 'Cataratas':
					mensaje = 'Se viaja';
					break;
				default:
					mensaje = 'No se viaja';
					break;
			}
		break;
		case 'Primavera':
			switch(destino)
			{
				case 'Bariloche':
					mensaje = 'No se viaja';
					break;
				default:
					mensaje = 'Se viaja';
					break;
			}
		break;
		default: 
			mensaje = 'Se viaja';
			break;
	}
	alert(mensaje);	
}
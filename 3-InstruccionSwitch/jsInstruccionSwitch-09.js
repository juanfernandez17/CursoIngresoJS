/*
Fernandez Juan Ignacio
Ejercicio: Switch 09
*/

function mostrar()
{
	var estacion;
	var destino;
	var precioFinal;
	var mensaje;

	estacion = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;
	precioFinal = 15000;
	mensaje = '';

	switch (estacion)
	{
		case 'Invierno':
			switch (destino) 
			{
				case 'Bariloche':
					precioFinal = precioFinal * 1.2;
					break;
				case 'Mar del plata':
					precioFinal = precioFinal * .8;
					break;
				default :
					precioFinal = precioFinal * .9;
					break;
			}
		break;
		case 'Verano':
			switch (destino) 
			{
				case 'Bariloche':
					precioFinal = precioFinal * .8;
					break;
				case 'Mar del plata':
					precioFinal = precioFinal * 1.2;
					break;
				default:
					precioFinal = precioFinal * 1.1;
					break;
			}
		break;
		default:
			switch(destino)
			{
				case 'Cordoba': 
					precioFinal;
					break;
				default:
					precioFinal = precioFinal * 1.1;
					break;
			}
		break;
	}
	mensaje = 'Precio final: $' + precioFinal;
	alert(mensaje);
}
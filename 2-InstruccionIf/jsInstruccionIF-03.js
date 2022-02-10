/*
Fernandez Juan Ignacio
Ejercicio: InstruccionIF 03
*/

function mostrar()
{
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if (edad > 17)
	{
		alert('La persona es mayor de edad');
	}
	else
	{
		alert('La persona es menor de edad');
	}
}

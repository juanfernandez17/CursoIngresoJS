/*
Fernandez Juan Ignacio
Ejercicio: InstruccionIF 04
*/

function mostrar()
{
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if (edad > 12 && edad < 18)
	{
		alert('La persona es adolescente');
	}
}
/*
Fernandez Juan Ignacio
Ejercicio: InstruccionIF 01
*/
function mostrar()
{
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);
	
	if (edad == 15)
	{
		alert('Niña bonita');
	}
}
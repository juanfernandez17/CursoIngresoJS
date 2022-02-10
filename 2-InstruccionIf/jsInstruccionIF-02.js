/*
Fernandez Juan Ignacio
Ejercicio: InstruccionIF 02
*/
function mostrar()
{
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if (edad > 17)
	{
		alert('La persona es mayor de edad.');
	}
}
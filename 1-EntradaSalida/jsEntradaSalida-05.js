/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 

Fernandez Juan Ignacio

*/
function mostrar()
{	
	var nombre;
	var edad;

	nombre = document.getElementById('txtIdNombre').value;
	edad = document.getElementById('txtIdEdad').value;

	alert('Usted se llama ' + nombre + ' y tiene ' + edad + ' años');
}


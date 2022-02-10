/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'

Fernandez Juan Ignacio 

*/
function mostrar()
{
	var nombre;
	
	nombre = prompt('Su nombre: ');

	document.getElementById("txtIdNombre").value = nombre;
	
}



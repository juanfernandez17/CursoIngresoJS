/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre = prompt('Su nombre: ')

	document.getElementById("txtIdNombre").value = nombre;
	
}

/* Asigno a la variable "nombre" el valor que ingrese el usuario a traves del prompt
y uso la variable nombre para reemplazar el valor de la caja de texto 
del documento HTML */

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"

Fernandez Juan Ignacio
Ejercicio 6
*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	resultado = numeroUno + numeroDos;

	alert('La suma es ' + resultado);
}


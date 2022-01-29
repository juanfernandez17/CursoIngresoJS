/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

let numeroUno;
let numeroDos;
let resultado; 

numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);

function sumar()
{	
	resultado = numeroUno + numeroDos;
	alert("La suma es " + resultado);	
}

function restar()
{
	resultado = numeroUno - numeroDos
	alert('La resta es ' + resultado);
}

function multiplicar()
{ 
	resultado = numeroUno * numeroDos
	alert('La multiplicación es ' + resultado);
}

function dividir()
{
	resultado = numeroUno / numeroDos
	alert('La división es ' + resultado);
}


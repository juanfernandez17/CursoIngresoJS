/*
Fernandez Juan Ignacio
Ejercicio: InstruccionIF 10
*/

function mostrar()
{
	var notaExamen;

	notaExamen = (Math.random() * 10) + 1;	
	notaExamen = Math.floor(notaExamen);
	

	if (notaExamen >= 9)
	{
		alert('Excelente: ' + notaExamen);
	}
	else 
	{
		if (notaExamen > 3)
		{
			alert('Aprobó: ' + notaExamen);
		}
		else
		{
			alert('Vamos, la proxima se puede: ' + notaExamen);
		}
	}	
}
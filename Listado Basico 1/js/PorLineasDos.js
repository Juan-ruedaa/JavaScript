/**

* Implementa PorLineasDos que visualice los números del 0 al 100 separados por comas.
* Cada múltiplo de 7 o finalizado en 7 ha de comenzar en una línea nueva.

* @author Juan Rueda Morales
* @version 1.0

*/

{
	let cadena="";
	
	for (let i=0;i<100;i++) {
		if(i%7===0 || i.toString().substr(-1)==7)
			cadena+="\n";
		cadena += i + ",";
	}

	console.log(cadena);
}
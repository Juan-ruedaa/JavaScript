/**

* Implementa CerosYUnos que lea una secuencia de ceros y unos. 
* Mostrará el número de ceros de la secuencia. Dejará de leer cuando el usuario introduzca el número 2.

* @author Juan Rueda Morales
* @version 1.0

*/

{
	let numero;
	let nCeros=0;
	do{
		numero=prompt("Introduzca un número (1 o 0). Si quiere salir introduce el 2: ");
		if(numero<0 || numero>2 || isNaN(numero) || numero.length==0){
			console.log("Introduce un numero correcto (1 o 0). Si quiere salir introduce el 2");
		}

		else{
			numero=parseInt(numero);
			if(numero==0){
				nCeros++;
			}
		}
	}while(numero!=2);
	console.log("El número de ceros introducidos es: " + nCeros);
}
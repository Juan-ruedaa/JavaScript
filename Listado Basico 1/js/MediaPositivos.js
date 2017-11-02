/**

* Implementa MediaPositivos que calcule la media de una serie de números positivos, introducidos por teclado. Dejará de leer cuando el usuario introduzca el 0.

* @author Juan Rueda Morales
* @version 1.0

*/

{
	let numero=1;
	let media=0;

	for(i=0;numero!=0;i++){
		numero=prompt("Introduce un numero para calcular la media (pulsa 0 para salir): ");
		while(numero<0 || isNaN(numero) || numero.length==0){
			console.log("Introduce el número de forma correcta");
			numero=prompt("Introduce un numero para calcular la media (pulsa 0 para salir): ");
		}
		media+=parseInt(numero);
	}
	console.log("La media de los números introducidos es: "+media/(i-1))
}
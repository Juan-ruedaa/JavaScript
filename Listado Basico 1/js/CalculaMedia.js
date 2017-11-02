/**

* Implementa CalculaMedia que pida números hasta que se introduzca uno negativo. 
* Entonces, que muestre la media.

* @author Juan Rueda Morales
* @version 1.0

*/

{
	let numero=1;
	let media=0;

	for(i=0;numero>=0;i++){
		numero=prompt("Introduce un número para calcular la media (introduce uno negativo para salir): ");

		if(isNaN(numero) || numero.length==0){
			console.log("Introduce el número de forma correcta");
			numero=1;
		}else{
			numero=parseInt(numero);
			if(numero>=0)
				media+=numero;
		}
	}
	console.log("La media de los numeros introducidos es: " + media/(i-1))
}
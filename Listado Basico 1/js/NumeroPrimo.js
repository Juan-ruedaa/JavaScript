/**

* Implenta NumeroPrimo que pida un número e indique si es primo o no.

* @author Juan Rueda Morales
* @version 1.0

*/

{
	let esNumeroPrimo =function(numero){
		for(let i=2;i<numero;i++){
			if(numero%i==0){
				return false;
			}
		}
		return true;
	}

	let numero = prompt("Introduce un número para saber si es primo : ");

	if(isNaN(numero)){
		console.log("No has introducido un número válido");
	}
	else{
		if(esNumeroPrimo(numero))
			console.log("El número " + numero + " es primo");
		else
			console.log("El número " + numero + " no es primo");
	}
}
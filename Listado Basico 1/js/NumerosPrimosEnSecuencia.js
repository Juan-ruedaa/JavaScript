/**

* Implenta NumerosPrimosEnSecuencia que pida un número e indique cuántos números primos existen entre el 1 y dicho número.

* @author Juan Rueda Morales
* @version 1.0

*/
{
	let esNumeroPrimo = function(numero){
		let primo=true;
		for(let i=2;i<numero;i++){
			if(numero%i==0){
				primo=false;
				break;
			}
		}
		return primo;
	}


	let contador=0;
	let numero = prompt("Introduce un número, debe ser entero y positivo: ");

	if(isNaN(numero) || numero<0){
		console.log("No has introducido un número válido");
	}
	else{
		for(let i=1;i<numero;i++){
			if(esNumeroPrimo(i)){
				contador++;
			}
		}
		console.log("Entre el numero 1 y el "+numero+" hay "+contador+" números primos");
	}
}
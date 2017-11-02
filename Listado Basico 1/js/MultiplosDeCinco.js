/**

* Implementa MultiplosDeCinco que pida 7 números e indique si alguno es múltiplo de5

* @author Juan Rueda Morales
* @version 1.0

*/


{ 
	let multiploDeCinco = function(numero) {
		if(numero%5==0) {
			return true;
		}
		return false;
	}

	for(let i=0;i<7;i++) {
		do{
			var numero = prompt("Introduce un número para comprobar si es múltiplo de 5: ");

			if(isNaN(numero)) {
				console.log("No has introducido un número válido");
		}
			

		} while(isNaN(numero) || numero.length==0);
		
		if(multiploDeCinco(numero)) {
			console.log("El número " + numero +" es múltiplo de 5");
		}
		else {
			console.log("El número " + numero +" no es múltiplo de 5");
		}				
	}
}
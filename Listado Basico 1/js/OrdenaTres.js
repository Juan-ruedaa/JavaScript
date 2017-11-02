/**

* Implementa OrdenaTres que pida tres números y los muestre ordenados de menor a mayor.

* @author Juan Rueda Morales
* @version 1.0

*/

{
	let pedirNumeros = function() {

	}
	let ordenarNumeros=function() {
		do {
			var numero1=parseInt(prompt("Introduce un número: "));
			if(isNaN(numero1) || numero1.length==0) {
				console.log("No has introducido el número correctamente");
			}
		} while (isNaN(numero1));

		do {
			var numero2=parseInt(prompt("Introduce otro número: "));
			if(isNaN(numero2)) {
				console.log("No has introducido el número correctamente");
			}
		} while (isNaN(numero2));

		do {
			var numero3=parseInt(prompt("Introduce el último número: "));
			if(isNaN(numero3)) {
				console.log("No has introducido el número correctamente");
			}
		} while (isNaN(numero3));

		if(numero1>numero2 && numero1>numero3 && numero2>numero3){
			console.log("Este es el orden los numeros ordenados de menor a mayor: " + numero3 + " " + numero2 +" " + numero1);
		}
		else if(numero1>numero2 && numero1>numero3 && numero3>numero2){
			console.log("Este es el orden los numeros ordenados de menor a mayor: " + numero2 + " " + numero3 +" " + numero1);
		}
		else if(numero2>numero1 && numero2>numero3 && numero1>numero3){
			console.log("Este es el orden los numeros ordenados de menor a mayor: " + numero3 + " " + numero1 +" " + numero2);
		}
		else if(numero2>numero1 && numero2>numero3 && numero3>numero1){
			console.log("Este es el orden los numnumero1eros ordenados de menor a mayor: " + numero1 + " " + numero3 +" " + numero2);
		}
		else if(numero3>numero1 && numero3>numero2 && numero1>numero2){
			console.log("Este es el orden los numeros ordenados de menor a mayor: " + numero2 + " " + numero1 +" " + numero3);
		}
		else if(numero3>numero1 && numero3>numero2 && numero2>numero1){
			console.log("Este es el orden los numeros ordenados de menor a mayor: " + numero1 + " " + numero2 +" " + numero3);
		}
	}

	ordenarNumeros();
}
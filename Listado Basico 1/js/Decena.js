/**

* Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique:
*	a. Cuántas cifras tiene (7 cifras)
*	b. Lo muestre del revés

* @author Juan Rueda Morales
* @version 1.0

*/

{
	var numero = prompt("Introduzca un número decimal entre 1 y 10: ");

	if(isNaN(numero) || numero<0 || numero>10)
		console.log("No has introducido de forma correcta el decimal");

	else{
		let decimal = numero.split(".");

			if(decimal.length-1==0)
				console.log("El número no tiene decimales");
			else{
				let digitos = decimal[1].length;
				console.log("El numero decimal "+decimal+" tiene "+ digitos +" decimales");
				console.log("El número mostrado del revés sería: "+decimal.reverse());
			}
	}
}
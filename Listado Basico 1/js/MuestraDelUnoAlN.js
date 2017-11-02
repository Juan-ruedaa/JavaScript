/**

* Implementa MuestraDelUnoAlN que pida un número entero y que muestre la secuencia del 1 al número indicado. 
* En caso de no poder generarse la secuencia (menor que 1), que lo indique.

* @author Juan Rueda Morales
* @version 1.0

*/

{
	let numeroEntero = prompt("Introduce un número entero. Debe de ser positivo: ");


		if((isNaN(numeroEntero)) || (numeroEntero.length==0)||(numeroEntero<1))
			console.log("El número introducido no es correcto. Introduzca solo números positivos");
		else{
			numeroEntero=parseInt(numeroEntero);
		for(let i=1;i<=numeroEntero;i++)
			console.log(i);
		}	
}
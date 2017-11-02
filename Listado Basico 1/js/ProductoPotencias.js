/**

* Implementa ProductoPotencias que calcule y visualice el producto de las potencias de 2 entre 0 y 10.

* @author Juan Rueda Morales
* @version 1.0

*/

{
	let productoPotencias=1;

	for(let i=0;i<=10;i++){
		let calcularProducto=function(i){
			return ((Math.pow(2,i)));
		}

		let resultado=calcularProducto(i);
		console.log("2 ^ " + i + " = " + resultado);
		productoPotencias*=resultado;
	}
	console.log("El resultado final es: " + productoPotencias);
}
/**

* Implementa el juego “Adivínalo”. Consiste en que el usuario ha de adivinar un número
* entre el 1 y el 100. Mostrará un mensaje:
*	a. Para indicar si has acertado (en una nueva ventana)
*	b. Para indicar si la solución es mayor o es menor.

* @author Juan Rueda Morales
* @version 1.0

*/

{
	function generarAleatorio(){
		return Math.round(Math.random() * 100);
	}

	function deseaContinuar(){
		do{
			var respuesta=prompt("¿Desea continuar? (s/n)");

			if(isNaN(respuesta) && respuesta.length!=0){
				respuesta=respuesta.toLowerCase();

				if(respuesta!='s' && respuesta!='n')
            		console.log("Responda correctamente la pregunta" );
			}else 
				console.log("Responda correctamente la pregunta" );
			
		}while(respuesta!='s' && respuesta!='n');

		if (respuesta==='s') 
            return true;
        return false;
	}

	let juego = function() {		
		let aleatorio=generarAleatorio();

		do {
			var numero = prompt("Introduzca un número");

			if(!isNaN(numero) && numero%1==0 && numero>0 && numero<101) {
				
				if(numero==aleatorio) {
					console.log("¡Has acertado el número, enhorabuena!");
					return;
				}

				if(numero>aleatorio) 
						console.log("El número es más pequeño.");
				else 
					console.log("El número es más grande.");

			}else 
			console.log("Por favor, introduzca un número entero entre 1 y 100.");
			

		}while(numero!=aleatorio);

	}

	do {
		juego();	
	} while(deseaContinuar());
}
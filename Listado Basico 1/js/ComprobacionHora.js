
/**

* Implementa ComprobacionHora que solicite los segundos, minutos y hora e indique si es correcta. 
* Si lo fuera, ha de mostrar la hora un segundo después.

* @author Juan Rueda Morales
* @version 1.0

*/

{

	do {
		var hora=parseInt(prompt("Introduce la hora: "));
		if(isNaN(hora)) {
			console.log("No has introducido la hora correctamente");
		}
	} while (isNaN(hora));

	do {
		var minutos=parseInt(prompt("Introduce los minutos: "));
		if(isNaN(minutos)) {
			console.log("No has introducido los minutos correctamente");
		}
	} while (isNaN(minutos));

	do {
		var segundos=parseInt(prompt("Introduce los segundos: "));
		if(isNaN(segundos)) {
			console.log("No has introducido los segundos correctamente");
		}
	} while (isNaN(segundos));


		let comprobarHora = function (hora,minutos,segundos){
			if((hora<0 || hora>23) || (minutos<0 || minutos>59) || (segundos<0 || segundos>59))
				return true;
			return false;
		}

		if(!comprobarHora(hora,minutos,segundos)){
			var hora = new Date(0, 0, 0, hora, minutos, segundos, 0);
			hora.setSeconds(hora.getSeconds() + 1);
			console.log("La hora un segundo después de la introducida es: " + hora);
		}

		else
			console.log("Al menos unos de los datos introducidos es erroneo, pruebe de nuevo");	
}	

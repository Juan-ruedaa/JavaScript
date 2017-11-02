/**

* Implementa ComprobacionFecha que solicite el día, el mes y el año e indique si la
* fecha es correcta. Si lo fuera, ha de mostrar el día después.

* @author Juan Rueda Morales
* @version 1.0

*/

{

	do {
		var dia=parseInt(prompt("Introduce el día: "));
		if(isNaN(dia)) 
			console.log("No has introducido el día correctamente");
	} while (isNaN(dia));

	do {
		var mes=parseInt(prompt("Introduce el número del mes: "));
		if(isNaN(mes)) 
			console.log("No has introducido el número del mes correctamente");
	} while (isNaN(mes));

	do {
		var anno=parseInt(prompt("Introduce el año: "));
		if(isNaN(anno)) 
			console.log("No has introducido el año correctamente");
	} while (isNaN(anno));


	let comprobarFecha = function (dia,mes,anno){
		let flagError=false;

		if((dia<=0 || dia>31) || (mes<=0 || mes>12) || anno<0) 
			return true;
		return false;
	}

	
	if(!comprobarFecha(dia,mes,anno)) {
		let fecha = new Date(anno, mes-1, dia, 0, 0, 0, 0);
		fecha.setDate(fecha.getDate() + 1);
		console.log("El día siguiente al introducido es: "+fecha);
	}

	else 
		console.log("Al menos unos de los datos introducidos es erroneo, pruebe de nuevo");
	


}


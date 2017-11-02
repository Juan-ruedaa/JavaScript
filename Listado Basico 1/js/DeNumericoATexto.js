/**

* Implementa DeNumericoATexto que solicite un número del 0 al 99 y lo muestre escrito.
* Por ejemplo, para 12 mostrar: doce, para 44 mostrar: cuarenta y cuatro. Ques ea lo más eficiente posibleImplementa 

* @author Juan Rueda Morales
* @version 1.0

*/

{
	let numero = prompt("Introduzce un número entero (entre 0 y 99): ");

	let comprobarNumero = function (numero){
		if(numero<0 || numero>99 || isNaN(numero) || numero.length==0)
			return false;
		return true;
	}

	if(comprobarNumero(numero)){
		let unidades=function(numero){
			switch(numero){
  				case 0:
  					return "cero";
    			case 1: 
    				return "uno";
    			case 2: 
    				return "dos";
    			case 3: 
    				return "tres";
    			case 4: 
    				return "cuatro";
    			case 5: 
    				return "cinco";
    			case 6: 
    				return "seis";
    			case 7: 
    				return "siete";
    			case 8: 
    				return "ocho";
    			case 9: 
    				return "nueve";
    		}
		}

		let decenaYUnidad=function(decena,unidad){
			if(unidad>0){
				return decena + " y " + unidades(unidad);
			}else{
				return decena;
			}
		}

		
		let decenas=function(numero){
			let decenas= Math.floor(numero/10);
			let unidad =numero - (decenas*10);			
			
			switch(decenas){
				case 1:
					switch(unidad){
						case 0: 
							return "diez";
			        	case 1: 
			        		return "once";
			        	case 2: 
			        		return "doce";
			        	case 3: 
			       			return "trece";
			        	case 4: 
			       			return "catorce";
			       		case 5: 
			       			return "quince";
			       		default: 
			       			return "dieci" + unidades(unidad);
					}
					return decenas1(unidad);

				case 2:
					switch(unidad){
						case 0:
							return "veinte";
						default:
							return "veinti" + unidades(unidad);
						}
					return decenas2(unidad);

				case 3:
					return decenaYUnidad("treinta", unidad);
				case 4:
					return decenaYUnidad("cuarenta", unidad);
				case 5:
					return decenaYUnidad("cincuenta", unidad);
				case 6:
					return decenaYUnidad("sesenta", unidad);
				case 7:
					return decenaYUnidad("setenta", unidad);
				case 8:
					return decenaYUnidad("ochenta", unidad);
				case 9:
					return decenaYUnidad("noventa", unidad);
				case 0:
					return unidades(unidad);
			}
		}

		let numeroEnTexto=decenas(numero);
		console.log(numeroEnTexto);
	}

	else{
		console.log("Se ha introducido un número incorrecto");
	}
}
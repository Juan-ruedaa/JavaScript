/**

* Implementa Pirámide que mediante un bucle for visualice una pirámide del siguiente tipo:
* 	1
* 	22
* 	333
* 	4444
* 	55555
* 	666666
* 	7777777
* 	88888888
* 	999999999
* 	0000000000

* @author Juan Rueda Morales
* @version 1.0

*/

{
	let piramide="";

	for(let i=1;i<10;i++){
    	for(let k=1;k<=i;k++){
    		piramide += i;
        }
        piramide+="\n";
    }
    console.log(piramide);
}
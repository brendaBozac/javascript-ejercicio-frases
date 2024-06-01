/* primero obtener referencias de los elementos que necesitamos del dom */

let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

/* ahora podemos planear la logica del programa */

/* debemos generar primero un entero aleatorio en un rango, 
el maximo no se va a incluir!!! */

function generarEnteroAleatorio(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
	/* expresion para lograr un valor entero aleatorio en un rango */
}


function cambiarCita() {

	let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
/* los parametros son el primero elemento del arreglo - indice 0
y la cantidad de elementos posibles, que es el valor que nos da citas.length */
	citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
	/* aqui lo que estamos haciendo es actualizar la cita, a partir de un valor dinamico
	(y usamos balktik para que el texto quede entre comillas)
	`"${citas[indiceAleatorio].texto}"`
	del array citas (frases.js) , con la funcion determinamos que elemento del array, 
	que indice de elemento
	del array seleccionamos, y de ese objeto dentro del array, pedimos (.texto), el valor
	de la propiedad texto, que es la cita en si.
	*/

	/* tambien actualizamos el nombre del autor */
	autorElem.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();
/* entonces llamamos a la funcion */
/* hasta aqui se logra actualizar la frase y el autor,
pero volviendo a cargar la pagina, no desde el boton */

/* ahora debo crear un evento para que esta funcion de actualizar cita
se vincule al click en el boton */

botonElem.addEventListener('click', cambiarCita);

/* los parametros son el click,
 que determina la accion de mostrar la cita, 
 y la funcion cambiarCita  que devuelve la cita seleccionada*/



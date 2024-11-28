function insertar() {
    let pokemosInsertar = prompt("Dime pokemon");
    usuarioActual = localStorage.getItem('entrenadorActual');
    entrenadoresPokemos = JSON.parse(localStorage.getItem('entrenadores'));
    for (let i = 0; i < entrenadoresPokemos.length; i++) {
        if (entrenadoresPokemos[i].usuario == usuarioActual) {
            entrenadoresPokemos[i].pokedex.push(pokemosInsertar)
            localStorage.setItem("entrenadores", JSON.stringify(entrenadoresPokemos))
        }
    }
    mostrarPokedex()
}


function mostrarPokedex() {
    let contenedor = document.getElementById("mostrarPokedex")
    contenedor.innerHTML = ""
    usuarioActual = localStorage.getItem('entrenadorActual');
    entrenadoresPokemos = JSON.parse(localStorage.getItem('entrenadores'));
    for (let i = 0; i < entrenadoresPokemos.length; i++) {
        if (entrenadoresPokemos[i].usuario == usuarioActual) {

            contenedor.innerHTML = "<p>" + entrenadoresPokemos[i].pokedex[0] + "</p>"
        }
    }
}
insertar()

/*

let array = [1, 2, 3, 4, 5];
let index = 2; // índice del elemento que deseas eliminar
array.splice(index, 1); // elimina un elemento en el índice 2
console.log(array); // [1, 2, 4, 5]

fetch(url)
    .then(elementos => elementos.json())
    .catch(error => console.log("Error:", error));


<div id="miElemento" data-nombre="Juan" data-edad="30"></div>
const miElemento = document.getElementById("miElemento");

console.log(miElemento.dataset.nombre);  // "Juan"
console.log(miElemento.dataset.edad);    // "30"

setTimeout(funcion,2000)
*/


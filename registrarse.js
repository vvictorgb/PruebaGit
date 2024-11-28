let entrenadoresPokemos = localStorage.getItem("entrenadores");
if (!entrenadoresPokemos) {
    localStorage.setItem("entrenadores", JSON.stringify([]))
}
function registrarEntrenador(usuario, contraseña) {
    let entrenadorInsertar = {
        usuario: usuario,
        contraseña: contraseña,
        pokedex: []
    }
    if (!comprobarExiste(usuario)) {
        let carteraEntrenadores = JSON.parse(localStorage.getItem('entrenadores'))
        carteraEntrenadores.push(entrenadorInsertar)
        localStorage.setItem('entrenadores', JSON.stringify(carteraEntrenadores));
        localStorage.setItem('entrenadorActual', usuario)
        window.location.href = "pokedex.html"
    }
    else {
        alert("usuario ya existe")
    }
}

function comprobarExiste(usuario) {
    carteraEntrenadores = JSON.parse(localStorage.getItem('entrenadores'))
    for (let i = 0; i < carteraEntrenadores.length; i++) {

        if (carteraEntrenadores[i].usuario == usuario) {
            return true
        }

    }
    return false
}

let formulario = document.getElementById("formulario1")
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let nombreUsuario = document.getElementById('nombreUsuario').value
    let contraseñaUsuario = document.getElementById('contraseñaUsuario').value
    registrarEntrenador(nombreUsuario, contraseñaUsuario);
})



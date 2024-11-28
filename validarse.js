let entrenadoresPokemos = localStorage.getItem("entrenadores");
if (!entrenadoresPokemos) {
    localStorage.setItem("entrenadores", JSON.stringify([]))
}
function validarse(usuario) {
    entrenadores = JSON.parse(localStorage.getItem('entrenadores'))
    for (let i = 0; i < entrenadores.length; i++) {
        if (entrenadores[i].usuario == usuario) {
            window.location.href = "pokedex.html"
            return
        }
    }
    alert("Usuario o contraseña incorrecto")
}

formulario = document.getElementById('formularioValidarse')
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    usuario = document.getElementById("nombreUsuario").value
    validarse(usuario)
})
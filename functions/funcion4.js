

const contrasena = prompt("introduzca una contraseña"); // Cambia esta contraseña según tus necesidades
if (validarContrasena(contrasena)) {
    console.log("La contraseña es válida.");
} else {
    console.log("La contraseña no cumple con los requisitos.");
}

function validarContrasena(contrasena) {
    if (contrasena.length < 8) {
        return false;
    }

    if (!/[A-Z]/.test(contrasena)) {
        return false;
    }

    if (!/[a-z]/.test(contrasena)) {
        return false;
    }
// las expresiones regulares me erruinaron la vida
    if (!/\d/.test(contrasena)) {
        return false;
    }
    return true;
}

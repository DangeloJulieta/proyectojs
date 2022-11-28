//Declarar Variables
const gramosComidaPorKilo = 18;
let peso = 0
let edad = 0
let esperanzaVida = 15
let vidaRestante = 10
let comidaPrecio = 500
let seguir = true

// Declarado de funciones
function ingresarPeso() {
    peso = parseFloat(prompt("Cuántos kilos pesa tu gato?"))
    return peso;
}

function ingresarEdad() {
    edad = parseFloat(prompt("Cuántos años tiene tu gato?"))
    return edad;
}

function ingresarPrecioComida() {
    comidaPrecio = parseFloat(prompt("Cuánto cuesta 1 kilo de comida de tu gato?"))
    return comidaPrecio;
}

function razaGato() {
    let raza = (prompt("Escribe la raza más parecida a la de tu gato en la lista:" + "\nMaine Coon, \nAngora, \nAzul Ruso, \nBalines, \nBritanico."));
    switch (raza) {
        case "Maine Coon":
            alert("Has seleccionado Maine Coon");
            esperanzaVida = 10
            break;
        case "Angora":
            alert("Has seleccionado Angora");
            esperanzaVida = 16
            break;
        case "Azul Ruso":
            alert("Has seleccionado Azul Ruso");
            esperanzaVida = 15
            break;
        case "Balines":
            alert("Has seleccionado Balines");
            esperanzaVida = 14
            break;
        case "Britanico":
            alert("Has seleccionado Britanico");
            esperanzaVida = 12
            break;
        default:
            alert("Raza no reconocida, ingresar nuevamente la más parecida");
            razaGato();
            break;
    }
}

function calculadora() {
    if (edad >= esperanzaVida) {
        alert("Abraza fuerte a tu gato, ya tiene una patita en el cielo gatuno");
    }
    else {
        let comidaRestante = (esperanzaVida - edad) * 365 * (peso * (gramosComidaPorKilo / 1000) * comidaPrecio)
        alert("Tu gato gastara $" + comidaRestante + " hasta llegar al cielo gatuno");
    }
}

// Bucle principal
do {
    alert("Bienvenido, aquí podrás calcular cuanta comida comerá tu gato hasta que se vaya al cielo de los gatitos");
    alert("Primero te pediremos unos datos sobre tu gato y sus gustos, empecemos");
    ingresarPeso();
    ingresarEdad();
    ingresarPrecioComida();
    razaGato();
    calculadora();

    if (window.confirm("Quieres saber cuanto gastara otro gato? El de tu vecino que cuidas tu?")) {
        seguir = true
        alert("Genial!!! hagamos más cuentas!!!");
    }
    else {
        seguir = false
    }
} while (seguir)
alert("Adios... Hazle saber a tu gato que deberá ponerse a dieta");

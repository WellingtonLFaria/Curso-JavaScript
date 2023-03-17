// Maneira recursiva
function fatorial(numero) {
    if (numero == 1) {
        return numero
    } else {
        return numero * fatorial(numero-1)
    }
}

console.log(fatorial(5))
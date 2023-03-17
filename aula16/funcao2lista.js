let numeros = [1, 2, 3, 4]

function somar_numeros(numeros=[0]) {
    let soma = 0
    for(num in numeros) {
        soma += numeros[num]
    }
    return soma
}

console.log(somar_numeros(numeros))

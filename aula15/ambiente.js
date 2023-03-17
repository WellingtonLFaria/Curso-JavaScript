let numeros = [1, 2, 3, 4, 5] // Vetor.

numeros[5] = 1 // Adiciona 1 para a posição 5.
numeros.push(9) // Adiciona 9 para a última posição.
numeros.sort() // Coloca os valores em ordem crescente.
numeros.length // Informa o tamanho do Vetor.
numeros.indexOf(2) // O index do valor informado na função. Se não houver ele retorna -1

console.log(`Nosso vetor é o: ${numeros}`)
console.log(`Tamanho do vetor é: ${numeros.length}`)
console.log(`O primeiro valor do vetor é: ${numeros[0]}, e o último é: ${numeros[numeros.length-1]}`)
console.log(`A posição do valor 9 no vetor é: ${numeros.indexOf(9)}`)
console.log(`A posição do valor 10 no vetor é: ${numeros.indexOf(10)}`)

// Primeira maneira de mostrar na tela.
for(let c = 0; c <= numeros.length-1; c++) {
    console.log(`Posição ${c+1}: ${numeros[c]}`)
}

console.log()

// Segunda maneira de mostrar na tela.
for(let pos in numeros) {
    console.log(`Posição ${Number(pos)+1}: ${numeros[pos]}`)
}
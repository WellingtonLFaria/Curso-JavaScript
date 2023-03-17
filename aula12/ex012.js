var dataatual = new Date()
var hora = dataatual.getHours()
var minuto = dataatual.getMinutes()

if ((String(minuto).length) == 1) {
    console.log(`Agora são extamente ${hora} horas e 0${minuto} minutos.`)
} else {
    console.log(`Agora são extamente ${hora} horas e ${minuto} minutos`)
}

if (hora <= 12) {
    console.log('Bom dia!')
} else if (hora <=18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

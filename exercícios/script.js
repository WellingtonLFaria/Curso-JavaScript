let data = new Date()
let horas = data.getHours()

var body = document.body
var paragrafo = document.querySelector('p#horas')
var img = document.querySelector('img#img')
paragrafo.innerHTML = `Agora são <strong>${horas}</strong> horas.`

// Manhã
if (horas >= 6 && horas <= 10) {
    img.src = 'imagens/Manha.png'
    body.style.background = 'rgb(220, 220, 0)'
} 
// Dia
else if (horas <= 12) {
    img.src = 'imagens/Dia.png'
    body.style.background = 'rgb(220, 200, 0)'
} 
// Tarde
else if (horas <= 18) {
    img.src = 'imagens/Tarde.png'
    body.style.background = 'rgb(255,200, 0)'
} 
// Noite
else {
    img.src = 'imagens/Noite.png'
    body.style.background = 'rgb(60, 60, 60)'
}
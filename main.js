'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')

function mudarCor(){
    forma1.classList.toggle('vermelho')
}
function mudarForma(){
    forma2.classList.toggle('circulo')
}
function mudarFoto(){
    forma3.classList.toggle('carinhatriste')
}
function rodar(){
    forma4.classList.toggle('rodar')
}
function mudarTamanho(){
    forma5.classList.toggle('mudartamanho')
}
function tortinho(){
    forma6.classList.toggle('tortinho')
}
function opacidade(){
    forma7.classList.toggle('opacidade')
}
function borda(){
    forma8.classList.toggle('borda')
}
forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', mudarFoto)
forma4.addEventListener('click', rodar)
forma5.addEventListener('click', mudarTamanho)
forma6.addEventListener('click', tortinho)
forma7.addEventListener('click', opacidade)
forma8.addEventListener('click', borda)





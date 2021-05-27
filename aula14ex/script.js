
var button = document.querySelector('input#button')

button.addEventListener('click', contar)

function contar() {
    let inicio = document.querySelector('input#inicio') 
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let res = document.querySelector('div#res')

    let inicioValor = Number(inicio.value)
    let passoValor = Number(passo.value)
    let fimValor = Number(fim.value)

    res.innerHTML = 'Contando: '

    for (var c = inicioValor; c <= fimValor; c += passoValor){
        res.innerHTML += `${c} `
    }
}
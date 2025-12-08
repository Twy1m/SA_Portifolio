//==============================================================
//Segundo Programa

//Apresente um script para somar 10 números aleatórios de 1 a 220 em um array.

let res4 = document.getElementById('res4')
let numGerados2 = document.getElementById('numGerados2')
let arr2 = []

function somar_SOMAR(){
    let qtd = arr2.length
    let soma = 0
    if(arr2.length > 0){
        for(let i = 0; i<qtd; i++){
            soma += arr2[i]
        }
        res4.innerHTML = ``
        res4.innerHTML += `A soma dos números gerados foi: ${soma}`
    }else{
    res4.innerHTML = ``
    res4.innerHTML += `Gere os números primeiro`
}
}

function generateRandon_SOMAR(){
    min = 1, max = 221
    arr2 = []
    
    for(let i = 0; i<10; i++){
        arr2[i] = Math.floor(Math.random() * (max - min) + min)
    }
    numGerados2.innerHTML = ``
    numGerados2.innerHTML += `Os números gerados foram [${arr2}]`
}

function limpar_SOMAR(){
    arr2 = []
    numGerados2.innerHTML = ``
    res4.innerHTML = ``
}

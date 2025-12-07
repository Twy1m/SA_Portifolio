//==============================================================
//PRIMEIRO PROGRAMA
let res3 = document.getElementById('res3')
let numGerados = document.getElementById('numGerados')
let arr = []

function ordenarArr(){
    if(arr.length > 0){
        let qtd = 20
        let valor = 0
        for(let j = 0; j < qtd -1; j++){
            for(let i = 0; i < qtd -j -1; i++){
                if(arr[i] > arr[i+1]){
                    valor = arr[i] 
                    arr[i] = arr[i+1]
                    arr[i+1] = valor
                }
            }
        }
        res3.innerHTML = ``
        res3.innerHTML += `Os números gerados ordenados de forma crescente: <br>[${arr}]
`   }else{
    res3.innerHTML = ``
    res3.innerHTML += `Gere os números primeiro`
}
}

function generateRandon(){
    min = 1, max = 20
    arr = []
    for(let i = 0; i<20; i++){
        arr[i] = Math.floor(Math.random() * (max - min) + min)
    }
    numGerados.innerHTML = ``
    numGerados.innerHTML += `Os números gerados foram [${arr}]`
}

function limpar(){
    arr = []
    numGerados.innerHTML = ``
    res3.innerHTML = ``
}

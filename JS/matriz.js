//==============================================================
//TERCEIRO PROGRAMA

let res5 = document.getElementById('res5')
let mat = []

function generateRandon_MAT(){
    let min = 1, max = 20
    return Math.floor(Math.random() * (max - min) + min)
}

function gerarMat_MAT(){
    let qtd = 3
    mat = []
    res5.innerHTML = ``
    res5.innerHTML += `A matriz gerada é: <br>`
    
    for(let i = 0; i < qtd; i++){
        mat[i] = []
        for(let j = 0; j < qtd; j++){
            mat[i][j] = generateRandon_MAT()
            res5.innerHTML += ` ${mat[i][j]} |`
        }
        res5.innerHTML += `<br>`
    }


}

function limpar_MAT(){
    mat = []
    res5.innerHTML = ``
}

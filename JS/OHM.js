let res = document.getElementById('res')


function calcular(){
    let V = Number(document.getElementById('V').value)
    let I = Number(document.getElementById('I').value)
    let R = Number(document.getElementById('R').value)
    let op = document.getElementById('op').value
    let valor = 0

    res.innerHTML = ``

    if(op === 'V'){
        valor = I*R
        console.log(V)
        res.innerHTML += `O resultado da Tensão é: ${valor}`
    }else if(op === 'I'){
        valor = V/R
        console.log(I)
        res.innerHTML += `O resultado da Corrente é: ${valor}`
    }else if(op === 'R'){
        valor = V/I
        console.log(R)
        res.innerHTML += `O resultado da Resistencia é: ${valor}`


    
    }
}
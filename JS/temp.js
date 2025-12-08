let res7 = document.getElementById('res7')

function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function principal_TEMP(){
    let valor = Number(document.getElementById('valor').value)
    let op = document.getElementById('op').value

    res7.innerHTML = ``
    if(op === 'c'){
        valor = celsiusParaFahrenheit(valor)
        res7.innerHTML += `O valor convertido de CELSIUS para FAHRENHEIT é: ${valor} Fº`
    }else if(op === 'f'){
        valor = fahrenheitParaCelsius(valor)
        res7.innerHTML += `O valor convertido de FAHRENHEIT para CELSIUS é: ${valor} Cº`
    }else{
        res7.innerHTML += `Selecione uma opção`
    }

}

function limpar_TEMP(){
    valor = 0
    res7.innerHTML = ``
}

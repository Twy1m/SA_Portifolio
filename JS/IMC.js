let res6 = document.getElementById('res6')

function calcIMC(){
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)
    
    let imc = peso / altura**2
    
    if(imc < 18.5){
        res6.innerHTML = ``
        res6.innerHTML += `O seu IMC é: ${imc.toFixed(1)} e sua classificação é: Abaixo do peso `
    }else if(imc >= 18.5 && imc <25){
        res6.innerHTML = ``
        res6.innerHTML += `O seu IMC é: ${imc.toFixed(1)} e sua classificação é: Peso normal`
    }else if(imc >= 25 && imc <30){
        res6.innerHTML = ``
        res6.innerHTML += `O seu IMC é: ${imc.toFixed(1)} e sua classificação é: Sobrepeso`
    }else if(imc >=30 && imc < 35){
        res6.innerHTML = ``
        res6.innerHTML += `O seu IMC é: ${imc.toFixed(1)} e sua classificação é: Obesidade grau I`
    }else if(imc >= 35 && imc <40){
        res6.innerHTML = ``
        res6.innerHTML += `O seu IMC é: ${imc.toFixed(1)} e sua classificação é: Obesidade grau II`
    }else if(imc>= 40){
        res6.innerHTML = ``
        res6.innerHTML += `O seu IMC é: ${imc.toFixed(1)} e sua classificação é: Obesidade grau III`
    }else{
        res6.innerHTML = ``
        res6.innerHTML += `Digite um número válido`
    }
    

}
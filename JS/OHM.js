let res = document.getElementById('res')
let res2 = document.getElementById('res2')

let select = document.getElementById('op')

select.addEventListener('change', () => {
    const valor = select.value;

    // Pega todas as seções (tensao, corrente, resistencia)
    const secoes = document.querySelectorAll("section");

    // Remove 'active' de todas
    secoes.forEach(sec => sec.classList.remove("active"));

    // Ativa a seção selecionada
    const ativa = document.getElementById(valor);
    if (ativa) {
        ativa.classList.add("active");
        history.pushState({ valor }, "", `#${valor}`);
    } else {
        history.pushState({}, "", window.location.pathname);
    }
});

function calcular(){
    let V = Number(document.getElementById('V').value)
    let I = Number(document.getElementById('I').value)
    let R = Number(document.getElementById('R').value)
    let valor = 0

    res.innerHTML = ``
    
    if(select.value === 'V'){
        valor = I*R
        console.log(V)
        res.innerHTML += `O resultado da Tensão é: ${valor.toFixed(3)}`
    }else if(select.value === 'I'){
        valor = V/R
        console.log(I)
        res.innerHTML += `O resultado da Corrente é: ${valor.toFixed(3)}`
    }else if(select.value === 'R'){
        valor = V/I
        console.log(R)
        res.innerHTML += `O resultado da Resistencia é: ${valor.toFixed(3)}`
        
        
        
    }
}

function potencia(){
    let r2 = Number(document.getElementById('r2').value)
    let i2 = Number(document.getElementById('i2').value)
    let P = r2 * i2**2
    
    res2.innerHTML = ``
    res2.innerHTML += `O valor da potência em Watts é: ${P.toFixed(1)}`

}
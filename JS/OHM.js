let res = document.getElementById('res')
let res2 = document.getElementById('res2')

let select = document.getElementById('op')

window.addEventListener('load', () => {
    const secoes = document.querySelectorAll("#tensao, #resistencia, #corrente");
    secoes.forEach(sec => sec.classList.remove("active"));
});

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
    let valor = 0;
    res.innerHTML = ``;
    
    // Busca os inputs dentro da seção ativa
    const secAtiva = document.querySelector('#tensao.active, #resistencia.active, #corrente.active');
    
    if(!secAtiva) {
        res.innerHTML = `Selecione uma opção primeiro`;
        return;
    }
    
    if(select.value === 'tensao'){
        let I = Number(secAtiva.querySelector('#I').value);
        let R = Number(secAtiva.querySelector('#R').value);
        
        if(!I || !R) {
            res.innerHTML = `Preencha todos os campos`;
            return;
        }
        
        valor = I * R;
        res.innerHTML += `O resultado da Tensão é: ${valor.toFixed(3)}V`;
        
    }else if(select.value === 'corrente'){
        let V = Number(secAtiva.querySelector('#V').value);
        let R = Number(secAtiva.querySelector('#R').value);
        
        if(!V || !R) {
            res.innerHTML = `Preencha todos os campos`;
            return;
        }
        
        if(R === 0) {
            res.innerHTML = `A resistência não pode ser zero`;
            return;
        }
        
        valor = V / R;
        res.innerHTML += `O resultado da Corrente é: ${valor.toFixed(3)}A`;
        
    }else if(select.value === 'resistencia'){
        let V = Number(secAtiva.querySelector('#V').value);
        let I = Number(secAtiva.querySelector('#I').value);
        
        if(!V || !I) {
            res.innerHTML = `Preencha todos os campos`;
            return;
        }
        
        if(I === 0) {
            res.innerHTML = `A corrente não pode ser zero`;
            return;
        }
        
        valor = V / I;
        res.innerHTML += `O resultado da Resistência é: ${valor.toFixed(3)}Ω`;
    }
}

function potencia(){
    let r2 = Number(document.getElementById('r2').value)
    let i2 = Number(document.getElementById('i2').value)
    
    let P = 0
    P = r2 * i2**2
    
    res2.innerHTML = ``
    res2.innerHTML += `O valor da potência em Watts é: ${P.toFixed(1)}`

}
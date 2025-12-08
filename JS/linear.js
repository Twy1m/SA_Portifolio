let res8 = document.getElementById('res8')

function buscarNumero_LINEAR(){
    let lista = [];
    for (let i = 0; i <= 100; i++) {
        lista.push(i);
    }
    
    let numbusca = Number(document.getElementById('numbusca').value)
    let encontrou = -1;
    
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === numbusca) {
            encontrou = i; 
            break;
        }
    }
    res8.innerHTML = ``
    res8.innerHTML += `A posição do número que deseja é: ${encontrou}`
    
}

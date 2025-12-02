let res = document.getElementById('res')

function principal(){
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value

    res.innerHTML = ``
    res.innerHTML += `Nome cadastrado : ${nome}, e o email: ${email}`
}
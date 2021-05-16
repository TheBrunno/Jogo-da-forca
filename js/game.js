const botao = document.getElementById('button')
const space = document.getElementsByClassName('letra')
function palpite(space){
    var palpite = document.getElementById('palpite').value
    if(palpite.length > 1){
        alert('Apenas a primeira letra será considerada')
    }
    for(let i in palavra){
        if(palavra[i].toUpperCase() == palpite[0].toUpperCase()){
            space[i].innerHTML = palavra[i].toUpperCase()
        }
    }
    var palpite = document.getElementById('palpite').value = ''
}

botao.onclick = function(){
    palpite(space)
}

document.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        palpite(space)
    }
}, false)
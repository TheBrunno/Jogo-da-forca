const botao = document.getElementById('button')
const space = document.getElementsByClassName('letra')
const life = document.getElementById('vidas_restantes')
var vida = 9
life.innerHTML = vida
function palpite(space){
    var possui = false
    var palpite = document.getElementById('palpite').value
    if(palpite.length > 1){
        alert('Apenas a primeira letra será considerada')
    }
    for(let i in palavra){
        if(palavra[i].toUpperCase() == palpite[0].toUpperCase()){
            var possui = true
            space[i].innerHTML = palavra[i].toUpperCase()
        }
    }
    if(possui == false){
        vida--
        life.innerHTML = vida
        if(vida == 0){
            alert(`Você perdeu!!\nResposta: ${palavra.toUpperCase()}`)
            location.reload()
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
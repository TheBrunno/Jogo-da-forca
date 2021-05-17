const botao = document.getElementById('button')
const space = document.getElementsByClassName('letra')
const life = document.getElementById('vidas_restantes')
const certo = document.getElementById('letras_certas')
const errado = document.getElementById('letras_erradas')

var vida = 9
var acertos = 0
life.innerHTML = vida
var letras_certas = new Array()
var letras_erradas = new Array()

function verificarArray(array, letra){
    for(let ind in array){
        if(array[ind].toUpperCase() == letra.toUpperCase()){
            return false
        }
    }
    return true
}

function palpite(space){
    var possui = false
    var palpite = document.getElementById('palpite').value
    if(palpite.length > 1){
        alert('Apenas a primeira letra será considerada')
    }
    if(palpite[0] == undefined || palpite[0] == ''){
        alert('Digite algo')
    }else{
        palpite = palpite[0].toUpperCase()
        for(var i in palavra){
            if(palavra[i].toUpperCase() == palpite){
                if(verificarArray(letras_certas, palpite) == false){
                    alert('Essa letra já foi digitada')
                    return
                }
                possui = true
                acertos++
                space[i].innerHTML = palpite
                if(acertos == palavra.length){
                    alert('Você ganhou!!')
                    location.reload()
                }
            }
        }
        if(possui == true){
            letras_certas.push(palpite)
            certo.innerHTML = letras_certas
        }else{
            if(verificarArray(letras_erradas, palpite) == true && 
            verificarArray(letras_certas, palpite) == true){
                letras_erradas.push(palpite)
                errado.innerHTML = letras_erradas
                vida--
                life.innerHTML = vida
                if(vida == 0){
                    alert(`Você perdeu!!\nResposta: ${palavra.toUpperCase()}`)
                    location.reload()
                }
            }
        }
        var palpite = document.getElementById('palpite').value = ''
    }
}

botao.onclick = function(){
    palpite(space)
}

document.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        palpite(space)
    }
}, false)
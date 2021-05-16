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

function verificarArray(array, letra, local){
    for(let ind in array){
        console.log(array[ind])
        if(array[ind].toUpperCase() == letra.toUpperCase()){
            return undefined
        }
    }
    array.push(letra.toUpperCase())
    local.innerHTML = array
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
        for(var i in palavra){
            if(palavra[i].toUpperCase() == palpite[0].toUpperCase()){
                possui = true
                acertos++
                space[i].innerHTML = palavra[i].toUpperCase()
                verificarArray(letras_certas, palavra[i], certo)
                if(acertos == palavra.length){
                    alert('Você ganhou!!')
                    location.reload()
                }
            }
        }
        if(possui == false){
            vida--
            verificarArray(letras_erradas, palpite[0], errado)
            life.innerHTML = vida
            if(vida == 0){
                alert(`Você perdeu!!\nResposta: ${palavra.toUpperCase()}`)
                location.reload()
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
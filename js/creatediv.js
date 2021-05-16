const article = document.getElementById('letters')
for(let _ in palavra){
    var div = document.createElement('div')
    div.setAttribute('class', 'letra')
    article.appendChild(div)
}
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    /*formas acima e abaixo podem identificar no javascript*/ 
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
var fsex = document.getElementsByName('radsex')
var idade = ano - Number(fano.value)
var genero = ''
var img = document.createElement('img')
img.setAttribute('id', 'foto')
    }
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >=0 && idade < 10 )
    } if else (fsex[1].checked) {
        genero = 'Mulher'
}
res.style.textAlign = 'center'
res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

}     
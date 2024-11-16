var keyp1 = document.querySelector("#keyP1")
var keyp2 = document.querySelector("#keyP2")
var prinSentence = document.querySelector("#PrincipalSentence")

var keysone = ['Imagem aérea', 'Drone Profissional', 'Fotografia aérea', 'Determinação']
var keystwo = ['Precisão Visual', 'Imagens aéreas', 'Vontade', 'Foco']
var sentences = ['Vendo o mundo de outra perspectiva', 'Capturando novas perpectivas a cada voo', 'Voe alto, veja mais', "Gravando o Mundo"]

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function change() {
    let key1Chosed = getRandom(0, keysone.length - 1)
    let key2Chosed = getRandom(0, keystwo.length - 1)
    let sentenceChosed = getRandom(0, sentences.length - 1)

    keyp1.innerHTML = `${keysone[key1Chosed]}.`
    keyp2.innerHTML = `${keystwo[key2Chosed]}.`
    prinSentence.innerHTML = `[ ${sentences[sentenceChosed]} ]`
}

change()
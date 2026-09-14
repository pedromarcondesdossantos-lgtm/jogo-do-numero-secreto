let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let textop = `Digite um número entre 1 e 10`;
let textoh1 = `Adivinhe o número!`;

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveV.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
exibirTextoNaTela('h1', textoh1);
exibirTextoNaTela('p', textop);

function verificarChute() {
    let chute = parseInt(document.querySelector('.container__input').value);
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', `Parabéns você acertou!!!`);
        let palavra = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('p', `Você acertou o número secreto com ${tentativas} ${palavra}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        }
    else {
        exibirTextoNaTela('p', `O número secreto é ${chute > numeroSecreto ? 'menor' : 'maior'} que ${chute}`);
    }
            tentativas++;

}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite) + 1;
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length

    if (quantidadeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }
    else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
    }
}

function limparCampo() {
    document.querySelector('.container__input').value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirTextoNaTela('h1', textoh1);
    exibirTextoNaTela('p', textop);
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
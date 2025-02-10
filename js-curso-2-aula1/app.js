let listaDeNumerosAleatorios = [];
let numeroSorteado = 0;
let numeroLimiteDoAleatorio = 100;
function NumeroAleatorio(){
    let numeroSorteado = parseInt(Math.random() * numeroLimiteDoAleatorio + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosAleatorios.length;
    if(quantidadeDeNumerosNaLista == numeroSorteado){
        listaDeNumerosAleatorios = [];
    }
    if(listaDeNumerosAleatorios.includes(numeroSorteado)){
        return NumeroAleatorio();
    }
    else{
        listaDeNumerosAleatorios.push(numeroSorteado);
        console.log(listaDeNumerosAleatorios);
        return numeroSorteado;
    }
}
let numeroSecreto = NumeroAleatorio();

function TextoDeExibicao(tag, texto){
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function TextoInicial(){
    TextoDeExibicao("h1", "Numero Secreto");
    TextoDeExibicao("p", "Digite um numero de 1 a " + numeroLimiteDoAleatorio);
}
TextoInicial();

let tentativas = 1;
function VerificarChute(){
    let chute = parseInt(document.querySelector("input").value);
    if(chute == numeroSecreto){
        let textoTentativa = tentativas > 1 ? " tentativas" : " tentativa";
        let msgAcerto = "Você acertou com " + tentativas + textoTentativa;
        TextoDeExibicao("h1", "Parabens, você acertou!");
        TextoDeExibicao("p", msgAcerto);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else if(chute > numeroSecreto){
        TextoDeExibicao("h1", "O numero secreto é menor");
        TextoDeExibicao("p", "Tente novamente");
    }
    else{
        TextoDeExibicao("h1", "O numero secreto é maior");
        TextoDeExibicao("p", "Tente novamente");
    }
    tentativas++;
    LimparChute();
}

function LimparChute(){
    chute = document.querySelector("input").value = "";
}

function Reiniciar(){
    TextoInicial();
    numeroSecreto = NumeroAleatorio();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
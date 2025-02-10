alert("Welcome to the Game of Secret Number!");

let nMax = 100, nMin = 1, numeroSecreto = perseInt(Math.Random() * nMax + nMin), valorDeChute = 0, tentativas = 1;

console.log("O numero secreto é: " + numeroSecreto);

while (valorDeChute != numeroSecreto) {
    valorDeChute = prompt("Digite um valor de " + nMin + " a " + nMax + ":");
    if (valorDeChute == numeroSecreto) {
        break;
    }
    else if (valorDeChute > numeroSecreto) {
        alert("O numero secreto é menor que o valor digitado");
    }
    else {
        alert("O numero secreto é maior que o digitado");
    }
    
    tentativas++;
}

let palavraTentaiva = tentativas > 1 ? "tentativas" : "tentativas";

alert("Parabéns, você acertou o numero secreto " + numeroSecreto + " com " + tentativas + " " + palavraTentaiva);

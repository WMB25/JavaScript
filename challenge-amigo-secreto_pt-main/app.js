let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarListaAmigos();
        input.value = '';
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const sorteio = [...amigos];
    const amigosSorteados = [];

    while (sorteio.length) {
        const amigo = sorteio.pop();
        let sorteado;

        do {
            sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        } while (sorteado === amigo || amigosSorteados.includes(sorteado));

        amigosSorteados.push(sorteado);

        const li = document.createElement('li');
        li.textContent = `${amigo} tirou ${sorteado}`;
        resultado.appendChild(li);
    }
}
function sortear(){

    //chamar as classes no HTML
    let quantidade = parseInt(document.getElementById('quantidade').value);
    // no caso vai chamar pelo id delas "quantidade"
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    //alert(`Quatidade: ${quantidade}`);
    //alert(`Do número: ${de}`);
    //alert(`Até o número: ${ate}`);

    //let numero = obterNumeroAleatorio(de, ate);
    //alert(numero)

    //mesmo código que o seguinte:
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        //Esse loop for vai repetir um bloco de código um determinado número de vezes, baseado na variável quantidade.
        numero = obterNumeroAleatorio(de, ate);
        //Em cada repetição, ele gera um número aleatório entre os valores de e ate, usando uma função chamada obterNumeroAleatorio.
        
        while(sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        //o loop while serve para repetir um bloco de código enquanto uma condição especifica é verdadeira.
        
        sorteados.push(numero);
        //O número gerado é adicionado ao array sorteados, que guarda todos os números sorteados.
    }

    //alert(sorteados);
    //Após terminar o loop, ele exibe todos os números sorteados em uma janela de alerta.
    //Nessa forma ele irá trazer somente o alert e não vai mudar no layout da página.
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
    //aqui no caso para trazer no layout os números pegamos a classe/label lá do HTML.
    //onde estava somente escrito "nenhum número" acresentamos a variável "sorteados" para ele trazer o valor coletado.
}

//Função para embaralhar os números
function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//para habilitar e desabilitar o botão de reiniciar
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    //informações retiradas do HTML
    if (botao.classList.contains('container_botao-desabilitado')) {
        botao.classList.remove('container_botao-desabilitado');
        botao.classList.add('container_botao');
    } else {
        botao.classList.remove('container_botao');
        botao.classList.add('container_botao-desabilitado');
    }
}

//para habilitar o botão de reiniciar
//utilizado o código do HTML "button onclick='reiniciar()' id=btn-reiniciar"
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao();

}
//para limpar é necessário apenas adicionar uma string vazia no valor.
//no resultado foi adicionado o código do HTML para retornar ao texto inicial quando clicar em reiniciar.
//ao final, adicionado pafra puxar a função de alterar o Status do botão, onde será verificado que está habilitado e desabilitar.

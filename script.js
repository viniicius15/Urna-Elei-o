const input1 = document.getElementById('in1'); // Primeiro input
const input2 = document.getElementById('in2'); // Segundo input
const candidatoDiv = document.querySelector('.candidato'); // Div do candidato

// Função para preencher os inputs ao clicar nos botões
function addNumber(number) {
    // Se o primeiro input estiver vazio, preencha-o
    if (in1.value.length < 1) {
        in1.value = number;
    } 
    // Se o primeiro input já estiver preenchido, preencha o segundo
    else if (in2.value.length < 1) {
        in2.value = number;
    }
}

// Função para verificar os inputs e mostrar o candidato
function confirmar() {
    const num1 = in1.value;
    const num2 = in2.value;

    // Verifica se os números correspondem ao 28
    if (num1 === '2' && num2 === '8') {
        candidatoDiv.style.display = 'flex'; // Mostra a div
    } else {
        alert("Número inválido! Por favor, insira 28.");
    }
}

function apagar() {
    in1.value = ''; // Limpa o primeiro input
    in2.value = ''; // Limpa o segundo input
    candidatoDiv.style.display = 'none'; // Esconde a div do candidato, se estiver visível
    alert('Seu voto foi apagado!');
}

function votoBranco() {
    alert('Seu voto foi confirmado em branco!'); // Exibe a mensagem de confirmação
}
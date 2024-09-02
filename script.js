let calcular = document.getElementById('calcular')
// Acesso ao elemento da árvore DOM e não ao objeto/VALOR dentro do elemento
// VARIÁVEL GLOBAL

// Para acessar o VALOR dentro do elemento precisamos atribuir ao fim da chamada o '.value'
function calculo() {
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let resultado = document.getElementById('resultado') // Não terá .value

    if (nome.length == '' || altura.length == '' || peso.length == '') { // Se algum dos valores não forem preenchidos
        resultado.innerHTML = ('ERRO - Preencha todos os campos para prosseguir')
    } else {       
        let valorIMC = (peso / (altura * altura)).toFixed(1) // Utilizado to fixed para fixar a quantidade de casas
        let classificacao = ''
        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso ideal com relação sua altura'
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal, Parabéns'
        } else if (valorIMC <30) {
            classificacao = 'acima do peso ideal com relação a sua altura'
        } else {
            classificacao = 'com Obesidade Grau 1, muita atenção'
        }

        resultado.innerHTML = `${nome}, seu IMC é ${valorIMC}, você está ${classificacao}!`
    }
}


//PODERIA UTILIZAR ADDEVENTLISTENER OU ONCLICK

/*
calcular.addEventListener('click', imc) // Evento para quando o cliente clicar no calcular
*/
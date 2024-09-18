document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('form-sorteador').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    let numeroMaximo = document.getElementById('numeroMaximo').value;
    numeroMaximo = parseInt(numeroMaximo); // Converte para número inteiro

    if (isNaN(numeroMaximo) || numeroMaximo <= 0) {
      alert('Por favor, insira um número válido.');
      return;
    }

    let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1; // Gera um número aleatório entre 1 e o número máximo
    document.getElementById('resultadoValor').innerText = numeroAleatorio
    document.querySelector('.resultado').style.display = 'block'
  });
});

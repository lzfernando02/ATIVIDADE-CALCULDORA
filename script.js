function adicionarValor(valor) {
  const visor = document.getElementById('visor');
  visor.value += valor;
}

function limparVisor() {
  document.getElementById('visor').value = '';
}

function apagarUltimo() {
  const visor = document.getElementById('visor');
  visor.value = visor.value.slice(0, -1);
}

function calcularResultado() {
  const visor = document.getElementById('visor');
  try {
    visor.value = eval(visor.value.replace('×', '*').replace('÷', '/'));
  } catch (error) {
    visor.value = 'Erro';
  }
}

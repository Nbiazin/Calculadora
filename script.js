let visor = document.getElementById("visor");
let valorEntrada = "";
let resultado = "";

// Função para adicionar um valor ao visor
function adicionar(valor) {
  valorEntrada += valor;
  visor.value = valorEntrada;
}

//Função para não deixar o operadores serem digitados primeiro
function operador(op) {
  if (valorEntrada === "" && op !== ".") return;

  if (/[+\-*/.]$/.test(valorEntrada) && op !== ".") return;

  // Impede múltiplos pontos decimais no mesmo número
  let partes = valorEntrada.split(/[\+\-\*\/]/);
  let ultimoNumero = partes[partes.length - 1];
  if (op === "." && ultimoNumero.includes(".")) return;

  valorEntrada += op;
  visor.value = valorEntrada;
}

// Função para limpar o visor
function limpar() {
  valorEntrada = "";
  visor.value = "";
}
// Função para apagar o último caractere
function apagar() {
  if (valorEntrada.length > 0) {
    valorEntrada = valorEntrada.slice(0, -1);
  } else {
    valorEntrada = "";
  }

  visor.value = valorEntrada;
}
// Função para calcular o resultado
function calcular() {
  try {
    resultado = new Function("return " + valorEntrada)();
    visor.value = resultado;
    valorEntrada = resultado.toString();
  } catch {
    // Captura de erro
    visor.value = "Erro";
    valorEntrada = "";
  }
}

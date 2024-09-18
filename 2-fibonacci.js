// mudar a variavel numero para ter resultado diferente
const numero = 34
let somaFibonacci = 0
let numeroAnterior = 0

const fibonacci = () => {
  if (somaFibonacci === 0) {
    somaFibonacci = 1
  } else {
    const numeroAtualFibonacci = somaFibonacci
    somaFibonacci = somaFibonacci + numeroAnterior
    numeroAnterior = numeroAtualFibonacci
  }
}

while (somaFibonacci < numero) {
  fibonacci()
}

if (somaFibonacci === numero) {
  console.log(' número  pertence a sequência')
} else {
  console.log(' número não pertence a sequência')
}

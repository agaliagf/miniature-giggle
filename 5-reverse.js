const reverse = (texto = ' ') => {
  const length = texto.length
  let textoReverso = ''
  let numeroRegressivo = length - 1

  for (let i = 0; i < length; i++) {
    textoReverso += texto[numeroRegressivo]
    numeroRegressivo--
  }

  console.log(`${texto}: ${textoReverso}`)
}

reverse('palavra')
reverse('geladeira')
reverse('computador')
// chamar a função novamente com a palavra desejada.

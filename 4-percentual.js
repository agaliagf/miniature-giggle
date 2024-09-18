const faturamentoPorEstado = {
  sp: 67836.43,
  rj: 36678.66,
  mg: 29229.88,
  es: 27165.48,
  outros: 19849.53
}
let faturamentoTotal = 0
Object.values(faturamentoPorEstado).map(valor => {
  faturamentoTotal += valor
})

Object.entries(faturamentoPorEstado).forEach(([estado, valor]) => {
  const percentual = (valor / faturamentoTotal) * 100
  console.log(`${estado.toUpperCase()}: ${percentual.toFixed(2)}%`)
})

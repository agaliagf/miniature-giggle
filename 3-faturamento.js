import dados from './dados.json' assert { type: 'json' }

const diasUteisFaturados = dados.filter(item => item.valor > 0)
console.log(diasUteisFaturados)

let menorFaturamento = 0
let maiorFaturamento = 0
let diasSuperiorMedia = 0
let mediaMensal = 0
let totalFaturamento = 0

diasUteisFaturados.forEach(item => {
  totalFaturamento += item.valor
})

mediaMensal = totalFaturamento / diasUteisFaturados.length

diasUteisFaturados.forEach(item => {
  if (item.valor < menorFaturamento || menorFaturamento === 0) {
    menorFaturamento = item.valor
  }
  if (item.valor > maiorFaturamento) {
    maiorFaturamento = item.valor
  }
  if (item.valor > mediaMensal) {
    diasSuperiorMedia++
  }
})
console.log('menor faturamento: ', menorFaturamento)
console.log('maior faturamento:', maiorFaturamento)
console.log('dias superando a média mensal: ', diasSuperiorMedia)
console.log('media mensal: ', mediaMensal)

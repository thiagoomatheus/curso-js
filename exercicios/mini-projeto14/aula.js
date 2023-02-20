// Mini-projeto 14 - Faixas de preços

function CriaFaixaPreco(tooltip,minimo,maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixaPreço = [
    new CriaFaixaPreco ('Até R$ 700,00',0,700),
    new CriaFaixaPreco ('Até R$ 1000,00',701,1000),
    new CriaFaixaPreco ('Maior R$ 1000,00',1001,99999999999)
]

console.log(faixaPreço);
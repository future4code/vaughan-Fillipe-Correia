// O seguinte array traz as pessoas colaboradoras de uma empresa, com seus salários, setores e se trabalham presencialmente ou por home office:

[
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]

// Considerando o array acima, crie um ENUM para os setores e um type para as pessoas colaboradoras. Em seguida, crie uma função que receba este array como parâmetro e retorne apenas as pessoas do setor de marketing que trabalham presencialmente. 

// input: type[]
// output: type[]

// Saída esperada:
// [
// 	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
// 	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
// ]

enum Setor {
    marketing = "marketing",
    vendas = "vendas",
    financeiro = "financeiro"
}

type Pessoa = {
    nome: string,
    salário: number,
    setor: string,
    presencial: boolean
}

const pessoas: Pessoa[] = [
    { nome: "Marcos", salário: 2500, setor: Setor.marketing, presencial: true },
    { nome: "Maria" ,salário: 1500, setor: Setor.vendas, presencial: false},
    { nome: "Salete" ,salário: 2200, setor: Setor.financeiro, presencial: true},
    { nome: "João" ,salário: 2800, setor: Setor.marketing, presencial: false},
    { nome: "Josué" ,salário: 5500, setor: Setor.financeiro, presencial: true},
    { nome: "Natalia" ,salário: 4700, setor: Setor.vendas, presencial: true},
    { nome: "Paola" ,salário: 3500, setor: Setor.marketing, presencial: true }
]

function getPessoasMarketingPresencial(pessoas: Pessoa[]): Pessoa[] {
    return pessoas.filter(pessoa => pessoa.setor === Setor.marketing && pessoa.presencial)
}

console.log(getPessoasMarketingPresencial(pessoas))

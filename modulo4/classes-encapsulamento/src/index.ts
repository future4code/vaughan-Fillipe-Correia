
//Exercício 1: Analise a classe `UserAccount` abaixo. Perceba quais propriedades são públicas e quais são privadas e responda as perguntas discursivas em comentários no arquivo `index.ts`

// a) *Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*
// Resposta: O construtor é uma função que é executada automaticamente quando uma nova instância da classe é criada.

// b) *Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
// Resposta: 1

// c) *Como conseguimos ter acesso às propriedades privadas de uma classe?*
// Resposta: Acessamos a propriedade privada através do método `get` e passamos como parâmetro o nome da propriedade.


class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }

}

//Exercício 2: Transforme a variável de tipo abaixo, chamada `Transaction` em uma classe `Transaction`. Ela deve conter as mesmas propriedades: *data*, *valor* e *descrição*. Agora, porém, todas elas devem ser **privadas**. Portanto, crie métodos (*getters*) para a leitura desses valores, tanto para essa classe quanto para a classe UserAccount. Crie uma instância dessa classe e adicione à instância já criada de UserAccount.

// type Transaction = {
//   description: string,
//   value: number,
//   date: string
// }

class Transaction {
  private description: string;
  private value: number;
  private date: string;

  constructor(
    description: string,
    value: number,
    date: string
  ) {
    this.description = description;
    this.value = value;
    this.date = date;
  }

  public getDescription(): string {
    return this.description;
  }

  public getValue(): number {
    return this.value;
  }

  public getDate(): string {
    return this.date;
  }
}

//Exercício 3: Crie uma classe **Bank**, que será responsável por guardar todos os dados da aplicação. Ela deve possuir a propriedades *accounts*, privada (crie os *getters* e *setters* que achar apropriado).

class Bank {
  private accounts: UserAccount[] = [];

  public getAccounts(): UserAccount[] {
    return this.accounts;
  }

  public addAccount(account: UserAccount): void {
    this.accounts.push(account);
  }
}
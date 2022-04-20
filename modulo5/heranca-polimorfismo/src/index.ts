console.log("Exercício de herança e polimorfismo iniciado!");

//HERANÇA
//  Vamos reforçar os conceitos de Herança e atributos estáticos criando um **sistema de uma loja**. Começaremos implementando a fase inicial desse projeto, que precisa de um gerenciamento de usuários. 

// Todo usuário deve possuir 4 informações importantes: um identificador (*id*) único que é uma string **qualquer**; um email; um nome e uma senha, que será utilizada, no futuro, para ele *logar* na nossa aplicação. Além disso, há 3 tipos de usuários. 

// Os **consumidores** são os clientes; precisamos guardar o número do cartão de crédito deles e o total de compras (em R$) que eles já realizaram no estabelecimento. 

// Os **funcionários** são os contratados para trabalhar na loja e devem possuir um valor que indica o salário base deles. 

// Por fim, os **vendedores** são funcionários com uma propriedade importante: a quantidade de vendas que eles já realizaram. Essa informação é necessária para calcular a comissão que eles vão ganhar no fim do mês. 

// Estamos fornecendo para você duas classes para exemplificar o sistema. A primeira é a classe de Usuários com id, nome, email e senha. A segunda é a classe de Consumidor. Como o consumidor possui as mesmas propriedades dos usuários (e mais algumas), a classe `Customer` é **filha** da classe `User`.

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public introduceYourself(): string {
        return `Olá, eu sou o usuário ${this.name}`
        }
  }

// Exercício 1
//   a) Seria possível imprimir a senha (password) atrelada a essa instância?  
// Resposta: Não, pois a senha é um atributo privado e não pode ser acessado fora da classe.

// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// Resposta: Uma vez, pois a classe User é instanciada uma única vez.

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }

  }

//   Exercício 2
//   a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 
// Resposta: Uma vez, pois a classe Customer é instanciada uma única vez.

// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
// Resposta: Uma vez, pois a classe User é instanciada uma única vez.

// Exercício 3
// Agora, imprima todas as informações possíveis da instância que você criou: o id, o nome, o email, o valor total de compra (purchaseTotal) e o cartão de crédito (creditCard). Perceba que as propriedades públicas da classe pai (User) foram "herdadas" pela classe filha (Customer).
// Resposta: 

const Fillipe = new Customer(
    "123",
    "flip@gmail.com",
    "Fillipe",
    "123456",
    "123456789"
)

console.log(Fillipe.getId());
console.log(Fillipe.getEmail());
console.log(Fillipe.getName());
console.log(Fillipe.getCreditCard());
console.log(Fillipe.purchaseTotal);
console.log(Fillipe.introduceYourself());

// a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
// Resposta: Não, pois a senha é um atributo privado e não pode ser acessado fora da classe, não foram criados métodos para acessar o atributo.

//Exercício 4: Adicione um método público à classe User. Esse método deve ter o nome de introduceYourself("apresente-se") e deve retornar a mensagem: "Olá, bom dia!". As classes filhas sempre têm acesso aos métodos públicos da classe pai. Então, para realizar o teste dessa sua função, faça com que a instância que você criou para a classe Customer chame esse método.

// public introduceYourself(): void {
//     return `Olá, eu sou o usuário ${this.name}`
// }

//Exercício 5: Altere o método que você acabou de criar para que ele imprima a mensagem: "Olá, sou ${nome do usuário}. Bom dia!". Realize os mesmos testes anteriores.

// public introduceYourself(): void {
//     return `Olá, sou o ${this.name}. Bom dia!`
// }

// POLIMORFISMO

// Para o exercício de prática de polimorfismo vamos fazer um sistema para auxiliar o cálculo de contas de energia elétrica para uma concessionária famosa. Basicamente, o custeamento depende do tipo do cliente. O valor base de cada kWh (unidade de consumo de energia) é R$0.75. O **Cliente Residencial** paga a tarifa cheia (ou seja, R$0.75). O **Cliente Comercial** possui um desconto de 30% do valor total (ou seja, paga R$0.53). Por fim, para o **Cliente Industrial,** há um desconto de 40% do valor total (ou seja, paga R$0.45) mais um valor fixo de R$100,00 por máquina usada na fábrica.

export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }

const client: Client = {
    name: "Flávio",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: function () {
        return this.consumedEnergy * 0.75
    }
}

console.log(client.name)
console.log(client.registrationNumber)
console.log(client.consumedEnergy)
console.log(client.calculateBill())

// Exercício1:
// a) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
// Resposta: O nome do cliente, o número de cadastro, a energia consumida e o valor da conta foram impressos.

export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

// Exercícios 2:

// Essa classe é abstrata porque está representando um tipo de informação que simplesmente abstrai e armazena as características em comum de um conjunto de outras classes. Por ser abstrata, não podemos criar uma instância dela. Essa é uma regra da Programação Orientada a Objetos e válida para todas as linguagens.

// a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?

// new Place("12345-678");

// Resposta: O erro é que a classe Place é abstrata, não pode ser instanciada.

// b) Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
// Resposta: Criar uma classe que herde de Place e que implemente os métodos abstratos.

// Exercício 3:

export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }

    public getResidentsQuantity(): number {
        return this.residentsQuantity;
    }
  }

  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity;
    }
  }

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }

    public getMachinesQuantity(): number {
        return this.machinesQuantity;
    }
  }


const residence = new Residence(2, '12345-678');
const commerce = new Commerce(3, '12345-555');
const industry = new Industry(4, '12345-666');

console.log(residence.getCep());
console.log(commerce.getCep());
console.log(industry.getCep());

// Esse exercício vai responder melhor a essas três perguntas: 

// 1) *O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior)*
// Resposta: Criar uma classe que herde de Place e que implemente os métodos abstratos.

// 2) *Por que a `Place` não é uma interface?*
// Resposta: Porque ela é abstrata e não pode ser instanciada.

// 3) *Por que a classe `Place` é uma Classe Abstrata?*
// Resposta: Porque ela representa um tipo de informação que simplesmente abstrai e armazena as características em comum de um conjunto de outras classes. Por ser abstrata, não podemos criar uma instância dela. Essa é uma regra da Programação Orientada a Objetos e válida para todas as linguagens.

// Será um pouco mais longo, mas esperamos que seja esclarecedor.

// Vamos começar lendo três classes. 

// A primeira representa uma casa residencial. Vamos armazenar nela uma variável para representar a quantidade de moradores (`residentsQuantity`)

// Exercício 4: Agora, você vai começar a colocar a mão na massa!

// Crie uma classe para representar um Cliente Residencial (`ResidentialClient`). Ela deve possuir uma propriedade de CPF, que será privada, uma vez que o CPF não pode mudar e não teremos uma classe filha da `ResidentialClient` (assim, `protected` não faz sentido). Crie o getter também.

// Essa classe deve ser **filha** da classe `Residence` e implementar a classe `Client`. Lembre-se que a classe deve implementar todos métodos e atribuir valores a todas as propriedades que herda da interface. No caso das residências, o valor da conta é **(quantidade de energia) x 0.75.**

class ResidentialClient extends Residence implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cpf: string,
      residentsQuantity: number,
      cep: string
    ) {
      super(residentsQuantity, cep);
    }
  
    public getCpf(): string {
      return this.cpf;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.75;
    }
  }

//   a) Que métodos e propriedades essa classe possui? Por quê?
// Resposta: O método getCpf() e o método calculateBill() são propriedades da classe.

// Exercício 5:
// Crie a classe `CommercialClient` para representar o Cliente Comercial. Ele deve possuir um CNPJ (privado). Crie os getter dela.

// Essa classe deve ser **filha** da classe `Commerce` e implementar a interface `Client`. Nesse caso, o valor da conta é **(quantidade de energia) x 0.53.**

class CommercialClient extends Commerce implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cnpj: string,
      floorsQuantity: number,
      cep: string
    ) {
      super(floorsQuantity, cep);
    }
  
    public getCnpj(): string {
      return this.cnpj;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.53;
    }
  }

//   a) Quais as semelhanças dessa classe com a ResidentialClient?
// Resposta: A classe CommercialClient é filha da classe Commerce e ambas implementam a interface Client.

// b) Quais as diferenças dessa classe com a ResidentialClient?
// Resposta: A classe CommercialClient possui um CNPJ, que é privado, e o método calculateBill() é diferente da ResidentialClient e possui floorQuantity.

// Exercício 6:
// Agora, crie a classe IndustrialClient para representar o Cliente Industrial. Ele deve possuir um um número de registro industrial (privada). Crie somente os getters dela.

class IndustrialClient extends Industry implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private industrialRegistrationNumber: string,
      machinesQuantity: number,
      cep: string
    ) {
        super(machinesQuantity, cep);
    }
  
    public getIndustrialRegistrationNumber(): string {
      return this.industrialRegistrationNumber;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
  }

// a) De qual classe a IndustrialClient deve ser filha? Por quê?
// Resposta: A classe IndustrialClient é filha da classe Industry porque é um cliente industrial.

// b) Que interface a IndustrialClient implementa? Por quê?
// Resposta: A interface Client é implementada pela classe IndustrialClient pois ela também é um cliente.

// c) Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?
// Resposta: Não é necessário criar os métodos setters pois não é possível alterar o valor de um número de registro industrial.


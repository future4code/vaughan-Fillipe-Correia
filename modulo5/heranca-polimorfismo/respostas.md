## HERANÇA

### Exercício 1

a) Seria possível imprimir a senha (password) atrelada a essa instância?  

// Resposta: Não, pois a senha é um atributo privado e não pode ser acessado fora da classe.



// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?

// Resposta: Uma vez, pois a classe User é instanciada uma única vez.



### Exercício 2

//   a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 

// Resposta: Uma vez, pois a classe Customer é instanciada uma única vez.



// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?

// Resposta: Uma vez, pois a classe User é instanciada uma única vez.



### Exercício 3

```typescript
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
```

// a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?

// Resposta: Não, pois a senha é um atributo privado e não pode ser acessado fora da classe, não foram criados métodos para acessar o atributo.



### Exercício 4

```typescript
 public introduceYourself(): void {
     return `Olá, eu sou o usuário ${this.name}`
 }
```

### Exercício 5

```typescript
 public introduceYourself(): void {
     return `Olá, sou o ${this.name}. Bom dia!`
 }
```



## POLIMORFISMO

### Exercício 1

// a) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?

// Resposta: O nome do cliente, o número de cadastro, a energia consumida e o valor da conta foram impressos.

### Exercício 2

// a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?



// new Place("12345-678");



// Resposta: O erro é que a classe Place é abstrata, não pode ser instanciada.



// b) Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?

// Resposta: Criar uma classe que herde de Place e que implemente os métodos abstratos.



### Exercício 3

```typescript
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
```

// 1) *O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior)*

// Resposta: Criar uma classe que herde de Place e que implemente os métodos abstratos.



// 2) *Por que a `Place` não é uma interface?*

// Resposta: Porque ela é abstrata e não pode ser instanciada.



// 3) *Por que a classe `Place` é uma Classe Abstrata?*

// Resposta: Porque ela representa um tipo de informação que simplesmente abstrai e armazena as características em comum de um conjunto de outras classes. Por ser abstrata, não podemos criar uma instância dela. Essa é uma regra da Programação Orientada a Objetos e válida para todas as linguagens.

### Exercício 4

```typescript
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
```

//   a) Que métodos e propriedades essa classe possui? Por quê?

// Resposta: O método getCpf() e o método calculateBill() são propriedades da classe.



### Exercício 5

```typescript
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
```

//   a) Quais as semelhanças dessa classe com a ResidentialClient?

// Resposta: A classe CommercialClient é filha da classe Commerce e ambas implementam a interface Client.

// b) Quais as diferenças dessa classe com a ResidentialClient?

// Resposta: A classe CommercialClient possui um CNPJ, que é privado, e o método calculateBill() é diferente da ResidentialClient e possui floorQuantity.

### Exercício 6

```typescript
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
```

// a) De qual classe a IndustrialClient deve ser filha? Por quê?

// Resposta: A classe IndustrialClient é filha da classe Industry porque é um cliente industrial.



// b) Que interface a IndustrialClient implementa? Por quê?

// Resposta: A interface Client é implementada pela classe IndustrialClient pois ela também é um cliente.



// c) Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?

// Resposta: Não é necessário criar os métodos setters pois não é possível alterar o valor de um número de registro industrial.
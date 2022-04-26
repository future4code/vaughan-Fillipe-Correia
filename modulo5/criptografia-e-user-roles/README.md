### Documentação postman: https://documenter.getpostman.com/view/19297915/UyrBkH7d



```typescript
const rounds = Number(process.env.BCRYPT_COST);
const salt = await bcrypt.genSalt(rounds);
const result = await bcrypt.hash(s, salt);
console.log("encrypted message: ", result);
```

## Exercício 1

// ) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?

// round: quantidade de vezes que o hash será executado

// salt: valor aleatório que será usado para criptografar o hash

// b) Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por criptografar uma string usando o bcryptjs.

```typescript
export const generateHash = async (*password*: *string*): *Promise*<*string*> => {

​    const rounds = Number(process.env.BCRYPT_COST);

​    const salt = await bcrypt.genSalt(rounds);

​    const result = await bcrypt.hash(password, salt);

​    return result;

​    };
```



// c) Agora, crie a função que verifique se uma string é correspondente a um hash, use a função compare do bcryptjs

```
export const compareHash = async (*password*: *string*, *hash*: *string*): *Promise*<*boolean*> => {

​    const result = await bcrypt.compare(password, hash);

​    return result;

​    }
```

## Exercício 2:

// Na aula de ontem, implementamos os endpoints de signup e login sem utilizar a criptografia. Vamos agora colocar isso. A ideia é simples: no cadastro, antes de salvar o usuário no banco, temos que criptografar a senha, para que, no banco, não fique a senha em si. Já, no login, em vez de comparar a senha enviada diretamente com a salva no banco, usaremos a biblioteca de Hash para isso. 



// a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.

// O cadastro, pois ele é o primeiro a ser executado, e o login é o segundo.



// b) Faça a alteração do primeiro endpoint

```typescript
export const generateHash = async (*password*: *string*): *Promise*<*string*> => {

​    const rounds = Number(process.env.BCRYPT_COST);

​    const salt = await bcrypt.genSalt(rounds);

​    const result = await bcrypt.hash(password, salt);

​    return result;

​    };
```

```typescript
export async function signUp(*req*: *Request*, *res*: *Response*) {

  const { email, password, name, nickname} = req.body;

  try{

  

​      if (!email || !password || !name || !nickname) {

​          throw **new** Error("Missing data");

​      }

  

​      if (email.indexOf("@") === -1) {

​          throw **new** Error("Invalid email, must contain @");

​      }

  

​      if (password.length < 6) {

​          throw **new** Error("Invalid password, must be at least 6 characters");

​      }



​      const hash = await generateHash(password);

​      

​      const userId = generateId();



​      const token = generateToken({ id: userId });

  

​      await createUser(userId, email, hash, name, nickname);

​      

​      res.status(200).send({

​          token,

​        });

​      } catch (err) {

​        if (err instanceof *Error*) {

​          res.status(400).send({

​              message: err.message,

​            });

​        } else {

​            res.status(500).send("Deu ruim")

​        }

​    }

  }
```

​    // c) *Faça a alteração do segundo endpoint*

```
export const compareHash = async (

​    *password*: *string*,

​    *hash*: *string*

  ): *Promise*<*boolean*> => {

​    const result = await bcrypt.compare(password, hash);

​    return result;

  };

  

  export async function login(*req*: *Request*, *res*: *Response*) {

​    const { email, password } = req.body;

​    try {

​      if (!email || !password) {

​        throw **new** Error("Missing data");

​      }

  

​      if (email.indexOf("@") === -1) {

​        throw **new** Error("Invalid email, must contain @");

​      }

  

​      if (password.length < 6) {

​        throw **new** Error("Invalid password, must be at least 6 characters");

​        

​      }

  

​      const user = await connection("users_autenticacao")

​        .select("*")

​        .where("email", email)

​        .first();

  

  

​      if (!user) {

​        throw **new** Error("User not found");

​      }

  

​      const isValid = await compareHash(password, user.password);

  

​      if (!isValid) {

​        throw **new** Error("Invalid password, wrong password");

​      }

  

​      const token = generateToken({ id: user.id });

  

​      res.status(200).send({

​        token,

​      });

​    } catch (err) {

​        if (err instanceof *Error*) {

​          res.status(400).send({

​              message: err.message,

​            });

​        } else {

​            res.status(500).send("Deu ruim")

​        }

​    }

  }
```

d) No exercício de ontem, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.

Resposta: Não, pois esse endpoint usa o token obtido na hora do login para autenticar o usuário.



## Exercício 3:

Agora, vamos pensar em um pouco nas funcionalidades relacionadas aos tipos de usuário. Para isso, vamos ter que fazer umas modificações no banco de dados.



a) *Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.*

```mysql
ALTER TABLE users_autenticacao ADD COLUMN role VARCHAR(64) NOT NULL;
```

b) *Altere o type `AuthenticationData e a função getData()` para representarem esse novo tipo no token.*

```typescript
type *AuthenticationData* = {

​    id: *string*;

​    role: *string*;

  }



const getData = (*token*: *string*): *AuthenticationData* => {

  const payload = jwt.verify(token, process.env.JWT_KEY as *string*) as *any*;

  const result = {

​    id: payload.id,

​    role: payload.role,

  };

  return result;

};



export type *payload* = {

​    id: *string*;

​    role: *string*;

};



  const generateToken = (*data*: *payload*) => {

​      console.log(process.env.JWT_KEY);

​    const token = jwt.sign(

​        {

​            id: data.id,

​            role: data.role



​        },

​        process.env.JWT_KEY as *string*,

​        { expiresIn: "10m" }

​    );

​    return token;

​    };



​    export { generateToken };
```



c) *Altere o cadastro para receber o tipo do usuário e criar o token com essa informação*

```
export const generateHash = async (*password*: *string*): *Promise*<*string*> => {

​    const rounds = Number(process.env.BCRYPT_COST);

​    const salt = await bcrypt.genSalt(rounds);

​    const result = await bcrypt.hash(password, salt);

​    return result;

​    };





export async function signUp(*req*: *Request*, *res*: *Response*) {

  const { email, password, name, nickname, role} = req.body;

  try{

  

​      if (!email || !password || !name || !nickname || !role) {

​          throw **new** Error("Missing data");

​      }

  

​      if (email.indexOf("@") === -1) {

​          throw **new** Error("Invalid email, must contain @");

​      }

  

​      if (password.length < 6) {

​          throw **new** Error("Invalid password, must be at least 6 characters");

​      }



​      const hash = await generateHash(password);

​      

​      const userId = generateId();



​      const token = generateToken({ id: userId, role: role });

  

​      await createUser(userId, email, hash, name, nickname, role);

​      

​      res.status(200).send({

​          token,

​        });

​      } catch (err) {

​        if (err instanceof *Error*) {

​          res.status(400).send({

​              message: err.message,

​            });

​        } else {

​            res.status(500).send("Deu ruim")

​        }

​    }

  }
```

d) *Altere o login para criar o token com o `role` do usuário*

```
export const compareHash = async (

​    *password*: *string*,

​    *hash*: *string*

  ): *Promise*<*boolean*> => {

​    const result = await bcrypt.compare(password, hash);

​    return result;

  };

  

  export async function login(*req*: *Request*, *res*: *Response*) {

​    const { email, password } = req.body;

​    try {

​      if (!email || !password) {

​        throw **new** *Error*("Missing data");

​      }

  

​      if (email.indexOf("@") === -1) {

​        throw **new** *Error*("Invalid email, must contain @");

​      }

  

​      if (password.length < 6) {

​        throw **new** *Error*("Invalid password, must be at least 6 characters");

​        

​      }

  

​      const user = await connection("users_autenticacao")

​        .select("*")

​        .where("email", email)

​        .first();

  

  

​      if (!user) {

​        throw **new** *Error*("User not found");

​      }

  

​      const isValid = await compareHash(password, user.password);

  

​      if (!isValid) {

​        throw **new** *Error*("Invalid password, wrong password");

​      }

  

​      const token = generateToken({ id: user.id, role: user.role });

  

​      *res*.status(200).send({

​        token,

​      });

​    } catch (err) {

​        if (err instanceof *Error*) {

​          *res*.status(400).send({

​              message: err.message,

​            });

​        } else {

​            *res*.status(500).send("Deu ruim")

​        }

​    }

  }
```

## Exercício 4:

Agora, vamos usar esse `role` no endpoint `/token`. Somente o usuários "normais" podem acessar esse endpoint.

```typescript
export async function getDataByActiveToken (*req*: *Request*, *res*: *Response*) {

​    try {

​      const token = *req*.headers.authorization as *string*;

​      const data = getData(token);

​      const user = await connection("users_autenticacao").where("id", data.id).select("*").first();

​      if (!user) {

​        throw **new** *Error*("User not found");

​      }

​      if (user.role !== "NORMAL") {

​        throw **new** *Error*("Unauthorized, only NORMAL users can access this endpoint");

​      }

​      return *res*.json({ user });

​    } catch (err) {

​      if (err instanceof *Error*) {

​        *res*.status(400).send({

​            message: err.message,

​          });

​      } else {

​          *res*.status(500).send("Xiiii, deu ruim!")

​      }

  }

  }
```

### Exercício 1

```typescript
export function getCEP(req: Request, res: Response): void {
  try {
    const { cep } = req.params;

    if (!cep) {
      res.statusCode = 422;
      throw "CEP é obrigatório";
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    axios.get(url).then((response) => {
        const { logradouro, bairro, localidade, uf } = response.data;

        res.send({
            logradouro,
            bairro,
            localidade,
            uf
        });
    });
    } catch (error:any) {
        if (typeof error === "string") {
            res.send(error);
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/");
        }
        }
    }
    
    app.get('/cep/:cep', getCEP)
```



### Exercício 2

```mysql
CREATE TABLE aula_51_user_address (
    cep TEXT NOT NULL,
    logradouro TEXT NOT NULL,
    numero TEXT NOT NULL,
    complemento TEXT,
    bairro TEXT NOT NULL,
    cidade TEXT NOT NULL,
    estado TEXT NOT NULL
);
```

### Exercício 3

```typescript
export function getFullCEP(req: Request, res: Response): void {
  try {
    const { cep } = req.params;

    if (!cep) {
      res.statusCode = 422;
      throw "CEP é obrigatório";
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    axios.get(url).then((response) => {
      const { cep, logradouro, numero, complemento, bairro, localidade, uf } =
        response.data;

      res.send({
        cep,
        logradouro,
        numero: req.query.numero,
        complemento: req.query.complemento,
        bairro,
        localidade,
        uf,
      });
    });
  } catch (error: any) {
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send("Ops! Um erro inesperado ocorreu =/");
    }
  }

```


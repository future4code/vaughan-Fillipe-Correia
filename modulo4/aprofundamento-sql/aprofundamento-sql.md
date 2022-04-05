### Exercício 1

a) Serve para deletar uma coluna numa tabela existente.

b) Altera o nome da coluna "gender" para "sex" e aceitar um varchar de 6 caracteres.

c) Altera a coluna "gender" para aceitar varchar de 255 caracteres.

d) 

```mysql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```



### Exercício 2

a) 

```mysql
UPDATE Actor SET name = "Fulano", birth_date = "2000-11-11" WHERE id = "003"
```

b) 

```mysql
UPDATE Actor SET name = "JULIANA PÃES" WHERE name = "Juliana Paes";
```

c) 

```mysql
UPDATE Actor SET  name = "Moacyr Franco", birth_date = "2020-02-10", salary = 600000, gender = "male" WHERE id = "005";
```

d) 

```mysql
UPDATE Actor SET name = "JULIANA PÃES" WHERE name = "Juliana Queijos";
O resultado não retornou erro, porém nada foi mudado, 0 linhas afetadas e 0 mudanças.
```

### Exercício 3

a) 

```mysql
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b) 

```mysql
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000
```

### Exercício 4

a) 

```mysql
SELECT MAX(salary) FROM Actor
```

b)

```mysql
SELECT MIN(salary) FROM Actor WHERE gender = "female"
```

c)

```mysql
SELECT COUNT(*) FROM Actor WHERE gender = "female"
```

d)

```mysql
SELECT SUM(salary) FROM Actor
```

### Exercício 5

a) A query retornou o número de atores de cada gênero na tabela.

b) 

```mysql
SELECT id, name FROM Actor ORDER BY name DESC;
```

c)

```mysql
SELECT * FROM Actor ORDER BY salary;
```

d)

```mysql
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

e)

```mysql
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```

### Exercício 6

a) 

```mysql
ALTER TABLE Movies ADD playing_limit_date DATE;
```

b)

```mysql
ALTER TABLE Movies CHANGE score score FLOAT;
```

c)

```mysql
UPDATE Movies SET playing_limit_date = "2020-12-31" WHERE id = "001"
UPDATE Movies SET playing_limit_date = "2020-11-11" WHERE id = "002"
```

d)

```mysql
DELETE FROM Movies WHERE id = "001"
UPDATE Movies SET synopsis = "Filme bão" WHERE id = "001";
```

Nada foi alterado, pois a linha não foi encontrada.




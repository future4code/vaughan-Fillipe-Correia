### Exercício 1

 a) 	VARCHAR: Sequência de caracteres de tamanho variável, nesse caso, 255 caractéres. 
		 DATE: Extrai a data de uma de um valor de data  YYYY-MM-DD  ou YYYYMMDD
 b) O SHOW DATABASES mostra as nossas databases em uma coluna "information schema" e o SHOW TABLES nos mostra nossas tabelas, nesse caso a "Actor"

c) Nos mostra os detalhes da tabela Actor, com o Field, Type, pode ter NULL ou não, se o elemento é uma chave da tabela, valor default e Extra.

```mysql
SELECT * FROM Table; 
```

### Exercício 2

a) 

```mysql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200,
  "1963-08-23", 
  "female"
);
```

b) Error code 1062. Entrada em duplicidade "002" para a chave primária. 

c) Error code 1136. A contagem da coluna não combina com a contagem de valores da linha 1.

d) Error code 1364. O campo "nome" não tem um valor padrão.

e) Error code 1292. Valor de data incorreto: '1950' para a coluna "birth_date" na linha 1.

### Exercício 3

a) 

```mysql
SELECT id, name, salary, birth_date from Actor WHERE name = "female"
```

b) 

```mysql
SELECT salary from Actor WHERE name = "Tony Ramos"
```

c) Não foi retornada nenhuma linha e os valores vieram todos com NULL

d) 

```mysql
SELECT id, name, salary from Actor WHERE salary < 500;
```

e)  Error code 1054. Coluna desconhecida "nome" no "field list"

Podemos ajeitar usando o "name" no lugar de "nome"



### Exercício 4

a) Na query, são retornados os atores que começam com a letra A ou J e tenham o salário abaixo de 300000

b) 

```mysql
SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000
```

c) 

```mysql
SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";
```

d) 

```mysql
SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5

a) 

```mysql
INSERT INTO Movies (id, name, synopsis, release_date, score)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
```

b) 

```mysql
INSERT INTO Movies (id, name, synopsis, release_date, score)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);
```

c) 

```mysql
INSERT INTO Movies (id, name, synopsis, release_date, score)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);
```

e)

```mysql
INSERT INTO Movies (id, name, synopsis, release_date, score)
VALUES(
  "004", 
  "Tropa de Elite",
  "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.",
  "2007-09-05", 
  10
);
```

### Exercício 6

a)

```mysql
SELECT id, name, score from Movies WHERE id = 001;
```

b) 

```mysql
SELECT * from Movies WHERE name = "Se eu fosse você";
```

c)

```mysql
SELECT id, name, synopsis from Movies WHERE score = 7 OR score > 7;
```

### Exercício 7

a)

```mysql
SELECT * from Movies WHERE name LIKE "%vida%";
```

b)

```mysql
SELECT * from Movies WHERE title LIKE "%elite%" OR synopsis LIKE "%elite%";
```

c)

```mysql
SELECT * from Movies WHERE release_date < "2022-04-04";
```

d)

```mysql
SELECT * from Movies WHERE release_date < "2022-04-04" AND (name LIKE "%elite%" OR
      synopsis LIKE "%elite%") AND score > 7;
```


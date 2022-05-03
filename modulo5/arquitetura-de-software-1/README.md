# API Arquiterura de software 1



### Link da Documentação

#### [API Arquitetura de software 1](https://documenter.getpostman.com/view/19297915/UyrHeYE4)

##

### O que Funciona 

##### Todos os endpoints estão funcionais.

##

### Tabelas MySQL

```mysql
CREATE TABLE User_Arq(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL,
role VARCHAR(255) DEFAULT "NORMAL"
);
```

### Autor 
#### [Fillipe Dias Correia](https://github.com/FillipeCO)
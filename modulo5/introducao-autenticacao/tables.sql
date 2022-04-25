CREATE TABLE IF NOT EXISTS users_autenticacao (
    id VARCHAR(64) PRIMARY KEY,
    email VARCHAR(64) UNIQUE NOT NULL,
    password VARCHAR(64) NOT NULL,
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL
);

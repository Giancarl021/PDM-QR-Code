# PDM-QR-Code
Trabalho de PDM, controle de presença com QR Code

### Variáveis de ambiente

Renomeie o arquivo ``sample.env`` para ``.env`` e preencha os valores indicados:
```dotenv
# Server
PORT=80

# Authentication
TOKEN_TTL=3600
AUTH_SECRET="Seu segredo de Autenticação"

# Database
DB_HOST="IP do Servidor PostgreSQL"
DB_USER="Usuário do banco de dados"
DB_PASSWORD="Senha do banco de dados"
DB_DATABASE="Nome do banco de dados"

# QR Code
QR_CODE_TTL=180
```
### Instruções

Na pasta raíz do projeto, execute os seguintes comandos:

* ``npm install`` para instalar as dependências;
* ``npm run knex:build`` para executar as *migrations* e as *seeds*;
* ``npm run knex:rollback`` para reiniciar o banco de dados;
* ``npm run dev`` para executar em modo de desenvolvimento;
* ``npm start`` para executar em modo de produção.

### Usuários padrão

#### Admin (no WebApp)

Usuário: ``admin``
Senha: ``changeme``

#### Estudante (no Kodular)

Usuário: ``student``
Senha: ``changeme``
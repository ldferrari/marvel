![logo Marvel](./front/src/image/marvelLogin.jpg)

link para usar o app https://marvel-front-stone.herokuapp.com/login

### A aplicação

Aplicação para fazer buscas de quadrinhos e personagens da Marvel.

Esta possui:
- página para cadastro de novo usuário.
- página de login.
- página para alteração dos dados do usuário.
- página para encontrar um quadrinho.
- página para encontrar um personagem.
- página para visualizar os quadrinhos favoritos.
- página para visualizar os personagens favoritos.
- página para visualizar os detalhes de um determinado quadrinho.
- página para visualizar os detalhes de um determinado quadrinho.

### Estrutura de pastas
![estrutura de pastas](./estrutura.png)

### Como executar

Entre na **pasta do back** e instale as dependências
```
npm install
```

Entre na **pasta do front** e instale as dependências
```
npm install
```

Entre na **pasta do back** e criar um arquivo .env
```
//na raiz do back
toutch .env
```

nciara o código dentro do arquivo .env
```
HOSTNAME=localhost
MYSQL_USER=root
MYSQL_PASSWORD= (INSIRA O PASSWORD DO SEU MYSQL)
SCHEMA=Marvel
```

Crie o banco de dados usando o sequelize
```
//na raiz do back
sequelize db:create
npx sequelize db:migrate
```

Suba seu **servidor de back** (ele roda na porta **3001**)
```
//na raiz do back
npm start
```

Suba seu **servidor de front** (ele roda na porta **3000**)
```
//na raiz do front
npm start
```

### Lançamentos Principais

Arquitetura:
- back-end: Rest,
- front-end: SOLID

Back-end:
- Criado no node com sequelize.
- Bando de Dados MySQL.
- Senha criptografada com hash salt usando o bcrypt.
- Token gerado com JWT.

Front-end:
- Criado no JavaScript com o Reat.
- API feita de (https://developer.marvel.com/).
- compartilhamento de dados com o context.
- CSS responsivo em toda a aplicação.
- validação se o password possui mais de 6 caracteres.
- Validação se o e-mail possui um formato valido.

### Créditos
- projeto crido por Luís Ferrari
- e-mail: luisdiasferrari@gmail.com
- linkdin: https://www.linkedin.com/in/luisdferrari/

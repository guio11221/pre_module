# Create Project Template

Este módulo permite criar um novo projeto baseado em um template pré-definido. Ele copia arquivos e pastas de um diretório de template para o diretório do projeto, e cria um arquivo `package.json` com as dependências e configurações básicas.

## Instalação

Para usar o módulo, basta executá-lo com o comando `npx`.

### Usando `npx`

Você pode criar um novo projeto executando o comando:

```bash
npx create-template <nome-do-projeto>
```
ou
```bash
npx pre_module <nome-do-projeto>
```
### O que o módulo faz

1.  Cria um novo diretório com o nome do projeto informado.
2. Copia recursivamente os arquivos e pastas do template para o novo diretório.
3. Gera um arquivo package.json configurado com o nome do projeto e dependências básicas.
4. Instala as dependências do projeto usando o npm.


## Estrutura do Template

```bash
create-project-template/
├── template/               # Diretório com os arquivos base para o projeto gerado
│   ├── bin/                # Scripts ou executáveis do projeto gerado
│   ├── public/             # Arquivos estáticos do projeto gerado
│   ├── src/                # Código-fonte principal
│   │   ├── controllers/    # Controladores (lógica de negócios)
│   │   ├── models/         # Modelos de dados
│   │   ├── pages/          # Páginas (caso seja usado em um framework como Next.js)
│   │   ├── routes/         # Rotas da aplicação
│   │   ├── services/       # Serviços e integrações externas
│   ├── .env                # Arquivo de variáveis de ambiente
│   ├── .gitignore          # Arquivo para ignorar pastas/arquivos no Git
│   ├── README.md           # Documentação inicial do projeto gerado
│   └── package.json        # Configuração base do projeto gerado
├── index.js                # Script principal que executa o gerador
├── README.md               # Documentação do gerador
└── package.json            # Configuração do gerador
```

## Como Contribuir
1. Faça um fork do repositório.
2. Crie uma branch para suas alterações (git checkout -b minha-feature).
3. Commit suas mudanças (git commit -am 'Adiciona nova feature').
4. Push para a branch (git push origin minha-feature).
5. Abra um pull request.

## Final
Este README.md fornece uma visão clara de como o módulo funciona e como o usuário pode utilizá-lo para criar um projeto a partir de um template.
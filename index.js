const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Função para copiar recursivamente o template
const copyRecursiveSync = (src, dest) => {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((child) => {
      copyRecursiveSync(path.join(src, child), path.join(dest, child));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};

// Função para criar o package.json dinâmico
const createPackageJson = (projectName, targetPath) => {
  const packageJson = {
    name: projectName.toLowerCase().replace(/\s+/g, '-'),
    version: "1.0.0",
    description: "Descrição do projeto gerado pelo módulo.",
    main: "src/index.js",
    scripts: {
      start: "node src/index.js"
    },
    keywords: [],
    author: "",
    license: "MIT",
    dependencies: {},
    devDependencies: {}
  };

  const packageJsonPath = path.join(targetPath, 'package.json');
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
  console.log(`Arquivo package.json criado com sucesso em: ${packageJsonPath}`);
};

// Função principal para criar o projeto
const createProject = (projectName) => {
  const templatePath = path.join(__dirname, 'template');
  const targetPath = path.join(process.cwd(), projectName);

  if (!fs.existsSync(templatePath)) {
    console.error(`Erro: O diretório "template" não foi encontrado em ${templatePath}.`);
    process.exit(1); // Encerra com código de erro
  }

  if (fs.existsSync(targetPath)) {
    console.error(`Erro: O diretório "${projectName}" já existe.`);
    process.exit(1); // Encerra com código de erro
  }

  fs.mkdirSync(targetPath, { recursive: true });
  copyRecursiveSync(templatePath, targetPath);

  // Gera o package.json com o nome do projeto
  createPackageJson(projectName, targetPath);

  console.log('Instalando dependências...');
  execSync('npm install', { cwd: targetPath, stdio: 'inherit' });

  console.log(`Projeto "${projectName}" criado com sucesso!`);
  console.log(`Entre no diretório do projeto: cd ${projectName}`);
  console.log('Use `npm start` para iniciar o projeto.');

  // Finaliza o processo de forma bem-sucedida
  process.exit(0); // Encerra com sucesso
};

// Verifica o nome do projeto no argumento ou pergunta
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const projectName = process.argv[2];

if (!projectName) {
  rl.question('Qual o nome do projeto? ', (name) => {
    createProject(name);
    rl.close();
  });
} else {
  createProject(projectName);
}
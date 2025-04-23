# Projeto Final - Desenvolvimento de API REST com NodeJs

![image](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![image](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![image](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

<h4> Este projeto final simula um sistema de Catálogo de Medicamentos e
Fabricantes, onde será possível gerenciar medicamentos e os fabricantes
responsáveis por sua produção. O objetivo principal é criar uma API REST que
permita o gerenciamento dessas entidades. </h4>

--- 

#  😏 FUNCIONALIDADES

* Ações CRUD parciais (create, get all, get by id e delete) para as entidades: Fabricante e Medicamento ;
* Associação simples Medicamento - Fabricante;
* Iniciação modularizada via sequelize, usando initModel;
* Configuração padronizada de rotas via express;
* Regras da lógica no mundo real embutidas;
<p> O sistema será utilizado para registrar medicamentos e associá-los aos seus
fabricantes, permitindo consultas organizadas por medicamentos e fabricantes.
Além disso, cada fabricante terá um documento de registro que será único e
obrigatório para controle e identificação do cadastro. </p> 

---

# 🔙 METODOLOGIA E TECNOLOGIAS

<h2> Backend </h2>

* Conexão database (sqlite3) e sequelize;
* Rotas REST API (node.js);
* Nodemon (opcional);
* Express.js

<h2> IDE </h2>

* VsCode 

<h2> Para testes </h2>

* Postman (para fazer as requisições);

---

# 🆙 COMO RODAR A APLICAÇÃO LOCALMENTE

<h2> No linux: </h2>

* No terminal: 

```bash
git clone https://github.com/g-f307/Projeto_Final_RestAPI_Node.js.git
```

* Na raiz da pasta (após clonar o repositório):

```bash
npm install
npm run dev
node insereDados.js (para povoar o banco)
```

* Feito isso, o projeto estará rodando no localhost:3000/api/medicamentos ou para fabricante: localhost:3000/api/fabricantes.

<h2> No Windows: </h2>

* Baixe e extraia o zip disponível pelo github ou clone o repositório pela IDE do VsCode. Após isso, realize os mesmos passos no terminal da IDE para inicicar o servidor.

---

> [!WARNING]
> Para realizar as requisições create (post) e delete será necessário o uso do Postman.

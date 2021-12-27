<h1>Desafio </h1>
<a href="https://imgur.com/uxpq1Cu"><img src="https://i.imgur.com/uxpq1Cu.png?3" title="source: imgur.com" /></a>

<h2> API-Tasks </h2>
<a href="https://imgur.com/xAdDRE7"><img src="https://i.imgur.com/xAdDRE7.png?1" title="source: imgur.com" /></a>

> Status: Finalizado✅

<h2> Descrição do Desafio📝</h2>
<p>O desafio consiste na  criação de uma API cuja funcionalidade assemelha-se ao Trello ou a um
Bloco de notas.Consegui realizar o desafio criando a API um pouco diferente da solicitada,mas que contém 
as mesmas funções..
</p>

<h2> Descrição da API📝 </h2>
<p>No desenvolvimento da API eu separei as requisições em:  </p>
<p>Task(Principal)
<a href="https://imgur.com/Q5CrcT1"><img src="https://i.imgur.com/Q5CrcT1.jpg" title="source: imgur.com" /></a> </p>
<p>
SubTasks(Array de Tasks)
<a href="https://imgur.com/5o3hmnG"><img src="https://i.imgur.com/5o3hmnG.png" title="source: imgur.com" /></a>
</p>

<p>Ou seja vai ter um POST,GET,PUT,DELETE para Task(Principal) e também para as SubTasks(Array de Tasks)
que estão interligadas por chave estrangeira com o campo 'id' da tabela Task.</p>

<h2>Funcionamento da API⚙️</h2>

> Explicando os Métodos👨‍🏫

✨Task(Principal)

> POST: http://localhost:3000/api/task 


Permite Inserir uma Task Principal,Passando no body
da requisição os campos "titulo" e  "descricao",Ex: 

"titulo": "Controle de Armazenamento",<br>
"descricao": "responsável por acompanhar o fluxo de mercadorias da empresa".

Resultado:

<a href="https://imgur.com/ZCghyvo"><img src="https://i.imgur.com/ZCghyvo.png?1" title="source: imgur.com" /></a>

✨SubTasks

> POST :http://localhost:3000/api/task/'id'/subtasks


Permite Inserir uma subtask na task principal usando o 'id',passando no body
da requisiçao os campos "titulo","relevancia" e"completada", Ex:

"titulo": "Criação de api de estoque",<br>
"relevancia": 5,<br>
"completada": true

Resultado:

<a href="https://imgur.com/yYGREXf"><img src="https://i.imgur.com/yYGREXf.png?1" title="source: imgur.com" /></a>

✨Task(principal)

> GET: http://localhost:3000/api/task


Traz a lista com todas as tasks principais.


Resultado: 

<a href="https://imgur.com/80SrzKQ"><img src="https://i.imgur.com/80SrzKQ.png?1" title="source: imgur.com" /></a>

💡-Passando um 'id' no final da URL teremos a listagem de apenas uma Task

✨SubTasks

> GET: http://localhost:3000/api/task/'id'/subtasks


Traz a lista com todas as SubTasks referente a Task principal que foi passada pelo id na URL


Resultado: 

<a href="https://imgur.com/qzm8wmm"><img src="https://i.imgur.com/qzm8wmm.png?1" title="source: imgur.com" /></a>

💡-Passando um 'id' no final da URL teremos a listagem de apenas uma SubTask


✨Task(Principal)

> PUT: http://localhost:3000/api/task/'id'


Permite fazer atualizações nos campos da Task(Principal)

✨SubTasks

>PUT: http://localhost:3000/api/task/'id'/subtasks/'id'


Permite fazer atualizações nos campos das SubTasks


>DELETE: Segue os mesmos parâmetros da requisição PUT


### Execução da API👨‍💻

>Modulos Necessários

+ Express
+ Body-parser
+ Sequelize
+ Mysql2
+ Config

>npm install express body-parser sequelize mysql2

>npm install config

1. Criação do Banco de Dados MySql

+ Criar manualmente um banco com nome: "tasks"

+ ❗ O nome pode ser alterado no default.json da Config

2. Criação das tabelas

+ Executar o comando: node .\api\banco-de-dados\criarTabelas.js

3. Executar a API

+ Executar o comando: node .\api\index.js







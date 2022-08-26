## 🚗 Controle de Utilização de automóveis

Foi desenvolvido um WebApi para controlar a utilização dos automóveis de uma empresa.

### ⚙ Funcionalidades

• CRUD de automóvel, como também recuperar um automóvel cadastrado pelo seu identificador
único e possibilitar que a filtragem seja também por cor e marca do automóvel

• CRUD de motoristas, como também recuperar um motorista cadastrado pelo seu identificador 
único

• Criação, listagem, e finalização da utilização de um automóvel

### 📋 Regras de negócio

Um automóvel só pode ser utilizado por um motorista por vez. Um 
motorista que já esteja utilizando um automóvel não pode utilizar outro automóvel ao mesmo 
tempo.

### 💻 Tecnologias Utilizadas

• Node.js

• Framework ExpressJs 

• MongoDB

### 👩‍💻 Preparação do Ambiente

• Instalação do VSCode: https://code.visualstudio.com/download

• Instalação do Node: https://nodejs.org/en/

• Instalação MongoDB: https://www.mongodb.com/docs/manual/installation/

• Instalação do Yarn: https://classic.yarnpkg.com/lang/en/

#### Após as intalações necessárias, cria o package json, no terminal do VSCode, com o seguinte comando:

• npm init - y

#### Logo em seguida, instale as dependências

• npm add express

• yarn add body-parser

• yarn add mongoose

#### Clone o projeto deste repositório, e para fins de teste, utilize o Postman(ou de sua preferência)

Obs: Criei uma variavél de ambiente para substituir o "http://localhost:3000" por "base_url"

### 🚛🚛 Rotas

#### Create

POST {{base_url}}/car/registerCar

POST {{base_url}}/motorist/registerMotorist

POST {{base_url}}/useOfCar/registerUseOfCar


#### FindAll

GET {{base_url}}/car/

GET {{base_url}}/car/filter

GET {{base_url}}/motorist/

GET {{base_url}}/useOfCar/


#### FindById

GET {{base_url}}/car/:carId

GET {{base_url}}/motorist/:motoristId


#### Update

PUT {{base_url}}/car/:carId

PUT {{base_url}}/motorist/:motoristId

PUT {{base_url}}/useOfCar/filter


#### Delete

DELETE {{base_url}}/car/:carId

DELETE {{base_url}}/motorist/:motoristId















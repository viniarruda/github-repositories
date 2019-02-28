# React Github List Repositories

Features ES6:
#### Spread
 Usado para passar uma props para dentro de um componente no exemplo do react e para array, usado para implementar um novo array ao array já existente.
#### Const
Usado para declarar as funções de components, a diferença para let é que as variáveis criadas não podem ser reatribuídas. No caso de um objeto, o valor pode ser reatribuído.
#### Arrow function
Modo de usar menos caracteres, podendo emitir o `return`. Soluciona o antigo problema do `this` que referencia a própria função.
#### Import
Modo simples de usar mais de uma função do require ou import ao mesmo tempo. Ex: { Link, Router } from 'react-router-dom'
#### Class
constructor: utilizado para inicialização da instância. Usado muito em react para criação do primeiro state e da implementação dos binds.
#### Export
Modo simples para exportar funções ou classes para outras partes do projeto, aumenta a reutilização e cria mais organização
#### Templates Literals

Templates literals foram implementadas no es6 como uma maneira mais facil de concatenação de strings com variáveis. Por exemplo, antes era necessário, para concatenar duas variáveis, fazer da seguinte maneira:
const hello = "ola " + nome;

Agora podermos fazer da seguinte maneira:

const hello = `ola ${nome}`;

Facilitando nossa escrita

#### Shorthand properties

Alguns shorthands foram implementados no es6 que também são muito utilizados principalmente na importação de classes ou modulos no React. Por exemplo, a importação de alguma função ou módulo dentro do react. Hoje podemos importa-lo da seguinte maneira:

import {component} from react;

Da mesma maneira em um objeto. Caso eu tivesse um objeto pessoa (como está abaixo), e quisess pegar apenas o nome, poderia ser realizado da seguinte maneira:

const person ={
	name: 'vinicius',
	age: 22
}

const {name} = person;

Esse resultado acima já traria 'vinicius';

E também para funções. Agora não precisamos mais escrever 'function NomeDaFunção()'. Dependendo do framework e do escopo que estamos desenvolvendo, a palavra function não é necessário mais.

## This project include:
- Redux
- Redux-form
- Routes
- Styled Components
- Hooks
- Auth (Automatic redirect in "/repos/name" to "/" while not enter github user)

## Run the project

```npm install```

```npm start```

## Run test

```npm run test```

After run this, press `a`

Enjoy!

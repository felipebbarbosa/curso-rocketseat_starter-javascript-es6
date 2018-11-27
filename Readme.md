## Curso Javascript ES6+

### Anotações

### 0. Conceitos

- yarn = Gerenciador de pacotes do JavaScript;
- babel = Traduz o código JavaScript ES6+ para que todos os navegadores entendam;

#### Configurando o Babel

***ATENÇÃO: Tem que instalar o Node.js e o Yarn antes!***

Na pasta do projeto via prompt de comando:

```
yarn init
yarn add @babel/cli
yarn add @babel/preset-env
yarn add @babel/core
```

Crie um arquivo .babelrc com o seguinte conteúdo:
```
{
    "presets": ["@babel/preset-env"]
}
```

#### Operações em Array e Arrow Functions

```const arr = [1, 2, 4, 5];```

##### Map

Via function tradicional:
```
const newArr = arr.map(function(item) {
    return item * 2;
});
```

Via arrow function:
```
const newArr = arr.map(item => item * 2);
```

#### Reduce

Percorre todo o array e retorna apenas um valor.

Via function tradicional:
```
const soma = arr.reduce(function(total, next) {
    return total + next;
});
```

Via arrow function:
```
const soma = arr.reduce((total, next) => total + next);
```

#### Filter

No exemplo abaixo, o algoritmo está filtrando apenas os números pares do array original.

Via function tradicional:
```
const filtro = arr.filter(function(item) {
    return item % 2 === 0;
});
```

Via arrow function:
```
const filtro = arr.filter(item => item % 2 === 0);
```

#### Find

Via function tradicional:
```
const resultado = arr.find(function(item) {
    return item === 4;
});
```

Via arrow function:
```
const resultado = arr.find(item => item === 4);
```

Nota: arrow functions é mais recomendado para funçoes anônimas (como dos exemplos acima);

#### Valores padrão

É possível passar valores padrão para as funções da seguinte forma:

```
function soma(a = 0, b = 0) {
    return a + b;
}
```
Sendo assim, é possível chamar a função com somente um parâmetro que ela não irá quebrar:
```
console.log(soma(1, 2)); // 3
console.log(soma(1)); // 1
console.log(soma()); // 0
```

#### Desestruturação

```
const usuario = {
    nome: 'Felipe',
    idade: 31,
    endereco: {
        cidade: 'Nova Odessa',
        estado: 'SP'
    }
};
```

Exibindo os dados de maneira tradicional:

```
console.log(usuario.nome);
console.log(usuario.endereco.estado);
```

Exibindo os dados de maneira desestruturada:

```
const { nome, endereco: { estado }} = usuario;
console.log(nome);
console.log(estado);
```

É possível usar com parâmetro de função:

```
function mostraNome(usuario) {
    return console.log(usuario.nome);
}

mostraNome(usuario);
```

Desestruturado ficaria mais ou menos assim:

```
function mostraNome({ nome }) {
    return console.log(nome);
}

mostraNome(usuario);
```

#### Operadores Rest/Spread

***ATENÇÃO: É necessário instalar um plugin para o Babel***

```yarn add @babel/plugin-proposal-object-rest-spread```

E adicione a seguinte linha no arquivo .babelrc (logo abaixo da linha dos presets):

```"plugins": ["@babel/plugin-proposal-object-rest-spread"]```

#### Rest

Este operador, representado pelos "...", serve para pegar o restante de um objeto, por exemplo:

```
const usuario = {
    nome: 'Felipe',
    idade: 31,
    empresa: 'Google'
};

const { nome, ...restante } = usuario;
console.log(nome);
console.log(restante);
```

Outro exemplo:

```
const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;
```

É possível usar como parâmetros de função também!

#### Spread

É o mesmo operador, só usado de forma diferente. No exemplo abaixo, o usuario2 irá todas informações do usuario1 com exceção do nome, que será alterado:

```
const usuario1 = {
    nome: 'Felipe',
    idade: 31,
    empresa: 'Google'
};

const usuario2 = { ...usuario1, nome: 'Camila' };
```

```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
```

#### Template literals

Uma forma de incluir variáveis dentro de uma string do ES6+:

```
const nome = 'Felipe';
const idade = 31;

console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
```

Obs.: Só um detalhe que não é aspas simples (') na chamada do console.log e sim crase (`);


#### Object short syntax

```
const nome = 'Felipe';
const idade = 31;

const usuario = {
    nome,
    idade,
    empresa: 'Google'
};
```












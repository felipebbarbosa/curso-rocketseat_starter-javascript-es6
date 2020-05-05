## Curso Starter JavaScript ES6+

### Anotações do curso

### Conceitos e Definições

- yarn = Gerenciador de pacotes do JavaScript;
- babel = Traduz o código JavaScript ES6+ para que todos os navegadores entendam;

### Babel

#### Configurando

***ATENÇÃO: Tem que instalar o Node.js e o Yarn antes!***

Após a criação da pasta do projeto e executado o comando:

```
yarn init
```

É necessário instalar as dependências do Babel no projeto:

```
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

O `preset-env` é o responsável por identificar o ambiente na qual está trabalhando para converter as funcionalidades escritas em ES6 no código que aquele ambiente entenda, por exemplo, o navegador.

***Observação: Adicione a pasta `node_modules` no arquivo `.gitignore`.***

### Operações em Array e Arrow Functions

```const arr = [1, 2, 4, 5];```

##### Map

O método é utilizado para quando você quiser manipular os dados de um array, gerando um novo array. Por exemplo, dado o array acima, vamos supor que você queira dobrar o valor de cada elemento do vetor. Você fazer desta forma:

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

Já esse método percorre todo o array e retorna apenas um valor. Vamos supor que queira somar todos os elementos do array:

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

Nota: arrow functions é mais recomendado para funções anônimas (como dos exemplos acima);

### Valores padrão

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

### Desestruturação

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

É possível usar como parâmetro de função:

Maneira tradicional:
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

### Operadores Rest/Spread

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
console.log(nome);      \\ Felipe
console.log(restante);  \\ { idade: 31, empresa: 'Google' }
```

Outro exemplo:

```
const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;
```

É possível usar como parâmetros de função também!

#### Spread

É o mesmo operador, só usado de forma diferente. No exemplo abaixo, o `usuario2` irá pegar todas informações do `usuario1` com exceção do `nome`, que será alterado:

```
const usuario1 = {
    nome: 'Felipe',
    idade: 31,
    empresa: 'Google'
};

const usuario2 = { ...usuario1, nome: 'Camila' };

console.log(usuario2); \\ { nome: 'Camila', idade: 31, empresa: 'Google' }

```

```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3); \\ [1, 2, 3, 4, 5, 6]
```

### Template literals

Uma forma de incluir variáveis dentro de uma string do ES6+:

```
const nome = 'Felipe';
const idade = 31;

console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
```

Obs.: Só um detalhe que não é aspas simples (') na chamada do console.log e sim crase (`);


### Object short syntax

Quando o nome de variável tem o mesmo nome do atributo do objeto, você não precisa colocar, exemplo:

```
const nome = 'Felipe';
const idade = 31;

const usuario = {
    nome,
    idade,
    empresa: 'Google'
};
```

### Webpack 

Webpack é como se fosse um serviço que possibilita a gente trabalhar com vários arquivos .js (e .css e imagens) na nossa aplicação, através do *export/import*. Para instalar: 

```
yarn add webpack webpack-cli -D
yarn add babel-loader -D
yarn add webpack-dev-server -D
```
***Obs: o `-D` significa que é uma dependência de desenvolvimento assim como o Babel.***

Crie o arquivo `webpack.config.js` e altere o script `dev` do arquivo `package.json`.

### Async/Await

A partir do ES8, é possível escrever promises (requisições assíncronas) de outra maneira. Por exemplo:

Antes, usando promises:
```
function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        })
}
```
Depois, com async/await:
```
async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.log('Usuário não existe');
    }
}
```

Lembrando que toda `function` quando colocada o `async` na frente, ela se torna uma promise, então você pode usar com a sintaxe antiga também. Além disso, você só pode usar o `await` dentro de uma `async function`.

### AXIOS

```
yarn add axios
```














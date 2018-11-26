// 1° exercício

class Usuario {

    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

const Usr1 = new Usuario('user@teste.com', 'user123');
const Adm1 = new Admin('admin@teste.com', 'admin123');

console.log(Usr1.isAdmin());
console.log(Adm1.isAdmin());

// 2° exercício

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1
const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

// 2.2
const maioresRocketseat = usuarios.filter(usuario => ((usuario.empresa === 'Rocketseat') && (usuario.idade >= 18)));
console.log(maioresRocketseat);

// 2.3
const usuarioGoogle = usuarios.find(usuario => usuario.empresa === 'Google');
console.log(usuarioGoogle);

// 2.4
const usuario50anos = usuarios.map(usuario => ({ ...usuario, idade: usuario.idade * 2 })).filter(usuario => usuario.idade <= 50);
console.log(usuario50anos);

// 3° exercício

// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);

// 3.2
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => usuario.idade;
console.log(mostraIdade(usuario));

// 3.3
const nomeUsuario = 'Diego';
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

console.log(mostraUsuario(nomeUsuario, idade));
console.log(mostraUsuario(nomeUsuario));

// 3.4
const promise = () => new Promise((resolve, reject) => resolve());

// 4° exercício

const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    }
};

const { nome, endereco: { cidade, estado }} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: 'Diego', idade: 23}));

// 5° exercício

// 5.1 rest
const arr1 = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr1;

console.log(x);
console.log(y);

function soma(...valores) {
    return valores.reduce((total, valor) => total + valor);
}

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

// 5.2 spread
const user = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil'
    }
}

const user2 = { ...user, nome: 'Gabriel' };
const user3 = { ...user, endereco: { ...user.endereco, cidade: 'Lontras' }};

console.log(user);
console.log(user2);
console.log(user3);

// 6° exercício

const user4 = 'Diego';
const idade4 = 23;

console.log(`O usuário ${user4} possui ${idade4} anos`);

// 7° exercício

const user5 = {
    nome,
    idade,
    cidade: 'Rio do Sul'
}

console.log(user5);
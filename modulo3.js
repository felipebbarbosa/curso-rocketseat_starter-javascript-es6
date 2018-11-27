import axios from 'axios';

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

/* -- ANTES
function umPorSegundo() {
    delay().then(() => {
        console.log('1s');

        delay().then(() => {
            console.log('2s');

            delay().then(() => {
                console.log('3s');
            });
        });
    });
}
*/

async function umPorSegundo() {
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
}


umPorSegundo();

//

/* -- ANTES
function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        })
}
*/

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.log('Usuário não existe');
    }
}

getUserFromGithub('felipebbarbosa');
getUserFromGithub('felipebbarbosa124324');

//

/* -- ANTES
class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Repositório não existe');
            });
    }
}
*/

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch(err) {
            console.log('Repositório não existe');
        }        
    }
}

Github.getRepositories('felipebbarbosa/rocketseat-starter-javascript-es6');
Github.getRepositories('rocketseat/ds1231sda');

//

/* -- ANTES
const buscaUsuario = usuario => {
    axios.get(`https://api.github.com/users/${usuario}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        });
}

*/

const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch (err) {
        console.log('Usuário não existe');
    }
}

buscaUsuario('diego3g');
import axios from 'axios';

class Api {
    static async getInfoUser(username) {
        try {
            const url = `https://api.github.com/users/${username}`;
            const resp = await axios.get(url);

            console.log(resp);
        } catch (err) {
            console.warn('Erro ao acessar APi');
        }
    }
}

Api.getInfoUser('melkibalbino');
Api.getInfoUser('melkibalbinosss');
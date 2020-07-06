import axios from 'axios';

// class Github {
//   static getRepositories(repo) {
//     axios.get(`https://api.github.com/repos/${repo}`)
//       .then(response => {
//         console.log(response.data);
//       }).catch(err => {
//         console.log('Repositório não existe');
//       })
//   }
// }

class Github {
  static async getRepositories(repo) {
    try {
      const url = `https://api.github.com/repos/${repo}`;
      const response = await axios.get(url);

      console.log(response.data);
    } catch (err) {
      console.warn('Repositório não existe');
    }
  }
}

Github.getRepositories('melkibalbino/drf-django-e-angular');
Github.getRepositories('rocketseat/dslkvmskv');
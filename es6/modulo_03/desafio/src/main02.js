import axios from 'axios';

// function getUserFromGithub(user) {
//     axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//             console.log(response.data);
//         }).catch(err => {
//             console.warn('Usuário não existe');
//         })
// }

async function getUserFromGithub(user) {
  try {
    const resp = await axios.get(`https://api.github.com/users/${user}`);

    console.log(resp);
  } catch (err) {
    console.warn('Usuário não existe');
  }
}


getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');
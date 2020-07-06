import api from './api';

class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById('repo-form');
    this.listEl = document.getElementById('repo-list');
    this.inputEl = document.querySelector('input[name=repository]');

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  async addRepository(event) {
    event.preventDefault();

    const repoInput = this.inputEl.value;

    if (repoInput.length === 0)
      return;

    this.setLoading();

    try {
      const response = await api.get(`${repoInput}`);

      // melkibalbino/avaliacao_perfil
      const { name, description, html_url, owner: { avatar_url } } = response.data;

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url
      });

      this.render();
    } catch (err) {
      alert('Repositorio não Encontrado!');
    }

    this.setLoading(false);

  }

  render() {
    this.listEl.innerHTML = '';

    this.repositories.forEach(repo => {

      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name));

      let descEl = document.createElement('p');
      descEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('target', '_blank');
      linkEl.setAttribute('href', repo.html_url);
      linkEl.appendChild(document.createTextNode('Acessar'));

      let itemEl = document.createElement('li');
      itemEl.appendChild(imgEl);
      itemEl.appendChild(titleEl);
      itemEl.appendChild(descEl);
      itemEl.appendChild(linkEl);

      this.listEl.appendChild(itemEl);
    });

  }

  setLoading(loading = true) {
    if (loading) {
      let loadingEl = document.createElement('span');
      loadingEl.setAttribute('id', 'loading');
      loadingEl.appendChild(document.createTextNode('Carregando...'));

      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById('loading').remove();
    }
  }
}

new App();
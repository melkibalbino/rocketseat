var inputElement = document.querySelector('#app input');
var listaElement = document.querySelector('#app ul');

function listarRepos() {
    var itemElement = document.createElement('li');
    var textElement = document.createTextNode('Carregando...');

    listaElement.innerHTML = '';

    itemElement.appendChild(textElement);
    listaElement.appendChild(itemElement);

    axios.get(`https://api.github.com/users/${inputElement.value}/repos`)
        .then(msg => { crearLista(msg.data) })
        .catch(err => {
            listaElement.innerHTML = '';
            alert('Usuario não encontrado!');
        })
}

function crearLista(lista) {
    listaElement.innerHTML = '';
    for (item of lista) {
        var itemElement = document.createElement('li');
        var textElement = document.createTextNode(item.name);

        itemElement.appendChild(textElement);
        listaElement.appendChild(itemElement);
    }
}
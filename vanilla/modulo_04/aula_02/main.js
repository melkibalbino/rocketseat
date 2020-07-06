var minhaPromise = function () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/melkibalbino');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro ao retornar!');
                }
            }
        }
    });
}

minhaPromise()
    .then(function (mensage) { console.log(mensage) })
    .catch(function (error) { console.warn(error) });
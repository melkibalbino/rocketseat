function checarIdade(idade) {
    return new Promise(function (resolve, reject) {
        if (idade >= 18) {
            setTimeout(resolve('Maior que 18'), 2000);
        } else {
            setTimeout(reject('Menor que 18'), 2000);
        }
    });
}

checarIdade(20)
    .then(function (msg) { alert(msg) })
    .catch(function (erro) { alert(erro) });
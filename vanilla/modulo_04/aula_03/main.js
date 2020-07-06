axios.get('https://api.github.com/users/melkibalbino')
    .then(function (mensage) { console.log(mensage) })
    .catch(function (error) { console.warn(error) });
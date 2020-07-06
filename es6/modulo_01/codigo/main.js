const usuario = {
  nome: 'Melki',
  sobrenome: 'Balbino',
  endereco: {
    rua: 'qualquer uma',
    numero: 169,
    cidade: 'Maceio'
  },
}

const { nome, ...resto } = usuario;

const arr = [1, 2, 3, 4, 5];

const [a, b, ...c] = arr;

console.log(nome);
console.log(resto);

console.log(a);
console.log(b);
console.log(c);

const usuario2 = { ...usuario, apelido: "Mycon" };

console.log(usuario2);
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

console.log(usuarios);

// Exercicio 2.1
const exec01 = usuarios.map(item => item.idade);
console.log('Exercicio 2.1 - Idades:');
console.log(exec01);

// Exercicio 2.2
const exec02 = usuarios.filter(
  item => item.empresa === 'Rocketseat' && item.idade >= 18);
console.log('Exercicio 2.2 - Trabalha na Rocketseat:');
console.log(exec02);

// Exercicio 2.3
const exec03 = usuarios.find(
  item => item.empresa === 'Google'
)
console.log('Exercicio 2.3 - Trabalha no Google:');
console.log(exec03);

// Exercicio 2.4
const exec04 = usuarios.map(item => {
  item.idade *= 2;
  return item;
}).filter(item => item.idade <= 50);

console.log('Exercicio 2.4 - União das operações:');
console.log(exec04);

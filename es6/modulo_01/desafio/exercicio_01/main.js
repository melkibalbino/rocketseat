class Usuario {

    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends Usuario {

    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}


const User1 = new Usuario('email@teste.com', 'senha123');
const Admin1 = new Admin('email@teste.com', 'senha123');


console.log(User1.isAdmin());
console.log(User1);

console.log(Admin1.isAdmin());
console.log(Admin1);
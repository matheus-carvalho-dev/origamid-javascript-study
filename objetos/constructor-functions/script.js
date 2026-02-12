// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar(){
//     console.log(this.nome + ' andou')
//   }
// }

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(`${this.nome} andou`);
  };
}

const joao = new Pessoa("João", 20)
const maria = new Pessoa("Maria", 25)
const bruno = new Pessoa("Bruno", 15)
joao.andar()
maria.andar()
bruno.andar()

function Dom(seletor){
  this.elemento = this
  this.elements = function(elemento){
    const elementosSelecionados = document.querySelectorAll(elemento)
    return(elementosSelecionados)

  }
  this.addClass = function(classe){
    elemento.classList.add(classe)
  }
  this.removeClass = function(classe){
    elemento.classList.remove(classe)
  }
}
const p = new Dom
p.elements()

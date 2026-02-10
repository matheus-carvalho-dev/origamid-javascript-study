const links = document.querySelectorAll("a");
function handleLink(event) {
  event.preventDefault();
  console.clear();
  links.forEach((link) => {
    if (link == this) {
      link.classList.add("ativo");
    } else {
      link.classList.remove("ativo");
    }
    console.log(link.classList);
  });
}
links.forEach((link) => {
  link.addEventListener("click", handleLink);
});



const elementos = document.querySelectorAll("body *");
elementos.forEach((elemento) => {
  function mostrarEDeletar() {
    console.log(elemento);
    elemento.remove(elemento);
  }
  elemento.addEventListener("click", mostrarEDeletar);
});


const html = document.querySelector("html")
function textoMaior(event){
    if(event.key === "t"){
        document.documentElement.classList.toggle('textoMaior')
        console.log("t clicado")
    }
}


window.addEventListener('keydown', textoMaior)


const imagens = document.querySelectorAll("img")
console.log(imagens)

const menosImagens = document.querySelectorAll("img[src^='img/imagem']")
console.log(menosImagens)

const links = document.querySelectorAll("a[href^='#']")
console.log(links)

const sessao = document.querySelector(".animalsDescription")
const titulo = sessao.querySelector("h2")
console.log(titulo.innerText)

const paragrafo = document.querySelector("p:last-of-type")
console.log(paragrafo.innerText)
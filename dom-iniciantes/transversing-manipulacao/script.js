const copy = document.querySelector("footer")
const menu = document.querySelector(".menu")
const menuCopia = menu.cloneNode(true)


copy.appendChild(menuCopia)


const primeiroDt = document.querySelector("dt")
const primeiroDd = primeiroDt.nextElementSibling

const faq = document.querySelector(".faq")
const animals = document.querySelector(".animals")

faq.innerHTML = animals.innerHTML
faq.style = animals.style


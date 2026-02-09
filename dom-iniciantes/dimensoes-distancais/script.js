const firstImg = document.querySelector("img")
const topo = firstImg.offsetTop
console.log(topo)

let somaImagens = 0
const imgs = document.querySelectorAll("img")
imgs.forEach((img)=>  {
    somaImagens = somaImagens += img. width})
console.log(`A largura total de todas as imagens é ${somaImagens}px`)

const links = document.querySelectorAll("a")
links.forEach((link)=>{
    if (link.height >= 48, link.width >= 48){
        console.log("É menor")
    }
    else{
        console.log("Tá do tamanho certo")
    }
})


const tamanhoBrowser = window.innerWidth
const menu = document.querySelector(".menu")
if(tamanhoBrowser < 720){
    menu.classList.add("menu-mobile")
}
console.log(menu.classList)
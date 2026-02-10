const firstImg = document.querySelector("img")
const topo = firstImg.offsetTop
console.log(topo)

function somaimagens(){
    let somaImagens = 0
    const imgs = document.querySelectorAll("img")
    imgs.forEach((img)=>  {
        console.log(img.offsetWidth)
        somaImagens = somaImagens += img.offsetWidth})
    console.log(`A largura total de todas as imagens é ${somaImagens}px`)
}
window.onload = function(){
    somaimagens()
}

const links = document.querySelectorAll("a")
links.forEach((link)=>{
    if (link.offsetHeight >= 48 && link.offsetWidth >= 48){
        console.log("Tá do tamanho certo")
    }
    else{
        console.log("É menor")
    }
})


const tamanhoBrowser = window.matchMedia('(max-width: 720px)').matches
const menu = document.querySelector(".menu")
if(tamanhoBrowser){
    menu.classList.add("menu-mobile")
}
console.log(menu.classList)
const menu = document.querySelectorAll(".menu ul, .menu li")
menu.forEach((item) => {
    item.classList.add ("Ativo")
    console.log(item.className)
})

menu.forEach((item, i) =>{
    if ([1, 2, 3, 4].includes(i)) {
        item.classList.remove("Ativo");
    }
})
console.log(document.querySelectorAll(".Ativo"))

const imgs = document.querySelectorAll("img")
imgs.forEach((img)=> {
    if (img.classList.contains("alt")){
    console.log(img.classList)
 }    else{
        console.log("Não tem")
    }})


const link = document.querySelector("a[href^='https']")
link.href = "https:outro"
console.log(link.href)
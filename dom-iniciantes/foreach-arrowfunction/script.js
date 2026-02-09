const paragrafos = document.querySelectorAll("p")
paragrafos.forEach((paragrafo)=> {
    console.log(paragrafo)
})


paragrafos.forEach((paragrafo)=> {
    console.log(paragrafo.innerText)
})


const imgs = document.querySelectorAll('img');


//Corrigir erros

//original
    imgs.forEach(item, index => {console.log(item, index)});
//correçao
    imgs.forEach((item, index) => {
        console.log(item, index);
    });


//original
    let i = 0;
    imgs.forEach( => {
        console.log(i++)
    });
//correçao
    let i = 0;
    imgs.forEach(() => {
        console.log(i++)
    });


//original
    imgs.forEach(() => i++)
//correçao
    imgs.forEach(() => {i++})
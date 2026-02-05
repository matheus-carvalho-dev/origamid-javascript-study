function verificador(valor){
    console.log(!!valor)
    if (valor){
    console.log("É true mermo")}
    else {
        console.log("Num é true não")
    }
}

console.log(verificador("0"))

function somaquadrado(lado){
    const somaquadrado = (lado * 4)
    return somaquadrado
}


console.log(somaquadrado (10))


function nomecompleto(nome, sobrenome){
    const nomecompleto = nome + " " + sobrenome
    return nomecompleto
}

console.log(nomecompleto("Matheus", "Carvalho"))


function parimpar(numero){
    const parimpar = numero % 2
    if (parimpar == 0){
        console.log("É poggers, é par")
    }
    else{
        console.log("Par num é não")
    }
}

console.log(parimpar(7))


function verificador2(testado){
    return !!testado
}

console.log(verificador2(0))

const nome = "Matheus"
const sobrenome = " Carvalho"
addEventListener('scroll', () => nomecompletoscroll(nome, sobrenome));

function nomecompletoscroll(nome, sobrenome ){
    var nomecompletin = nome + sobrenome
console.log(nomecompletin)
}


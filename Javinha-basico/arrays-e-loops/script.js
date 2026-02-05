var linhasDoTempo =[
{ nome: 'Alfa', divergencia: 0.13, perigo: true },
{ nome: 'Beta', divergencia: 1.13, perigo: false },
{ nome: 'Omega', divergencia: 3.50, perigo: true }
];

var somaDivergencia = 0;

linhasDoTempo.forEach(linha =>{
    if (linha.perigo == true){
       var resultado = linha.divergencia * 2
       somaDivergencia += resultado;}
    else{
        somaDivergencia += linha.divergencia
    }
},
);

verificacao = function(somaDivergencia){
    if (somaDivergencia > 5){
        console.log("ERRO! Ativar salto temporal imediatamente!")
    }

    else {
        console.log("Abaixo de 1%. Estamos na Steins Gate!")

    }

}

verificacao()
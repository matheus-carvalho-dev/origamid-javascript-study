var eu = {
    nome: "Matheus",
    sobrenome: "Carvalho",
    idade: 19,
    time: "Vasco",
    status: "Pobre",
    nomecompleto(){
        var nomecompletin = this.nome + " " + this.sobrenome
        return nomecompletin
    }
}

console.log(eu.nomecompleto())


var cachorro ={
    apelido: "rocky",
    raca: "labrador",
    cor: "preto",
    idade: 10,
    
    latido(sexo){
        if(sexo == "homem")
            console.log("AU AU AU AU AU")
        else
        console.log("silencio")
    }


}



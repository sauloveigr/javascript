let amigo = {
    nome: 'Saulo',
    sexo: 'M',
    peso: 55,
    engordar(p=0) {
        console.log(`Engordou ${p}Kgs.`)
        this.peso += p // this = auto referĂȘncia ao objeto
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)


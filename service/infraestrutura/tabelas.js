class candidato {
    init(conexao)  {
        this.conexao = conexao

        this.criarCandidato()
    
    }

    criarCandidato() {
        const sql = "CREATE TABLE IF NOT EXISTS Candidatos (nome varchar(15) NOT NULL, idade int NOT NULL)"

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log("Tabela criada")
            }
        })        
    }
}

module.exports = new candidato
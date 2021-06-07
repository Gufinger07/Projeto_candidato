const conexao = require("../infraestrutura/conexao")

class Candidato {
    adiciona(nome, idade, res) {
        const sql = `INSERT INTO candidatos(nome, idade) VALUES("${nome}","${idade}")`
        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }
}
const customExpress = require("./service/config/customExpress")
const conexao = require("./service/infraestrutura/conexao")
const Tabelas = require("./service/infraestrutura/tabelas")
conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
        Tabelas.init(conexao)
        const app = customExpress()

        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})



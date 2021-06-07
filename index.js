const express = require("express")
const app = express()

app.use(express.static("client"))

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/client/pages/home.html")
})


app.listen(3008, () => {
    console.log("Servidor rodando na porta http")
})
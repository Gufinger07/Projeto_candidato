const express = require("express")
const path = require("path")
const app = express()


app.get("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "client/pages/home.html"))
})

app.listen(3008, () => {
    console.log("Servidor rodando na porta http")
})
$("#botao-submit").on("click",function(e) {
    e.preventDefault()
    var corpoTabela = $("#lista").find("tbody")
    var nomeForm = $("#nome_form").val()
    var idadeForm = $("#idade_form").val()
    var linha = novaLinha(nomeForm, idadeForm)
    
    corpoTabela.append(linha)
    linha.find(".botao-remover").click(removeLinha)
})



function removeLinha(e) {
    e.preventDefault()
    var linhaRemovida = $(this).parent().parent()
    linhaRemovida.fadeOut(1000)
    setTimeout(function() {
        linhaRemovida.remove()
    }, 1000)
}


    

function novaLinha(nome, idade) {
    var linha = $("<tr>")
    var colunaNome = $("<td>").text(nome)
    var colunaIdade = $("<td>").text(idade)
    var colunaEditar = $("<td>")
    var colunaRemover = $("<td>")
    
    var linkEditar = $("<a>").addClass("botao-editar").attr("href","#")
    var iconeEditar = $("<i>").addClass("material-icons").text("edit")

    var linkRemover = $("<a>").addClass("botao-remover").attr("href","#")
    var iconeRemover = $("<i>").addClass("material-icons").text("delete")

    linkEditar.append(iconeEditar)
    linkRemover.append(iconeRemover)

    colunaEditar.append(linkEditar)
    colunaRemover.append(linkRemover)

    linha.append(colunaNome)
    linha.append(colunaIdade)
    linha.append(colunaEditar)
    linha.append(colunaRemover)

    return linha
}


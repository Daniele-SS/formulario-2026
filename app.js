'use strict'

function getDadosCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`
}

function preencherFormulario() {
    const cep = document.getElementById('cep').value
    const dadosCep = getDadosCep(cep)
}

document.getElementById('cep').addEventListener('focusout', preencherFormulario)
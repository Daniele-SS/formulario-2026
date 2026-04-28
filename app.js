'use strict'

//Função assíncrona
async function getDadosCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function preencherFormulario() {
    const cep = document.getElementById('cep').value
    const dadosCep = await getDadosCep(cep)
    document.getElementById('endereco').value = dadosCep.logradouro
}

document.getElementById('cep').addEventListener('focusout', preencherFormulario)
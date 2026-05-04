'use strict'

//Função assíncrona
async function getDadosCep(cep) {
    const url       = `https://brasilapi.com.br/api/cep/v2/${cep}`
    const response  = await fetch(url)
    const data      = await response.json()

    return data
}

async function preencherFormulario() {
    const cep = document.getElementById('cep').value
    const dadosCep = await getDadosCep(cep)
    
    document.getElementById('endereco').value = dadosCep.street 
    document.getElementById('bairro').value   = dadosCep.neighborhood
    document.getElementById('cidade').value   = dadosCep.city
    document.getElementById('estado').value   = dadosCep.state 
}

document.getElementById('cep').addEventListener('focusout', preencherFormulario)
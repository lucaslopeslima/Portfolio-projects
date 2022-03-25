// Carne -400g por pessoa  +de 6h -650g
// Cerveja - 1200ml por pessoa   +de 6h - 2000ml
// Refrigerante/água - 1000,l por pessoa +de 6h - 1500ml

// Crianças valem por meia (0,5) pessoa


//Churrascômetro 
// Comes & Bebes

//Comes: Carnes, Queijos, pão de Alho, linguiça
//Bebes: Cerveja, Refrigerante ou Sucos
//Background Parallax


let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

function calcular(){
    console.log('calculando')

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let petiscos = entradaPP(duracao) * adultos + (entradaPP(duracao) / 2 * criancas)
    let totalcarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    let totalcervejas = cervejaPP(duracao) * adultos
    let totalbebidas = bebidasPP(duracao) * criancas

    resultado.innerHTML = `<p class="para text">Entradas e petiscos:</p>
    <span class="text">${(petiscos / 50) / 2} unidade(s) de Pão de Alho</span>
    <span class="text">${Math.round(petiscos / 4) + 50}g de Queijo Coalho</span>
    <span class="text">${petiscos} g de Farofa</span>`

    resultado.innerHTML += `<p class="para text">${totalcarne / 1000}Kg de Carnes, sendo:</p>   
    <span class="text">${(totalcarne * 0.2)}g de Linguiça suína ou frango</span>
    <span class="text">${(totalcarne * 0.4) / 1000}Kg de Carne com Osso</span>
    <span class="text">${(totalcarne * 0.4) / 1000}Kg de Carne sem Osso</span>`
    
    resultado.innerHTML += `<p class="para text">${totalcervejas / 1000}L de Cerveja</p>`
    
    resultado.innerHTML += `<p class="para text">${totalbebidas / 1000}L de bebidas diversas</p>`
}

function entradaPP(duracao){
    if (duracao >= 6) {
        return 250
    } else {
        return 200
    }
}

function carnePP(duracao){
    if (duracao >= 6) {
        return 550
    } else {
        return 300
    }
}

function cervejaPP(duracao){
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}
function bebidasPP(duracao){
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}
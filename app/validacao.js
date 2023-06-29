function verificaSeOChutePossuiUmValorValido(chute) {

    const numero = +chute
    
    if (chute.toLowerCase() == "game over") {
        document.body.innerHTML = 
        `<h2>Game Over</h2>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar novanente</button>
        `
        document.body.style.backgroundColor = "#455A64"
    }

    if (chute.toLowerCase() == "morgana") {
        document.body.innerHTML = 
        `<h2>Oi, Amor 🥰</h2>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar novanente</button>
        `
        document.body.style.backgroundColor = "#F48FB1"
    }

    if (chute.toLowerCase() == "bebel") {
        document.body.innerHTML = 
        `<h2>Princesa do papai 🥰</h2>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar novanente</button>
        `
        document.body.style.backgroundColor = "#F06292"
    }



    if (chuteForInvalido(numero)) {
       elementoChute.innerHTML += `<div>Valor inválido</div>`
       return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div> Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor} </div>`
        return
    }
    
    if (numero === numeroSecreto) {
        document.body.innerHTML = 
         `<h2>Você acertou!</h2>
         <h3>O número secreto era ${numeroSecreto}</h3>
         
         <button id="jogar-novamente" class="btn-jogar">Jogar novanente</button>
         `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O numero secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O numero secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>  {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
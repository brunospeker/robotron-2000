/* Aula 2
const robotron = document.querySelector("#robotron")

//robotron.addEventListener("click", dizOi)

//exemplo de função anônima
//*robotron.addEventListener("click", function(){
//	console.log("Função anonima funcionou")
//})

//exemplo de função anônima com setas (ArrowFunction)
//robotron.addEventListener("click", () =>{
//	console.log("Função anonima funcionou")
//})

//exemplo para identificar tudo que aconteceu durante o evento
robotron.addEventListener("click", (evento) =>{
	console.log(evento)
})


//passou um texto para a função
function dizOi(nome) {
    console.log('oi, '+nome)
}

dizOi() //iniciou a função diretamente

*/
/* Aula 3
const braco = document.querySelector("#braco")
const somar = document.querySelector("#somar")
const subtrair = document.querySelector("#subtrair")
const controle = document.querySelectorAll(".controle-ajuste")

//Iteração dos elementos e refatoração da função
controle.forEach( elemento => {
	elemento.addEventListener("click", (evento) => {
		manipulaDados(evento.target.textContent) //pega o texto dentro do elemento
	})
})

function manipulaDados(operacao) {
    if(operacao === "-") {
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}
*/
/* Aula 4
const controle = document.querySelectorAll("[data-controle]")

//Iteração dos elementos e refatoração da função
controle.forEach( elemento => {
	elemento.addEventListener("click", (evento) => {
		manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
	})
})

function manipulaDados(operacao, controle) {
	const peca = controle.querySelector("[data-contador]")
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}*/

// Aula 5
const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

//Iteração dos elementos e refatoração da função
controle.forEach( elemento => {
	elemento.addEventListener("click", (evento) => {
		manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
		atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle)
	})
})

function manipulaDados(operacao, controle) {
	const peca = controle.querySelector("[data-contador]")
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca, operacao) {
    if(operacao === "+") {
        estatistica.forEach( (elemento) => {
          elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        })
      } else {
        estatistica.forEach( (elemento) => {
          elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        })
      }
}

function trocaImagem(cor){
   robo = document.querySelector(".robo").src="img/Robotron 2000 - " + cor + "/robotron.png";
}
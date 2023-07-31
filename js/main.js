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
// Aula 3
const braco = document.querySelector("#braco")
const somar = document.querySelector("#somar")
const subtrair = document.querySelector("#subtrair")
const controle = document.querySelectorAll(".controle-ajuste")

//Iteração dos elementos e refatoração da função
controle.forEach( elemento => {
	elemento.addEventListener("click", (evento) => {
		manipulaDados(evento.target.textContent)
	})
})

function manipulaDados(operacao) {
    if(operacao === "-") {
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}

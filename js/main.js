const robotron = document.querySelector("#robotron")

//robotron.addEventListener("click", dizOi)

//exemplo de função anônima
/*robotron.addEventListener("click", function(){
	console.log("Função anonima funcionou")
})*/

//exemplo de função anônima com setas (ArrowFunction)
/*robotron.addEventListener("click", () =>{
	console.log("Função anonima funcionou")
})*/

//exemplo para identificar tudo que aconteceu durante o evento
robotron.addEventListener("click", (evento) =>{
	console.log(evento)
})


//passou um texto para a função
function dizOi(nome) {
    console.log('oi, '+nome)
}

dizOi() //iniciou a função diretamente
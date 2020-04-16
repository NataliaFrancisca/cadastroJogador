var buttonPesquisa = document.querySelector("#botao-pesquisa");
var formPesquisa = document.querySelector(".componentes-pesquisa");

buttonPesquisa.addEventListener("click", function(){
  formPesquisa.classList.toggle(("display"));
});

var campoNome = document.querySelector("#nomePesquisa");

// var campoIdade = document.querySelector("#idadePesquisa");
// var campoNivel = document.querySelector("#nivelPesquisa");

campoNome.addEventListener("input", function(){
var jogadores = document.querySelectorAll(".jogador");
    
    if(this.value.length > 1){

    for (var i = 0; i <jogadores.length; i ++){
    	var jogador = jogadores[i];
    	var tdNome = jogador.querySelector(".nome");
    	var nome = tdNome.textContent;
    	var expressao = new RegExp(this.value,"i"); // filtra pelas primeiras letras digitadas

    	if(!expressao.test(nome)){
    		jogador.classList.add("invisivel");
    	}
      else{
    		jogador.classList.remove("invisivel");
    	}
    }

   }else{
   	for (var i =0; i < jogadores.length; i++){
   		var jogador = jogadores[i];

   		jogador.classList.remove("invisivel");

   	}
   	}
   });
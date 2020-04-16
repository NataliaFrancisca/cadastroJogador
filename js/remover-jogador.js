var tabela = document.querySelector(".lista-jogadores");

tabela.addEventListener("dblclick",function(event){
 event.target.parentNode.classList.add("fadeOut");
 
 setTimeout(function(){
 	 event.target.parentNode.remove(); // remove o elemento em 5 segundos
 	},500 );
});



function validacao() {
    event.preventDefault();
    var formulario = document.getElementById("register");
    var nome = formulario.nome;
    var nivel = formulario.nivel;
    var idade = formulario.idade;

    if (nome.value == "" || nome.value.length <3) {
        alert("Insira um nome válido.");
        nome.focus();
        nome.classList.add("erro");
        return false;
    }

    else{
        nome.classList.remove("erro");
    }

    if (idade.length = 0 || idade.value <10 ) {
        alert("Idade minima de 10 anos.");
        idade.focus();
        idade.classList.add("erro");
        return false;
    }

    else{
        idade.classList.remove("erro");
    }

     if (nivel.value == "" || nivel.value <=0 || nivel.value >5) {
        alert("Digite um nivel entre 1-5.");
        nivel.focus();
        nivel.classList.add("erro");
        return false;
    }

    else{
        nivel.classList.remove("erro");
    }

     

    if(formulario = false){
    	return;
    }

    if(formulario = true){
        alert("Cadastro com sucesso");
        adicionaJogador();
        nome.value = "";
        idade.value = "";
        nivel.value = "";
        nome.focus();

  }
}

function adicionaJogador(){
  event.preventDefault();

  var form = document.getElementById("register");
   
  var jogador = {
  nome: form.nome.value,
  idade: form.idade.value,
  nivel: form.nivel.value
  }

  var jogadorTr = montaTr(jogador);
  var tabela = document.querySelector(".lista-jogadores");
  tabela.appendChild(jogadorTr);

  function montaTr(){
    var jogadorTr = document.createElement("tr");
    jogadorTr.classList.add("jogador");

    jogadorTr.appendChild(montaTd(jogador.nome, "nome"));
    jogadorTr.appendChild(montaTd(jogador.idade, "idade"));
    jogadorTr.appendChild(montaTd(jogador.nivel, "nivel"));

    return jogadorTr;
}

  function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
    }
 }
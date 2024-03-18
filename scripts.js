
var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");
 
var saida = document.getElementById("saida-de-dados");
 
var email = document.getElementById("email");

var cpf = document.getElementById("cpf");

var fone = document.getElementById("fone");

var logradouro = document.getElementById("logradouro");

var casa = document.getElementById("casa");
 
var complemento = document.getElementById("complemento");

var bairro = document.getElementById("bairro");

var estado = document.getElementById("cidade");

var estado = document.getElementById("estado");
function alertar(){
    //alert(nome.value + " " + "clicou no botão!!!");
    saida.innerText = "Nome: " + " " + nome.value +
                "\nE-mail: " + " " + email.value + 
                "\ncpf: " + " " + cpf.value +
                "\nfone: " + " " + fone.value + 
                "\nlogradouro: " + " " + logradouro.value +
                "\ncomplemento: " + " " + complemento.value +
                "\nbairro: " + " " + bairro.value +
                "\ncidade: " + " " + cidade.value +
                "\nestado: " + " " + estado.value; 
 
                
 
 



                
            
}
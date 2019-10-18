function botao(){
    alert("Obrigado por clicar");
    document.getElementById("clique").innerHTML = "<i>Obrigado Por Clicar</i>";

}

function redirecionar(){
    window.open("https://www.google.com.br");
    window.location.href = "https://www.google.com.br";
}

function trocar(elemento){
    elemento.innerHTML = "Novo Texto";
    //document.getElementById("porcima").innerHTML = "Novo Texto";
    //alert("trocar o texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("porcima").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }
    else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade: ");
alert(validaIdade(idade));
/*var d = new Date();
alert(d.getFullYear());
*/

/*var count;

for(count = 0; count <= 5; count++) alert(count);
var count = 0;

while( count <= 5){
    console.log(count);
    count++;
}

var idade = prompt("Qual a sua idade");
if (idade >= 18)  alert("maior de idade");
else alert("menor de idade");


var lista = [{nome:"maça", cor:"vermelha", tipo:"fruta"}, {nome: "pera", cor: "verde", tipo: "fruta"}];

console.log(lista);
alert(lista[1].nome);

lista.push("uva");

console.log(lista.toString());
console.log(lista.join(" - "))



var nome = "Kelvin pereira";
var idade = 23;
var idade2 = 30;
alert("Meu primeiro JS, Bem vindo " + nome);
alert(idade+idade2);

console.log(nome.replace("pereira", "Silva"));*/
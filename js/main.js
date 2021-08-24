function clicou(){
    //alert("Obrigado por clicar!");
    document.getElementById("agradecimento").innerHTML ="<b>Obrigado por clicar!!</b>";
   // console.log(document.getElementById("agradecimento"));

}
function redirecionar(){
   // window.open("https://web.digitalinnovation.one/"); abre em outra aba
    window.location.href = "https://web.digitalinnovation.one/";//abre na mesma aba
}
function trocar(elemento){
    elemento.innerHTML ="Obrigado por passar o mouse!!";
    // document.getElementById("mousemove").innerHTML ="Obrigado por passar o mouse!!";
    //alert("trocar texto");
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML ="Passe o mouse aqui";
}

function load(){
    alert("página carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*function soma(n1, n2){
    return n1 + n2;
}*/
//function setReplace(frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome);
//}
//alert(setReplace("Vai Japão", "Japão", "Alemanha"));


// var validar; variável global
/*function validaIdade(idade){
    var validar;// variável local, se não colocar var na local, será chamada a variável global
    if(idade>=18){
        validar = true

    }else{
        validar=false
        
    }
    return validar;
    
}
*/
//var idade = prompt("Qual a sua idade?");
//console.log(validaIdade(idade));

//var d = new Date();
//alert(d);
//alert(d.getDate());
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getMinutes());
//alert(d.getMonth()+1);// tem que colocar +1 sen]ao ele colocará mês 7 e estamos no mês 8
/*
var count;
for(count=0; count <=5; count ++){
    alert(count);
}
*/
//var count= 0;
//while(count <= 5){
   // console.log(count);
   // alert(count);
   // count ++;
//};
/*
var idade = prompt("Qual a sua idade?");
var idade = 18;
if(idade >= 18){;// se nao colocar o == irá imprimir menor de idade....
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

//var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
//console.log(frutas);
//alert(frutas[1].nome);
//var fruta = {nome:"maçã", cor: "vermelha"}
//console.log(fruta.nome);
//alert(fruta.cor);
//var lista = ["maçã", "pêra", "laranja"];
//lista.push ("uva");//colocar a uva na lista.
//console.log(lista);
//lista.pop("uva");//retirar a uva da lista.
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join('|'));
//alert(lista[1]);
//var nome = "Ana Claudia Vilaronga Moretti";
//var idade =47;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo!!"
//alert(" Bem vinda "+ nome);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Alemanha"));
//console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Alemanha"))
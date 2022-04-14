'use strict'
const mussarela = document.getElementById("mussarela");
const calabresa = document.getElementById("calabresa");
const margerita = document.getElementById("margerita");
const env = document.getElementById("enviar");
const est = document.getElementById("estorno");
const pla = document.getElementById("btplanilha");

 pla.addEventListener("click",enviar);

 function enviar(){
    TableToExcel.convert(document.getElementById("table"));
 }

var cCalabresa = 0
var acCalabresa = 0.0
var cMussarela = 0
var acMussarela = 0.0
var cMargerita = 0
var acMargerita = 0.0

env.addEventListener("click",vender);

function vender(){
    if(mussarela.checked){
        cMussarela++;
        acMussarela += 30.99
        document.getElementById("quantidadem").innerHTML = cMussarela;
        document.getElementById("somam").innerHTML = "R$"+acMussarela.toFixed(2);
    }else if(calabresa.checked){
        cCalabresa++;
        acCalabresa += 22.80
        document.getElementById("quantidadec").innerHTML = cCalabresa;
        document.getElementById("somac").innerHTML = "R$"+acCalabresa.toFixed(2);

    }else{
        cMargerita++;
        acMargerita += 25.99
        document.getElementById("quantidadema").innerHTML = cMargerita;
        document.getElementById("somama").innerHTML = "R$"+acMargerita.toFixed(2);
    }
}
est.addEventListener("click",estornar);

function estornar(){
    if(mussarela.checked){
        if(cMussarela > 0){
        cMussarela--;
        acMussarela -= 30.99
        document.getElementById("quantidadem").innerHTML = cMussarela;
        document.getElementById("somam").innerHTML = "R$"+acMussarela.toFixed(2);
        }
    }else if(calabresa.checked){
        if(cCalabresa > 0){
        cCalabresa--;
        acCalabresa -= 22.80
        document.getElementById("quantidadec").innerHTML = cCalabresa;
        document.getElementById("somac").innerHTML = "R$"+acCalabresa.toFixed(2);
        }

    }else{
        if(cMargerita > 0){
        cMargerita--;
        acMargerita -= 25.99
        document.getElementById("quantidadema").innerHTML = cMargerita;
        document.getElementById("somama").innerHTML = "R$"+acMargerita.toFixed(2);
    }
}
}
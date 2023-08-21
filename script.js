const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const resultado= document.querySelector("#rest");

const somar = document.querySelector("#soma");
const subtrair = document.querySelector("#subtracao");
const dividir = document.querySelector("#divisao");
const multiplicar = document.querySelector("#multiplicacao");

somar.addEventListener("click", function(){
    resultado.innerHTML = Number(n1.value) + Number(n2.value)
});

subtrair.addEventListener("click", function(){
    resultado.innerHTML = Number(n1.value) - Number(n2.value)
});

dividir.addEventListener("click", function(){
    resultado.innerHTML = Number(n1.value) / Number(n2.value)
});

multiplicar.addEventListener("click", function(){
    resultado.innerHTML = Number(n1.value) * Number(n2.value)
});

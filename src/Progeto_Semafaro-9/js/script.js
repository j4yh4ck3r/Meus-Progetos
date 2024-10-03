const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

const on = document.querySelector("#on");

on.addEventListener("click", onligar);

function onligar() {
    console.log("Semafaro Ligado");
    setInterval(function () {
        console.log("iniciou");
        setTimeout(() => {
            red.style.backgroundColor = "red";
        }, 50000);

        setInterval(() => {
            red.style.backgroundColor = "black";
        }, 60000);

        setTimeout(() => {
            yellow.style.backgroundColor = "yellow";
        }, 30000);

        setInterval(() => {
            yellow.style.backgroundColor = "black";
        }, 49999);

        setTimeout(() => {
            green.style.backgroundColor = "green";
        }, 10000);

        setInterval(() => {
            green.style.backgroundColor = "black";
        }, 29999);
    }, 70000);
};


const title =  document.querySelector("#titulo")

const button = document.querySelector(".botao")

button.addEventListener("click",
    function () {
       if( title.textContent === "Olá,mundo!") {
title.textContent = "Você clicou no botão!"
       }
       else {
       title.textContent = "Olá,mundo!"}

       
    }
)



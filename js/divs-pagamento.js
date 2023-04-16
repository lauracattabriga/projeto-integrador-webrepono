/********************* Divs de Pagamento *********************/
const divPag = document.querySelector("#cardPagBox");
const paga = document.querySelector("#button-user-f"); 
const cart = document.querySelector(".container-pess-3")

paga.addEventListener('click', function() { 

    if(divPag.style.display === "block" && cart.style.display === "block") {

        divPag.style.display = "none"
        cart.style.display = "none"

    } else {

        divPag.style.display = "block"
        cart.style.display = "block"

    }

})
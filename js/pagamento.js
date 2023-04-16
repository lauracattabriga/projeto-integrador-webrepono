/********************* Modais de Pagamento *********************/
// Modal do cartão de crédito
const openModalButton = document.querySelector("#cardCredit");
const closeModalButton = document.querySelector("#close-modal");

// Objeto modal
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

//Modal do pix
const openPix = document.querySelector("#pixPag");
const closePix = document.querySelector("#pixCloseModal");

// Objeto modal pix
const modalPix = document.querySelector("#modalPix");
const fadePix = document.querySelector("#fadePix");

// modal do boleto bancário

const openBol = document.querySelector("#bolPag")
const bolClose = document.querySelector("#bolCloseModal");


//Objeto do boleto bancário 

const modalBol = document.querySelector("#modalBol");
const fadeBol = document.querySelector("#fadeBol");




// Abrir/fechar o modal
const toggleModal = () => {

    [modal, fade].forEach((el) => el.classList.toggle("hide"));


};


[openModalButton, closeModalButton, fade].forEach((el) => {

    el.addEventListener("click", () => toggleModal());
    
});

const toggleModalPix = () => {

    [modalPix, fadePix].forEach((pix) => pix.classList.toggle("hide"));


};

[openPix, closePix, fadePix].forEach((pix) => {

    pix.addEventListener("click", () => toggleModalPix());
    
});



const toggleModalBol = () => {

    [modalBol, fadeBol].forEach((bol) => bol.classList.toggle("hide"));


};

[openBol, bolClose, fadeBol].forEach((bol) => {

    bol.addEventListener("click", () => toggleModalBol());
    
});



/********************* Imprimir Boleto *********************/
var el = document.querySelector('#imprimir');
el.addEventListener('click', function(e){
    e.preventDefault();      // impedir que o link seja seguido imediatamente
    var href = this.href;    // colocar em cache o url
    self.print();            // imprimir
    window.location.href = href;  // ir para nova página
});






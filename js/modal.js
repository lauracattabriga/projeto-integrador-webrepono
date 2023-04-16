//Traz o modal
var modal = document.getElementById("myModal");

//Traz o botão que abre o modal
var btn = document.getElementById("user");

//Traz o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

//Quando o usuário clica no botão, abre o modal
btn.onclick = function() {
    modal.style.display = "block"
}

//Quando o usuário clica no <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

//Quando o usuário clicar em qualquer lugar fora do modal, vai fechá-lo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

//Mostra os fieldsets do modal
function showFieldset(fieldsetToShow, fieldsetToHide) {
    fieldsetToShow = document.getElementById(fieldsetToShow);
    fieldsetToHide = document.getElementById(fieldsetToHide);

    var userInput = fieldsetToShow.querySelector("input");

    fieldsetToShow.classList.add("show_fieldset");
    fieldsetToHide.classList.remove("show_fieldset");

    setTimeout(function() {
        userInput.focus();
    }, 500);
}

//Função de login
function logar() {
    var login = document.getElementById('email').value;
    var senha = document.getElementById('senha2').value;

    if(login == "admin@repono.com" && senha == "admin") {
        alert('Sucesso');
        modal.style.display = "none";
    }
    else {
        alert('Usuário ou senha incorretos')
    }
}
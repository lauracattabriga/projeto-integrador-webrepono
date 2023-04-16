// Ícone de abrir o menu
const openMenu = document.querySelector('#show-menu');
// Ícone de fechar o menu
const hideMenuIcon = document.querySelector('#hide-menu');
// Parte do menu que deve aparecer na lateral
const sideMenu = document.querySelector('#nav-menu');

// Adiciona a classe .active para abrir o menu lateral
openMenu.addEventListener('click', function() {
    sideMenu.classList.add('active');
});

// Remove a classe .active para fechar o menu lateral
hideMenuIcon.addEventListener('click', function() {
    sideMenu.classList.remove('active');
});

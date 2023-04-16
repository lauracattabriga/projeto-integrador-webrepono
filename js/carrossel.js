// Seleciona o container dos produtos
const productContainers = [...document.querySelectorAll('.product-container')];
// Seleciona o botão de próximo
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
// Seleciona o botão de anterior
const preBtn = [...document.querySelectorAll('.pre-btn')];

// Para cada item do container de produtos
productContainers.forEach((item, i) => {
    // Dimensões do container = item
    let containerDimensions = item.getBoundingClientRect();
    // Largura do container = largura das dimensões do container
    let containerWidth = containerDimensions.width;

    // Ao clicar no botão de próximo, passa para frente
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    // Ao clicar no botão de anterior, passa para trás
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})



const product = [
    {
        id: 0,
        image: 'img/blusa-feminina.jpg',
        title: 'Blusão UNITY listrado',
        price: 'R$20.00',
    },
    {
        id: 1,
        image: 'img/blusa_verde.jpg',
        title: 'Camisa de praia verde',
        price: 'R$20.00',
    },
    {
        id: 2,
        image: 'img/calça-preta.jpg',
        title: 'Calça preta com branco',
        price: 'R$20.00',
    },
    {
        id: 3,
        image: 'img/short-dinz.jpg',
        title: 'Short dinz',
        price: 'R$20.00',
    },
    {
        id: 4,
        image: 'img/conjunto_amarelo.jpg',
        title: 'Conjunto amarelo e branco',
        price: 'R$20.00',
    },
    {
        id: 5,
        image: 'img/saia.jpg',
        title: 'Saia Dinz',
        price: 'R$20.00',
    },
    {
        id: 6,
        image: 'img/blusa-feminina3.jpg',
        title: 'Cropped Beje com ziper',
        price: 'R$20.00',
    },
    {
        id: 7,
        image: 'img/blusa-feminina2.jpg',
        title: 'Blusão Intense Cinza',
        price: 'R$20.00',
    },
    {
        id: 8,
        image: 'img/blusa-beje.jpg',
        title: 'Blusão marrom claro',
        price: 'R$20.00',
    },
    {
        id: 9,
        image: 'img/blusa-branca.jpg',
        title: 'Blusa Brooklyn branca',
        price: 'R$20.00',
    },
]; 

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('pesquisa').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price } = item;
        return (
             `<!--Card dos produtos-->
                 <div class="product-card">
                     <!--Imagem dos produtos-->
                    <div class="product-image">
                        <!--Thumb / foto do produto-->
                        <img class="product-thumb produto-img" src=${image} alt="imagem 1">
                        <section class="shopp container">
                             <!--Conteudo-->
                             <div class="conteudo-loja">
                                 <!--Caixa 1-->
                                 <div class="produto-box">
                                     <h2 class="produto-titulo">${title}</h2>
                                     <span class="preco">${price}</span>
                                 </div>
                             </div>
                         </section>
                        <!--Botão de adicionar a lista de desejos-->
                        <button class="card-btn add-carrinho">Adicionar a sacola</button>
                    </div>
                    <!--Informações do produto-->
                    <div class="product-info">
                        <!--Descrição do produto-->
                        <p class="product-short-description">${title}</p>
                        <!--Preço com desconto-->
                        <span class="price">${price}</span>
                    </div>
                </div>`
        )
    }).join('')
};
displayItem(categories);



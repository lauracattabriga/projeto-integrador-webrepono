/******************Função de trocar as imagens*************/

function trocar(imgs) {
    var imgPrincipal = document.getElementById("myImg"); //Busca a imagem principal
    imgPrincipal.src = imgs.src; //Coloca a src como a da imagem que passou o mouse
    imgPrincipal.parentElement.style.display = "block" //Display block na imagem principal
}


/***********Função de dar zoom na imagem***************/

const container = document.getElementById("container"); //Busca a div da imagem
const img = document.getElementById("myImg"); //Busca a imagem

container.addEventListener("mousemove", onZoom); //Dá o zoom
container.addEventListener("mouseover", onZoom); //Dá o zoom
container.addEventListener("mouseleave", offZoom); //Tira o zoom

/*Função de dar o zoom*/
function onZoom(e) {
    const x = e.clientX - e.target.offsetLeft; //Armazena o x
    const y = e.clientY - e.target.offsetTop; //Armazena o y
    img.style.transformOrigin = `${x}px ${y}px`; //Localiza o x e o y do mouse na imagem
    img.style.transform = "scale(2.0)"; //Aumenta a escala da imagem em 2.0x
}

/*Função de tirar o zoom*/
function offZoom(e) {
    img.style.transformOrigin = `center center`; //Volta a imagem ao normal
    img.style.transform = "scale(1)"; //Volta a escala normal da imagem
}

function myFunction() {
        
    var moreText = document.getElementById("mais");
    var btnText = document.getElementById("myBtn");
  
    if (moreText.style.display === "none") {
      btnText.innerHTML = "-"; 
      moreText.style.display = "inline";
    } 
    else {
      btnText.innerHTML = "+"; 
      moreText.style.display = "none";
    }
}

/******************* Ínicio Cabeçalho *******************/
function myHeader() {
  var t = document.getElementById("myTopnav");
  if (t.className === "topnav") {
    t.className += " responsive";
  } else {
    t.className = "topnav";
  }
}
/******************* Fim Cabeçalho *******************/
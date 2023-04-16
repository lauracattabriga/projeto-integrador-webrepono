// /********************* Função do menu abrir links no lugar certo (abaixo do cabeçalho fixo) *********************/

// // Aqui nós estaremos realizando o scroll da página para 45px acima
// // de onde ela está atualmente
// function offsetAnchor() {
//     if (location.hash.length !== 0) {
//       window.scrollTo(window.scrollX, window.scrollY - 45);
//     }
//   }
  
//   // Aqui estou adicionando um listener à todos elementos <a> que
//   // redirecionam para algum link que comece com #. Você pode criar uma 
//   // classe ou aplicar à elementos específicos.
//   document.querySelectorAll('.descer').forEach(el => {
//     el.addEventListener("click", function() {
    
//       window.setTimeout(function() {
//         // O clique é capturado antes da mudança do #, então
//         // o timeout faz com que esse código seja executado
//         // apenas após a rolagem do redirecionamento ser executada
//         offsetAnchor();
//       }, 0);
  
//     });
//   })
  
//   // Definimos o offset inicial caso a página aberta já esteja indo para um #elemento
//   window.setTimeout(offsetAnchor, 0);
/********************* API do CEP *********************/
let cepUser = document.querySelector('#cepUser');
let cepBusca = document.querySelector('#cepBuscaUser');
let numberHome = document.querySelector("#numberHome");
let infoHome = document.querySelector("#infoHome");

let numeroCasa = numberHome.value;

cepUser.addEventListener('blur', function(e) {

    let cepUser = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cepUser+'/json/?callback=popularForm';

    document.body.appendChild(script);


});

function popularForm (resposta) {

    console.log(numeroCasa);
    
    cepBusca.value = resposta.logradouro + ", " + numeroCasa + resposta.bairro + ", " + resposta.localidade + ", " + resposta.uf;

};
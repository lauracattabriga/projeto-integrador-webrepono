// Variável estado = falso
var state = false;

//Função 
function toggle(){
    // Quando estado = falso → senha escondida e olho comum
    if(state){
	document.getElementById("senha").setAttribute("type","password");
	document.getElementById("olho").innerHTML = "visibility";
	state = false;
     }
     // Quando estado = verdadeiro → senha à mostra e olho riscado
     else{
	document.getElementById("senha").setAttribute("type","text");
	document.getElementById("olho").innerHTML = "visibility_off";
	state = true;
     }
}


// Variável estado = falso
var state2 = false;

//Função 
function toggle2(){
    // Quando estado = falso → senha escondida e olho comum
    if(state2){
	document.getElementById("senha2").setAttribute("type","password");
	document.getElementById("olho2").innerHTML = "visibility";
	state = false;
     }
     // Quando estado = verdadeiro → senha à mostra e olho riscado
     else{
	document.getElementById("senha2").setAttribute("type","text");
	document.getElementById("olho2").innerHTML = "visibility_off";
	state2 = true;
     }
}
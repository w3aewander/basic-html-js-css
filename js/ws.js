/**
*
*  Simulação de um PushButton (botão de pressão)
*
*/

let pressed = false;

function pushButton(e) {
	
	if ( ! pressed ){
        //faça algo e retorne para o estado inverso
        //console.log( e );
		e.style.backgroundColor = "red";
		e.innerHTML = "Desligar";
		document.getElementById("status").innerText = "dispositivo ligado";
		//
		// colocar o código do que vc quiser controlar via api...
		//
        pressed = true;        
		
	} else {
		
		e.style.backgroundColor = "green";
		e.innerHTML = "Ligar";
		document.getElementById("status").innerText = "dispositivo desligado";
		
		//
		// colocar o código do que vc quiser controlar via api...
		//
		
		pressed = false;
      
    }		
}
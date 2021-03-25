


function carregar() {
	let texto = document.getElementById("texto");
	let img = document.getElementById("imagem");
	let data = new Date();
	let dia = data.getDay();
	let mes = data.getDate();
	let ano = data.getFullYear();
	let hora = data.getHours();
	let minuto = data.getMinutes();
	let nome = prompt("Qual seu nome?")
	let ola = document.getElementById("ola")

	ola.innerHTML = `Olá ${nome}`
	
	if (hora > 0 && hora < 12) {
		texto.innerHTML = `Bom dia!!!<br>
		Levanta que os boletos estão vencendo.<br>
		Hoje é dia ${mes}/${dia}/${ano} e agora sao ${hora}:${minuto} hrs`  ;
		img.src = "imagens/manha.jpg"
		document.body.style.background = "#e2cd9f"
	}

	else if (hora >= 12 && hora < 18) {
		texto.innerHTML = `Boa tarde!!!<br>
		Toma um café que ainda tem horas para trabalhar.<br>
		Hoje é dia ${mes}/${dia}/${ano} e agora sao ${hora}:${minuto} hrs`  ;
		img.src = "imagens/tarde.jpg";
		document.body.style.background = "#b9846f"
	}

	else {
		texto.innerHTML = `Boa noite!!! <br>
		Hoje é dia ${mes}/${dia}/${ano} e agora sao ${hora}:${minuto} hrs
		<br><br>
		como foi seu dia? 
		<br><br>
		Clique no botão abaixo para saber como foi o meu!`  
		img.src = "imagens/noite.jpg" ;
		document.body.style.background = "#515154"
	}
}

function clique() {

	alert(" ♪ Caminhando contra o vento, sem lenço e sem documento ♪ ")
}
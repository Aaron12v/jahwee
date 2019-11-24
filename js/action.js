function loging() {
	// body...
	var us = document.getElementById('us').value;
	var pass = document.getElementById('pass').value;
	if (us == "admin" && pass== "123") {
		alert("Bienvenidos");
		Inicio();
	}else{
		alert("ERROR DE USUARIO");
	}
}

function Inicio(){
	window.location = "./1Index.html"
}

function Menu(){
	document.body.innerHTML= "<nav>"+
	"<div>Inicio</div> <div>Muro</div <div>Mensaje</div>"
	+"</nav>"
}
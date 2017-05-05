function Pokemon(nombre, color, poderDelAtaque){
	this.nombre = nombre,
	this.color = color,
	this.nivelDeAmistad = 10,
	this.vida = 100,
	this.poderDelAtaque = poderDelAtaque,

	this.mostrarPokemon = function(){
	return ("Hola soy: "+this.nombre+" y soy de color: "+this.color)
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor
	}

	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDelAtaque
	}
}

function pelear(){

	var jug1 = document.getElementById("selA").value;
	var jug2 = document.getElementById("selB").value;
	if(jug1 == jug2){
		alert("Error poquemón masoquista");	
		return
	}

	var ataca = new Pokemon(jug1, "rojo", 20);
	var atacado = new Pokemon(jug2, "verde", 40);
	ataca.atacar(atacado);
	document.getElementById("resultado").innerHTML += (ataca.nombre +" atacó a " + atacado.nombre +
	 " y " + atacado.nombre + " tiene " + atacado.vida +" de vidas restantes.");

}

const Tangananica = new Pokemon('Tangananica', 'verde', 80);
const Tanganana = new Pokemon('Tanganana', 'azul', 40);
const Pikachu = new Pokemon('Pikachu', 'amarillo', 100);
const Charmander = new Pokemon("Charmander", "rojo", 20);

//Pikachu.atacar(Charmander)
//console.log(Charmander.vida);
//document.write("<br>La cantidad de vidas que le quedan a Charmander son: "+Charmander.vida);
/*
function pelear(){
	var selA = document.getElementsByClassName("eleccionA"); 
	var selB = document.getElementsByClassName("eleccionB"); 
	var jug1 = new Pokemon(selA, "rojo", );
	var jug2 = new Pokemon(selB, "azul", );

	for (var i = 0; i < selA.length; i++){
		if(selA[i].value == selB[i].value){
		alert("Error poquemón masoquista");		
		}else if (selA[i].value != selB[i].value){
			jug1.atacar(jug2)
		//selA[i].value.this.atacar(selB[i].value);
		document.write("Pokemon: "+selA[i].value+" atacó a Pokemon: "+selB[i].value+" y a Pokemon "+selB[i].value+
		" , le quedan :"+jug2.vida+" vidas restantes." );
		}
	}
}*/







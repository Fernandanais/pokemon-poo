function Pokemon(nombre, color, poderDelAtaque){
	this.nombre = nombre,
	this.color = color,
	this.nivelDeAmistad = 0,
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
const Tangananica = new Pokemon('Tangananica', 'verde', 80);
const Tanganana = new Pokemon('Tanganana', 'azul', 40);
const Pikachu = new Pokemon('Pikachu', 'amarillo', 100);
const Charmander = new Pokemon("Charmander", "rojo", 20);

Pikachu.atacar(Charmander)
console.log(Charmander.vida);
document.write("<br>La cantidad de vidas que le quedan a Charmander son: "+Charmander.vida);


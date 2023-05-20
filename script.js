
const trainer = {
  name: "Trainer: Dawn",
  age: 19,
  pokemon: ["Pikachu", "Piplup", "Bulbasaur"],
  friends: {
    bestFriend: "Bestfriend: Cilan",
    rival: "Rival: Ash"
  },
  talk() {
    console.log("Pikachu! I choose you!");
  }
};

console.log(trainer.name);
console.log(trainer.age);
console.log(trainer.friends.bestFriend);

trainer.talk();

function Pokemon(name, level) {
  this.name = name;
  this.level = level;
  this.health = level * 10;
  this.attack = level * 5;
}

Pokemon.prototype.tackle = function(targetPokemon) {
  targetPokemon.health -= this.attack;
  if (targetPokemon.health <= 0) {
    this.faint(targetPokemon);
  }
};

Pokemon.prototype.faint = function() {
  console.log(this.name + " has fainted.");
};

const pikachu = new Pokemon("Pikachu", 10);
const charmander = new Pokemon("Piplup", 8);
const squirtle = new Pokemon("Bulbasaur", 12);

pikachu.tackle(charmander);


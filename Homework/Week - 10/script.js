const character = {
  name: "Knight",
  hp: 100,
  attack: 25,
  defense: 15,
  introduce: function () {
    console.log(`My name is ${this.name} and I have ${this.hp} health`);
  }
};

character.introduce();
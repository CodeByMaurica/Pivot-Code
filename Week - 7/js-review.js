const name = "Maurica"; 
let age = 35
age = 22;  
const favFoods = ["piza", "fish", "chicken","ice cream"];

console.log("my name is " + name + " and i am " + age);

function changeText() {
   document.getElementById("text").textContent = "Text Changed!";

}

for (let i = 0; i < favFoods.length; i++) {
  console.log(favFoods[i]);
}

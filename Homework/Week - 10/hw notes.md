### HW (tuesdays)
- create an HTML file in week-10 folder, create "object.js" and link them together
- inside the js create and object called "character"
- give it a:
- - name (string)
- - hp (int)
- - attack (int)
- - defense (int)
- - a function that console log "My name is [name] and i have [hp] health"

## notes
- use AI to explain steps, not to copy
- you are not graded so try
- only use code you understand

## prompts
- i dont want the answer can you explain how to approach each step for class: ....


## What I asked Chatgpt:
i am learning full stack coding using AI using Visual studio code. i dont want the answer can you explain how to approach each step for class: i need to create a html file and create object. js and link them together inside the js create an object called "character" gice it a: name (string) hp (int) attack (int) defense (int) a function that console log "My name is [name] and i have [hp] health

## Chatgpt Response:
🧠 STEP 1: Understand What You’re Being Asked

Break the assignment into 3 parts:

1. Create an HTML file

👉 This is your entry point (the webpage)

2. Create a JS file

👉 This is where your logic (object + function) lives

3. Link them together

👉 So the browser actually runs your JavaScript

🧠 STEP 2: Think Like a Full Stack Developer

Before coding, ask yourself:

👉 “Where does each piece belong?”

Task	Where it goes
Structure (page)	HTML
Logic (object + function)	JavaScript
Connection between them	<script> tag
🧠 STEP 3: Set Up Your Files in VS Code
What you should do:
Open VS Code
Create a folder (ex: character-project)
Inside the folder create:
index.html
script.js

👉 This is how real projects are organized

🧠 STEP 4: Build the HTML (Think First)

Ask yourself:

👉 “What is the ONLY job of HTML here?”

Answer:
👉 Just load the JavaScript

So your thinking should be:

Do I need buttons? ❌
Do I need UI? ❌
Do I just need to connect JS? ✅
🧠 STEP 5: Linking JavaScript to HTML

Key concept:

👉 The browser does NOT automatically run your JS
👉 You must tell it where your JS file is

So think:

“How do I connect external JS to HTML?”

Answer:
👉 <script src="script.js"></script>

💡 Placement matters:

Put it at the bottom of <body>
👉 So HTML loads first, then JS runs
🧠 STEP 6: Understand What an Object Is (IMPORTANT)

Before writing anything, think:

👉 “What is an object?”

An object = a container of related data

Example thinking:

A character has:

name
hp
attack
defense

👉 So instead of separate variables, we group them

🧠 STEP 7: Plan the Object (DON’T CODE YET)

Mentally design it:

character
 ├── name → string
 ├── hp → number
 ├── attack → number
 ├── defense → number
 └── function → prints message

👉 This is how developers think BEFORE typing

🧠 STEP 8: Think About the Function

Ask:

👉 “What should the function DO?”

Answer:

Access the object's values
Print a message

Then ask:

👉 “How do I print something in JS?”

👉 console.log()

🧠 STEP 9: Dynamic Thinking (IMPORTANT)

Instead of hardcoding:

❌ "My name is John"

Think:

👉 “How do I insert values from the object?”

You want:

👉 Use variables inside text

Concept:

String + variables
OR template literals
🧠 STEP 10: Accessing Object Data

Ask yourself:

👉 “How do I get values from inside an object?”

Concept:

dot notation
object.property

So your thinking becomes:

👉 “How do I get the name from character?”
👉 “How do I get hp?”

🧠 STEP 11: Calling the Function

Creating a function is NOT enough.

Ask:

👉 “How do I make it run?”

👉 You must call it

## What I asked Chatgpt:
show me answer to this code and explain line by line for html and js while we do it together

## Chatgpt Response:
1) Your index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Character Object</title>
</head>
<body>
  <h1>Character Object Practice</h1>

  <script src="script.js"></script>
</body>
</html>
HTML line by line
<!DOCTYPE html>

This tells the browser:
“This is an HTML5 document.”

It helps the browser know how to read the page correctly.

<html lang="en">

This is the root of your whole HTML page.

lang="en" tells the browser and screen readers that the page is in English.

<head>

The <head> holds information about the page, not the visible content of the page itself.

<meta charset="UTF-8" />

This tells the browser what character set to use.

It helps special characters, punctuation, and text display correctly.

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

This helps the page look better on phones, tablets, and different screen sizes.

<title>Character Object</title>

This is the text that appears on the browser tab.

</head>

This closes the head section.

<body>

This is where the visible content of the webpage goes.

<h1>Character Object Practice</h1>

This adds a big heading to the page.

It is not required for the object to work, but it makes the page look more complete.

<script src="script.js"></script>

This is the line that connects your JavaScript file to your HTML.

src="script.js" means:
“Go find the file named script.js and run it.”

This is how the browser loads your JavaScript.

</body>

Closes the body.

</html>

Closes the whole HTML document.

2) Your script.js
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
JS line by line
const character = {

This creates an object named character.

const means the variable name character cannot be reassigned to a completely different value later.

The {} means you are creating an object.

Think of an object like a container that holds related information.

name: "Knight",

This adds a property called name.

Its value is a string because it is text inside quotes.

So here:

property name = name
value = "Knight"
hp: 100,

This adds the hp property.

hp stands for health points.

Its value is a number.

attack: 25,

This adds the attack property.

Again, this is a number.

defense: 15,

This adds the defense property.

Also a number.

introduce: function () {

This creates a function inside the object.

A function inside an object is called a method.

So now your object does not only store data, it can also perform an action.

This method’s job is to print a sentence to the console.

console.log(`My name is ${this.name} and I have ${this.hp} health`);

This prints a message to the console.

Let’s break this down:

console.log()

This sends output to the browser console.

You see it by:

opening your page in a browser
right-clicking
clicking Inspect
going to the Console tab
The backticks

These are not regular quotes. They are called template literals.

They let you insert variables directly into a string.

${this.name}

This grabs the name value from the current object.

${this.hp}

This grabs the hp value from the current object.

this

this means:
“this object right here.”

Since the function is inside character, this.name means character.name, and this.hp means character.hp.

So this line prints:

My name is Knight and I have 100 health
}

This closes the function.

};

This closes the whole object.

The semicolon ends the statement.

character.introduce();

This calls the method.

Creating the function does not automatically run it.

This line says:
“Go into the character object and run the introduce function.”

That is what actually makes the message appear in the console.

What your output will be

When you open the HTML file in the browser and check the console, you should see:

My name is Knight and I have 100 health
How HTML and JS are working together

Here is the big picture:

HTML

The HTML creates the page and loads the JavaScript file.

JavaScript

The JS creates the object and runs the function.

So the flow is:

Browser opens index.html
Browser reads the HTML
Browser reaches <script src="script.js"></script>
Browser loads script.js
The character object is created
character.introduce() runs
Message appears in the console
Beginner way to remember this

Think of it like this:

HTML

“Here is the page.”

JavaScript

“Here is the logic.”

Script tag

“Connect the page to the logic.”

One more thing your teacher may care about

Your assignment said:

name (string)
hp (int)
attack (int)
defense (int)
function that console logs a sentence

In JavaScript, we usually just say number instead of int.

So even though the assignment says int, using:

hp: 100

is correct in JavaScript.

Practice question for you

Try changing:

"Knight" to your own character name
100 to a different hp value
25 to a different attack
15 to a different defense

Then run it again and see what changes in the console.

Mini challenge

After this works, try to answer these:

What happens if you change this.name to this.attack in the message?
What happens if you delete character.introduce();?
Why are strings in quotes, but numbers are not?

Paste your code after you type it, and I’ll check it with you line by line.
html
<!-- Text input where the user types their name -->

<!-- Password input (text is hidden when typing) -->

<!-- Button that runs the checkLogin function when clicked -->

💡 Quick tip
id="nameInput" → lets JavaScript find this input
placeholder="Enter name" → shows hint text inside the box
onclick="checkLogin()" → runs your function when clicked


<!--  js notes -->
🧠 Step 2: Simple explanation
You store correct login info (myName, myPass)
User types into input fields
You grab what they typed
You compare values
You show result on the page

.toLowerCase() → turns text into lowercase
"Maurica" → "maurica"
"MAURICA" → "maurica"
So now:
"maurica" ✅
"MAURICA" ✅
"Maurica" ✅
All work!

We only changed the name, not the password.
Username → usually NOT case-sensitive
Password → always case-sensitive (keep it strict)



<!-- HTML -->
id="username" must match "username" in JavaScript
.value gets what user typed
.textContent shows text on the page
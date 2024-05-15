const passwordBox = document.getElementById("password");
const length = 15; // Corrected typo (length instead of lenght)

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+|}{<>:-=";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword() {
  var password = "";

  // Ensure at least one character from each category
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  // Fill remaining characters with any character from allChars
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}


async function copyPassword() {
    const password = passwordBox.value; 
  
    if (!navigator.clipboard) {
      alert("Copying to clipboard is not supported by your browser.");
      return;
    }
  
    try {
    
      if (!navigator.clipboard.writeText) {
        await navigator.clipboard.write([new ClipboardItem({ "text/plain": password })]);
      } else {
        await navigator.clipboard.writeText(password);
      }
      alert("Password copied to clipboard!");
    } catch (err) {
      if (err.name === 'PermissionsError') {
        alert("Permission to access clipboard denied. Please allow clipboard access and try again.");
      } else {
        alert("Error copying password: " + err);
      }
    }
  }
  
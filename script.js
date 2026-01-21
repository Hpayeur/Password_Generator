function generatePassword(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{};~?,./";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

document.getElementById("generateBtn").addEventListener("click", function () {
  let lengthInput = document.getElementById("length").value;
  let length = parseInt(lengthInput, 10);
  if (isNaN(length) || length < 6 || length > 20) {
    alert("Please enter a valid length between 6 and 20.");
    return;
  }

  const password = generatePassword(length);
  document.getElementById("passwordOutput").value = password;
});

// Testing This Function
// function generatePassword() {
//     const length = 12; // Or get from user input
//     const includeUppercase = true; // From checkbox
//     const includeLowercase = true; // From checkbox
//     const includeNumbers = true; // From checkbox
//     const includeSymbols = true; // From checkbox

//     const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const lower = 'abcdefghijklmnopqrstuvwxyz';
//     const numbers = '0123456789';
//     const symbols = '!@#$%^&*()_+';

//     let allChars = '';
//     let password = '';

//     if (includeUppercase) { allChars += upper; password += upper[Math.floor(Math.random() * upper.length)]; }
//     if (includeLowercase) { allChars += lower; password += lower[Math.floor(Math.random() * lower.length)]; }
//     if (includeNumbers) { allChars += numbers; password += numbers[Math.floor(Math.random() * numbers.length)]; }
//     if (includeSymbols) { allChars += symbols; password += symbols[Math.floor(Math.random() * symbols.length)]; }

//     // Fill the rest of the password length
//     while (password.length < length) {
//         const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
//         password += randomChar;
//     }

//     // Shuffle the final password (simplified shuffle)
//     // For better randomness, use a proper shuffle algorithm or crypto [5]
//     const shuffledPassword = password.split('').sort(() => 0.5 - Math.random()).join('');
//     return shuffledPassword;
// }

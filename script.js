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

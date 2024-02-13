// Assignment Code
var generateBtn = document.querySelector("#generate");
//Set arrays 
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var verify = [];


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//start the function with generatepassword since it was given beforehand
function generatePassword() {
 //starts with advising the client the contraints on password length
  var passwordLength = prompt('How many characters would you like your password to be?(make sure password contains at least 8 characters and no more than 128 characters)');
  var confirmpasswordLength = parseInt(passwordLength);
  console.log(confirmpasswordLength)

 if (passwordLength < 8 || passwordLength > 128) {
    //will show error if password is greater that 128 characters
    alert ('passsword must contain at least 8 characters but no more than 128 characters');
   return;
  }
  
  //adding specific characters to password

  //varifying for lowercase numbers
  var lowercasevarify = confirm('Are you sure you want lowercase characters?');
  if (lowercasevarify === true) {
    for (var i = 0; i < lowercase.length; i++) {
     verify.push(lowercase[i]);
    }
  }

  //varifying for uppercase letters
  var uppercaseverify = confirm('Are you sure you want uppercase characters?');
  if (uppercaseverify === true) {
    for (var i = 0; i < uppercase.length; i++) {
      verify.push(uppercase[i]);
    }
  }

  //varifying for numbers
  var numbersverify = confirm('Are you sure you want numbers?');
  if (numbersverify === true) {
    for (var i = 0; i < numbers.length; i++) {
      verify.push(numbers[i]);
    }
  }

  //varifying for special characters
  var specialverify = confirm('Are you sure you want special characters?');
  if (specialverify === true) {
    for (var i = 0; i < special.length; i++) {
      verify.push(special [i]);
    }
  }

  var Randompassword = "";
  for (var i = 0; i < passwordLength; i++) {
    verify[
      Math.floor(Math.random() * verify.length)
    ];
    Randompassword +=
    verify [
      Math.floor(Math.random() * verify.length)
    ];
  }
    return Randompassword
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Set arrays 
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


//starts with asking the client the minimum password length
function varifyPwLength() {
  var passwordLength = prompt('How many characters would you like your password to be?(make sure password contains at least 8 characters and no more than 128 characters)');
  var confirmPasswordLength = parseInt(passwordLength);
  console.log(confirmPasswordLength)

  if (!passwordlength) {
    //will exit if client does not like the password
    return passwordlength = 'exit';
  } else if (passwordlength < 8 || passwordlength > 128) {
    //will show error if password is greater that 128 characters
    alert('passsword must contain no more than 128 characters')
   return;
  }
  
  
}
  //adding specific characters to password

  //varifying for lowercase numbers
  var lowercasevarify = confirm('Are you sure you want lowercase characters?');
  if (lowercasevarify === true) {
    for (var i = 0; i < lowercase.length; i++) {
      confirmations.push(lowercase[i]);
    }
  }

  //varifying for uppercase letters
  var uppercasevarify = confirm('Are you sure you want uppercase characters?');
  if (uppercasevarify === true) {
    for (var i = 0; i < uppercase.length; i++) {
      confirmations.push(uppercase[i]);
    }
  }

  //varifying for numbers
  var numbersvarify = confirm('Are you sure you want numbers?');
  if (numbersvarify === true) {
    for (var i = 0; i < numbers.length; i++) {
      confirmations.push(numbers[i]);
    }
  }

  //varifying for special characters
  var specialvarify = confirm('Are you sure you want special characters?');
  if (specialvarify === true) {
    for (var i = 0; i < special.length; i++) {
      confirmations.push(special [i]);
    }
  }

  var randompassword = "";
  for (var i = 0; i < passwordlength; i++) {
    confirmations[
      Math.floor(Math.random() * confirmations.length)
    ];
    randompassword +=
    confirmations [
      Math.floor(Math.random() * confirmations.length)
    ];
    return randompassword
  }




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


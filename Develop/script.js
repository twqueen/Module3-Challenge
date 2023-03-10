// Assignment code here
//define strings
var specialcharactersOnly = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var lowercaseOnly = "abcdefghijklmnopqrstuvwxyz"
var uppercaseOnly = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbersOnly = "0123456789"

//start of program
function generatePassword() {
  var newPassword = ""
  var Userwants = ""
  //establish desired password length
  var pwLength = window.prompt("Please enter your desired password length (between 8 to 128 characters)");
  if (!pwLength) {
    return; //if user chose to cancel
  }
  if ((pwLength >= 8) && (pwLength <= 128)) {
    //prompt the user for desired characters in their password
    var ConfirmSpecial = window.confirm("Do you want to include Special Characters? \ni.e !, @, #, $");
    var ConfirmLower = window.confirm("Do you want to include Lowercase letters?");
    var ConfirmUpper = window.confirm("Do you want to include Uppercase letters?");
    var ConfirmNumber = window.confirm("Do you want to include numbers?");

    //add var strings into one var for computer to choose from
    if (ConfirmSpecial) {
      Userwants += specialcharactersOnly;
    }
    if (ConfirmLower) {
      Userwants += lowercaseOnly;
    }
    if (ConfirmUpper) {
      Userwants += uppercaseOnly;
    }
    if (ConfirmNumber) {
      Userwants += numbersOnly;
    }

    if (Userwants.length == 0) {
      window.alert("Please select at least one character type.");
    }

    //establish a situation where at least one of each confirmed characters will be in the password.
    //random password will be generated in this step
    for (var i = 0; i < pwLength; i++) {
      if (i == 0 && ConfirmSpecial) {
        var randomNumber = Math.floor(Math.random() * specialcharactersOnly.length);
        newPassword += specialcharactersOnly.substring(randomNumber, randomNumber +1);
      } 
      else if (i == 1 && ConfirmLower) {
        var randomNumber = Math.floor(Math.random() * lowercaseOnly.length);
        newPassword += lowercaseOnly.substring(randomNumber, randomNumber +1);
      }
      else if (i == 2 && ConfirmUpper) {
        var randomNumber = Math.floor(Math.random() * uppercaseOnly.length);
        newPassword += uppercaseOnly.substring(randomNumber, randomNumber +1);
      }
      else if (i == 3 && ConfirmNumber) {
        var randomNumber = Math.floor(Math.random() * numbersOnly.length);
        newPassword += numbersOnly.substring(randomNumber, randomNumber +1);
      }
      else {
      var randomNumber = Math.floor(Math.random() * Userwants.length);
      newPassword += Userwants.substring(randomNumber, randomNumber +1);
      }
    }
  }
  else {
    window.alert("Please enter a value between 8 and 128");
  }

  //newly generated password will be displayed
  return newPassword
  
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

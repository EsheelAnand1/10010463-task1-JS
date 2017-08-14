  var Fehrenheit = "F";
  var Celsuis = "C";
  alert("Convert Fehrenheit to Celsius and Celsius to Fehrenheit")
  var userInput = prompt("Enter F for Fehrenheit to Celsius and C for Celsius to Fehrenheit")

  if (userInput === Fehrenheit) {
      var userinput1 = prompt("Enter Celisus");
      alert("Fehrenheit" + userinput1 - 32 * 5 / 9);

  } else if (userInput === Celsuis) {
      var userinput1 = prompt("Enter Celisus");
      alert("Cels is" + userinput1 * 9 / 5 + 32);

  }
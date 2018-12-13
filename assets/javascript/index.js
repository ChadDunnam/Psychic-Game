//first create possible computer choices

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

//define variables and assign wins and losses at 0.  Later function will add wins and losses and deduct guesses
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];


//write a function to the document so when a character is pressed, different event happen
    document.onkeyup = function(event) {

//write variables in our function to tellhow we want the output of our previous variables should be after certain keys are pressed.  Our first variable captures key.
    var userGuess = event.key;

//this variable will randomize a computer guess through the length of what we defined in the string for computerChoices
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//we need a variable here to assign options to user guesses
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

            if (options.indexOf(userGuess) > -1) {

//if userguess equals (is true) to computer guess, add 1 to wins.  Guess choices expands array.  
  
       if (userGuess === computerGuess) {
           wins++;
           numGuesses = 9;
           guessChoices = [];
       }

//we need a way do subtract guesses if userguess does not equal computer guess.  This will subtract number of guess by one, and use push to add the keystroke selected to the array.
       if (userGuess != computerGuess) {
           numGuesses --;
           guessChoices.push(userGuess);
       }

//guesses should start at 9 but if they go to 0, add 1 to losses
       if (numGuesses === 0) {
       numGuesses = 9;
       losses ++;
       guessChoices = [];

       
   }

   var html = 
   "<h1> The Psychic Game </h1>" +
   "<p>Guess what letter I'm thinking of!</p>" +
   "<p>Wins: " + wins + "</p>" +
   "<p>Losses: " + losses + "</p>" +
   "<p>Guesses Left: " + numGuesses + "</p>" +

   //joins guessChoices and keystrokes in the array
   "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

   document.querySelector("#psychic").innerHTML = html;

   
   }
};
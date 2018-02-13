var Word = require("./Word");
var inquirer = require("inquirer");
var letterGuessed;
var wordsToGuess = ["kingdom", "marvel", "pixar", "disney", "mickey", "walt", "neverland", "avengers"];
var randomIndex = Math.floor(Math.random() * wordsToGuess.length);
var randomWord = wordsToGuess[randomIndex];
var randomWordSplit = randomWord.split("")
var splitLength = randomWordSplit.length
var myWord = new Word(randomWord);
var maxGuesses = 10;

function Guess(){
	console.log(myWord.toString());
	if (myWord.guessesMade.length >= maxGuesses) {
		console.log('Sorry you are out of guesses. Please try again.');
	return;
	}
	inquirer.prompt([{
		name: 'keystroke',
		type: 'text',
		message: 'Enter a letter:',
		}]).then(function(letterInput) {
				var keyPress = letterInput.keystroke;
				myWord.findLetter(keyPress);
					if(myWord.isComplete()){
					console.log('That is correct! It was ' + myWord.toString() + '!');
					return;
        } else {
          console.log('-------------------\n');
          console.log('You have ' + (maxGuesses - myWord.guessesMade.length) + ' guesses left.')
          Guess();
        }
				}
  );
}
Guess();

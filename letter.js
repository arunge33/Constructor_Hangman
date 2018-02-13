
var Letter = function(value) {
  this.value = value;
  this.guessed = false;
}
Letter.prototype.correct = function() {
  if (this.guessed) {
    return this.value + " ";
  } else {
  return "_ ";
  }
}
module.exports = Letter;

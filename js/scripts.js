var isVowel = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var letters = word.split("")
  var letter = letters[0]

  for(var i = 0; i < vowels.length; i++) {
    if (letter === vowels[i]) {
      return true;
    }
  }
  return false;
};

var findQu = function(word) {
  var myRe = /q(?=u)/g;

  var found = word.match(myRe);
  return found;

};

var consonantShuffle = function(word) {
  var letters = word.split("")
  var myRe2 = /^[aeiou]/g;

  for(var i = 0; i < letters.length; i++) {
    var testLetter = letters[0];
    if (!(myRe2.test(testLetter))) {
      letters.push(letters.shift());
    } else
      break;
  }
  var found = letters.join("");
  return found;
};

var pigLatinize = function(word) {
  var pig = "ay"
  return word.concat(pig);
}

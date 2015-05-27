var pigLatinize = function(word) {
  var pig = "ay"
  if((isVowel(word))){
  return word.concat(pig);
} else {
   return consonantShuffle(word).concat(pig);
}
};



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

// var findQu = function(word) {
//   var myRe = /q(?=u)/g;
//
//   var found = word.match(myRe);
//   return found;
//
// };

var consonantShuffle = function(word) {
  var letters = word.split("")
  var myRe2 = /^[aeiou]/g;

  for(var i = 0; i < letters.length; i++) {
    var testLetter = letters[0];
    var testLetter2 = letters[1]
    if ((testLetter === "q") && (testLetter2 === "u")) {
        letters.push(letters.shift());
        letters.push(letters.shift());
    } else if (!(myRe2.test(testLetter))) {
       letters.push(letters.shift());
    } else {
      break;
    }
  };
  var found = letters.join("");
  return found;
};

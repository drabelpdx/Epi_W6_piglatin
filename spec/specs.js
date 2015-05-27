describe('isVowel', function() {
  it ("regognizes vowels", function() {
    expect(isVowel("a")).to.eql(true);
  });

  it ("regognizes first character as a vowel", function() {
    expect(isVowel("apple")).to.eql(true);
  });

  it ("regognizes when the first character is not a vowel", function() {
    expect(isVowel("dog")).to.eql(false);
  });
});

describe('findQu', function() {
  it ("regognizes when q is followed by u", function() {
    expect(findQu("squeal")).to.eql(['q']);
  });
});

describe('consonantShuffle', function() {
  it("moves all consecutive consonants to the end of the word", function() {
    expect(consonantShuffle("shuffle")).to.equal("ufflesh");
  });
});

describe('pigLatinize', function() {
  it("adds ay to the end of a word", function() {
    expect(pigLatinize("out")).to.equal("outay");
  });
});
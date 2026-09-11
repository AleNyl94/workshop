console.log("Workshopen är igång");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function translateRövarspråk(word) {
  const vowels = "aeiouyåäö";
  const result = "";
  for (const char of word) {
    const isLetter = char;
    const isVowel = vowels.includes(char);
    if (isLetter && !isVowel) {
      result += char + "o" + char;
    } else {
      result += char;
    }
  }
  return result;
}

rl.question("Skriv ett ord: ", (word) => {});

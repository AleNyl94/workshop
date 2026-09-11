console.log("Workshopen är igång");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function translateRövarspråk(input) {
  const vowels = "aeiouyåäö";
  let result = '';
  for (const char of input) {
    const isLetter = char.toLowerCase();
    const isVowel = vowels.includes(char);
    if (isLetter && !isVowel) {
      result += char + "o" + char;
    } else {
      result += char;
    }
  }
  return result;
}

function main() {
rl.question("Skriv ett ord: ", (input) => {
  const translated = translateRövarspråk(input);
  console.log(`${translated}`);
  rl.close();
  });
}

main();

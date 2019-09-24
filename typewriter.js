const sentence = "hello i love you wount you tell me your name";

const printString = function(string) {
  if (string[0]) {
    setTimeout(() => {
      process.stdout.write(string[0]);
      printString(string.slice(1));
    }, 50);
  } else {
    console.log();
  }
};

printString(sentence);
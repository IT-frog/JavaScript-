const word = "Коллайдер";
let guessWord = "";
let errCnt = 6;

console.log(word);
console.log(word.charAt(9));
console.log(word.length)


for (let i = 0; i < word.length; i++) {

    guessWord += "-";
}
console.log(guessWord);
console.log(word.length === guessWord.length);


while (errCnt) {
    let char = prompt("Введите букву");
    let newWord = "";



    for (let i = 0; i < word.length; i++) {
        if (char.toLowerCase() === word.charAt(i).toLowerCase()) {
            newWord += char;

            //guessWord.charAt(i) = char - не работает!
        } else {



        }

    }
    if (guessWord === newWord) {
        errCnt--;
    } else {
        guessWord = newWord;

    }
    if (guessWord.toLowerCase() === word.toLowerCase()) {
        console.log("You win!");
        break;
    }
    console.log(guessWord);
}
console.log("Game over!");




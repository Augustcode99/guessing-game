const answer = Math.round(Math.random() * 10);
// console.log("the answer is", answer);

let trys = 3;
while (trys > 0) {
  let guess = Number(prompt("guess 1-10, you get 3 tries!"));
  trys--;
  if (guess === answer) {
    alert(`congratz! you win, you guessed ${answer}`);
  } else {
    if (!trys) {
      alert(`oh no, you lose :(`);
    } else {
      answer > guess && trys
        ? alert(`you guessed ${guess}, try higher!`)
        : alert(`you guessed ${guess}, try lower!`);
    }
  }
}

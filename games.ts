while (true) {
    const prompt = require("prompt-sync")();
    let num: number = Math.floor(Math.random() * 10);
    for (let el = 0; el < 3; el++) {
      let guessnum: number = parseInt(prompt("Guess what's on my mind😜:   "));
  
      if (num === guessnum) {
        console.log("you guessed properly 👏👏");
        break;
      } else {
        if (num < guessnum) {
          console.log("you guessed wrongly🤣😂");
          console.log(
            `your ${guessnum} is greater than the right number ${num} `
          );
          continue;
        } else if (num > guessnum) {
          console.log("you guessed wrongly🤣😂");
          console.log(`your ${guessnum} is lesser than the right number ${num} `);
        }
  
        continue;
      }
    }
  
    let lives = prompt(" Press Y to continue or N to quit : ");
    if (lives === "Y" || lives === "y") {
      console.log("contine");
      continue;
    } else if (lives === "N" || lives === "n") {
      console.log("see you next time");
    }
    break;
  }
  console.log("end of game!!");


  //games 2
  //play a game that gives you three chances to redeem yourself

while (true) {
    const prompt = require("prompt-sync")();
    let higgestbid = Math.floor(Math.random() * 50);
    for (let h = 0; h < 3; h++) {
      let myguess = parseInt(
        prompt("GUESS THE CORRECT VALUE TO BE THE HIGGEST BIDDER :  ")
      );
      if (higgestbid === myguess) {
        console.log("BINGO!!!!");
        break;
      } else {
        if (myguess < higgestbid) {
          console.log(
            `YOUR GUESS ${myguess} IS LESSER THAN THE ACTUAL VALUE ${higgestbid}`
          );
        }
        if (myguess > higgestbid) {
          console.log(
            `YOUR GUESS ${myguess} IS GREATER THAN THE ACTUAL VALUE ${higgestbid}`
          );
        }
        continue;
      }
    }
  
    let chances = prompt(
      "do you want to play on , if yes click Y, if no click N :  "
    );
    if (chances === "Y" || chances === "y") {
      console.log("play on");
    } else if (chances === "N" || chances === "n") {
      console.log("see you next time loser");
      break;
    }
  }
  console.log("GAME OVER");
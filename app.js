// Object Refactoring
const p1 ={
    score : 0,
    button : document.querySelector("#p1Button"),
    display : document.querySelector("#p1Display")
}

const p2 ={
    score : 0,
    button : document.querySelector("#p2Button"),
    display : document.querySelector("#p2Display")
}

// // Playe Button Object

// const p1Button = document.querySelector("#p1Button");
// const p2Button = document.querySelector("#p2Button");


// Reset Button Object
const resetButton = document.querySelector("#reset");

// // Player Score Display
// const p1Display = document.querySelector("#p1Display");
// const p2Display = document.querySelector("#p2Display");

// Winning Score (Select)
const winningScoreSelect = document.querySelector("#playto");


function updateScore (player, opponent){
    if(! isGameOver) {
        player.score += 1;
        if (player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');

              //버튼 비활성화
              player.button.disabled = true;
              opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

let winningScore = 3;
let p1Score = 0;
let p2Score = 0;

let isGameOver = false;



p1Button.addEventListener('click', function (){
    updateScore(p1, p2);
});


p2Button.addEventListener('click', function () {
    updateScore(p2, p1);
});

resetButton.addEventListener('click', reset);

winningScoreSelect.addEventListener('change', function(e){
    winningScore = parseInt(this.value);
})

function reset(){
      //** Score Reset */
      isGameOver = false;
      for (let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
      }
    //   p1.score = 0;
    //   p2.score = 0;
    //   p1.display.textContent = p1Score;
    //   p2.display.textContent = p2Score;
    //   p1.display.classList.remove('has-text-success', 'has-text-danger');
    //   p2.display.classList.remove('has-text-success', 'has-text-danger');

        // //버튼 활성화
        // p1.button.disabled = false;
        // p2.button.disabled = false;
}
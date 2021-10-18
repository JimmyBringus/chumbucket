/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');

ballEl.addEventListener('click', 

  function(){
    score += 10;

    if (score >= 100){
      declareWinner();
    }
    else {
    scoreEl.innerText = score}
  }

)

function declareWinner() {
  console.log('game-over');
  document.body.classList.add('game-over');
}



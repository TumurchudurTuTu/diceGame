// Togloom duussan esehiig hadlagah tolviin huvisagch
var isNewGame;
var activePlayer, scores, roundScore;
// Shoonii zurgiig haruuldag elementiig DOM-oos haij olood end hadgalya
var diceDom = document.querySelector(".dice");
initGame();

function initGame() {
  isNewGame = true;
  // Eeljiig hadgalah huvisagch, Negdugeer togloch 0, Hoyrdugaar toglogch 1
  activePlayer = 0;
  // Toglogchdiin tsugluulsan onoog hadgalah huvisagch
  scores = [0, 0];
  // Toglogchiin eeljin deer tsugluulj bga onoog hadgalah huvisagch
  roundScore = 0;
  // Shoonii ali talaaraa buusniig hadgalah huvisagch, 1-6 utgiig sanamrsagui ene huvisagchid ogno

  //<div class="player-score" id="score-0">43</div>
  //window.document.querySelector("#score-0").textContent = "100";

  // window.document.querySelector("#score-0").textContent = dice;
  // document.querySelector("#score-1").innerHTML = "<em>haha<em>";

  // Program ehlehed beltgeh
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  diceDom.style.display = "none";
}
// document.querySelector(".btn-roll").addEventListener("click", shooShid);
// callback function
// function shooShid(){
//     var diceNumber = Math.floor(Math.random() * 6) + 1;
//     alert('Шоо буулаа : ' + diceNumber);
// }
// anonymouse function buyu shoog shideh Event Listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  // if (isNewGame === true) {
  if (isNewGame) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
    // alert('Шоог шидлээ : ' + diceNumber);
    // Буусан тоо 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // ene toglogchiin eejlin deer tsugluulsan onoog 0 bolgono.
      switchToNextPlayer();
      alert("1 буусан тул дараагийн тоглогчын ээлж");
    }
  } else {
    alert("Game over");
  }
});
// HOLD tovchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    // Delgets deerh onoog oorchlono
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    // Ug toglogch hojson esehiig shalgana (100 aas ih baiwal hojno)
    if (scores[activePlayer] >= 10) {
      isNewGame = false;
      document.getElementById("name-" + activePlayer).textContent = "Winner";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Game over");
  }
});
// Eeljiin onoog ni 0 bolgono
// Toglogchiin eeljiig solino
function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  // toglogchiin eeljiig shiljuulne
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  // if(activePlayer === 0 ){
  //     activePlayer = 1;
  // } else {
  //     activePlayer = 0;
  // }
  // Ulaan tsegiig shiljuuleh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // shoog tur alga bolgo
  diceDom.style.display = "none";
}
// shine toglom ehluuleh tovchnii Event Listener
document.querySelector(".btn-new").addEventListener("click", initGame);

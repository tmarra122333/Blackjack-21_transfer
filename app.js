let newGame = document.querySelector('.newGame');
let reset = document.querySelector('.reset');
let hit = document.querySelector('.hit');
let stand = document.querySelector('.stand');
let clickMessage = document.querySelector('.clickMessage');
let clickMessage2 = document.querySelector('.clickMessage2');
let gameOver = document.querySelector('.gameOver');
let cardContainer = document.querySelectorAll('.cardContainer');
let playerCard1 = document.querySelector('.playerCard1');
let playerCard2 = document.querySelector('.playerCard2');
let playerCard3 = document.querySelector('.playerCard3');
let playerCard4 = document.querySelectorAll('.playerCard4');
let dealerCard1 = document.querySelector('.dealerCard1');
let dealerCard2 = document.querySelector('.dealerCard2');
let dealerCard3 = document.querySelector('.dealerCard3');
let dealerCard4 = document.querySelectorAll('.dealerCard4');
let dealersTurn = false;
let gameIsLive = true;




//Create Variables to Build Deck

let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];       //Created an array for the card values.
let suits = ["♣", "♦", "♥", "♠"];                                 //Created an array for the suits.
                                                                                      // let numbers = [parseInt(values[0]), parseInt(values[1]), parseInt(values[2]), parseInt(values[3]), parseInt(values[4]), parseInt(values[5]), parseInt(values[6]), parseInt(values[7]), parseInt(values[8])]


let deck = [];  

    
function createDeck() {                                                  // My deck array.  
    for (let i = 0; i < values.length; i++) {                           //created a loop for variable of values representing 2 through Ace
        for (let j = 0; j < suits.length; j++) {                       //nested a loop for variable of suits representing clubs, diamonds, hearts, spade.
            let numbers = parseInt(values[i]);
            if (values[i] == "J" || values[i] == "Q" || values [i] == "K")
            numbers = 10;
            if (values[i] == "A")
            numbers = 11;
            let obj =  {                                               //turning the loops into an OBJECT with {} calling the object via function on 19
                value: values[i], suit: suits[j], number: numbers
            };                                                        //The loop/nested loop console logs out 2-A for each suit!
            deck.push(obj);                                          //pushes every iteration into array from 13/14 
        }                                                           //I just pushed the nested loops into line 6 array creating the deck.
    }     
}    

 createDeck();    
 

 //Making 2nd Commit here.
 
function randomCard(deck) {                                           //created function called randomCard calling the  created deck          
    let dealRandomCard = Math.floor(deck.length * Math.random());    //created variable dealRandomCard selecting random combinations.
    return deck[dealRandomCard];                                    // return the function
    
}                                                                  //console logged the function and html shows random cars ie; j of heart
                                                                
                                                                
let playersHand = [];
let dealersHand = [];

let playerFirstCard = randomCard(deck); 
let playerSecondCard = randomCard(deck);                        
let dealerFirstCard = randomCard(deck);
let dealerSecondCard = randomCard(deck);    


function startGame() {                   //created startGame function
    playerFirstCard;  
    playerSecondCard;                 //created new variables for player/dealer
    dealerFirstCard;                 // let dealerHand = [randomCard(deck), randomCard(deck)];  // invoking randomCard function in line 37
    dealerSecondCard;
    playerCard1.innerHTML= playerFirstCard.value + playerFirstCard.suit             //72 - 75 create loop that will go through new named playerCard(from index.html) same as in HIT and STAY function Loop
    playerCard2.innerHTML= playerSecondCard.value + playerSecondCard.suit
    dealerCard1.innerHTML= dealerFirstCard.value + dealerFirstCard.suit
    dealerCard2.innerHTML= dealerSecondCard.value + dealerSecondCard.suit
    playersHand.push(playerFirstCard)
    playersHand.push(playerSecondCard)
    dealersHand.push(dealerFirstCard)
    dealersHand.push(dealerSecondCard)
    clickMessage.innerHTML= "Player has " + addUpHand(playersHand);
    clickMessage2.innerHTML= "Dealer has " + addUpHand(dealersHand);
    
    //  playerCard2.innerHTML= playerHit.value + playerHit.suit 
    //  console.log(playersHand);   
    //  console.log(dealersHand);                            //console log shows 2 cards per hand 4 cards total
    //  console.log(playerSecondCard);
    //  console.log(dealerFirstCard);
    //  console.log(dealerSecondCard)
    // scores(playersHand, handTotal);
    console.log ('Player Hand ' + addUpHand(playersHand));
    console.log ('Dealer Hand ' + addUpHand(dealersHand));
    
    if (addUpHand(playersHand) === 21){
        gameOver.innerHTML= "Player WINS with BlackJack!" + addUpHand(playersHand);
    } else if (addUpHand(dealersHand) === 21) {
        gameOver.innerHTML= "Dealer WINS with BlackJack!" + addUpHand(dealersHand);
    } 
    return; 
}



function hitMe() {     
    // playerHit;                                                                         //created HIT function 
    let playerHit = randomCard(deck);          //variable called playerHit refers back to the randomCard function made in line 37
    // playerCard3.innerHTML= playerHit.value + playerHit.suit;   
    playersHand.push(playerHit);
    clickMessage.innerHTML= "Player has " + addUpHand(playersHand);
    console.log ('Player Hand ' + addUpHand(playersHand));
    if (addUpHand(playersHand) > 21 ) {
        console.log("Bust");
        clickMessage.innerHTML= "Player BUST loses with " + addUpHand(playersHand);
        clickMessage2.innerHTML= "Dealer WINS!"
        }
            
        // playersHand.push(playerHit);
        console.log(playersHand)
        for (let i =0; i < playerCard4.length; i++) {
            playerCard4[i].innerHTML= playersHand[i+2].value + playersHand[i+2].suit;   

        }
        // clickMessage.innerHTML= "Player has " + addUpHand(playersHand);
        if (addUpHand(playersHand) > 21 ) {
            console.log("Bust");
            clickMessage.innerHTML= "Player BUST loses with " + addUpHand(playersHand);
        }
        return;
 }
    

    function addUpHand(hands) {
    sum = 0 
    for (let i = 0; i < hands.length; i++) {
        sum = sum + hands[i].number;
    }
    return sum; 
}                                                           //

function stay() {
    dealersTurn = true;
    let dealerHit = randomCard(deck)
    if(addUpHand(dealersHand) < 17 ) {
        dealersHand.push(dealerHit); 
        // console.log(dealersHand.push(playerHit));
        // console.log(addUpHand(dealersHand));
        for (let i = 0; i < dealersHand.length; i++) {
            dealerCard4[i].innerHTML= dealersHand[i+2].value + dealersHand[i+2].suit
            clickMessage2.innerHTML= "Dealer has " + addUpHand(dealersHand);
            console.log(dealersHand);
            console.log(dealersHand[i])        //recurssion - will run stay again and continue to run until it hits the condition of < 17
            stay();    
        }
        // dealerCard3.innerHTML= dealerHit.value + dealerHit.suit;
        addUpHand(dealersHand);
        // dealerCard3.innerHTML= dealerHit.value + dealerHit.suit;
        clickMessage2.innerHTML= "Dealer has " + addUpHand(dealersHand);
    }
    if (addUpHand(dealersHand) > 21 ) {
        console.log("Bust");
        clickMessage.innerHTML= "Player WINS with " + addUpHand(playersHand);
        clickMessage2.innerHTML= "Dealer BUST Loser!"
    }
    checkForWinner();
    // console.log ('Dealer Hand ' + addUpHand(dealersHand));
    // console.log(dealersHand);
}

function checkForWinner () {
    if (addUpHand(playersHand) === 21 && addUpHand(dealersHand) === 21) {
        gameOver.innerHTML=  "PUSH! Player and Dealer have 21" + addUpHand(playersHand);
    } else if (addUpHand(dealersHand) > addUpHand(playersHand) && addUpHand(dealersHand) > 16 && addUpHand(dealersHand) <=21){
        gameOver.innerHTML= "Dealer WINS with " + addUpHand(dealersHand);
    } else if (addUpHand(playersHand) > addUpHand(dealersHand) && addUpHand(playersHand) > 16 && addUpHand(playersHand) <=21){
        gameOver.innerHTML=  "Player WINS with " + addUpHand(playersHand);
    } else if (addUpHand(playersHand) === addUpHand(dealersHand)) {
        gameOver.innerHTML=  "Its a TIE!!!" ;
    }
    console.log(addUpHand(playersHand));
  
}


// function gameRestart() {
//     if (gameIsLive) {
//         clickMessage.innerHTML= "";
//         clickMessage2.innerHTML= "";
//         gameOver.innerHTML= "";
//         cardContainer = "";
//         let bothScores = addUpHand(playersHand) && addUpHand(dealersHand);
//         bothScores = ""; 
//         deck[obj] = "";
        
       
//     }
   
// }
// checkForWinner()




newGame.addEventListener('click', startGame,{once : true});                              //this event listener attached to line 1 queryselector & html Line 25  // - start the game with clicking
hit.addEventListener('click', hitMe);
stand.addEventListener('click', stay);
// reset.addEventListener('click', gameRestart);
let newGame = document.querySelector('.newGame');
let deal = document.querySelector('.deal');
let hit = document.querySelector('.hit');
let stand = document.querySelector('.stand');
let clickMessage = document.querySelector('.clickMessage');
let cardContainer = document.querySelector('.cardContainer');
let playerCard1 = document.querySelector('.playerCard1')
let playerCard2 = document.querySelector('.playerCard2')
let playerCard3 = document.querySelector('.playerCard3')
let dealerCard1 = document.querySelector('.dealerCard1')
let dealerCard2 = document.querySelector('.dealerCard2')



//Create Variables to Build Deck

let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];       //Created an array for the card values.
let suits = ["clubs", "diamonds", "hearts", "spades"];                                 //Created an array for the suits.
// let numbers = [parseInt(values[0]), parseInt(values[1]), parseInt(values[2]), parseInt(values[3]), parseInt(values[4]), parseInt(values[5]), parseInt(values[6]), parseInt(values[7]), parseInt(values[8])]


let deck = [];  



// let playerHand;
// let dealerHand;
    
function createDeck() {                                                  // My deck array.  
    for (let i = 0; i < values.length; i++) {                          //created a loop for variable of values representing 2 through Ace
        for (let j = 0; j < suits.length; j++) {                       //nested a loop for variable of suits representing clubs, diamonds, hearts, spade.
            let numbers = parseInt(values[i]);
            if (values[i] == "J" || values[i] == "Q" || values [i] == "K")
            numbers = 10;
            if (values[i] == "A")
            numbers = 11;
            let obj =  {                                              //turning the loops into an OBJECT with {} calling the object via function on 19
                value: values[i], suit: suits[j], number: numbers
            };                                                        //The loop/nested loop console logs out 2-A for each suit!
            deck.push(obj);        //pushes every iteration into array from 13/14 //I just pushed the nested loops into line 6 array creating the deck.
        }
    }     
}    

 createDeck();    
 


 //Making 2nd Commit here.
 
function randomCard(deck) {                                           //created function called randomCard calling the  created deck          
    let dealRandomCard = Math.floor(deck.length * Math.random());    //created variable dealRandomCard selecting random combinations.
    return deck[dealRandomCard];                                    // return the function
    
}
// console.log(randomCard(deck));                                       //console logged the function and html shows random cars ie; j of heart

//3rd commit - random deck - 
let playersHand = [];
let dealersHand = [];

let playerFirstCard = randomCard(deck); 
let playerSecondCard = randomCard(deck);                        
let dealerFirstCard = randomCard(deck);
let dealerSecondCard = randomCard(deck);    

let playerHit = randomCard(deck);             //variable called playerHit refers back to the randomCard function made in line 37

function startGame() {                                          //created startGame function
     playerFirstCard;  
     playerSecondCard;                                             //created new variables for player/dealer
     dealerFirstCard;                 // let dealerHand = [randomCard(deck), randomCard(deck)];  // invoking randomCard function in line 37
     dealerSecondCard;
     playerCard1.innerHTML= playerFirstCard.value + playerFirstCard.suit
     playerCard2.innerHTML= playerSecondCard.value + playerSecondCard.suit
     dealerCard1.innerHTML= dealerFirstCard.value + dealerFirstCard.suit
     dealerCard2.innerHTML= dealerSecondCard.value + dealerSecondCard.suit
     playersHand.push(playerFirstCard)
     playersHand.push(playerSecondCard)
     dealersHand.push(dealerFirstCard)
     dealersHand.push(dealerSecondCard)

    //  playerCard2.innerHTML= playerHit.value + playerHit.suit 
     console.log(playersHand);   
     console.log(dealersHand);                                      //console log shows 2 cards per hand 4 cards total
    //  console.log(playerSecondCard);
    //  console.log(dealerFirstCard);
    //  console.log(dealerSecondCard)
    // scores(playersHand, handTotal);
    console.log (addUpHand(playersHand));
     return; 
}
newGame.addEventListener('click', startGame);                              //this event listener attached to line 1 queryselector & html Line 25  // - start the game with clicking

  

function hitMe() {     
    playerHit;                                                            //created HIT function 
    playerCard3.innerHTML= playerHit.value + playerHit.suit   
    playersHand.push(playerHit)
    console.log(playersHand)
    return;
}
hit.addEventListener('click', hitMe);

// let handTotal = 0
// function scores(cards, sum) {               
//     sum = 0                                                                 //
//     for (let i = 0; i < cards.length; i++)  {                              //this function .numbers is my values in 33+35
//     sum += cards[i].number
//     }
//     console.log(sum)
// }

function addUpHand(hands) {
    sum = 0 
    for (let i = 0; i < hands.length; i++) {
    sum = sum + hands[i]
    }
    return sum;
    
}
console.log (addUpHand(playersHand));
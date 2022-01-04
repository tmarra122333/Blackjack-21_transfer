//Create Variables to Build Deck

let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];       //Created an array for the card values.
let suits = ["clubs", "diamonds", "hearts", "spades"];                                 //Created an array for the suits.

let deck = [];  
    
function createDeck() {                                       // My deck array.  
    for (let i = 0; i < values.length; i++) {                     //created a loop for variable of values representing 2 through Ace
        for (let j = 0; j < suits.length; j++) {                 //nested a loop for variable of suits representing clubs, diamonds, hearts, spade.
            let cardDeck =  {
                value: values[i], suit: suits[j]
            };                                                 //The loop/nested loop console logs out 2-A for each suit!
            deck.push(cardDeck);           
        }
    }     
}    
 
 createDeck();
 console.log(deck)

 //Making 2nd Commit here.
 
function randomCard(deck) {
    for (let i = 0; i < 52; i ++) {
        let randomCard = deck[i];
        let randomIndex = Math.floor(Math.random() * 52);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = randomCard;
    }


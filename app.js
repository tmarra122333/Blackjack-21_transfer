//Create Variables to Build Deck

let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];       //Created an array for the card values.
let suits = ["clubs", "diamonds", "hearts", "spades"];                                 //Created an array for the suits.

let deck = [];  
    
function createDeck() {                                                  // My deck array.  
    for (let i = 0; i < values.length; i++) {                           //created a loop for variable of values representing 2 through Ace
        for (let j = 0; j < suits.length; j++) {                       //nested a loop for variable of suits representing clubs, diamonds, hearts, spade.
            let obj =  {                                              //turning the loops in an OBJECT with {} calling the object via function 19
                value: values[i], suit: suits[j]
            };                                                        //The loop/nested loop console logs out 2-A for each suit!
            deck.push(obj);                                          //I just pushed the nested loops into line 6 array creating the deck.
        }
    }     
}    

 createDeck();



 //Making 2nd Commit here.
 
function randomCard(deck) {                                           //created function called randomCard calling the  created deck          
    let dealRandomCard = Math.floor(deck.length * Math.random());    //created variable dealRandomCard selecting random combinations.
    return deck[dealRandomCard];                                    // return the function
    
}
console.log(randomCard(deck));                                       //console logged the function and html shows random cars ie; j of heart

//3rd commit - random deck - 
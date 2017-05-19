///////////////////
// Simpsons     //
//       RPG    //
/////////////////
// 
// Pseudo Code
// 
// Start game , choose one of the 4 characters who you want to use for rest of the game
// Player chooses who to fight, and moved to defender area
// 
// 'Attack' button - damages defender, increments each time clicked by Attack Power
// opponents HP is decreased, opponents attack decreases players HP, but does not increment
// HP i showen at bottom of players images

// When defenders HP is <= 0, remove from defender area, players chooses next opponent
// player must defeat all opponents

// if player HP is <= 0, lose game




// starts game at page load
$(document).ready(function() {

    // Global Variables


    // Character Objects

    var playerOne = {
        name: 'Homer',
        hp: 110,
        attackPower: 20,
        counterAttack: 5,
    }

    var playerTwo = {
        name: 'Bart',
        hp: 125,
        attackPower: 13,
        counterAttack: 10,
    }

    var playerThree = {
        name: 'Lisa',
        hp: 105,
        attackPower: 15,
        counterAttack: 5,
    }

    var playerFour = {
        name: 'Marge',
        hp: 115,
        attackPower: 10,
        counterAttack: 15,
    }

    // end document.ready()
});
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
// player must defeat all 3 opponents to win

// if player HP is <= 0, lose game


// Global Variables

var character = "";
var yourDefender = "";
var defeatedCount = 0;
var yourCharacter = "";
var yourEnemies = false;

// Character Objects stored into array

characterOptions = [

    playerOne = {
        name: 'Homer',
        hp: 110,
        attackPower: 20,
        counterAttack: 5,
        numberOfAttacks: 1
    },
    playerTwo = {
        name: 'Bart',
        hp: 125,
        attackPower: 13,
        counterAttack: 10,
        numberOfAttacks: 1,
    },

    playerThree = {
        name: 'Lisa',
        hp: 105,
        attackPower: 15,
        counterAttack: 5,
        numberOfAttacks: 1
    },
    playerFour = {
        name: 'Marge',
        hp: 115,
        attackPower: 10,
        counterAttack: 15,
        numberOfAttacks: 1
    }
]

var startGame = function() {

    // click event when selecting your character
    $('.boxDescription').click(function() {
        // when character is selected 1. move to player-area 2. change bg to black
        var $this = $(this);
        $this.addClass('selected');
        $this.removeClass('unselected');
        $(this).appendTo("#player-area");
        // store your character object data
        yourCharacter = characterOptions[$this.data('player') - 1];
        console.log("Your Character " + yourCharacter.name);
        // other 3 characters move to enemies-section
        $('.boxDescription:not(.selected)').appendTo("#enemies-attack");

        // event handler for choosing yourDefender
        $('.unselected').click(function() {
            $('#enemies-attack').addClass('defender');
            // move enemy to #enemies-attack
            $(this).appendTo('#fight-section');
            // store defender object data
            yourDefender = characterOptions[$('.unselected').data('player') - 1];
            console.log('your opponent: ' + yourDefender.name);
        }); // end choosing yourDefender
    }); // end choosing yourCharacter & yourDefender

    // attack button function
    $(".btn-danger").click(function(yourCharacter, yourDefender) {

        var attacksIncrement = yourCharacter.numberOfAttacks++;
        var attackPowerIncrement = attacksIncrement * yourCharacter.attackPower;
        yourDefender.hp -= attackPowerIncrement;

        // decrement enemy hp by attackPower
        yourCharacterhp = yourCharacter.hp - yourDefender.attackPower;
        yourDefenderhp = yourDefender.hp - yourCharacter.attackPower;
        console.log("your HP: " + yourCharacterhp + " your defender HP: " + yourDefenderhp);

        // if defender hp <= 0 - remove from fight-section, add to defeatedCount
        if (yourDefender.hp <= 0) {
            yourDefender.element.hide();
            defeatedCount++;

            //  if all 3 defenders are beat, Win!
            if (defeatedCount === 3) {
                alert("You won!");
            }
        } else {
            yourCharacter.hp -= yourDefender.counterAttackPower;
            yourCharacter.find('hp').html(yourCharacter.hp);
        };

    });

}; // end startGame()

// starts game at page load
$(document).ready(function() {

    startGame();

}); // end document.ready()
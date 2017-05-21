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


// Global Variables

var charHp = 0;
var enemHp = 0;
var character = "";


// Character Objects

characterOptions = [

    playerOne = {
        name: 'Homer',
        hp: 110,
        attackPower: 20,
        counterAttack: 5,
    },
    playerTwo = {
        name: 'Bart',
        hp: 125,
        attackPower: 13,
        counterAttack: 10,
    },

    playerThree = {
        name: 'Lisa',
        hp: 105,
        attackPower: 15,
        counterAttack: 5,
    },
    playerFour = {
        name: 'Marge',
        hp: 115,
        attackPower: 10,
        counterAttack: 15,
    }
]

// for storing character details
// $('.characterOne').data('stats', playerOne);
// var playerStats = $('.characterOne').data('stats'); // playerOne
// var playerHealth = $('.characterOne').data('stats').hp; // playerOne.hp


var yourCharacter = "";
var yourEnemies = false;
var yourDefender = "";


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
        console.log("work? " + yourCharacter.name);

        // other 3 characters move to enemies-section
        $('.boxDescription:not(.selected)').appendTo("#enemies-attack");

        // choose 1 of 3 for 1st enemy
        $('.unselected').click(function() {
                $(this).addClass('defender');
                // move enemy to #enemies-attack
                $(this).appendTo('#fight-section');
                // store defender object data
                yourDefender = characterOptions[$(this).data('player') - 1];
                console.log('your opponent: ' + yourDefender.name);
            }) // end enenmy click
    }); // end character click

    // attack button function
    $(".btn-danger").click(function() {
        // decrement enemy hp by attackPower
        yourCharacterhp = yourCharacter.hp - yourDefender.hp;
        console.log("your HP" + yourCharacter.hp + " should subtract " + yourDefender.hp);
        console.log('Hit! Your HP should be: ' + yourCharacter);
    });
    // increment attackPower by original attackPower each time attacking

    // decremeant player hp by enemy attackPower


    // })

    // function for next enemy

    // if player hp <= 0 - lose game

    // if enemy 1 hp <= 0, remove from game, player hp stays in memory
    // player chooses next opponent
    // if enemy 2 hp <= 0, remove from game, player hp stays in memory
    // player choses final opponent
    // if final enemy <= 0, you win!

}; // end startGame()



// starts game at page load
$(document).ready(function() {

    startGame();

    // end document.ready()
});
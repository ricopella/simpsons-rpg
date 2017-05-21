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

//  for storing character details
// $('.characterOne').data('stats', playerOne);
// var playerStats = $('.characterOne').data('stats'); // playerOne
// var playerHealth = $('.characterOne').data('stats').hp; // playerOne.hp


var yourCharacter = false;
var yourEnemies = false;
var yourDefender = false;


var startGame = function() {
    var chosenCharecter = false;
    var enemies = false;
    var chosenEnemy = false;
    // click event when selecting your character
    $('.boxDescription').click(function() {
        // when character is selected 1. move to player-area 2. change bg to black
        var $this = $(this);

        $this.addClass('selected');
        $this.removeClass('unselected');
        $(this).appendTo("#player-area");
        chosenCharacter = true;

        // other 3 characters move to enemies-section
        $('.boxDescription:not(.selected)').appendTo("#enemies-attack");

        // choose 1 of 3 for 1st enemy
        $('.unselected').click(function() {
            $(this).addClass('defender');
            // move enemy to #enemies-attack
            $(this).appendTo('#fight-section');
            chosenEnemy = true;
        })



    });

    // // add remaining characters to enemies-attack area
    // $('.boxDescription').click(function() {
    //     $(!this).appendTo("#enemies-attack");
    // })

    // // attack button function
    // $(".btn-danger").click(function() {
    //     // decrement enemy hp by attackPower
    //     // increment attackPower by original attackPower each time attacking

    //     // decremeant player hp by enemy attackPower


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
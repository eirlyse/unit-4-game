$(document).ready(function () {


    //global variables
    let wins = 0;
    let losses = 0;
    let totalScore = 0;


    //update total score text
    $('#totalScore').text(totalScore);

    // set jewel variables to a random number between 1 and 12

    let redJewel = Math.floor(Math.random() * 12) + 1;
    let blueJewel = Math.floor(Math.random() * 12) + 1;
    let yellowJewel = Math.floor(Math.random() * 12) + 1;
    let greenJewel = Math.floor(Math.random() * 12) + 1;

    //set random number between 19 and 120 at the start of the game

    let randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

    //update html to reflect the random number 

    $('#randomNumber').html(randomNumber);





    function win() {
        // win counter
        wins++;

        //updates wins text
        $('#wins').text(wins);

        reset();
    }

    function loss() {
        // loss counter 
        losses++;

        // updates losses text
        $('#losses').text(losses);

        reset();
    }
    //first jewel button on click function 
    $('#redJewel').click(() => {

        //add value of jewel to total score

        totalScore = totalScore + redJewel
        //update score text

        $('#totalScore').text(totalScore);

        // if the total score is equal to the random number, the user wins
        if (totalScore === randomNumber) {
            win();
            reset();

            // otherwise, the user loses    

        } else if (totalScore > randomNumber) {
            loss();
            reset();

        }
    });

    // second jewel button on click function 
    $('#blueJewel').click(() => {

        //add value of jewel to total score
        totalScore = totalScore + blueJewel;
        //update score text
        $('#totalScore').text(totalScore);

        // if the total score is equal to the random number, the user wins
        if (totalScore === randomNumber) {
            win();
            reset();

            // otherwise, the user loses
        } else if (totalScore > randomNumber) {
            loss();
            reset();

        }
    });

    //third jewel button on click function
    $('#yellowJewel').click(() => {

        //add value of jewel to total score

        totalScore = totalScore + yellowJewel;

        //update score text

        $('#totalScore').text(totalScore);

        // if the total score is equal to the random number, the user wins
        if (totalScore === randomNumber) {
            win();
            reset();

            // otherwise, the user loses
        } else if (totalScore > randomNumber) {
            loss();
            reset();

        }
    });

    // forth jewel button on click function
    $('#greenJewel').click(() => {

        //add value of jewel to total score
        totalScore = totalScore + greenJewel;

        //update score text
        $('#totalScore').text(totalScore);

        // if the total score is equal to the random number, the user wins
        if (totalScore === randomNumber) {
            win();
            reset();

            // otherwise, the user loses    
        } else if (totalScore > randomNumber) {
            loss();
            reset();

        }
    });



    //restart game
    function reset() {
        totalScore = 0;
        $('#totalScore').text(totalScore);
    }

});
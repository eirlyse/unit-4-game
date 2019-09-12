$(document).ready(function (){


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
        wins++;
        $('#wins').text(wins);

        reset();
    }

    function lose() {
        losses++;
        $('#losses').text(losses);

        reset();
    }
//first jewel button on click function 
    $('#redJewel').click(() => {
        //add value of jewel to total score
        totalScore = totalScore + redJewel
        //update score text
        $('#totalScore').text(totalScore);
        if (totalScore === randomNumber) {
            win();
            reset();

        } else if (totalScore > randomNumber) {
            lose();
            reset();

        }
    });

// second jewel button on click function 
    $('#blueJewel').click(() => {
        //add value of jewel to total score
        totalScore = totalScore + blueJewel;
        //update score text
        $('#totalScore').text(totalScore);
        if (totalScore === randomNumber) {
            win();
            reset();

        } else if (totalScore > randomNumber) {
            lose();
            reset();

        }
    });

//third jewel button on click function
    $('#yellowJewel').click(() => {
        //add value of jewel to total score
        totalScore = totalScore + yellowJewel;
        //update score text
        $('#totalScore').text(totalScore);
        if (totalScore === randomNumber) {
            win();
            reset();

        } else if (totalScore > randomNumber) {
            lose();
            reset();

        }
    });

// forth jewel button on click function
    $('#greenJewel').click(() => {
        //add value of jewel to total score
        totalScore = totalScore + greenJewel;
        //update score text
        $('#totalScore').text(totalScore);
        if (totalScore === randomNumber) {
            win();
            reset();

        } else if (totalScore > randomNumber) {
            lose();
            reset();

        }
    });



    //restart game
    function reset() {
        totalScore = 0;
        $('#totalScore').text(totalScore);
    }

});
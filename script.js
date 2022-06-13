/* script */

function computerPlay() {
    var choice = Math.random();
    if(choice < 0.333) {
        return 'Rock';
    } else if(choice >= .333 && choice < .666) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}



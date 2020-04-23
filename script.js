window.addEventListener("load", start);

let lives = 3;
let points = 0;

function start() {
    console.log("start");
    startCoin();
    startBomb();
    startBomb1();
    startCharacter();
}


/*function startUI() {
    document.querySelector("#coin1").addEventListener("click", getGold);
    document.querySelector("#coin2").addEventListener("click", getGold);
    document.querySelector("#coin3").addEventListener("click", getGold);
    document.querySelector("#bomb").addEventListener("click", looseLife);
    document.querySelector("#bomb1").classList.add("looseLife");
}*/


function startCharacter() {
    console.log("startCharacter");
    document.querySelector("#character").classList.add("falling");
    document.querySelector("#character").classList.add("speed3");
    document.querySelector("#character1").classList.add("falling");
    document.querySelector("#character1").classList.add("speed2");

    document.querySelector("#character").addEventListener("click", characterClicked);
    document.querySelector("#character1").addEventListener("click", character1Clicked);

}

function characterClicked() {
    console.log("characterClicked");
    document.querySelector("#character").removeEventListener("click", character1Clicked);

    document.querySelector("#character").classList.add("pause");
    document.querySelector("#character .sprite").classList.add("explode");
    document.querySelector("#character").classList.add("disappear");
    explosion();

    console.log("get point");
    console.log(points);

    points++;
    console.log("you have " + points + " points");
    document.querySelector("#score").textContent = "points " + points;


}


function characterRestart() {
    console.log("characterRestart");
    document.querySelector("#character").classList.remove("pause");
    document.querySelector("#character .sprite").classList.remove("explode");
    document.querySelector("#character1").classList.remove("disappear");
    document.querySelector("#character").classList.add("falling");
    document.querySelector("#character").classList.remove("shake");
    document.querySelector("#character").addEventListener("click", characterClicked);
}

function character1Clicked() {
    console.log("character1Clicked");
    document.querySelector("#character1").removeEventListener("click", character1Clicked);

    document.querySelector("#character1").classList.add("pause");
    document.querySelector("#character1 .sprite").classList.add("explode");
    document.querySelector("#character1").classList.add("disappear");
    explosion();

    console.log("get point");
    console.log(points);

    points++;
    console.log("you have " + points + " points");
    document.querySelector("#score").textContent = "points " + points;


}

function character1Restart() {
    console.log("character1Restart");
    document.querySelector("#character1").classList.remove("pause");
    document.querySelector("#character1 .sprite").classList.remove("explode");
    document.querySelector("#character1").classList.remove("disappear");
    document.querySelector("#character1").classList.add("falling");
    document.querySelector("#character1").classList.remove("shake");
    document.querySelector("#character1").addEventListener("click", character1Clicked);
}



function startBomb() {
    console.log("startBomb");
    document.querySelector("#bomb").classList.add("falling");
    document.querySelector("#bomb").classList.add("speed3");

    document.querySelector("#bomb").addEventListener("click", bombClicked);
}

function bombClicked() {
    console.log("bombClicked");
    document.querySelector("#bomb").removeEventListener("click", bombClicked);

    document.querySelector("#bomb").classList.add("pause");
    document.querySelector("#bomb .sprite").classList.add("explode");
    document.querySelector("#bomb").classList.add("disappear");

    explosion();

    lives--;

    document.querySelector("#heart_" + lives).classList.add("broken_heart");

    console.log("you have " + lives + " lives left");
}

function explosion() {
    console.log("explosion");
    document.querySelector("#bomb").removeEventListener("animationend", explosion);
    document.querySelector("#screen").classList.add("shake");
    document.querySelector("#screen").addEventListener("animationend", bombRestart);
    document.querySelector("#bomb").classList.remove("falling");

    document.querySelector("#bomb1").removeEventListener("animationend", explosion);
    document.querySelector("#screen").classList.add("shake");
    document.querySelector("#screen").addEventListener("animationend", bomb1Restart);
    document.querySelector("#bomb1").classList.remove("falling");

    document.querySelector("#character").removeEventListener("animationend", explosion);
    document.querySelector("#screen").classList.add("shake");
    document.querySelector("#screen").addEventListener("animationend", characterRestart);
    document.querySelector("#character").classList.remove("falling");


    document.querySelector("#character1").removeEventListener("animationend", explosion);
    document.querySelector("#screen").classList.add("shake");
    document.querySelector("#screen").addEventListener("animationend", character1Restart);
    document.querySelector("#character1").classList.remove("falling");



}

function bombRestart() {
    console.log("bombRestart");

    document.querySelector("#bomb").classList.remove("pause");
    document.querySelector("#bomb .sprite").classList.remove("explode");
    document.querySelector("#bomb").classList.remove("disappear");
    document.querySelector("#bomb").classList.add("falling");
    document.querySelector("#bomb").classList.remove("shake");
    document.querySelector("#bomb").addEventListener("click", bombClicked);

}
//*Bomb1/
function startBomb1() {
    console.log("startBomb1");
    document.querySelector("#bomb1").classList.add("falling");
    document.querySelector("#bomb1").classList.add("speed3");
    document.querySelector("#bomb1").addEventListener("click", bomb1Clicked);



}

function bomb1Clicked() {
    console.log("bomb1Clicked");
    document.querySelector("#bomb1").removeEventListener("click", bomb1Clicked);

    document.querySelector("#bomb1").classList.add("pause");
    document.querySelector("#bomb1 .sprite").classList.add("explode");


    explosion();


    lives--;

    document.querySelector("#heart_" + lives).classList.add("broken_heart");

    console.log("you have " + lives + " lives left");
}


function bomb1Restart() {
    console.log("bomb1Restart");
    document.querySelector("#bomb1").classList.remove("pause");
    document.querySelector("#bomb1 .sprite").classList.remove("explode");
    document.querySelector("#bomb1").classList.remove("disappear");
    document.querySelector("#bomb1").classList.add("falling");
    document.querySelector("#bomb1").classList.remove("shake");
    document.querySelector("#bomb1").addEventListener("click", bomb1Clicked);

}

function startCoin() {
    console.log("startCoin");
    document.querySelector("#coin1").classList.add("falling");
    document.querySelector("#coin1").classList.add("speed1");
    document.querySelector("#coin2").classList.add("falling");
    document.querySelector("#coin3").classList.add("falling");
    document.querySelector("#coin3").classList.add("speed3");

    document.querySelector("#coin1").addEventListener("click", coin1Clicked);
    document.querySelector("#coin2").addEventListener("click", coin2Clicked);
    document.querySelector("#coin3").addEventListener("click", coin3Clicked);


}

function coin1Clicked() {

    console.log("coin1Clicked");
    document.querySelector("#coin1").removeEventListener("click", coin1Clicked);
    document.querySelector("#coin1").classList.add("pause");
    document.querySelector("#coin1 .sprite").classList.add("zoom");
    document.querySelector("#coin1 .sprite").classList.add("disappear");
    document.querySelector("#coin1 .sprite").addEventListener("animationend", coin1Restart);


    console.log("get point");
    console.log(points);

    points++;
    console.log("you have " + points + " points");
    document.querySelector("#score").textContent = "points " + points;

}

function coin1Restart() {
    document.querySelector("#coin1").removeEventListener("animationend", coin1Restart);
    document.querySelector("#coin1").classList.remove("pause");
    document.querySelector("#coin1 .sprite").classList.remove("zoom");
    document.querySelector("#coin1").classList.remove("falling");
    document.querySelector("#coin1 .sprite").classList.remove("disappear");
    document.querySelector("#coin1").offsetHeight;
    document.querySelector("#coin1").classList.add("falling");
    document.querySelector("#coin1").addEventListener("click", coin1Clicked);
}

function coin2Clicked() {
    console.log("coin2Clicked");
    document.querySelector("#coin2").removeEventListener("click", coin2Clicked);
    document.querySelector("#coin2").classList.add("pause");
    document.querySelector("#coin2 .sprite").classList.add("zoom");
    document.querySelector("#coin2 .sprite").classList.add("disappear");
    document.querySelector("#coin2 .sprite").addEventListener("animationend", coin2Restart);

    console.log("get point");
    console.log(points);

    points++;
    console.log("you have " + points + " points");
    document.querySelector("#score").textContent = "points " + points;

}

function coin2Restart() {
    document.querySelector("#coin2").removeEventListener("animationend", coin2Restart);
    document.querySelector("#coin2").classList.remove("pause");
    document.querySelector("#coin2 .sprite").classList.remove("zoom");
    document.querySelector("#coin2").classList.remove("falling");
    document.querySelector("#coin2 .sprite").classList.remove("disappear");
    document.querySelector("#coin2").offsetHeight;
    document.querySelector("#coin2").classList.add("falling");
    document.querySelector("#coin2").addEventListener("click", coin2Clicked);
}

function coin3Clicked() {
    console.log("coin3Clicked");
    document.querySelector("#coin3").removeEventListener("click", coin3Clicked);
    document.querySelector("#coin3").classList.add("pause");
    document.querySelector("#coin3 .sprite").classList.add("zoom");
    document.querySelector("#coin3 .sprite").classList.add("disappear");
    document.querySelector("#coin3 .sprite").addEventListener("animationend", coin3Restart);

    console.log("get point");
    console.log(points);

    points++;
    console.log("you have " + points + " points");
    document.querySelector("#score").textContent = "points " + points;

}

function coin3Restart() {
    document.querySelector("#coin3").removeEventListener("animationend", coin3Restart);
    document.querySelector("#coin3").classList.remove("pause");
    document.querySelector("#coin3 .sprite").classList.remove("zoom");
    document.querySelector("#coin3").classList.remove("falling");
    document.querySelector("#coin3 .sprite").classList.remove("disappear");
    document.querySelector("#coin3").offsetHeight;
    document.querySelector("#coin3").classList.add("falling");
    document.querySelector("#coin3").addEventListener("click", coin3Clicked);
}


/*function coinReachedBottom() {
    console.log("Reach Bottom");
    document.querySelector("#coin1").classList.toggle("position2");
    document.querySelector("#coin2").classList.toggle("position3");
    document.querySelector("#coin3").classList.toggle("position5");
}*/

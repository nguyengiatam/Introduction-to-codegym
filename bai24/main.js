const UP = 38;
const DOWN = 40;
const LEFT = 37;
const RIGHT = 39;
let stopGame = false;
let stopSpeedUp;
let reverseCar = [];
let pointImpactX;
let pointImpactY;
let timeCreatContraryCar = Math.floor(Math.random()*1500) + 3000;
let myCanvas = document.getElementById("street").getContext("2d");
let myCar = new Car(40, 80, 620, 220, myCanvas, "img/mycar.png");
let street = new Street(myCanvas, "img/street.png");
for(let i = 0; i < 12; i++){
    reverseCar[i] = new Car(40, 80, 700, 0, myCanvas, "img/vatcan" + i + ".png");
}

window.onload = function drawStartGame(){
    street.drawStreet(street.top);
    myCar.drawCar();
    myCar.explosion.src = "img/explosion.png";
}

function restart(){
    $(".end").css("display", "none");
    $("#street").css("opacity", "1");
    stopGame = false;
    myCar.top = 620;
    myCar.left = 220;
    street.speed = 2.5;
    for(let i = 0; i < reverseCar.length; i++){
        reverseCar[i].top = 700;
        reverseCar[i].left = 0;
    }
    carMove();
    creatCar();
    speedUp();
}

function carMove(){
    $("#start").css("display", "none");
    $("#restart").css("display", "block");
    setTimeout(function(){
        let z = street.top - street.height + street.speed;
        if(street.top >= 700){
            street.top = 0;
        }
        myCanvas.clearRect(0, 0, 500, 700);
        street.top += street.speed;
        street.drawStreet(z);
        street.drawStreet(street.top);
        updateLocation();
        myCar.drawCar();
        if(stopGame == false){
            carMove();
        }
        else{
            myCar.carExplosion();
            clearTimeout(stopSpeedUp);
            $(".end").css("display", "block");
            $("#street").css("opacity", "0.5");
        }
    },12);
}

function speedUp(){
    stopSpeedUp = setTimeout(function(){
        street.speed += street.speed * 20/100;
        for(let i = 0; i < reverseCar.length; i++){
            reverseCar[i].speed += reverseCar[i].speed * 20/100;
        }
        speedUp();
    }, 15000);
}

function creatCar(){
    setTimeout(function(){
        timeCreatContraryCar = Math.floor(Math.random()*1800) + 700;
        while(true){
            let i = Math.floor(Math.random()*12);
            if(reverseCar[i].top > 700){
                reverseCar[i].creatCoordinates(street);
                break;
            }
        }
        if(stopGame == false){
            creatCar();
        }
    },timeCreatContraryCar);
}

function updateLocation(){
    for(let i = 0; i < reverseCar.length; i++){
        if(reverseCar[i].top <= 700){
            reverseCar[i].top += reverseCar[i].speed;
            reverseCar[i].setRightBottom();
            reverseCar[i].drawCar();
            if(myCar.checkImpactByCar(reverseCar[i]) == true){
                stopGame = true;
            }
        }
    }
}

window.addEventListener("keydown", function(){
    myCar.carControl(event.keyCode);
});
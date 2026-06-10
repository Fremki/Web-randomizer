const Start = "Number was generated!"
let randomNumber;
let scance = 3;

function generateNumber(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("StartGame").textContent = Start;
    if(randomNumber != undefined){
        document.getElementById("numberInput").value = "";
        document.getElementById("resultText").textContent = "";
    }
    scance = 3;
}

function checkNumber(){

    if(randomNumber == undefined){
        document.getElementById("resultText").textContent = "Please generate a number";
        document.getElementById("resultText").style.color = "orange";
    }

    else if(document.getElementById("numberInput").value == "" || isNaN(document.getElementById("numberInput").value)){
        document.getElementById("resultText").textContent = "Please enter a number";
        document.getElementById("resultText").style.color = "orange";
    }

    else if(document.getElementById("numberInput").value <= 0 || document.getElementById("numberInput").value > 100){
        document.getElementById("resultText").textContent = "Please enter a number between 1 and 100";
        document.getElementById("resultText").style.color = "orange";
    }

    else if(document.getElementById("numberInput").value == randomNumber){
        document.getElementById("resultText").textContent = "You win";
        document.getElementById("resultText").style.color = "green";
        randomNumber = undefined;
    }
    
    else{

        if(document.getElementById("numberInput").value < randomNumber){
            scance--;

            document.getElementById("resultText").innerHTML = "Too low, try again! <br> Remaining chances: " + scance;
            document.getElementById("resultText").style.color = "blue";
        }
        else if (document.getElementById("numberInput").value > randomNumber){
            scance--;

            document.getElementById("resultText").innerHTML = "Too high, try again! <br> Remaining chances: " + scance;
            document.getElementById("resultText").style.color = "blue";
        }
        
        if(scance == 0){
            document.getElementById("resultText").textContent = "You lose the number was: " + randomNumber;
            document.getElementById("resultText").style.color = "red";
            scance --;
            randomNumber = undefined;
        }

        else if(scance < 0){
            document.getElementById("resultText").textContent = "Please generate a new number";
            document.getElementById("resultText").style.color = "orange";
            generateNumber();
        }
    }
}

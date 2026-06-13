const Start = "Number was generated! You have 5 chances";
let randomNumber;
let scance = 5;
let guessList = [];

function generateNumber(){
    randomNumber = Math.floor(Math.random() * 100) + 1;

    document.getElementById("StartGame").textContent = Start;
    document.getElementById("numberInput").value="";
    document.getElementById("resultText").textContent="";
    document.getElementById("Numbers").textContent="";

    guessList = [];

    scance = 5;
}

function controlList(){
    document.getElementById("Numbers").innerHTML = "";
            
    for(let i = 0; i < guessList.length; i++){
        const li = document.createElement("li");
        li.textContent = guessList[i].value;

        const img = document.createElement("img");

        if(guessList[i].type == "low"){
                img.src ="../Photos/Maggiore.png";
        }
        else{
            img.src ="../Photos/Minore.png";
        }

        img.width = 40;
        img.height = 40;

        li.appendChild(img);
        document.getElementById("Numbers").appendChild(li);
    }
        
}

function checkNumber(){

    if(randomNumber == undefined){
        document.getElementById("resultText").textContent = "Please generate a number";
        document.getElementById("resultText").style.color = "orange";
        return;
    }

    else if(document.getElementById("numberInput").value == "" || isNaN(document.getElementById("numberInput").value)){
        document.getElementById("resultText").textContent = "Please enter a number";
        document.getElementById("resultText").style.color = "orange";
        return;
    }

    else if(document.getElementById("numberInput").value <= 0 || document.getElementById("numberInput").value > 100){
        document.getElementById("resultText").textContent = "Please enter a number between 1 and 100";
        document.getElementById("resultText").style.color = "orange";
        return;
    }

    else if(document.getElementById("numberInput").value == randomNumber){
        document.getElementById("resultText").textContent = "You win";
        document.getElementById("resultText").style.color = "green";
        randomNumber = undefined;
        return;
    }
    
    else{
        let Nums = document.getElementById("numberInput").value;
    
        document.getElementById("Numbers").innerHTML = "";

        if(document.getElementById("numberInput").value < randomNumber){
            guessList.push({
                value: Nums,
                type: "low"
            });
            
            controlList();

            scance--;

            document.getElementById("resultText").innerHTML = "Too low, try again! <br> Remaining chances: " + scance;
            document.getElementById("resultText").style.color = "lightblue"

            document.getElementById("numberInput").value ="";
        }

        else if (document.getElementById("numberInput").value > randomNumber){
            guessList.push({
                value: Nums,
                type: "high"
            });

            controlList();

            scance--;

            document.getElementById("resultText").innerHTML = "Too high, try again! <br> Remaining chances: " + scance;
            document.getElementById("resultText").style.color = "lightblue";

            document.getElementById("numberInput").value ="";
        }

        if(scance == 0){
            document.getElementById("resultText").textContent = "You lose the number was: " + randomNumber;
            document.getElementById("resultText").style.color = "red";
            scance --;
            randomNumber = undefined;
            
            document.getElementById("StartGame").textContent = "";

            document.getElementById("numberInput").value ="";
        }

        else if(scance < 0){
            document.getElementById("resultText").textContent = "Please generate a new number";
            document.getElementById("resultText").style.color = "orange";
            generateNumber();

            document.getElementById("numberInput").value ="";
        }
    }
}

document.getElementById("numberInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkNumber();
    }
});

addEventListener("keypress", function(event){
    if(event.key === "g" || event.key === "G"){
        generateNumber();
    }
});
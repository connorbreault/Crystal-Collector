//Pseudo

//Game start
//Target gets random number 19-120
//Each crystal gets random number 1-12
//Click event for each crystal
//Crystal numbers added up
//If equal to target increment win
//If over target increment loss



// Variables

var targetNumber = 0

var yourScore = 0

var wins = 0

var losses = 0



// Functions

    //get target number
    targetNumber = Math.floor(Math.random() * 101) + 19
    $("#targetNumber").html(targetNumber)
      
            
    //append variables
    $("#win").html(wins)
    $("#loss").html(losses)
    $("#yourScore").html(yourScore)
 
    
    //assign random numbers to crystals
    var randomNumOne = Math.floor(Math.random() * 11) + 1
    $("#crystalOne").append(randomNumOne)
    var randomNumTwo = Math.floor(Math.random() * 11) + 1
    $("#crystalTwo").append(randomNumTwo)
    var randomNumThree = Math.floor(Math.random() * 11) + 1
    $("#crystalThree").append(randomNumThree)
    var randomNumFour = Math.floor(Math.random() * 11) + 1
    $("#crystalFour").append(randomNumFour)


    //crystal click events that add to yourScore
    $("#crystalOne").on("click", function (){
        yourScore = randomNumOne + yourScore
        $("#yourScore").html(yourScore)
    })
    $("#crystalTwo").on("click", function (){
        yourScore = randomNumTwo + yourScore
        $("#yourScore").html(yourScore)
    })
    $("#crystalThree").on("click", function (){
        yourScore = randomNumThree + yourScore
        $("#yourScore").html(yourScore)
    })
    $("#crystalFour").on("click", function (){
        yourScore = randomNumFour + yourScore
        $("#yourScore").html(yourScore)
    })


    //track your score vs target number
    function scoreCheck(){
        if (yourScore = targetNumber) {
            win()
        }
        else if (yourScore > targetNumber) {
            lose()
        }
        }
    
    
    //wim and lose functions
    function win() {
        alert("You win!")
        wins++
        $("#win").html(wins)
        roundStart()
    }
    function lose() {
        alert("You lose!")
        losses++
        $("#loss").html(losses)
        roundStart()
    }


    //round reset, sets your score to 0 and randomizes target number & crystal numbers
    function roundStart() {
        targetNumber = Math.floor(Math.random() * 101) + 19
        yourScore = 0
        var randomNumOne = Math.floor(Math.random() * 11) + 1
        $("#crystalOne").append(randomNumOne)
        var randomNumTwo = Math.floor(Math.random() * 11) + 1
        $("#crystalTwo").append(randomNumTwo)
        var randomNumThree = Math.floor(Math.random() * 11) + 1
        $("#crystalThree").append(randomNumThree)
        var randomNumFour = Math.floor(Math.random() * 11) + 1
        $("#crystalFour").append(randomNumFour)
    }
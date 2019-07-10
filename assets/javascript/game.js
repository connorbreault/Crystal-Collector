//Pseudo

//Game start
//Target gets random number 19-120
//Each crystal gets random number 1-12
//Click event for each crystal
//Crystal numbers added up
//If equal to target increment win
//If over target increment loss



// Variables

var targetNumber;

var yourScore = 0

var wins = 0

var losses = 0

var round = 1

// Functions

    //get target number
    targetNumber = Math.floor(Math.random() * 101) + 19
    $("#targetNumber").html(targetNumber)
      
            
    //append variables
    $("#win").html(wins)
    $("#loss").html(losses)
    $("#yourScore").html(yourScore)
 
    
    //assign random numbers to crystals
    console.log ("--- ROUND:",round,"---")
    var randomNumOne = Math.floor(Math.random() * 11) + 1
    $("#crystalOne").append(randomNumOne)
    console.log("Blue=", randomNumOne)
    var randomNumTwo = Math.floor(Math.random() * 11) + 1
    $("#crystalTwo").append(randomNumTwo)
    console.log("Green=", randomNumTwo)
    var randomNumThree = Math.floor(Math.random() * 11) + 1
    $("#crystalThree").append(randomNumThree)
    console.log("Red=", randomNumThree)
    var randomNumFour = Math.floor(Math.random() * 11) + 1
    $("#crystalFour").append(randomNumFour)
    console.log("Yellow=", randomNumFour)


    //crystal click events that add to yourScore
    $("#crystalOne").on("click", function (){
        yourScore = randomNumOne + yourScore
        $("#yourScore").html(yourScore)
        scoreCheck()
    })
    $("#crystalTwo").on("click", function (){
        yourScore = randomNumTwo + yourScore
        $("#yourScore").html(yourScore)
        scoreCheck()
    })
    $("#crystalThree").on("click", function (){
        yourScore = randomNumThree + yourScore
        $("#yourScore").html(yourScore)
        scoreCheck()
    })
    $("#crystalFour").on("click", function (){
        yourScore = randomNumFour + yourScore
        $("#yourScore").html(yourScore)
        scoreCheck()
    })


    //track your score vs target number
    function scoreCheck(){
        if (yourScore === targetNumber) {
            alert("You win!")
            wins++
            $("#win").html(wins)
            roundStart()
        }
        else if (yourScore > targetNumber) {
            alert("You lose!")
            losses++
            $("#loss").html(losses)
            roundStart()
        }
        }


    //round reset, sets your score to 0 and randomizes target number & crystal numbers
    function roundStart() {
        round++
        console.log("--- ROUND:",round,"---")

        targetNumber = Math.floor(Math.random() * 101) + 19
        $("#targetNumber").html(targetNumber)

        yourScore = 0
        $("#yourScore").html(yourScore)


        randomNumOne = Math.floor(Math.random() * 11) + 1
        $("#crystalOne").html(randomNumOne)
        console.log("Blue=", randomNumOne)

        randomNumTwo = Math.floor(Math.random() * 11) + 1
        $("#crystalTwo").html(randomNumTwo)
        console.log("Green=", randomNumTwo)

        randomNumThree = Math.floor(Math.random() * 11) + 1
        $("#crystalThree").html(randomNumThree)
        console.log("Red=", randomNumThree)

        randomNumFour = Math.floor(Math.random() * 11) + 1
        $("#crystalFour").html(randomNumFour)
        console.log("Yellow=", randomNumFour)

        scoreCheck()
    }
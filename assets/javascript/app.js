var time;

var intervalId;

var clockRunning = false;

// object w/questions
var pokeQuestions = [
    {
    question: "What is the yellow mouse pokemon's name?",
    choices: ["Sandshrew", "Pikachu", "Ash Ketchum", "Buzzmouse"],
    // image: ["assets/images/Pikachu"],
    correct: 1 
    },
    {
    question: "Which of the following is NOT one of Eevee's evolutions?",
    choices: ["Vaporeon", "Espeon", "Leafeon", "Lightneon"],
    // image: ["assets/images/Eevee"],
    correct: 3
    },
    {
    question: "In the first Pokemon movie, what was the name of the pokemon cloned from Mew?",
    choices: ["Mewtwo", "Mewton", "Owtwem", "Meowth"],
    // image: ["assets/images/Mew"],
    correct: 0
    },
    {
    question: "What is the evolution of this pokemon called?",
    choices: ["Biggersaur", "Bulbasaur", "Ivysaur", "Venasaur"],
    // image: ["assets/images/Bulbasaur"],
    choice: 2
    }
]

var correct = 0;
var incorrect = 0;
var questionsRemaining = 0;
userGuess = "";
questionsCount = pokeQuestions.length;
var pick;
var index;
// var answeredQuestions = [];

//displays questions and choices
function displayQuestions() {
    for(var i = 0; i < pokeQuestions.length; i++){
        console.log(pokeQuestions[i].question);
        
        //creating new div to put content into 
        var questionDiv = $("<div>");

        var p = $("<p>");

        p.text(pokeQuestions[i].question);

        var questionImage = $("<img>");
        questionImage.attr("src", pokeQuestions[i].image);
        // $("#question").append(pokeQuestions[i].question + "</br>");

        questionDiv.append(p);
        questionDiv.append(questionImage);
        
        var choicesArr = pokeQuestions[i].choices;    
    
        for(var j = 0; j < choicesArr.length; j++) {
            var radio = $("<input type='radio' name='option" + i + "' value='" + j + "'>" + choicesArr[j] + "</input></br>");
            // radio.text(choicesArr[j]);
            // radio.attr("data-id", j);
            questionDiv.append(radio);
        }
        $("#questions").append(questionDiv)
    }
}

//timer
var timer = {
    time: 60,

    run: function () {
        if(!clockRunning) {
            intervalId = setInterval(timer.decrement, 1000);
            clockRunning = true;
            $("#start").hide();
            event.preventDefault();
            displayQuestions();
        }
    },
    decrement: function() {
        timer.time--,
        $("#timer").text("00:" + timer.time);
        if (timer.time === 0) {
            clearInterval(intervalId);
            timer.stop;
        }
    },
    stop: function() {
        clearInterval(intervalId);
        clockRunning = false;
        $("#main").hide();
    }   
}

$("#start").on("click", timer.run);

if(time === 0) {
    timer.stop;
}
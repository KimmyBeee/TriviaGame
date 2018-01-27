
//Sets up Begin button on the screen
$(".button").html("<button id='startBtn'>" + " Click Me To Begin!! " + "</button>");
//When the start button gets pushed, run startGame function
$(".button").on("click", startGame);

//Timer starts at 130
var number = 131;
var answerCorrect = 0;
var answerWrong = 0;
var answerUn = 0;

var intervalGo;

var clockRunning = false;

//create an array of answers
//use.attr = true and false to denote which goes to what score.
var questions =	[
	{
	"question": "In 'My Neighbor Totoro', what was Totoro's most frequently used animal transport",
	"answer": [
		"Cat Bus", 
		"Monster Taxi", 
		"Big Blue Bicycle", 
		"Rat Car"
		]
	},	
	{
	"question": "What was the name of Gary Oldman's pimp character in 'True Romance'",
	"answer": [
		"Drexl", 
		"Marvin", 
		"Detroit", 
		"Clarence"
		]
	},	
 	{
	"question": "How many kids went on adventure together in 'The Goonies'", 
	"answer": [
		"Seven", 
		"Eight", 
		"Five", 
		"Twelve"
		] 
	}, 
	{
	"question": "Ridley Scott's 'The Duellists' took place in what era",
	"answer": [
		"Eighteen Hundreds", 
		"Sixteen Hundreds", 
		"Fifteen Hundreds", 
		"Seventeen Hundreds"
		]
	},
	{
	"question": "In 'Pathfinder', what was Ghost's biological ethnicity",
	"answer": [
		"Norse", 
		"Native American", 
		"Asian", 
		"Hispanic"
		] 
	},
	{
	"question": "Which character in 2010's 'Tron' best represents the 'hidden Buddha'",
	"answer": [
		"Clu", 
		"Tron", 
		"Crom", 
		"Ram"
		] 
	},
	{
	"question": "Alabama Whitman also gets a mention in what famous Quentin Tarantino movie",
	"answer": [
		"Reservoir Dogs", 
		"Killing Zoe", 
		"Pulp Fiction", 
		"Jackie Brown"
		]
	},
	{
	"question": "What big budget, blockbuster film did Rian Johnson direct in addition to indie films 'Brick' and 'Looper'",
	"answer": [
		"Star Wars - The Last Jedi", 
		"Wonder Woman", 
		"It", 
		"Beauty and the Beast"
		]
	}
]	

//Run function
function startGame()	{
//Gets the clock counting down 
	if (!clockRunning)	{
		clockRunning = true;
		intervalGo = setInterval(decrement, 1000);
	}
//Makes game initilizing button disappear
	$("#startBtn").remove();

	generateQuestions();
}

function decrement()	{
//Decrease second cound by 1
	number--;
//Show time remaining and decreasing seciond count on screen by adding it to html	
	$("#timer").html("<h3>" + "Time Remaining: " + number + " seconds" + "<h3>");
//If time runs out.. 	
	if (number === 0)	{
		
//..end the game
	endGame();
	}
};

function generateQuestions()	{
//Assign "true" value to the first answer of the question - the correct answer
	for (var t = 0; t < questions.length; t++)	{
		var trueAnswer = questions[t].answer[0];
		$(trueAnswer).attr("data-value", true)
	};

//Assign "false" value to the other three answers to the question - the distractors
	for (var f = 0; f < questions.length; f++)	{
		var wrongAnswer1 = questions[f].answer[1];
		$(wrongAnswer1).attr("data-value", false);

		var wrongAnswer2 = questions[f].answer[2];
		$(wrongAnswer2).attr("data-value", false);

		var wrongAnswer3 = questions[f].answer[3];
		$(wrongAnswer3).attr("data-value", false);
	};	


//For Loop(s) generates questions and answers and writed them to html	
	for (var i = 0; i < questions.length; i++)	{
		
		//create question
		$("#quiz").html("<h3>" + questions[i].question + "?</h3>")

		//for loop for answers using j (after add randomization)
		//append answers to question
		$("#quiz").append("<h4>" + "<label class='radio-inline'>" + "<input type='radio' name='optradio'>" + " " + questions[i].answer + "</label>" + "</h4>");
		
		//if statement for picking answer whose value is true

		//adds one to Correct answer tally
		//answerCorrect++

		//else adds one to Wrong answer tally
		// answerWrong++

		//if statement for no amswer

		//adds one to Unanswer question tally
		//answerUn++
		
		//
		//Add done button
		$("#done-button").html("<button id='doneBtn'>" + " I am all done!! " + "</button>");
		//When the done button gets pushed, run the stop function
		$("#done-button").on("click", endGame);

	}
}

function endGame()	{
	clearInterval(intervalGo);
	clockRunning = false;
	$("#quiz").remove();
	$("#done-button").remove();

	$("#action-box").html("<h2>" + "You are all done!!" + "<h2>");
	$("#action-box").append("<h3>" + "Correct Answers: " + answerCorrect + "<h3>");
	$("#action-box").append("<h3>" + "Incorrect Answers: " + answerWrong + "<h3>");
	$("#action-box").append("<h3>" + "Unanswered Questions: " + answerUn + "<h3>");

}


//Sets up Begin button on the screen
$(".button").html("<button id='startBtn'>" + " Click Me To Begin!! " + "</button>");
//When the start button gets pushed, run startGame function
$(".button").on("click", startGame);



//When the done button gets pushed, run the stop function
// $("done").on("click", endGame);

//Timer starts at 130
var number = 130;
var answerCorrect = 0;
var answerWrong = 0;
var answerUn = 0;

var intervalGo;

var clockRunning = false;

//create an array of answers
//use.attr = true and false to denote which goes to what score.
var questions = [
	{
	"question": "In 'My Neighbor Totoro', what was Totoro's most frequently used animal transport",
	"answer": "Cat Bus", 
	"option1": "Monster Taxi", "Big Blue Bicycle", "Rat Car"
	},	
	{
	"question": "What was the name of Gary Oldman's pimp character in 'True Romance'",
	"answer": "Drexl", 
	"distractors": "Marvin", "Detroit", "Clarence"
	},	
 	{
	"question": "How many kids went on adventure together in 'The Goonies'", 
	"answer": "Seven", 
	"distractors": "Eight", "Five", "Twelve"
	}, 
	{
	"question": "Ridley Scott's 'The Duellists' took place in what era",
	"answer": "1800's",
	"distractors": "1600's", "1500's", "1700's"
	},
	{
	"question": "In 'Pathfinder', what was Ghost's biological ethnicity",
	"answer": "Norse",
	"distractors": "Native American", "Asian", "Hispanic"
	},
	{
	"question": "Which character in 2010's 'Tron' best represents the 'hidden Buddha'",
	"answer": "Clu",
	"distractors": "Tron", "Crom", "Ram" 
	},
	{
	"question": "Alabama Whitman also gets a mention in what famous Quentin Tarantino movie"]
	"answer": "Reservoir Dogs",
	"distractors": "Killing Zoe", "Pulp Fiction", "Jackie Brown"
	},
	{
	"question": "What 2017 big budget, blockbuster film did director Rian Johnson direct in addition to indie films 'Brick' and 'Looper'",
	"answer": "Star Wars: The Last Jedi",
	"distractors": "Wonder Woman", "It", "Beauty and the Beast"
	}
]
	

//Run function
function startGame()	{

	if (!clockRunning)	{
		clockRunning = true;
		intervalGo = setInterval(decrement, 1000);
	}

	$("#startBtn").remove();
	
	for (var i = 0; i < questions.length; i++)	{
		//create div
		//create question
		$("#action-box").html("<h3>" + questions[i].question + "?</h3>")
		//for loop for answers using j (after add randomization)
		//after for look append div to action box
	}

}
function decrement()	{
//Decrease second cound by 1
console.log(number);
	number--;
//Show time remaining and decreasing seciond count on screen by adding it to html	
	$("#timer").html("<h3>" + "Time Remaining: " + number + " seconds" + "<h3>");
//If time runs out.. 	
	if (number === 0)	{
//..end the game
	endGame();
	}
};

function endGame()	{
	clearInterval(intervalGo);
	clockRunning = false;

	$("#action-box").html("<h2>" + "You are all done!!" + "<h2>");
	$("#action-box").append("<h3>" + "Correct Answers: " + answerCorrect + "<h3>");
	$("#action-box").append("<h3>" + "Incorrect Answers: " + answerCorrect + "<h3>");
	$("#action-box").append("<h3>" + "Unanswered Questions: " + answerCorrect + "<h3>");

}


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
	"option1": "Monster Taxi", 
	"option2": "Big Blue Bicycle", 
	"option3": "Rat Car"
	},
	{
	"question": "What was the name of Gary Oldman's character in 'True Romance'",
	"answer": "Drexl", 
	"option1": "Marvin", 
	"option2": "Detroit", 
	"option3": "Clarence"
	},
		
 	{
	"question": "How many kids went on adventure together in 'The Goonies'", 
	"answer": "Seven", 
	"option1": "Eight", 
	"option2": "Five", 
	"option3": "Twelve"
	}
]; 

var q4 = [
	{
	"question": "Ridley Scott's 'The Duellists' took place in what era",
	"answer": "1800's",
	"option1": "1600's",
	"option2": "1500's",
	"option3": "1700's"
	}
]; 
		
var q5 = [
	{
	"question": "In 'Pathfinder', what was Ghost's biological ethnicity",
	"answer": "Norse",
	"option1": "Native American",
	"option2": "Asian",
	"option3": "Hispanic"
	}
];

var q6 = [
	{
	"question": "Which character in 2010's 'Tron' best represents the 'hidden Buddha'",
	"answer": "Clu",
	"option1": "Tron",
	"option2": "Crom",
	"option3": "Ram"
	}
];

var q7 = [
	{
	"question": "Alabama Whitman also gets a mention in what famous Quentin Tarantino movie"]
	"answer": "Reservoir Dogs",
	"option1":
	"option2":
	"option3":
	}
];	


		
		
	
		
		
		
		"Pulp Fiction",]
	

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

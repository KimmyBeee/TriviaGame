
//Sets up Begin button on the screen
$(".button").html("<button>" + " Let us begin!! " + "</button>");
//When the start button gets pushed, run startGame function
$(".button").on("click", startGame);



//Where do I put this to make my button go away?????
$(".button").style.visibility = "hidden";


//When the done button gets pushed, run the stop function
// $("done").on("click", endGame);

//Timer starts at 130
var number = 130;
var answerCorrect = 0;
var answerWrong = 0;
var answerUn = 0;

var intervalGo;

var clockRunning = false;

//Run function
 function startGame()	{

	if (!clockRunning)	{
		clockRunning = true;
		intervalGo = setInterval(decrement, 1000);
	}	
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
}

function endgame()	{
	clearInterval(intervalGo);
	clockRunning = false;
	
	$("#action-box").html("<h2>" + "You are all done!!" + "<h2>");
	$("#action-box").append("<h3>" + "Correct Answers: " + answerCorrect + "<h3>");
	$("#action-box").append("<h3>" + "Incorrect Answers: " + answerCorrect + "<h3>");
	$("#action-box").append("<h3>" + "Unanswered Questions: " + answerCorrect + "<h3>");

}

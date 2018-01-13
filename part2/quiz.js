
var currentQuestion;
var answers;
var score;
var question;
var option1;
var option2;
var option3;
var option4;
var correctAnswer;
var nextButton;
var result;
var finishedQuiz = false;

function start() {
	// body...
	currentQuestion = 0;
	answers = new Array(questions.length);
	score = 0
	question = document.getElementById("question");
	option1 = document.getElementById("option1");
	option2 = document.getElementById("option2");
	option3 = document.getElementById("option3");
	option4 = document.getElementById("option4");
	correctAnswer = document.getElementById("correctAnswer");
	nextButton = document.getElementById("nextButton");
	result = document.getElementById("result");

	displayQuestion(currentQuestion)
}

function displayQuestion(currentQuestion){

	var q = questions[currentQuestion]
	question.innerHTML = q.question;
	option1.innerHTML = q.option1;
	option2.innerHTML = q.option2;
	option3.innerHTML = q.option3;
	option4.innerHTML = q.option4;
	ans.innerHTML = q.correct;

	var items  = document.getElementsByName("option");
	for (var i = 0; i < items.length; i++){
		items[i].checked = false;
	}

	if (finishedQuiz == true){
		var items = document.getElementsByName("option");
		answer = answers[currentQuestion];
		items[answer-1].checked = true;
	}
}

function nextQuestion(){
	var selectedOption = document.querySelector('input[type=radio]:checked');


	if(selectedOption == false){
		alert("You have to select an answer")
	}

	var answer = selectedOption.value;
	answers[currentQuestion] = answer;

	currentQuestion++;
	selectedOption = null;

	if(currentQuestion == questions.length-1){
		nextButton.textContent = 'Finish';
	}

	if(currentQuestion == questions.length && finishedQuiz == false){
		finishedQuiz = true;
		//Hide Quiz content and display the result
		document.getElementById('quizContent').style.display = 'none';
		document.getElementById('result').style.display = 'block';
		
		displayResult()
		//Change button to review
		nextButton.textContent = "Review";
		nextButton.onclick = function(){review()};
	} else if(currentQuestion == questions.length && finishedQuiz == true){
		alert("Finish");
		document.getElementById('quizContent').style.display = 'none';
		document.getElementById('correctAnswer').style.display = 'none';
		document.getElementById('nextButton').style.display = 'none';
	} else{
		displayQuestion(currentQuestion);
	}
}


function displayResult(){
	var scores = 0;
	var l = questions.length

	for(i = 0; i<l; i++){
		userAnswer = answers[i]
		correctAnswer = questions[i].correct;
		if (userAnswer == correctAnswer){
			scores +=1;
		}
	}	
	var p = Math.round(scores / l * 100);
	document.getElementById('result').innerHTML = "You scored " + scores +" out of " +l + ", " + p + "%"		
}

function review(){
	alert("Review now")
	currentQuestion = 0;
	document.getElementById('quizContent').style.display = 'block'
	document.getElementById('correctAnswer').style.display = "block";
	document.getElementById('result').style.display = 'block';
	nextButton.textContent = "Review";

	var items  = document.getElementsByName("option");
	for (var i = 0; i < items.length; i++){
		items[i].disabled = true;
	}
	displayQuestion(currentQuestion);

	nextButton.onclick = function(){nextQuestion()}
}
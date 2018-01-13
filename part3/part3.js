var refreshInterval = 5000;
var img;
var currentPic = 0;
var timer;
var totL = pics.length;

var FORWARD = 0;
var BACKWARD = 1;
var SEQUENTIAL = 0;
var RANDOM = 1;
var START = 1;
var STOP = 0;

var startStop = START;
var movement = FORWARD;
var sequence = SEQUENTIAL;


function start(){
	init();
	img = new Image();
	img.onload = function(){
		var canvas = document.getElementById('myCanvas');
		var context = canvas.getContext('2d');


		var index = document.getElementById('transformation').selectedIndex;
		switch(index){
			case 0: 
				//Plain
				canvas.width = img.width;
				canvas.height = img.height;
				context.drawImage(img, 0, 0);
				break;
			case 1:
				//Skewed
				canvas.width = img.width * 2;
				canvas.height = img.height * 2;

				//Repeat
				context.drawImage(img, 0, 0);

				context.transform(1, 0.5, -0.5, 1, img.width/2, 10);
				context.globalAlpha = 0.9;
				context.drawImage(img, 0, 0);

				context.transform(1, 0.5, -0.5, 1, img.width/2, 10);
				context.globalAlpha = 0.5;
				context.drawImage(img, 0, 0);
				break;
			case 2:
				//Repeated
				canvas.width = img.width * 3;
				canvas.height = img.height * 3;

				var pattern = context.createPattern(img, "repeat");
				context.rect(0, 0, canvas.width, canvas.height);
				context.fillStyle = pattern;
				context.fill();
				break;

		}
	};

	img.src = pics[currentPic].src;
	document.getElementById('caption').innerHTML = pics[currentPic].caption;

	timer = setInterval(refresh, refreshInterval);
}

function init(){
	startStop = START;
	movement = FORWARD;
	sequence = SEQUENTIAL;
	
	//Set button value to stop
	document.getElementById('startStop').textContent = "Stop";
	
	//Begin in Seqnential mode
	document.getElementById('Sequential').checked = true;
	document.getElementById('Random').checked = false;

	//Begin in forward
	document.getElementById('forward').checked = true;
	document.getElementById('backward').checked = false;

}

function refresh()
{

	currentPic = getNextIndex(currentPic);
	img.src = pics[currentPic].src;
	document.getElementById('caption').innerHTML = pics[currentPic].caption;

}

function getNextIndex(currentPic){
	//Random Mode
	if (sequence == RANDOM){
		return Math.floor(Math.random() * totL);
	}

	//Sequential Mode
	if(sequence == SEQUENTIAL){
		//Move Forward
		if(movement == FORWARD){
			currentPic ++;
			if(currentPic == totL){
				return 0;
			}
			return currentPic;
		}
		//Move Backward
		else if(movement == BACKWARD){
			currentPic --;
			if(currentPic < 0){
				return totL-1;
			}
			return currentPic;
		}
	}
	return currentPic;
}

function updateMovement(){
	if (movement == FORWARD){
		movement = BACKWARD;
	}
	else if(movement == BACKWARD){
		movement = FORWARD;
	}
}

function updateSequence(){
	if (sequence == SEQUENTIAL){
		sequence = RANDOM;
	}
	else if(sequence == RANDOM){
		sequence = SEQUENTIAL;
	}
}

function updateStartStop(){
	var button = document.getElementById('startStop');
	
	if(startStop == START){
		startStop = STOP;
		button.textContent = "Start";
		clearInterval(timer);
	}
	else if(startStop == STOP){
		startStop = START;
		button.textContent = "Stop";
		timer = setInterval(refresh, refreshInterval);
	}
}

function nextImage(){
	if(sequence == RANDOM){
		alert("You need to in SEQUENTIAL mode");
		return;
	}
	currentPic ++;
	if(currentPic == totL){
		currentPic = 0;
	}
	img.src = pics[currentPic].src;
}

function previousImage(){
	if(sequence == RANDOM){
		alert("You need to in SEQUENTIAL mode");
	}
	currentPic --;
	if(currentPic < 0){
		currentPic = totL -1;
	}
	img.src = pics[currentPic].src;
}

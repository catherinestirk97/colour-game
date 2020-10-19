var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



//change the title to read 'the great rgb (pickedColor) game'
colorDisplay.textContent = pickedColor;



for(var i = 0; i < squares.length; i++) {
	//add initial colours to squares via generateRandomColors function
	squares[i].style.backgroundColor = colors[i];
	//add event listeners to the squares
	squares[i].addEventListener("click", function(){
		//grab colour of clicked square
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			//change reset button to say 'play again'
			resetButton.textContent = "Play Again?";
			//change all 6 squares to be the pickedColor
			changeColors(clickedColor);
			//change the header colour to match pickedColor
			h1.style.backgroundColor = clickedColor;
		} else {
			//black out chosen square
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});

	
}

function changeColors(color){
	//loop through all squares change each colour to match given colour 
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr= [];
	//repeat num times
	for(var i =0; i<num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0-255 by doing math.floor(math.random() * 255 +1)
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);
	//need spaces so the strings match
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", function(){
	//generate all new colours
	colors = generateRandomColors(numSquares);
	//pick a new random colour from array
	pickedColor = pickColor();
	//change colorDisplay to match picked colour
	colorDisplay.textContent = pickedColor;
	//change colours of the squares
	for(var i =0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colours";
	messageDisplay.textContent = "";
})

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	for(var i =0; i<squares.length; i++){
		//changes top 3 (or however many in generate random colours) to random
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			//sets remaining squares to black
		} else {
			squares[i].style.display ="none";
		}
	}

})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares =6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})
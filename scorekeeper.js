var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset")
var pone = document.querySelector("#pone");
var ptwo = document.querySelector("#ptwo");
var numInput = document.querySelector("input");
var val = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameOver = false; 
var winPoint = 5;

p1Button.addEventListener("click",function(){
	if(!gameOver)
	{
		p1score++;	
		if(p1score === winPoint)
		{
			pone.classList.add("winner");
			gameOver = true;
		}
		pone.textContent = p1score;
	}
});

p2Button.addEventListener("click",function(){
	if(!gameOver)
	{
		p2score++;
		if(p2score === winPoint)
		{
			ptwo.classList.add("winner");
			gameOver = true;
		}
		ptwo.textContent = p2score;
	}
});

resetButton.addEventListener("click",function(){
	p1score = 0;
	p2score = 0;
	pone.textContent = 0;
	ptwo.textContent = 0;
	pone.classList.remove("winner");
	ptwo.classList.remove("winner");
	gameOver = false;
});

numInput.addEventListener("click",function{
	val.textContent = numInput.value;
	winPoint = Number(numInput.value);
	reset();
});
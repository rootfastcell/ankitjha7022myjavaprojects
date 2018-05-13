var colors = generate(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pick();
var colorDisplay = document.getElementById("x1");
var message=document.querySelector("#mess");
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

easy.addEventListener("click",function(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
    colors = generate(3);
    pickedColor = pick();
colorDisplay.textContent = pickedColor;  
for(var i = 0; i < squares.length; i++) {
		
    if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});
hard.addEventListener("click",function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
     colors = generate(6);
    pickedColor = pick();
colorDisplay.textContent = pickedColor;  
for(var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
    squares[i].style.display = "block";
	}
});
reset.addEventListener("click",function(){
    colors = generate(6);
    pickedColor = pick();
colorDisplay.textContent = pickedColor;    
for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];}    
    h1.style.background="steelblue";
     this.textContent="NEW GAME";
});
colorDisplay.textContent = pickedColor;
   var h1=document.querySelector("h1");
      for(var i = 0; i < squares.length; i++){
	      // add initial colors to squares
	      squares[i].style.background = colors[i];
          //add click listeners to squares
	      squares[i].addEventListener("click", function() {
		  //grab color of clicked squares
		  var clickedColor = this.style.background;
		  //compare color to pickedColor
if(clickedColor === pickedColor) {
     message.textContent="correct";
     h1.style.background=pickedColor;
     reset.textContent="Play again"
     clcclc(clickedColor);
		}
else {
 this.style.background="#232323";
 message.textContent="try again";
		}
	});
}
function clcclc(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=color;
    }
    }

function pick(){
var xc= Math.floor(Math.random() * colors.length);
   return colors[xc];
}
function generate(num){
  	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}
function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
   return "rgb(" + r + ", " + g + ", " + b + ")";
    
    
}

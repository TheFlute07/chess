var canvas = document.getElementById("chess-canvas");
var ctx = canvas.getContext("2d");

function Case(x, y) {
	this.x = x;
	this.y = y;
}

const canvasHeight = canvas.height / 4;
const canvasWidth = canvas.width / 16;

var caseY = 0;
var caseX = 0;
var count = 0;
var color = "white";

while (caseX != 8) {
	while (caseY != 8) {
		switch(color){
			case ("white"):
				ctx.beginPath();
				ctx.rect(caseX*canvasWidth*2, caseY*canvasWidth,canvasHeight, canvasWidth);
				ctx.fillStyle = "#ededd3";
				ctx.fill();
				ctx.closePath();
				var color = "black";
			break

			case("black"):
				ctx.beginPath();
				ctx.rect(caseX*canvasWidth*2, caseY*canvasWidth,canvasHeight, canvasWidth);
				ctx.fillStyle = "#769358";
				ctx.fill();
				ctx.closePath();
				var color = "white";
			break
		}
		window['case_'+count] = new Case(caseX, caseY)
		caseY ++;
		count++;
	}
	switch(color){
			case ("white"):
				var color = "black";
			break

			case("black"):
				var color = "white";
			break
	}
	caseY = 0;
	caseX ++;

}
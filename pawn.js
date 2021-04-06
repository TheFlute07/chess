function Pawn(type, color, x, y) {
 	this.type = type;
 	this.x = x;
 	this.y = y;	
}

var pawn = "pawn";

function NewPawns(color) {
	caseX = 0;
	while (caseX != 8){
		switch(color){
			case("black"):
				window[color+'_pawn_'+caseX]= new Pawn(pawn, color, caseX, 6);
			break;
			case("white"):
				window[color+'_pawn_'+caseX]= new Pawn(pawn, color, caseX, 1);
			break;
			}
		caseX ++
	}
}
NewPawns("black");
NewPawns("white");
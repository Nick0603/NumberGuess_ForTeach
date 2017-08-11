var minNumber = null;
var maxNumber = null;
var answer = null;

function getRandom(min , max){
	return Math.floor(Math.random()* (max-min+1))+min;
}

function initGame(){
	// 補上變數的設定值，取得關卡難度，並依照難度設定猜測範圍
	var level = 
	if( level == "easy"){
		minNumber = ;
		maxNumber = ;
	}else if( level == "normal"){
		minNumber = ;
		maxNumber = ;
	}else{
		minNumber = ;
		maxNumber = ;
	}
	answer = getRandom( minNumber+1 , maxNumber-1 );
	updateView();
}

function updateView(){
	$("#minNumberLabel").text(minNumber);
	$("#maxNumberLabel").text(maxNumber);
}

function guess(){
	// 寫下猜測時需要做的事情，輸入框ID-> guessInput
	updateView();
}

function clear(){
	// 寫下如何清除輸入框文字，輸入框ID-> guessInput
}

$("#startGameBtn").click(initGame);
$("#clearBtn").click(clear);
$("#guessBtn").click(guess);

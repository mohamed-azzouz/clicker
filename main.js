var cookies = 0;

function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
};

var cursors = 0;
var pointCursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(2,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
        pointCursors = pointCursors + 1 ;
    	cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user

    };
    var nextCursorsCost = Math.floor(10 * Math.pow(2,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCursorsCost;  //updates the cursor cost for the user
   

};

var booster = 0;
var pointBooster = 0;


function buyBooster(){
	var boosterCost = Math.floor(50 * Math.pow(2,booster));
	if (cookies >= boosterCost) {
		booster = booster + 1;
		pointBooster = pointBooster + 10 ;
		cookies = cookies - boosterCost;
		document.getElementById('booster').innerHTML = booster;  
        document.getElementById('cookies').innerHTML = cookies;  
	};
	var nextBoosterCost = Math.floor(50 * Math.pow(2,booster))
	document.getElementById('boosterCost').innerHTML = nextBoosterCost;
}

window.setInterval(function(){
	
	document.getElementById('cookiesSecond').innerHTML = pointCursors + pointBooster + ' click par seconde';
	cookieClick(pointCursors + pointBooster);
	
}, 1000);
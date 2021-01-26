/* document.querySelector(".humb").addEventListener("click" , shownav)

				function shownav() { 
				document.querySelector(".nav-hidden").style.display="block";	
													 
													 } */
												 
/* 
document.querySelector(".close").addEventListener("click" , function hidenav() {
	
	
	
	document.querySelector(".nav-hidden").style.display="none";
})
*/ /*
var humburg = doucument.querySelectorAll(".humb");

var i;

for(i = 0 ; i < humburg.length ; i++){

	humberg[i].addEventListener("click" , shownav);
} */





function shownav() {
	
	document.querySelector(".nav-hidden").style.display="block";
	document.querySelector(".nav-hidden").style.WebkitAnimationPlayState= "paused";
	
}

function closenav(){
	
	document.querySelector(".nav-hidden").style.display="none";
}

function hidenav() {
	document.querySelector(".nav-hidden").style.WebkitAnimationPlayState= "running";
	
	
	setTimeout(closenav , 600); 
	
	/*  document.querySelector(".nav-hidden").style.display="none"; */
} 
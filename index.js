async function deal(){
		var cards = document.getElementsByClassName("card");
		var temp = [];
		var vh = 100;
		var cdh = document.getElementsByClassName("card-back")[0].height;
		for(var i = 0; i<cards.length; i++){
			temp.push(cards[i]);
		}
		cards = temp;
		for(var i = 0; i<cards.length; i++){
			cards[i].classList.remove("card");
			cards[i].classList.add("card-ready");
		}
		await pause(1000);
		for(var i = 0; i<cards.length; i += 5){
			try{
			cards[i].style.left = "10%";
			cards[i].style.top = vh+"px";
			await pause(1000);
			}catch(error){}try{
			cards[i+1].style.left = "30%";
			cards[i+1].style.top = vh+"px";
			await pause(1000);
			}catch(error){}try{
			cards[i+4].style.left = "90%";
			cards[i+4].style.top = vh+"px";
			await pause(1000);
			}catch(error){}try{
			cards[i+3].style.left = "70%";
			cards[i+3].style.top = vh+"px";
			await pause(1000);
			}catch(error){}try{
			cards[i+2].style.top = vh+"px";
			await pause(1000);
			}catch(error){}
			vh += cdh + 30;
		}
		cards = document.getElementsByClassName("card-ready");
		console.log(cards);
		for(var i = 0; i<cards.length; i++){
			try{
			document.getElementsByClassName("card-back")[i].classList.add("flip");
			document.getElementsByClassName("card-front")[i].classList.remove("flip");
			}catch(error){}
		}
		var obj = document.getElementById("tip");
		obj.innerHTML = "Click on a card to go to that project."
		obj.style.margin = (obj.width /2) +"px";
		obj.style.left = "50%";
		sessionStorage.setItem("played", true);

}
function pause(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function skipload(){
	var cards = document.getElementsByClassName("card");
	var temp = [];
	var vh = 100;
	var cdh = document.getElementsByClassName("card-back")[0].height;
	for(var i = 0; i<cards.length; i++){
		temp.push(cards[i]);
	}
	cards = temp;
	for(var i = 0; i<cards.length; i++){
		cards[i].classList.remove("card");
		cards[i].classList.remove("anim");
		cards[i].classList.add("card-ready");
	}
	for(var i = 0; i<cards.length; i += 5){
		try{
		cards[i].style.left = "10%";
		cards[i].style.top = vh+"px";
		}catch(error){}try{
		cards[i+1].style.left = "30%";
		cards[i+1].style.top = vh+"px";
		}catch(error){}try{
		cards[i+4].style.left = "90%";
		cards[i+4].style.top = vh+"px";
		}catch(error){}try{
		cards[i+3].style.left = "70%";
		cards[i+3].style.top = vh+"px";
		}catch(error){}try{
		cards[i+2].style.top = vh+"px";
		}catch(error){}
		vh += cdh + 30;
	}
	cards = document.getElementsByClassName("card-ready");
	console.log(cards);
	for(var i = 0; i<cards.length; i++){
		try{
		document.getElementsByClassName("card-back")[i].classList.remove("animflip");
		document.getElementsByClassName("card-front")[i].classList.remove("animflip");
		document.getElementsByClassName("card-back")[i].classList.add("flip");
		document.getElementsByClassName("card-front")[i].classList.remove("flip");
		}catch(error){}
	}
					
}
function indexload(){
	var obj = document.getElementById("tip");
	obj.innerHTML = "Click on a card to go to that project."
	obj.style.margin = (obj.width /2) +"px";
	obj.style.left = "50%";
	window.name = "#home"; window.onbeforeunload=function(){window.name="";};
	var params = new URLSearchParams(location.search);
	if(localStorage.getItem("fromLink") == true && localStorage.getItem("played")== true){
		skipload();
		//sessionStorage.setItem("fromLink", false);
		console.log(sessionStorage.getItem("fromLink") + "||" + localStorage.getItem("played"))
	} else{
		localStorage.setItem("played", false);
		localStorage.setItem("fromLink", false);
		console.log(localStorage.getItem("fromLink") + "|" + localStorage.getItem("played"))
	}
	//window.history.replaceState()
}
function aboutload(){
		window.name = "#about"; window.onbeforeunload=function(){window.name="";};
}
function link( a,  b){
	localStorage.setItem("fromLink", true);
	console.log(localStorage.getItem("fromLink"));
	window.open(a, b);
	return false;
}

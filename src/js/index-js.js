var id,
    count = 0,
    container1 =document.getElementById("container1"),
    white_1 = document.getElementById("white_1"),
    white_2 = document.getElementById("white_2"),
    white_3 = document.getElementById("white_3"),
    white_4 = document.getElementById("white_4"),
    white_5 = document.getElementById("white_5"),
    fa_search = document.getElementById("fa_search"),
    inp_search = document.getElementById("inp_search");
    fa_env = document.getElementById("fa_env");


function change() {
	count++;
	if(count==1){
	  white_1.src="img/purple.png";
	  white_2.src="img/white.png";
	  white_3.src="img/white.png";
	  white_4.src="img/white.png";
	  white_5.src="img/white.png";
	  container1.style.background="url(img/red.png)";
	}
    else if(count==2){
      white_1.src="img/white.png";
	  white_2.src="img/purple.png";
	  white_3.src="img/white.png";
	  white_4.src="img/white.png";
	  white_5.src="img/white.png";
	  container1.style.background="url(img/orange.png)";
    }
    else if(count==3){
      white_1.src="img/white.png";
	  white_2.src="img/white.png";
	  white_3.src="img/purple.png";
	  white_4.src="img/white.png";
	  white_5.src="img/white.png";
	  container1.style.background="url(img/yellow.png)";
    }
    else if(count==4){
      white_1.src="img/white.png";
	  white_2.src="img/white.png";
	  white_3.src="img/white.png";
	  white_4.src="img/purple.png";
	  white_5.src="img/white.png";
	  container1.style.background="url(img/green.png)";
    }
    else if(count==5){
      white_1.src="img/white.png";
	  white_2.src="img/white.png";
	  white_3.src="img/white.png";
	  white_4.src="img/white.png";
	  white_5.src="img/purple.png";
	  container1.style.background="url(img/blue.png)";
      count=0;
    }
}

function reCycle(){
    id = setInterval(change,3000);
}

// function jump_1(){
// 	pic_plane.style.href
// }

fa_search.onclick = function(){
     location.href="search.html";
}

inp_search.onclick = function(e){
    location.href="search.html";
}

fa_env.onclick = function(e){
    location.href="envelope.html";
}

reCycle();




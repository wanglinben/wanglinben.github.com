var id,
    count = 0,
    container1 =document.getElementById("container1"),
    white_1 = document.getElementById("white_1"),
    white_2 = document.getElementById("white_2"),
    white_3 = document.getElementById("white_3"),
    white_4 = document.getElementById("white_4"),
    white_5 = document.getElementById("white_5");

function change() {
	count++;
	if(count==1){
	  white_1.src="images/purple.png";
	  white_2.src="images/white.png";
	  white_3.src="images/white.png";
	  white_4.src="images/white.png";
	  white_5.src="images/white.png";
	  container1.style.background="url(images/red.png)";
	}
    else if(count==2){
      white_1.src="images/white.png";
	  white_2.src="images/purple.png";
	  white_3.src="images/white.png";
	  white_4.src="images/white.png";
	  white_5.src="images/white.png";
	  container1.style.background="url(images/orange.png)";
    }
    else if(count==3){
      white_1.src="images/white.png";
	  white_2.src="images/white.png";
	  white_3.src="images/purple.png";
	  white_4.src="images/white.png";
	  white_5.src="images/white.png";
	  container1.style.background="url(images/yellow.png)";
    }
    else if(count==4){
      white_1.src="images/white.png";
	  white_2.src="images/white.png";
	  white_3.src="images/white.png";
	  white_4.src="images/purple.png";
	  white_5.src="images/white.png";
	  container1.style.background="url(images/green.png)";
    }
    else if(count==5){
      white_1.src="images/white.png";
	  white_2.src="images/white.png";
	  white_3.src="images/white.png";
	  white_4.src="images/white.png";
	  white_5.src="images/purple.png";
	  container1.style.background="url(images/blue.png)";
      count=0;
    }
}

function reCycle(){
    id = setInterval(change,3000);
}

function jump_1(){
	pic_plane.style.href
}

reCycle();
var offsetX = 130
var offsetY = 50


function setup() {
  //uncomment this line to make the canvas the full size of the window
   	createCanvas(400, 400);

}

function draw() {
    background (204, 255, 255);
    fill(255, 204, 204)
  	ellipse(offsetX + 60, offsetY + 60, 100, 100);
  	fill(102,51,0)
  	noStroke ()
  	ellipse(offsetX + 20, offsetY + 20, 30, 30);
  	ellipse(offsetX + 40, offsetY + 10, 30, 30);
  	ellipse(offsetX + 60, offsetY + 5, 30, 30)
  	ellipse(offsetX + 80, offsetY + 10, 30, 30);
  	ellipse(offsetX + 100, offsetY + 20, 30, 30);

    fill(255, 255, 255)
  	ellipse(offsetX + 50, offsetY + 50, 15, 15);
  	fill(0,0,0)
  	ellipse(offsetX + 51, offsetY + 51, 7, 7);
    fill(255, 255, 255)
  	ellipse(offsetX + 80, offsetY + 50, 15, 15);
  	fill(0,0,0)
  	ellipse(offsetX + 81, offsetY+ 51, 7, 7);
    //boca
    fill (64, 64,64)
    ellipse (offsetX + 70, offsetY+ 80, 30, 20)


if (mouseX > width/2) {
   ellipse (offsetX + 70, offsetY + 80, 40, 30)
      //fill(64,64,64);
  	 // rect(offsetX + 45, offsetY + 75, 42, 13);
    
}
    
if (mouseX > width/2) {
    fill(51,102,0);
  	rect(offsetX + 20, offsetY+ 110, 80, 90);

    }
  
if (mouseX > width/2) {
    fill(0,0,102);
  	  rect(offsetX + 20, offsetY + 200, 30, 90);
    fill(0,0,102);
  	  rect(offsetX + 70, offsetY + 200, 30, 90);

    }  
    
if (mouseX > width/2) {
    //fill(0,255,0);
    fill (255, 204, 204)
  	 rect(offsetX + 100, offsetY + 120, 60, 20);
    fill (255, 204, 204)

    //fill(0,255,0);
     // rect(offsetX + 20, offsetY + 120, 60, 20);
      rect(offsetX - 40, offsetY + 120, 60, 20);

}
  	
}
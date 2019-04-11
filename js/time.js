let currentTime = new Date();
let bugs = new Array(); // Declare object

let hour = 0;
let minutes = 0;

let b = 1;
let direction = 0.5;
let c;
let globalspeed = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);

    hour = currentTime.getHours();
    minutes = currentTime.getMinutes();
    frameRate(30);

     // Create object
  for (i = 0; i < minutes; i++) { 
    bugs.push( new Jitter() );

    c=color(255, 20, 60)
  }
}

  
function draw(){
    background( 250-b, 250-b, 250-b );
    noStroke();  

    if(b >= 254 || b <= 0){
        direction = direction * -1;
    }
    b = b + direction;

    for (i = 0; i < minutes; i++) { 
      fill(c);
        bugs[i].move();
        bugs[i].display();   
      }

      if(hour == 1){noStroke ();
    fill(237, 34, 123);
    circle(25, 25, 20, 20);}
        
     if(hour == 2){noStroke ();
        fill(237, 34, 123);
        circle(25, 25, 20, 20);
    noStroke ();
        fill(190, 40, 195);
      circle(25, 70, 20, 20);
     }
      if(hour == 3){noStroke ();
        fill(237, 34, 123);
        circle(25, 25, 20, 20);
    noStroke ();
        fill(190, 40, 195);
      circle(25, 70, 20, 20);  
    noStroke ();
    fill(140, 110, 200);
     circle(25, 115, 20, 20);}
    
     if(hour == 4){noStroke ();
        fill(237, 34, 123);
        circle(25, 25, 20, 20);
    noStroke ();
        fill(190, 40, 195);
      circle(25, 70, 20, 20);  
    noStroke ();
        fill(140, 110, 200);
     circle(25, 115, 20, 20); 
    noStroke ();
     fill(160, 200, 240);
    circle(25, 160, 20, 20);}

    if(hour == 5){noStroke ();
        fill(237, 34, 123);
        circle(25, 25, 20, 20);
    noStroke ();
        fill(190, 40, 195);
      circle(25, 70, 20, 20);  
    noStroke ();
        fill(140, 110, 200);
     circle(25, 115, 20, 20); 
    noStroke ();
     fill(160, 200, 240);
        circle(25, 160, 20, 20);
    noStroke ();
    fill(20, 110, 240);
     circle(25, 205, 20, 20);}

     if(hour == 6){noStroke ();
        fill(237, 34, 123);
        circle(25, 25, 20, 20);
    noStroke ();
        fill(190, 40, 195);
      circle(25, 70, 20, 20);  
    noStroke ();
        fill(140, 110, 200);
     circle(25, 115, 20, 20);
    noStroke ();
     fill(160, 200, 240);
        circle(25, 160, 20, 20);
    noStroke ();
     fill(20, 110, 240);
      circle(25, 205, 20, 20);
    noStroke ();
     fill(20, 190, 140);
      circle(25, 250, 20, 20);}

      if(hour == 7){noStroke ();
        fill(237, 34, 123);
        circle(25, 25, 20, 20);
    noStroke ();
        fill(190, 40, 195);
      circle(25, 70, 20, 20);  
    noStroke ();
        fill(140, 110, 200);
     circle(25, 115, 20, 20);
    noStroke ();
     fill(160, 200, 240);
        circle(25, 160, 20, 20);
    noStroke ();
     fill(20, 110, 240);
      circle(25, 205, 20, 20);
    noStroke ();
     fill(20, 190, 140);
      circle(25, 250, 20, 20);
    noStroke ();
     fill(20, 240, 140);
      circle(25, 295, 20, 20);}

      if(hour == 8){noStroke ();
        fill(237, 34, 123);
        circle(25, 25, 20, 20);
    noStroke ();
        fill(190, 40, 195);
      circle(25, 70, 20, 20);  
    noStroke ();
        fill(140, 110, 200);
     circle(25, 115, 20, 20);
    noStroke ();
     fill(160, 200, 240);
        circle(25, 160, 20, 20);
    noStroke ();
     fill(20, 110, 240);
      circle(25, 205, 20, 20);
    noStroke ();
     fill(20, 190, 140);
      circle(25, 250, 20, 20);
    noStroke ();
     fill(20, 240, 140);
      circle(25, 295, 20, 20);
    noStroke ();
     fill(242, 240, 140);
      circle(25, 340, 20, 20);}
    
      if(hour == 9){noStroke ();
        fill(237, 34, 123);
        circle(25, 25, 20, 20);
    noStroke ();
        fill(190, 40, 195);
      circle(25, 70, 20, 20);  
    noStroke ();
        fill(140, 110, 200);
     circle(25, 115, 20, 20);
    noStroke ();
     fill(160, 200, 240);
        circle(25, 160, 20, 20);
    noStroke ();
     fill(20, 110, 240);
      circle(25, 205, 20, 20);
    noStroke ();
     fill(20, 190, 140);
      circle(25, 250, 20, 20);
    noStroke ();
     fill(20, 240, 140);
      circle(25, 295, 20, 20);
    noStroke ();
     fill(242, 240, 140);
      circle(25, 340, 20, 20);
    noStroke ();
     fill(242, 190, 70);
      circle(25, 385, 20, 20);}

      if(hour == 10){noStroke ();
        fill(237, 34, 123);
        circle(25, 25, 20, 20);
    noStroke ();
        fill(190, 40, 195);
      circle(25, 70, 20, 20);  
    noStroke ();
        fill(140, 110, 200);
     circle(25, 115, 20, 20);
    noStroke ();
     fill(160, 200, 240);
        circle(25, 160, 20, 20);
    noStroke ();
     fill(20, 110, 240);
      circle(25, 205, 20, 20);
    noStroke ();
     fill(20, 190, 140);
      circle(25, 250, 20, 20);
    noStroke ();
     fill(20, 240, 140);
      circle(25, 295, 20, 20);
    noStroke ();
     fill(242, 240, 140);
      circle(25, 340, 20, 20);
    noStroke ();
     fill(242, 190, 70);
      circle(25, 385, 20, 20);
    noStroke ();
     fill(250, 110, 80);
      circle(25, 430, 20, 20);}

      if(hour == 11){noStroke ();
        fill(237, 34, 123);
        circle(25, 25, 20, 20);
    noStroke ();
        fill(190, 40, 195);
      circle(25, 70, 20, 20);  
    noStroke ();
        fill(140, 110, 200);
     circle(25, 115, 20, 20);
    noStroke ();
     fill(160, 200, 240);
        circle(25, 160, 20, 20);
    noStroke ();
     fill(20, 110, 240);
      circle(25, 205, 20, 20);
    noStroke ();
     fill(20, 190, 140);
      circle(25, 250, 20, 20);
    noStroke ();
     fill(20, 240, 140);
      circle(25, 295, 20, 20);
    noStroke ();
     fill(242, 240, 140);
      circle(25, 340, 20, 20);
    noStroke ();
     fill(242, 190, 70);
      circle(25, 385, 20, 20);
    noStroke ();
     fill(250, 110, 80);
      circle(25, 430, 20, 20);
    noStroke ();
     fill(250, 70, 80);
      circle(25, 475, 20, 20);}

    if(hour == 12){noStroke ();
        fill(237, 34, 123);
        circle(25, 25, 20, 20);
    noStroke ();
        fill(190, 40, 195);
      circle(25, 70, 20, 20);  
    noStroke ();
        fill(140, 110, 200);
     circle(25, 115, 20, 20);
    noStroke ();
     fill(160, 200, 240);
        circle(25, 160, 20, 20);
    noStroke ();
     fill(20, 110, 240);
      circle(25, 205, 20, 20);
    noStroke ();
     fill(20, 190, 140);
      circle(25, 250, 20, 20);
    noStroke ();
     fill(20, 240, 140);
      circle(25, 295, 20, 20);
    noStroke ();
     fill(242, 240, 140);
      circle(25, 340, 20, 20);
    noStroke ();
     fill(242, 190, 70);
      circle(25, 385, 20, 20);
    noStroke ();
     fill(250, 110, 80);
      circle(25, 430, 20, 20);
    noStroke ();
     fill(250, 70, 80);
      circle(25, 475, 20, 20);
    noStroke ();
     fill(250, 140, 160);
      circle(25, 520, 20, 20);}
 
  if(hour == 13){noStroke ();
    fill(237, 34, 123);
    circle(25, 25, 20, 20);}
            
  if(hour == 14){noStroke ();
        fill(237, 34, 123);
        circle(25, 25, 20, 20);
      noStroke ();
        fill(190, 40, 195);
        circle(25, 70, 20, 20);}
        
  if(hour == 15){noStroke ();
        fill(237, 34, 123);
        circle(25, 25, 20, 20);
      noStroke ();
        fill(190, 40, 195);
        circle(25, 70, 20, 20);  
      noStroke ();
        fill(140, 110, 200);
        circle(25, 115, 20, 20);}
            
        if(hour == 16){noStroke ();
          fill(237, 34, 123);
          circle(25, 25, 20, 20);
      noStroke ();
          fill(190, 40, 195);
        circle(25, 70, 20, 20);  
      noStroke ();
          fill(140, 110, 200);
       circle(25, 115, 20, 20); 
      noStroke ();
       fill(160, 200, 240);
      circle(25, 160, 20, 20);}
  
      if(hour == 17){noStroke ();
          fill(237, 34, 123);
          circle(25, 25, 20, 20);
      noStroke ();
          fill(190, 40, 195);
        circle(25, 70, 20, 20);  
      noStroke ();
          fill(140, 110, 200);
       circle(25, 115, 20, 20); 
      noStroke ();
       fill(160, 200, 240);
          circle(25, 160, 20, 20);
      noStroke ();
      fill(20, 110, 240);
       circle(25, 205, 20, 20);}
  
       if(hour == 18){noStroke ();
          fill(237, 34, 123);
          circle(25, 25, 20, 20);
      noStroke ();
          fill(190, 40, 195);
        circle(25, 70, 20, 20);  
      noStroke ();
          fill(140, 110, 200);
       circle(25, 115, 20, 20);
      noStroke ();
       fill(160, 200, 240);
          circle(25, 160, 20, 20);
      noStroke ();
       fill(20, 110, 240);
        circle(25, 205, 20, 20);
      noStroke ();
       fill(20, 190, 140);
        circle(25, 260, 20, 20);}
  
        if(hour == 19){noStroke ();
          fill(237, 34, 123);
          circle(25, 25, 20, 20);
      noStroke ();
          fill(190, 40, 195);
        circle(25, 70, 20, 20);  
      noStroke ();
          fill(140, 110, 200);
       circle(25, 115, 20, 20);
      noStroke ();
       fill(160, 200, 240);
          circle(25, 160, 20, 20);
      noStroke ();
       fill(20, 110, 240);
        circle(25, 205, 20, 20);
      noStroke ();
       fill(20, 190, 140);
        circle(20, 250, 20, 20);
      noStroke ();
       fill(20, 240, 140);
        circle(25, 295, 20, 20);}
  
        if(hour == 20){noStroke ();
          fill(237, 34, 123);
          circle(25, 25, 20, 20);
      noStroke ();
          fill(190, 40, 195);
        circle(25, 70, 20, 20);  
      noStroke ();
          fill(140, 110, 200);
       circle(25, 115, 20, 20);
      noStroke ();
       fill(160, 200, 240);
          circle(25, 160, 20, 20);
      noStroke ();
       fill(20, 110, 240);
        circle(25, 205, 20, 20);
      noStroke ();
       fill(20, 190, 140);
        circle(25, 250, 20, 20);
      noStroke ();
       fill(20, 240, 140);
        circle(20, 295, 20, 20);
      noStroke ();
       fill(242, 240, 140);
        circle(20, 340, 20, 20);}
      
        if(hour == 21){noStroke ();
          fill(237, 34, 123);
          circle(25, 25, 20, 20);
      noStroke ();
          fill(190, 40, 195);
        circle(25, 70, 20, 20);  
      noStroke ();
          fill(140, 110, 200);
       circle(25, 115, 20, 20);
      noStroke ();
       fill(160, 200, 240);
          circle(25, 160, 20, 20);
      noStroke ();
       fill(20, 110, 240);
        circle(25, 205, 20, 20);
      noStroke ();
       fill(20, 190, 140);
        circle(25, 250, 20, 20);
      noStroke ();
       fill(20, 240, 140);
        circle(25, 295, 20, 20);
      noStroke ();
       fill(242, 240, 140);
        circle(25, 340, 20, 20);
      noStroke ();
       fill(242, 190, 70);
        circle(25, 385, 20, 20);}
  
        if(hour == 22){noStroke ();
          fill(237, 34, 123);
          circle(25, 25, 20, 20);
      noStroke ();
          fill(190, 40, 195);
        circle(25, 70, 20, 20);  
      noStroke ();
          fill(140, 110, 200);
       circle(25, 115, 20, 20);
      noStroke ();
       fill(160, 200, 240);
          circle(25, 160, 20, 20);
      noStroke ();
       fill(20, 110, 240);
        circle(25, 205, 20, 20);
      noStroke ();
       fill(20, 190, 140);
        circle(25, 250, 20, 20);
      noStroke ();
       fill(20, 240, 140);
        circle(25, 295, 20, 20);
      noStroke ();
       fill(242, 240, 140);
        circle(25, 340, 20, 20);
      noStroke ();
       fill(242, 190, 70);
        circle(25, 385, 20, 20);
      noStroke ();
       fill(250, 110, 80);
        circle(25, 430, 20, 20);}
  
        if(hour == 23){noStroke ();
          fill(237, 34, 123);
          circle(25, 25, 20, 20);
      noStroke ();
          fill(190, 40, 195);
        circle(25, 70, 20, 20);  
      noStroke ();
          fill(140, 110, 200);
       circle(25, 115, 20, 20);
      noStroke ();
       fill(160, 200, 240);
          circle(25, 160, 20, 20);
      noStroke ();
       fill(20, 110, 240);
        circle(25, 205, 20, 20);
      noStroke ();
       fill(20, 190, 140);
        circle(25, 250, 20, 20);
      noStroke ();
       fill(20, 240, 140);
        circle(25, 295, 20, 20);
      noStroke ();
       fill(242, 240, 140);
        circle(25, 340, 20, 20);
      noStroke ();
       fill(242, 190, 70);
        circle(25, 385, 20, 20);
      noStroke ();
       fill(250, 110, 80);
        circle(25, 430, 20, 20);
      noStroke ();
       fill(250, 70, 80);
        circle(25, 475, 20, 20);}
  
      if(hour == 24){noStroke ();
          fill(237, 34, 123);
          circle(25, 25, 20, 20);
      noStroke ();
          fill(190, 40, 195);
        circle(25, 70, 20, 20);  
      noStroke ();
          fill(140, 110, 200);
       circle(25, 115, 20, 20);
      noStroke ();
       fill(160, 200, 240);
          circle(25, 160, 20, 20);
      noStroke ();
       fill(20, 110, 240);
        circle(25, 205, 20, 20);
      noStroke ();
       fill(20, 190, 140);
        circle(25, 250, 20, 20);
      noStroke ();
       fill(20, 240, 140);
        circle(25, 295, 20, 20);
      noStroke ();
       fill(242, 240, 140);
        circle(25, 340, 20, 20);
      noStroke ();
       fill(242, 190, 70);
        circle(25, 385, 20, 20);
      noStroke ();
       fill(250, 110, 80);
        circle(25, 430, 20, 20);
      noStroke ();
       fill(250, 70, 80);
        circle(25, 475, 20, 20);
      noStroke ();
       fill(250, 140, 160);
        circle(25, 520, 20, 20);}

}

// Jitter class
class Jitter {
    constructor() {
      this.x = random(windowWidth);
      this.y = random(windowHeight);
      this.diameter = random(20, 40);
      this.speedX = random(0,6);
      this.speedY = random(0,8);
      this.npoint = random(0||50);
      }


    move() {
      
      this.x = this.x + (this.speedX * globalspeed);
      this.y = this.y + (this.speedY * globalspeed);
  
      if (this.x > windowWidth) {
          this.speedX = this.speedX* -1;
      }
  
      if (this.x < 0) {
          this.speedX = this.speedX* -1;
      }
  
      if (this.y > windowHeight) {
          this.speedY = this.speedY * -1;
      }
      
      if (this.y < 0) {
          this.speedY = this.speedY * -1;
      }
  
    }
  
    display() {
      noStroke();
      rect(this.x, this.y, this.diameter, this.diameter, this.npoint);
    }
}


  function mouseClicked() {
  
    if (hour==1){
      if (mouseX <= 50 ){
  
        if (mouseY <= 45)  {
          c=color(237, 34, 123);
        }
        }
      }
    if (hour==2){
        if (mouseX <= 50 ){
    
          if (mouseY <= 45)  {
            c=color(237, 34, 123);
          }else if(mouseY <=90){
            c=color(190, 40, 195);
          }
        }
      }   

      if (hour==3){
        if (mouseX <= 50 ){
    
          if (mouseY <= 45)  {
            c=color(237, 34, 123);
          }else if(mouseY <=90){
            c=color(190, 40, 195);
          }else if(mouseY <=135){
            c=color(140, 110, 200)
          }
        }
      }

      if (hour==4){
        if (mouseX <= 50 ){
    
          if (mouseY <= 45)  {
            c=color(237, 34, 123);
          }else if(mouseY <=90){
            c=color(190, 40, 195);
          }else if(mouseY <=135){
            c=color(140, 110, 200)
          }else if(mouseY <=180){
            c=color(160, 200, 240)
          }
        }
      }     
      
      if (hour==5){
        if (mouseX <= 50 ){
    
          if (mouseY <= 45)  {
            c=color(237, 34, 123);
          }else if(mouseY <=90){
            c=color(190, 40, 195);
          }else if(mouseY <=135){
            c=color(140, 110, 200)
          }else if(mouseY <=180){
            c=color(160, 200, 240)
          }else if(mouseY <=225){
            c=color(20, 110, 240)
          }
        }
      }

      if (hour==6){
        if (mouseX <= 50 ){
    
          if (mouseY <= 45)  {
            c=color(237, 34, 123);
          }else if(mouseY <=90){
            c=color(190, 40, 195);
          }else if(mouseY <=135){
            c=color(140, 110, 200)
          }else if(mouseY <=180){
            c=color(160, 200, 240)
          }else if(mouseY <=225){
            c=color(20, 110, 240)
          }else if(mouseY <=270){
            c=color(20, 190, 140)
          }
        }
      }

      if (hour==7){
        if (mouseX <= 50 ){
    
          if (mouseY <= 45)  {
            c=color(237, 34, 123);
          }else if(mouseY <=90){
            c=color(190, 40, 195);
          }else if(mouseY <=135){
            c=color(140, 110, 200)
          }else if(mouseY <=180){
            c=color(160, 200, 240)
          }else if(mouseY <=225){
            c=color(20, 110, 240)
          }else if(mouseY <=270){
            c=color(20, 190, 140)
          }else if(mouseY <=315){
            c=color(20, 240, 140)
          }
        }
      }

      if (hour==8){
        if (mouseX <= 50 ){
    
          if (mouseY <= 45)  {
            c=color(237, 34, 123);
          }else if(mouseY <=90){
            c=color(190, 40, 195);
          }else if(mouseY <=135){
            c=color(140, 110, 200)
          }else if(mouseY <=180){
            c=color(160, 200, 240)
          }else if(mouseY <=225){
            c=color(20, 110, 240)
          }else if(mouseY <=270){
            c=color(20, 190, 140)
          }else if(mouseY <=315){
            c=color(20, 240, 140)
          }else if(mouseY <=360){
            c=color(242, 240, 140)
          }else if(mouseY <=405){
            c=color(242, 190, 70)
          }else if(mouseY<=450){
            c=color(250, 110, 80)
          }else if(mouseY <=495){
            c=color(250, 70, 80)
          }else if(mouseY<=540){
            c=color(250, 140, 160)
          }
        }
      }

      if (hour==9){
        if (mouseX <= 50 ){
    
          if (mouseY <= 45)  {
            c=color(237, 34, 123);
          }else if(mouseY <=90){
            c=color(190, 40, 195);
          }else if(mouseY <=135){
            c=color(140, 110, 200)
          }else if(mouseY <=180){
            c=color(160, 200, 240)
          }else if(mouseY <=225){
            c=color(20, 110, 240)
          }else if(mouseY <=270){
            c=color(20, 190, 140)
          }else if(mouseY <=315){
            c=color(20, 240, 140)
          }else if(mouseY <=360){
            c=color(242, 240, 140)
          }else if(mouseY <=405){
            c=color(242, 190, 70)
          }
        }
      }

      if (hour==10){
        if (mouseX <= 50 ){
    
          if (mouseY <= 45)  {
            c=color(237, 34, 123);
          }else if(mouseY <=90){
            c=color(190, 40, 195);
          }else if(mouseY <=135){
            c=color(140, 110, 200)
          }else if(mouseY <=180){
            c=color(160, 200, 240)
          }else if(mouseY <=225){
            c=color(20, 110, 240)
          }else if(mouseY <=270){
            c=color(20, 190, 140)
          }else if(mouseY <=315){
            c=color(20, 240, 140)
          }else if(mouseY <=360){
            c=color(242, 240, 140)
          }else if(mouseY <=405){
            c=color(242, 190, 70)
          }else if(mouseY<=450){
            c=color(250, 110, 80)
          }
        }
      }

      if (hour==11){
        if (mouseX <= 50 ){
    
          if (mouseY <= 45)  {
            c=color(237, 34, 123);
          }else if(mouseY <=90){
            c=color(190, 40, 195);
          }else if(mouseY <=135){
            c=color(140, 110, 200)
          }else if(mouseY <=180){
            c=color(160, 200, 240)
          }else if(mouseY <=225){
            c=color(20, 110, 240)
          }else if(mouseY <=270){
            c=color(20, 190, 140)
          }else if(mouseY <=315){
            c=color(20, 240, 140)
          }else if(mouseY <=360){
            c=color(242, 240, 140)
          }else if(mouseY <=405){
            c=color(242, 190, 70)
          }else if(mouseY<=450){
            c=color(250, 110, 80)
          }else if(mouseY <=495){
            c=color(250, 70, 80)
          }
        }
      }
  if (hour==12){
    if (mouseX <= 50 ){

      if (mouseY <= 45)  {
        c=color(237, 34, 123);
      }else if(mouseY <=90){
        c=color(190, 40, 195);
      }else if(mouseY <=135){
        c=color(140, 110, 200)
      }else if(mouseY <=180){
        c=color(160, 200, 240)
      }else if(mouseY <=225){
        c=color(20, 110, 240)
      }else if(mouseY <=270){
        c=color(20, 190, 140)
      }else if(mouseY <=315){
        c=color(20, 240, 140)
      }else if(mouseY <=360){
        c=color(242, 240, 140)
      }else if(mouseY <=405){
        c=color(242, 190, 70)
      }else if(mouseY<=450){
        c=color(250, 110, 80)
      }else if(mouseY <=495){
        c=color(250, 70, 80)
      }else if(mouseY<=540){
        c=color(250, 140, 160)
      }
    }
  }

  if (hour==13){
    if (mouseX <= 50 ){

      if (mouseY <= 45)  {
        c=color(237, 34, 123);
      }
      }
    }
  if (hour==14){
      if (mouseX <= 50 ){
  
        if (mouseY <= 45)  {
          c=color(237, 34, 123);
        }else if(mouseY <=90){
          c=color(190, 40, 195);
        }
      }
    }   

    if (hour==15){
      if (mouseX <= 50 ){
  
        if (mouseY <= 45)  {
          c=color(237, 34, 123);
        }else if(mouseY <=90){
          c=color(190, 40, 195);
        }else if(mouseY <=135){
          c=color(140, 110, 200)
        }
      }
    }

    if (hour==16){
      if (mouseX <= 50 ){
  
        if (mouseY <= 45)  {
          c=color(237, 34, 123);
        }else if(mouseY <=90){
          c=color(190, 40, 195);
        }else if(mouseY <=135){
          c=color(140, 110, 200)
        }else if(mouseY <=180){
          c=color(160, 200, 240)
        }
      }
    }     
    
    if (hour==17){
      if (mouseX <= 50 ){
  
        if (mouseY <= 45)  {
          c=color(237, 34, 123);
        }else if(mouseY <=90){
          c=color(190, 40, 195);
        }else if(mouseY <=135){
          c=color(140, 110, 200)
        }else if(mouseY <=180){
          c=color(160, 200, 240)
        }else if(mouseY <=225){
          c=color(20, 110, 240)
        }
      }
    }

    if (hour==18){
      if (mouseX <= 50 ){
  
        if (mouseY <= 45)  {
          c=color(237, 34, 123);
        }else if(mouseY <=90){
          c=color(190, 40, 195);
        }else if(mouseY <=135){
          c=color(140, 110, 200)
        }else if(mouseY <=180){
          c=color(160, 200, 240)
        }else if(mouseY <=225){
          c=color(20, 110, 240)
        }else if(mouseY <=270){
          c=color(20, 190, 140)
        }
      }
    }

    if (hour==19){
      if (mouseX <= 50 ){
  
        if (mouseY <= 45)  {
          c=color(237, 34, 123);
        }else if(mouseY <=90){
          c=color(190, 40, 195);
        }else if(mouseY <=135){
          c=color(140, 110, 200)
        }else if(mouseY <=180){
          c=color(160, 200, 240)
        }else if(mouseY <=225){
          c=color(20, 110, 240)
        }else if(mouseY <=270){
          c=color(20, 190, 140)
        }else if(mouseY <=315){
          c=color(20, 240, 140)
        }
      }
    }

    if (hour==20){
      if (mouseX <= 50 ){
  
        if (mouseY <= 45)  {
          c=color(237, 34, 123);
        }else if(mouseY <=90){
          c=color(190, 40, 195);
        }else if(mouseY <=135){
          c=color(140, 110, 200)
        }else if(mouseY <=180){
          c=color(160, 200, 240)
        }else if(mouseY <=225){
          c=color(20, 110, 240)
        }else if(mouseY <=270){
          c=color(20, 190, 140)
        }else if(mouseY <=315){
          c=color(20, 240, 140)
        }else if(mouseY <=360){
          c=color(242, 240, 140)
        }else if(mouseY <=405){
          c=color(242, 190, 70)
        }else if(mouseY<=450){
          c=color(250, 110, 80)
        }else if(mouseY <=495){
          c=color(250, 70, 80)
        }else if(mouseY<=540){
          c=color(250, 140, 160)
        }
      }
    }

    if (hour==21){
      if (mouseX <= 50 ){
  
        if (mouseY <= 45)  {
          c=color(237, 34, 123);
        }else if(mouseY <=90){
          c=color(190, 40, 195);
        }else if(mouseY <=135){
          c=color(140, 110, 200)
        }else if(mouseY <=180){
          c=color(160, 200, 240)
        }else if(mouseY <=225){
          c=color(20, 110, 240)
        }else if(mouseY <=270){
          c=color(20, 190, 140)
        }else if(mouseY <=315){
          c=color(20, 240, 140)
        }else if(mouseY <=360){
          c=color(242, 240, 140)
        }else if(mouseY <=405){
          c=color(242, 190, 70)
        }
      }
    }

    if (hour==22){
      if (mouseX <= 50 ){
  
        if (mouseY <= 45)  {
          c=color(237, 34, 123);
        }else if(mouseY <=90){
          c=color(190, 40, 195);
        }else if(mouseY <=135){
          c=color(140, 110, 200)
        }else if(mouseY <=180){
          c=color(160, 200, 240)
        }else if(mouseY <=225){
          c=color(20, 110, 240)
        }else if(mouseY <=270){
          c=color(20, 190, 140)
        }else if(mouseY <=315){
          c=color(20, 240, 140)
        }else if(mouseY <=360){
          c=color(242, 240, 140)
        }else if(mouseY <=405){
          c=color(242, 190, 70)
        }else if(mouseY<=450){
          c=color(250, 110, 80)
        }
      }
    }

    if (hour==23){
      if (mouseX <= 50 ){
  
        if (mouseY <= 45)  {
          c=color(237, 34, 123);
        }else if(mouseY <=90){
          c=color(190, 40, 195);
        }else if(mouseY <=135){
          c=color(140, 110, 200)
        }else if(mouseY <=180){
          c=color(160, 200, 240)
        }else if(mouseY <=225){
          c=color(20, 110, 240)
        }else if(mouseY <=270){
          c=color(20, 190, 140)
        }else if(mouseY <=315){
          c=color(20, 240, 140)
        }else if(mouseY <=360){
          c=color(242, 240, 140)
        }else if(mouseY <=405){
          c=color(242, 190, 70)
        }else if(mouseY<=450){
          c=color(250, 110, 80)
        }else if(mouseY <=495){
          c=color(250, 70, 80)
        }
      }
    }
if (hour==24){
  if (mouseX <= 50 ){

    if (mouseY <= 45)  {
      c=color(237, 34, 123);
    }else if(mouseY <=90){
      c=color(190, 40, 195);
    }else if(mouseY <=135){
      c=color(140, 110, 200)
    }else if(mouseY <=180){
      c=color(160, 200, 240)
    }else if(mouseY <=225){
      c=color(20, 110, 240)
    }else if(mouseY <=270){
      c=color(20, 190, 140)
    }else if(mouseY <=315){
      c=color(20, 240, 140)
    }else if(mouseY <=360){
      c=color(242, 240, 140)
    }else if(mouseY <=405){
      c=color(242, 190, 70)
    }else if(mouseY<=450){
      c=color(250, 110, 80)
    }else if(mouseY <=495){
      c=color(250, 70, 80)
    }else if(mouseY<=540){
      c=color(250, 140, 160)
    }
  }
}
  }



  function keyPressed(){
    if (keyCode === 13){
      c=color(255, 20, 60)
    }
    if (keyCode === 39){
      globalspeed = globalspeed + 0.15;
    }

      if (keyCode === 37){
        globalspeed = globalspeed - 0.15;
      }
       
  }

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
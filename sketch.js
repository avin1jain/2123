var level1;
var level2;
var level3;
var gameState= 0;
var score= 0;
var question,option1,option2,option3,option4;
var start1,end1,science,third,second;
function preload() {
  start1=loadImage("start.jpg");
  science=loadImage("anti.jpg");
  second=loadImage("science3.jpg");
  third=loadImage("3rd.jpg");
  end1=loadImage("end.jpg");

}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    question= createElement('h3');
    option1= createElement('h4');
    option2= createElement('h4');
    option3= createElement('h4');
    option4= createElement('h4'); 
    level1= new Level1()
    level2= new Level2();
    level3= new Level3();
    level2.hide();
    level3.hide();
}
function draw(){
background("red");
if (gameState==0){
    background(start1);
    level1.display();
 
}
 if (gameState==1){
    background(science);
  level1.showquestion();
    
 }
 
 if (gameState==2){
     background(second);
  level2.showquestion();

 }
 if (gameState==3){
     background(third);
    
    level3.showquestion();
  
   }
   if(gameState==4){
       background(end1);
       option1.hide();
       option2.hide();
       option3.hide();
       option4.hide();
       question.hide();
       level3.hide();
   }
}
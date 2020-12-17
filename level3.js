class Level3 {

    constructor() {
    
      this.count=21 ;
      this.button2= createButton('next');
      this.input2 = createInput("Write option here")
      this.answer=["c","a","c","b","b","a","b","c","d","b"];
    }
   
  
    hide(){
    this.button2.hide();
    this.input2.hide();
  
  
  
  
    }
    show(){
      this.button2.show();
      this.input2.show();
    
    
    
    
      }
    showquestion(){
    if(this.count==21){
    question.html('Q1) MS-Word is an example of _____ ')
    question.position(50,displayHeight/2-50)
    option1.html('A) An operating system')
    option1.position(100,displayHeight/2+50);
    option2.html('B) A processing device')
    option2.position(displayWidth/2,displayHeight/2+50);
    option3.html('C) Application software')
    option3.position(100,displayHeight/2+150);
    option4.html('D) An input device')
    option4.position(displayWidth/2,displayHeight/2+150);

    }else if(this.count==22){
      question.html('Q2) The state of Assam has')
      question.position(50,displayHeight/2-50)
      option1.html('A) 5 National Parks & 11 wildlife sanctuaries')
      option1.position(100,displayHeight/2+50);
      option2.html(' B) 3 National Parks & 9 wildlife sanctuaries')
      option2.position(displayWidth/2,displayHeight/2+50);
      option3.html('C) 3 National Parks & 8 wildlife sanctuaries')
      option3.position(100,displayHeight/2+150);
      option4.html('D) 2 National Parks & 11 wildlife sanctuaries')
      option4.position(displayWidth/2,displayHeight/2+150);
  
    }else if(this.count==23){
        question.html('Q3) Which one of the following types of waves are used in a night vision apparatus?')
        question.position(50,displayHeight/2-50)
        option1.html('A) Radio waves')
        option1.position(100,displayHeight/2+50);
        option2.html('B) Microwaves')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) Infra-red waves')
        option3.position(100,displayHeight/2+150);
        option4.html('D) None of the above')
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==24){
        question.html('Q4) In which of the following festivals are boat races a special feature?')
        question.position(50,displayHeight/2-50)
        option1.html('A) Rongali Bihu')
        option1.position(100,displayHeight/2+50);
        option2.html('B) Onam')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) Pongal')
        option3.position(100,displayHeight/2+150);
        option4.html('D) Navratri')
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==25){
        question.html('Q5) Which industry makes a lot of money in the entertainment industry?')
        question.position(50,displayHeight/2-50)
        option1.html('A) Avengers: Endgame')
        option1.position(100,displayHeight/2+50);
        option2.html(' B) Grand Theft Auto V')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html(' C) Friends')
        option3.position(100,displayHeight/2+150);
        option4.html(' D)  None of the above')
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==26){
        question.html('Q6) India lies in the hemisphere ')
        question.position(50,displayHeight/2-50)
        option1.html('A) Northern and eastern')
        option1.position(100,displayHeight/2+50);
        option2.html('B) Southern and eastern')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) Northern and western	')
        option3.position(100,displayHeight/2+150);
        option4.html(' D) Southern and western')
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==27){
        question.html('Q7)Golf player Vijay Singh belongs to which country?')
        question.position(50,displayHeight/2-50)
        option1.html('A) USA')
        option1.position(100,displayHeight/2+50);
        option2.html('B) Fiji')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) India	' );
        option3.position(100,displayHeight/2+150);
        option4.html('D) UK ');
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==28){
        question.html('Q8)World Tourism Day is celebrated on- ')
        question.position(50,displayHeight/2-50)
        option1.html('A) September 12')
        option1.position(100,displayHeight/2+50);
        option2.html('B) September 25')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) September 27')
        option3.position(100,displayHeight/2+150);
        option4.html('D) September 29')
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==29){
        question.html('Q9) Which among the following cities in India, is not located in Golden Quadrilateral Road Network? ')
        question.position(50,displayHeight/2-50)
        option1.html('A) Kolkata')
        option1.position(100,displayHeight/2+50);
        option2.html('B) Mumbai')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) New Delhi')
        option3.position(100,displayHeight/2+150);
        option4.html('D) Chandigarh')
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==30){
        question.html('Q10) Which among the following countries whose National Anthem has only music not words -')
        question.position(50,displayHeight/2-50)
        option1.html('A) India');
        option1.position(100,displayHeight/2+50);
        option2.html('B) Bahrain');
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) Germany');
        option3.position(100,displayHeight/2+150);
        option4.html('D) Spain');
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }
    
   this.button2.position(displayWidth-100, displayHeight-100)
   
   this.input2.position(displayWidth/2-50,displayHeight-200)

   this.button2.mousePressed(()=>{ for(var i=0;i<this.answer.length;i++){
    if(this.count-21==i){
      if(this.answer[i]==this.input2.value().toLowerCase()){
      alert("Correct Answer")
      score++;
      }
      else{
        var text= "Incorrect Answer.  Correct Answer is  "+ this.answer[i].toUpperCase();
        alert (text)}
          }
  }
  console.log(this.answer);
  this.count++;
  this.input2.html('');
  if(this.count==31){
    var scoreString="Your score is "+score;
    alert(scoreString);
    gameState=4;
    score=0;
  }
  })
    } 
  }
  
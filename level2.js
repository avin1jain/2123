class Level2 {

    constructor() {
    
      this.count=11 ;
      this.button2= createButton('next');
      this.input2 = createInput("Write option here")
      this.answer=["c","d","d","b","d","a","c","c","c","b"];
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
    if(this.count==11){
    question.html('Q1)Who invented the telescope?')
    question.position(50,displayHeight/2-50)
    option1.html('A) Galileo')
    option1.position(100,displayHeight/2+50);
    option2.html('B) Hypatia')
    option2.position(displayWidth/2,displayHeight/2+50);
    option3.html('c) Hans Lippershey')
    option3.position(100,displayHeight/2+150);
    option4.html(' D) Johannes Kepler')
    option4.position(displayWidth/2,displayHeight/2+150);

    }else if(this.count==12){
      question.html('Q2)Which of these objects is the farthest from the Sun? ')
      question.position(50,displayHeight/2-50)
      option1.html('A) Saturn')
      option1.position(100,displayHeight/2+50);
      option2.html('B) Neptune')
      option2.position(displayWidth/2,displayHeight/2+50);
      option3.html('C) Kuiper belt')
      option3.position(100,displayHeight/2+150);
      option4.html('D) 90377 Sedna')
      option4.position(displayWidth/2,displayHeight/2+150);
  
    }else if(this.count==13){
        question.html('Q3)What is the smallest planet in the solar system by mass? ')
        question.position(50,displayHeight/2-50)
        option1.html('A) Mars')
        option1.position(100,displayHeight/2+50);
        option2.html('B) Earth')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) Jupiter')
        option3.position(100,displayHeight/2+150);
        option4.html(' D) Mercury')
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==14){
        question.html('Q4)Approximately how many miles (or kilometres) are there in a light-year?')
        question.position(50,displayHeight/2-50)
        option1.html('A) 590,000 (950,000 km) ')
        option1.position(100,displayHeight/2+50);
        option2.html('B) 5.9 trillion (9.5 trillion km)')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) 5.9 billion (9.5 billion km)')
        option3.position(100,displayHeight/2+150);
        option4.html('D) 5.9 million (9.5 million km)')
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==15){
        question.html('Q5) How much gravity an object has depends on its _______.')
        question.position(50,displayHeight/2-50)
        option1.html('A) Weight')
        option1.position(100,displayHeight/2+50);
        option2.html('B) Speed')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) Momentum')
        option3.position(100,displayHeight/2+150);
        option4.html('D) Mass')
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==16){
        question.html('Q6) Which of the following is used in pencils ? ')
        question.position(50,displayHeight/2-50)
        option1.html('A) Graphite')
        option1.position(100,displayHeight/2+50);
        option2.html('B) Silicon')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) Charcoal')
        option3.position(100,displayHeight/2+150);
        option4.html('D) Phosphorous')
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==17){
        question.html('Q7)Athlete’s Foot or Tinia Pedis is caused by which of the following ?')
        question.position(50,displayHeight/2-50)
        option1.html('A) Bacteria')
        option1.position(100,displayHeight/2+50);
        option2.html('B) Virus')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html(' C) Fungi' )
        option3.position(100,displayHeight/2+150);
        option4.html('D) Protozoan ');
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==18){
        question.html('Q8) Eardrum is a part of')
        question.position(50,displayHeight/2-50)
        option1.html('A)  Sound producing organ ')
        option1.position(100,displayHeight/2+50);
        option2.html('B)  Skeletal system')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C)  Hearing organ ')
        option3.position(100,displayHeight/2+150);
        option4.html('D) Heart')
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==19){
        question.html('Q9) Which among the following is called antisterility vitamin ?')
        question.position(50,displayHeight/2-50)
        option1.html('A) Vitamin A')
        option1.position(100,displayHeight/2+50);
        option2.html('B) Vitamin D')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) Vitamin E')
        option3.position(100,displayHeight/2+150);
        option4.html('D) Vitamin K')
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==20){
        question.html('Q10) Chemical formula for water is ')
        question.position(50,displayHeight/2-50)
        option1.html('A) NaA1O2');
        option1.position(100,displayHeight/2+50);
        option2.html('B) H2O');
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) Al2O3');
        option3.position(100,displayHeight/2+150);
        option4.html('D) CaSiO3');
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }
    
   this.button2.position(displayWidth-100, displayHeight-100)
   
   this.input2.position(displayWidth/2-50,displayHeight-200)

   this.button2.mousePressed(()=>{
    for(var i=0;i<this.answer.length;i++){
      if(this.count-11==i){
        if(this.answer[i]==this.input2.value().toLowerCase()){
        alert("Correct Answer")
        score++;
        }
        else{
          var text= "Incorrect Answer.  Correct Answer is  "+ this.answer[i].toUpperCase();
          alert (text)}      }
    }
    
    this.count=this.count+1;
    console.log(this.count);
    this.input2.html('');
    if(this.count==21){
      var scoreString="Your score is "+score;
      alert(scoreString);
      gameState=3;
      score=0;
      this.hide();
      level3.show();
    }
  })
    } 
  }
  
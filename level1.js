class Level1 {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('submit');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.count=1 ;
      this.button2= createButton('next');
      this.input2 = createInput("Write option here")
      this.answer=["a","d","a","b","a","d","a","d","c","d"];
    }
    hide(){
    
      this.button.hide();
      this.input.hide();
      this.button2.hide();

    }
  
    display(){
      this.title.html("Quiz Master");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
   
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.greeting.html("Hello " + this.input.value())
        gameState=1;
        this.greeting.position(displayWidth/2 - 70, displayHeight/6);
      });
     
  
  
  
  
    }
    showquestion(){
    if(this.count==1){
    question.html('Q1) How is COVID-19 passed on?')
    question.position(50,displayHeight/2-50)
    option1.html('A) Through droplets that come from your mouth and nose when you cough or breathe out')
    option1.position(100,displayHeight/2+50);
    option2.html('B) wear mask')
    option2.position(displayWidth/2,displayHeight/2+50);
    option3.html('C) washing hands')
    option3.position(100,displayHeight/2+150);
    option4.html('D) All of the above ')
    option4.position(displayWidth/2,displayHeight/2+150);

    }else if(this.count==2){
    question.html('Q2)What are the common symptoms of COVID-19? ')
    question.position(50,displayHeight/2-50)
    option1.html('A) A new and continuous cough')
    option1.position(100,displayHeight/2+50);
    option2.html('B) Fever')
    option2.position(displayWidth/2,displayHeight/2+50);
    option3.html('C) Tiredness')
    option3.position(100,displayHeight/2+150);
    option4.html('D) All of the above ')
    option4.position(displayWidth/2,displayHeight/2+150);
  
    }else if(this.count==3){
        question.html('Q3)Can you always tell if someone has COVID-19? ')
        question.position(50,displayHeight/2-50)
        option1.html('A) No – not everyone with COVID-19 has symptoms')
        option1.position(100,displayHeight/2+50);
        option2.html('B) Yes – it will be obvious, a person with COVID-19 coughs a lot')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) Yes – you can tell just by where a person comes from, their race and ethnicity')
        option3.position(100,displayHeight/2+150);
        option4.html('D) All of the above ')
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==4){
        question.html('Q4)Can washing your hands protect you from COVID-19?')
        question.position(50,displayHeight/2-50)
        option1.html('A) Yes – but only if you use a strong bleach')
        option1.position(100,displayHeight/2+50);
        option2.html('B) Yes – normal soap and water or hand sanitizer is enough')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) No – Washing your hands doesn’t stop COVID-19 ')
        option3.position(100,displayHeight/2+150);
        option4.html('D) All of the above ')
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==5){
        question.html('Q5)Which of the following people is COVID-19 more dangerous for?')
        question.position(50,displayHeight/2-50)
        option1.html('A) Older people – especially those aged 70 and above')
        option1.position(100,displayHeight/2+50);
        option2.html('B) With good immune system ')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) who wear mask')
        option3.position(100,displayHeight/2+150);
        option4.html('who washes there hands')
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==6){
        question.html('Q6)When should fabric face masks be worn? ')
        question.position(50,displayHeight/2-50)
        option1.html('A) On public transport')
        option1.position(100,displayHeight/2+50);
        option2.html('B) In confined or crowded spaces')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) In small shops')
        option3.position(100,displayHeight/2+150);
        option4.html('D) All of the above ')
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==7){
        question.html('Q7)Which of the following is an example of physical distancing?')
        question.position(50,displayHeight/2-50)
        option1.html('A) You stop going to crowded places and visiting other people’s houses')
        option1.position(100,displayHeight/2+50);
        option2.html('B) You stop talking to the people you live with')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) You stop speaking to your friends on the phone')
        option3.position(100,displayHeight/2+150);
        option4.html('D) None')
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==8){
        question.html('Q8)How can people living with HIV protect themselves from COVID-19?')
        question.position(50,displayHeight/2-50)
        option1.html('A) Wash their hands regularly and follow the physical distancing advice')
        option1.position(100,displayHeight/2+50);
        option2.html('B) Keep taking their antiretroviral treatment')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) Exercise regularly, eat well and look after their mental health')
        option3.position(100,displayHeight/2+150);
        option4.html('D) All of the above ')
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==9){
        question.html('Q9)The first case of novel corona virus was identified in')
        question.position(50,displayHeight/2-50)
        option1.html('A) Beijing')
        option1.position(100,displayHeight/2+50);
        option2.html('B) Shanghai')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) Wuhan, Hubei')
        option3.position(100,displayHeight/2+150);
        option4.html('D) Tianjin')
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==10){
        question.html('Q10)How many countries, areas or territories are suffering from novel coronavirus outbreak in the World?')
        question.position(50,displayHeight/2-50)
        option1.html('A). More than 50')
        option1.position(100,displayHeight/2+50);
        option2.html('B) More than 100')
        option2.position(displayWidth/2,displayHeight/2+50);
        option3.html('C) More than 150')
        option3.position(100,displayHeight/2+150);
        option4.html('D) More than 200 ')
        option4.position(displayWidth/2,displayHeight/2+150);
    
      }
    
   this.button2.position(displayWidth-100, displayHeight-100)
   
   this.input2.position(displayWidth/2-50,displayHeight-200)

   this.button2.mousePressed(()=>{
   // this.answer.push(this.input2.value());
   for(var i=0;i<this.answer.length;i++){
     if(this.count-1==i){
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
   if(this.count==11){
     var scoreString="Your score is "+score;
     alert(scoreString);
     gameState=2;
     score=0;
     this.hide();
     level2.show();
   }
  })
    } 
  }
  
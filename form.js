class Form{
    constructor(){
        this.input=createInput("n");
        
        this.button=createButton('CALCULATE');
        
        this.greeting=createElement('h3');

        
    }
    hide(){

        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
   var title=createElement('h2');
   title.html("FACTORIAL CALCULATOR");
   title.position(displayWidth/2-50,0);
   this.input.position(displayWidth/2-40,displayHeight/2-80);
   this.button.position(displayWidth/2+30,displayHeight/2);
   this.reset.position(displayWidth-100,20);

   this.button.mousePressed(()=>{   
       this.input.hide();
       this.button.hide();

       player.name=this.input.value();

       

       
       

       this.greeting.html("YOUR ANSWER IS "+sketch.answer);
       this.greeting.position(displayWidth/2-70,displayHeight/4);
   })

}

}
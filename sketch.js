var fact=1;
var num=0;
var answer=0;

var input
var button
var greeting
var title

var answerM=[];

function setup(){
  
   input=createInput("n");
   num=input.value();
 button=createButton('CALCULATE');
        
 greeting=createElement('h3');

   title=createElement('h2');
   title.html("FACTORIAL CALCULATOR");
   title.position(displayWidth/2-50,0);
    input.position(displayWidth/2-40,displayHeight/2-80);
    button.position(displayWidth/2+30,displayHeight/2);
    //reset.position(displayWidth-100,20);
    greeting.html("YOUR ANSWER IS "+answerM);
       greeting.position(displayWidth/2-70,displayHeight/4);

       greeting.hide();

       button.mousePressed(()=>{   
        input.hide();
        button.hide();
     
       //player.name=input.value();
     
       
       greeting.show();
       
       
       
     
       greeting.html("YOUR ANSWER IS "+answer);
       greeting.position(displayWidth/2-70,displayHeight/4);
     })
   
}

function draw(){
  createCanvas(displayWidth,displayHeight);
  background("white")

  
  //console.log(answer)

  

console.log(answer)



}


for(var i=num;i>1; i=i--){
   answer*=i;
}






  

  
  

   





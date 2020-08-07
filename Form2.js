class Form2{
    constructor(){}

    display(){
        
        var Text=createElement("h1");
        Text.position(500,200);
        Text.html("What is the best method to study?"+"<br/>"+"<br/>"+
        "The best study spot is the one that is quiet,"+"<br/>"+
        "well-lit and in a low traffic zone.Make sure"+"<br/>"+
        "there is a clear workspace to study and"+"<br/>"+
        "write on. For every 30 minutes, you study,"+"<br/>"+
        "take a short 10-15 minute break to "+"<br/>"+
        "recharge. Make studying less overwhelming "+"<br/>"+
        " by condensing notes from class."+"<br/>"+"<br/>"+
        " So,to make your study easy,you should take"+"<br/>"+
        " the help of  'STUDY R8'.");
     
       

        var NextButton2=createButton("Let's Begin");
        NextButton2.position(750,750);
        NextButton2.size(100,30);

        NextButton2.mousePressed(function(){

            Text.hide();
            NextButton2.hide();

            game.update(2);
            game.displayChoose();

    
              //  user.updateUserCount(userCount+1);
              //  user.updateUserDetails(name,email);
                
          
        })
  
    }

}
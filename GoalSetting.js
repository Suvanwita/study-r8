class GoalSetting{
    
    constructor(){}

    display(){
        
        var Text2=createElement("h2");
        Text2.position(500,100);
        Text2.html("Here are six reasons why setting goals is important.:"
        +"<br/>"+"<br/>"+
        "Goals Give You Focus. Without a goal, your efforts can become"+"<br/>"+
        " disjointed and often confusing...."+"<br/>"+
        "Goals Help You Measure Progress. ..."+"<br/>"+
        "Goals Help You Stay Motivated. ..."+"<br/>"+
        "They Help You Beat Procrastination. ..."+"<br/>"+
        "You Achieve Even More. ... "+"<br/>"+
        " Goals Help You Determine What You Want in Life."+"<br/>"+"<br/>"+
        " THEREFORE, IT IS EXTREMELY IMPORTANT TO SET A GOAL."
        +"<br/>");

        var goalInput=createInput("Enter your goal...    ");
        goalInput.position(750,500);

        var Text3=createElement("h2");
        Text3.position(700,550);
        var  goalvalue=goalInput.value();
        Text3.html("Your current goal is: " + goalvalue);
       

        var BackButton2=createButton("Go back");
        BackButton2.position(780,800);
        BackButton2.size(100,30);


        BackButton2.mousePressed(function(){

            Text2.hide();
            Text3.hide();
            BackButton2.hide();
            goalInput.hide();
            game.update(2);
            game.displayChoose();

        });
  
    
    }
}
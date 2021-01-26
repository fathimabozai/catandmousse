var backgroundImage;
var tom, tomImage1,tomImage2;
var jerry, jerryImage1,jerryImage2;

function preload() 
{
    //loading images 
    
    backgroundImage = loadImage("garden.png");
    tomImage1= loadAnimation("cat1.png");
    tomImage2=loadAnimation("cat2.png","cat3.png");
    tomImg3= loadAnimation("cat4.png");
    jerryImage1=loadAnimation("mouse1.png");
    jerryImage2= loadAnimation("mouse2.png","mouse3.png");
    jerryImg3=loadAnimation("mouse4.png");
}

function setup()
{
    createCanvas(1000,800);
    //create tom and jerry sprites 
    createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImage1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImage1);
    jerry.scale = 0.14;

}

function draw() 
{
    background(backgroundImage);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();  
}

function keyPressed()
{
    if(keyCode === LEFT_ARROW)
    {
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImage2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImage2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}

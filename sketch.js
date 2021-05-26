const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var time;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){ 
        background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here
    var time = datetime.slice(11, 13)
    noStroke();
    textSize (40);
    fill('black');
    text("Time" + time, width-400, 75);


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
    
    //change the data in JSON format
    var responseJson = await response.json();
    var dateTime = responseJson.datetime;

    // write code slice the datetime
    var hour = datetime.slice(11, 13);
    
    // add conditions to change the background images from sunrise to sunset
    if (hour>=06 && hour<=19){
        bg = "sprites/bg.png"
    }
    else {
        bg = "sprites/bg2.png"
    } 
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}

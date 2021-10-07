//extracting constants
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//creating variables
var engine, world;
var stone, bouncyBall,hammer;

function setup() {

        //creating canvas
        var canvas = createCanvas(1200,600);

        //creating an engine and a world
        engine = Engine.create();
        world = engine.world;

        //creating bodies using classes
        plane = new Plane(600,height,1200,20);
        iron = new Iron(300,350);
        stone = new Stone(700,320,100,100);
        bouncyBall=new BouncyBall(900,450,70);
        hammer = new Hammer(10,100);
}

function draw() {

    //setting background colour
    background("lightBlue");

    //updating engine
    Engine.update(engine);

    //displaying bodies
    stone.display();
    plane.display();
    bouncyBall.display();
    iron.display();
    hammer.display();
    
}

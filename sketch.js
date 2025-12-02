//Click the Page for a New Ren :)
//Improvement of the Creature Asssignment
//Please WOrk

let eyes = [];
let eyebrow = [];
let mouth = [];

let randomEyes;
let randomEyebrow;
let randomMouth;
let y = -30;
let randomclothingface
let randomclothinghead

let clothingface = [];
let clothinghead = [];


function preload() {

renBody = loadImage("images/Ren.png");
bg = loadImage("images/Background.png");


//Random Eyes

eyes.push (loadImage ("images/Eye1.png"));
eyes.push (loadImage ("images/Eye2.png"));
eyes.push (loadImage ("images/Eye3.png"));

//Random Eyebrows

eyebrow.push (loadImage ("images/Eyebrow1.png"));
eyebrow.push (loadImage ("images/Eyebrow2.png"));
eyebrow.push (loadImage ("images/Eyebrow3.png"));

//Random Mouth

mouth.push (loadImage ("images/Mouth1.png"));
mouth.push (loadImage ("images/Mouth2.png"));
mouth.push (loadImage ("images/Mouth3.png"));

//Face

clothingface.push (loadImage ("images/nose.png"));
clothingface.push (loadImage ("images/Glasses.png"));
clothingface.push (loadImage ("images/Glasses2.png"));

//head

clothinghead.push (loadImage ("images/Bow.png"));
clothinghead.push (loadImage ("images/Earrings.png"));







}


function setup() {
  createCanvas(700, 400);

randomEyes = random(eyes);
randomMouth = random(mouth);
randomEyebrow = random(eyebrow);
randomclothinghead = random(clothinghead);
randomclothingface = random(clothingface);

y = random(-30, -25);


}


function draw() {
    background(200);

    image(bg, 0, 0);
    
    scale(1.5)
    image(renBody, 80, -30)


    image(randomEyes, 80, -30);
    image(randomEyebrow, 80, y);
    image(randomMouth, 80, -30);
    image(randomclothingface, 80, -30);
    image(randomclothinghead, 80, -30);




}

function mousePressed() {



randomEyes = random(eyes);
randomMouth = random(mouth);
randomEyebrow = random(eyebrow);
randomclothinghead = random(clothinghead);
randomclothingface = random(clothingface);

y = random(-30, -25);

}
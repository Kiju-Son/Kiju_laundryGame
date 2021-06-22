let pressStart;
let pressStart2;
let laundry_basket;
let sound_washing;
let startW = 260;
let startH = 120;
let stage = 0;
let br = 191;
let bg, bb =255;
let lx = 270;
let ly = 110;
let play;
let count = 0;
let tx = 500;
let ty = 200;
let wx = 650;
let wy = 200;
let amount = 20;
let is_laundry_released = false;
let numFrames = 6;
let images = [];
let currentFrame = 0;


function preload() {
  pressStart = loadFont('font/DancingScript-Bold.ttf');
  pressStart2 = loadFont('font/PressStart2P-Regular.ttf');
  laundry_basket = loadImage("image/laundry.png");
  dol = loadImage("image/dol.png");
  plant = loadImage("image/plant.png");
  sunbi = loadImage("image/sunbi.png");
  teddy = loadImage("image/teddy.png");
  wash = loadImage("image/wash.png");
  SBbed = loadImage("image/SBbed.gif");
  washing = loadImage("image/washing.gif");

  for (let i = 0; i < numFrames; i++) {
    images[i] = loadImage("loop/data_" + i + ".png");
  }

  soundFormats('mp3');
  opening = loadSound("mp3/liebesfreud.mp3"); 
  click = loadSound("mp3/CLICK!.mp3");  
  

}

function setup() {
  cnv = createCanvas(680, 416);
  cnv.position(370, 260);
  opening.onended(laundryDone);
  
}

function draw() {
  background(255);
  if (stage == 0) {
    startPage();
  } else if (stage == 1) {
    room();
    washingMachine();
    laundry(160, 120, 50, 70, 132);
  } else if (stage == 2){
    closeUp();
    // 
  } else if (stage == 3){
    laundryDone();
  }
}

function room() {
  // background(95, 150, 182);
  line(width / 4, 0, width / 4, height / 4);
  line(width / 4, height / 4, width, height / 4);
  line(width / 4, height / 4, 0, height);
  image(dol, 150, 200, 50, 80);
  image(plant, 530, 25, 50, 65);
  image(plant, 400, 100, 50, 80);
  image(sunbi, 600, 40, 20, 32);
  

  
}

function startPage() {
  
  background(255);
  

  push();
  strokeWeight(0.75);
  stroke(255);
  fill(255);
  rect(width / 2 - 130, height / 2 - 60, startW, startH);
  pop();
  
  push();
   fill(0);
   textSize(30);
   textAlign(CENTER);
   fill(208, 192, 152);
   stroke(252, 253, 55);
   strokeWeight(3);
   textFont(pressStart);
   text('Start to Wash Clothes', width / 2, height / 2);
   if (width / 2 - 130 < mouseX && mouseX < width / 2 - 130 + startW && height / 2 - 6 < mouseY && mouseY < height / 2 + 60){
     imageMode(CORNER);
     tint(0, 153, 204, 126);
     image(SBbed, 50, 0);
    }
   fill(0);
   textAlign(CENTER);
   textFont(pressStart2);
   textSize(20);
   text('START!', width /2, height / 2 +45 );
  pop();

  let d = dist(mouseX, mouseY, width / 2 - 130 + startW / 2, height / 2 - 60 + startH / 2);
    if (d < 200 && stage == 0) {
      if(mouseIsPressed){
        stage = 1;
        click.play();
      }
    }
  }



  function washingMachine() {
    //몸체
    rect(width * 3 / 4, height / 9, 100, 130, 5);
    line(width * 3 / 4, height / 9 + 20, width * 3 / 4 + 100, height / 9 + 20);
    //입구
    push();
    fill(230);
    stroke(100);
    strokeWeight(2);
    ellipse(width * 3 / 4 + 50, height / 9 + 70, 80);
    pop();
    push();
    strokeWeight(3);
    stroke(50);
    ellipse(width * 3 / 4 + 50, height / 9 + 70, 70);
    pop();
    rect(595, 112, 13, 10);
    //버튼
    ellipse(width * 3 / 4 + 15, height / 9 + 10, 10);
    ellipse(width * 3 / 4 + 30, height / 9 + 10, 10);
    push();
    stroke(255);
    strokeWeight(2)
    fill(200);
    ellipse(width * 3 / 4 + 85, height / 9 + 10, 10);
    pop();

    push();
    text('빨래와 인형과 세제를 한꺼번에 세탁기에 넣어 보자!', 100, 380);
    pop();
  }

  // function mouseClicked() {

  // }


  function mouseReleased()
  {let ldd = dist(lx, ly, width * 3 / 4 + 50, height / 9 + 70);
   let tdd = dist(tx, ty, width * 3 / 4 + 50, height / 9 + 70);
   let wdd = dist(wx, wy, width * 3 / 4 + 50, height / 9 + 70);
      if (ldd < 50 && stage ==1)
      {
        is_laundry_released = true;
        if (tdd < 50 && stage ==1)
        {
          is_laundry_released = true;
          if (wdd < 50 && stage ==1)
          {
            is_laundry_released = true;
        
        count = 1;
        }
      }
      }
      if (count == 1  && stage ==1){
        click.play();
        stage = 2;

         }
    

  }

  function laundry(a, b, c, d, e) {

    imageMode(CENTER);
    if (!is_laundry_released)
    {
      image(laundry_basket, lx, ly, a, b);
      image(teddy, tx, ty, 140, 200);
      image(wash, wx, wy, 35, 60);

    }

    let ld = dist(mouseX, mouseY, lx, ly);
    let td = dist(mouseX, mouseY, tx, ty);
    let wd = dist(mouseX, mouseY, wx, wy)

    // if(lx <mouseX && mouseX < a && ly < mouseY && b < mouseY){
    // }


    if(ld < 100){
      if(mouseIsPressed){
        lx = mouseX;
        ly = mouseY;  
      }
    }
    if(dist(lx, ly, width * 3 / 4 + c, height / 9 + d)<c){
      ellipse(width * 3 / 4 + e, height / 9 + d, d);
    }
    
    if(td < 100){
      if(mouseIsPressed){
        tx = mouseX;
        ty = mouseY;  
      }
    }
    if(dist(tx, ty, width * 3 / 4 + c, height / 9 + d)<c){
      ellipse(width * 3 / 4 + e, height / 9 + d, d);
    }


    if(wd < 50){
      if(mouseIsPressed){
      wx = mouseX;
      wy = mouseY;
      }
    }
    if(dist(wx, wy, width * 3 / 4 + 50, height / 9 + 70) <50){
      ellipse(width * 3 / 4 + 132, height / 9 + 70, 70);
  }   
  
}

  
function closeUp() {
  // background(95, 150, 182);
  let stf = 0;
  let sx = 580;
  let sy = 50;
  let bd = dist(mouseX, mouseY, sx, sy);
  if (bd < 100 && mouseIsPressed) {
    opening.play();
    stf = 255;
   
  }

  frameRate(10);
  image(images[currentFrame], width / 2, height / 2)
  if (currentFrame == images.length - 1) {
    currentFrame = 0;
    
  }
  currentFrame++;


  // push();
  rectMode(CENTER)
  noFill();
  rect(width / 2, height /2, width - 50);
  stroke(200);
  strokeWeight(10);
  ellipse(width / 2, height /2, 450);
  // pop();

  
  push();
   fill(stf);
   textAlign(CENTER);
   textFont(pressStart2);
   textSize(20);
   strokeWeight(5);
   stroke(20, 222, 255);
   text('start', 580, 50);
  pop();
  
  opening.onended(laundryDone);
 
  
}

function laundryDone(){
  alert('빨래가 끝났습니다. 노래를 들으려면 한번 더 돌리세요');
  background(255)
  let textC = [155, 234, 239];
  let textS = 200;
  
  // push();
  // textAlign(CENTER);
  // textSize(textS);
  // fill(textC[0], textC[1], textC[2]);
  // text('Yay!', width / 2, height / 2);
  // pop();
  

}
// function endPage {

  
// }


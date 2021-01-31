var pacman, pacmanImg;
var leftImg, upImg, downImg;
var redGhost, redGhostImg;
var BlueGhost, BlueGhostImg;
var GreenGhost, GreenGhostImg;
var YellowGhost, YellowGhostImg;
var pinkScared, pinkScaredImg;
var BlueScared, BlueScaredImg;
var cardboard1, cardboard2, cardboard3, cardboard4, cardboard5, cardboard6, cardboard7, cardboard8, cardboard9, cardboard10, cardboard11;
var cardboard12, cardboard13, cardboard14, cardboard15, cardboard16, cardboard17, cardboard18, cardboard19, cardboard20, cardboard21, cardboard22;
var cardboard23, cardboard24, cardboard25, cardboard26, cardboard27, cardboard28, cardboard29, cardboard30, cardboard31, cardboard32, cardboard33;
var cardboard34, cardboard35, cardboard36, cardboard38, cardboard39, cardboard40, cardboard41, cardboard42, cardboard43, cardboard44;
var edges;
var coin, coinImg;
var score;

function preload() {
  pacmanImg = loadAnimation("pacman_full.png", "pacman_half.png", "pacman_open.png", "pacman_half.png")
  leftImg = loadAnimation("pacman_full.png", "pacman left half.png", "pacman left open.png", "pacman left half.png")
  downImg = loadAnimation("pacman_full.png", "pacman down half.png", "pacman down open.png", "pacman down half.png")
  upImg = loadAnimation("pacman_full.png", "pacman up half.png", "pacman up open.png", "pacman up half.png")
  redGhostImg = loadImage("red_ghost.png");
  BlueGhostImg = loadImage("blue_ghost.png");
  GreenGhostImg = loadImage("green_ghost.png");
  YellowGhostImg = loadImage("yellow_ghost.png");
  coinImg = loadImage("pacman_coin.png");
}

function setup() {
  createCanvas(400,400);

  edges = createEdgeSprites();

  //adding images and creating main characters
  pacman = createSprite(10,10, 0, 0);
  pacman.addAnimation("pacmanImg", pacmanImg);
  pacman.addAnimation("upImg", upImg);
  pacman.addAnimation("downImg", downImg);
  pacman.addAnimation("leftImg", leftImg);
  pacman.scale = 0.2
  redGhost = createSprite(150,120,0,0);
  redGhost.addImage(redGhostImg);
  redGhost.scale = 0.05;
  redGhost.velocityX = 2;
  BlueGhost = createSprite(100,200,0,0);
  BlueGhost.addImage(BlueGhostImg);
  BlueGhost.scale = 0.05;
  BlueGhost.velocityX = -2;
  GreenGhost = createSprite(260,200,0,0);
  GreenGhost.addImage(GreenGhostImg);
  GreenGhost.scale = 0.05;
  GreenGhost.velocityY = 2;
  YellowGhost = createSprite(300,200,0,0);
  YellowGhost.addImage(YellowGhostImg);
  YellowGhost.scale = 0.05;
  YellowGhost.velocityY = -2;

  score = 0;

  coin = createSprite(25,10, 0, 0);
  coin.addImage(coinImg);
  coin.scale = 0.05;

  coin2 = createSprite(50,10, 0, 0);
  coin2.addImage(coinImg);
  coin2.scale = 0.05;

  coin3 = createSprite(75,10, 0, 0);
  coin3.addImage(coinImg);
  coin3.scale = 0.05;

  coin4 = createSprite(125,10, 0, 0);
  coin4.addImage(coinImg);
  coin4.scale = 0.05;

  coin5 = createSprite(150,10, 0, 0);
  coin5.addImage(coinImg);
  coin5.scale = 0.05;

  coin6 = createSprite(175,10, 0, 0);
  coin6.addImage(coinImg);
  coin6.scale = 0.05;

  coin7 = createSprite(200,10, 0, 0);
  coin7.addImage(coinImg);
  coin7.scale = 0.05;

  coin8 = createSprite(225,10, 0, 0);
  coin8.addImage(coinImg);
  coin8.scale = 0.05;

  coin9 = createSprite(250,10, 0, 0);
  coin9.addImage(coinImg);
  coin9.scale = 0.05;

  coin10 = createSprite(275,10, 0, 0);
  coin10.addImage(coinImg);
  coin10.scale = 0.05;

  coin11 = createSprite(300,10, 0, 0);
  coin11.addImage(coinImg);
  coin11.scale = 0.05;

  coin12 = createSprite(325,10, 0, 0);
  coin12.addImage(coinImg);
  coin12.scale = 0.05;

  coin13 = createSprite(350,10, 0, 0);
  coin13.addImage(coinImg);
  coin13.scale = 0.05;

  coin14 = createSprite(375,10, 0, 0);
  coin14.addImage(coinImg);
  coin14.scale = 0.05;

  coin15 = createSprite(75,35, 0, 0);
  coin15.addImage(coinImg);
  coin15.scale = 0.05;

  coin16 = createSprite(120,35, 0, 0);
  coin16.addImage(coinImg);
  coin16.scale = 0.05;

  coin17 = createSprite(220,35, 0, 0);
  coin17.addImage(coinImg);
  coin17.scale = 0.05;

  coin18 = createSprite(375,35, 0, 0);
  coin18.addImage(coinImg);
  coin18.scale = 0.05;

  coin19 = createSprite(25,53, 0, 0);
  coin19.addImage(coinImg);
  coin19.scale = 0.05;

  coin20 = createSprite(50,53, 0, 0);
  coin20.addImage(coinImg);
  coin20.scale = 0.05;

  coin21 = createSprite(75,53, 0, 0);
  coin21.addImage(coinImg);
  coin21.scale = 0.05;

  coin22 = createSprite(125,53, 0, 0);
  coin22.addImage(coinImg);
  coin22.scale = 0.05;

  coin23 = createSprite(150,53, 0, 0);
  coin23.addImage(coinImg);
  coin23.scale = 0.05;

  coin24 = createSprite(175,53, 0, 0);
  coin24.addImage(coinImg);
  coin24.scale = 0.05;

  coin25 = createSprite(220,53, 0, 0);
  coin25.addImage(coinImg);
  coin25.scale = 0.05;

  coin26 = createSprite(275,53, 0, 0);
  coin26.addImage(coinImg);
  coin26.scale = 0.05;

  coin27 = createSprite(300,53, 0, 0);
  coin27.addImage(coinImg);
  coin27.scale = 0.05;

  coin28 = createSprite(325,53, 0, 0);
  coin28.addImage(coinImg);
  coin28.scale = 0.05;

  coin29 = createSprite(350,53, 0, 0);
  coin29.addImage(coinImg);
  coin29.scale = 0.05;

  coin30 = createSprite(375,53, 0, 0);
  coin30.addImage(coinImg);
  coin30.scale = 0.05;

  coin31 = createSprite(255,53, 0, 0);
  coin31.addImage(coinImg);
  coin31.scale = 0.05;

  coin32 = createSprite(25,70, 0, 0);
  coin32.addImage(coinImg);
  coin32.scale = 0.05;

  coin33 = createSprite(175,70, 0, 0);
  coin33.addImage(coinImg);
  coin33.scale = 0.05;

  coin34 = createSprite(220,70, 0, 0);
  coin34.addImage(coinImg);
  coin34.scale = 0.05;

  coin35 = createSprite(255,70, 0, 0);
  coin35.addImage(coinImg);
  coin35.scale = 0.05;

  coin36 = createSprite(25,90, 0, 0);
  coin36.addImage(coinImg);
  coin36.scale = 0.05;

  coin37 = createSprite(50,90, 0, 0);
  coin37.addImage(coinImg);
  coin37.scale = 0.05;

  coin38 = createSprite(75,90, 0, 0);
  coin38.addImage(coinImg);
  coin38.scale = 0.05;

  coin39 = createSprite(100,90, 0, 0);
  coin39.addImage(coinImg);
  coin39.scale = 0.05;

  coin40 = createSprite(125,90, 0, 0);
  coin40.addImage(coinImg);
  coin40.scale = 0.05;

  coin41 = createSprite(150,90, 0, 0);
  coin41.addImage(coinImg);
  coin41.scale = 0.05;

  coin42 = createSprite(175,90, 0, 0);
  coin42.addImage(coinImg);
  coin42.scale = 0.05;

  coin43 = createSprite(220,90, 0, 0);
  coin43.addImage(coinImg);
  coin43.scale = 0.05;

  coin44 = createSprite(255,85, 0, 0);
  coin44.addImage(coinImg);
  coin44.scale = 0.05;

  coin45 = createSprite(275,85, 0, 0);
  coin45.addImage(coinImg);
  coin45.scale = 0.05;

  coin46 = createSprite(300,85, 0, 0);
  coin46.addImage(coinImg);
  coin46.scale = 0.05;

  coin47 = createSprite(325,85, 0, 0);
  coin47.addImage(coinImg);
  coin47.scale = 0.05;

  coin48 = createSprite(350,85, 0, 0);
  coin48.addImage(coinImg);
  coin48.scale = 0.05;

  coin49 = createSprite(375,85, 0, 0);
  coin49.addImage(coinImg);
  coin49.scale = 0.05;

  coin50 = createSprite(25,110, 0, 0);
  coin50.addImage(coinImg);
  coin50.scale = 0.05;

  coin51 = createSprite(220,110, 0, 0);
  coin51.addImage(coinImg);
  coin51.scale = 0.05;

  coin52 = createSprite(350,105, 0, 0);
  coin52.addImage(coinImg);
  coin52.scale = 0.05;

  coin53 = createSprite(375,105, 0, 0);
  coin53.addImage(coinImg);
  coin53.scale = 0.05;

  coin54 = createSprite(25,130, 0, 0);
  coin54.addImage(coinImg);
  coin54.scale = 0.05;

  coin55 = createSprite(50,130, 0, 0);
  coin55.addImage(coinImg);
  coin55.scale = 0.05;

  coin56 = createSprite(75,130, 0, 0);
  coin56.addImage(coinImg);
  coin56.scale = 0.05;

  coin57 = createSprite(100,130, 0, 0);
  coin57.addImage(coinImg);
  coin57.scale = 0.05;

  coin58 = createSprite(150,130, 0, 0);
  coin58.addImage(coinImg);
  coin58.scale = 0.05;

  coin59 = createSprite(175,130, 0, 0);
  coin59.addImage(coinImg);
  coin59.scale = 0.05;

  coin60 = createSprite(200,130, 0, 0);
  coin60.addImage(coinImg);
  coin60.scale = 0.05;

  coin61 = createSprite(220,130, 0, 0);
  coin61.addImage(coinImg);
  coin61.scale = 0.05;

  coin62 = createSprite(250,130, 0, 0);
  coin62.addImage(coinImg);
  coin62.scale = 0.05;

  coin63 = createSprite(275,130, 0, 0);
  coin63.addImage(coinImg);
  coin63.scale = 0.05;

  coin64 = createSprite(300,130, 0, 0);
  coin64.addImage(coinImg);
  coin64.scale = 0.05;

  coin65 = createSprite(350,125, 0, 0);
  coin65.addImage(coinImg);
  coin65.scale = 0.05;

  coin66 = createSprite(370,125, 0, 0);
  coin66.addImage(coinImg);
  coin66.scale = 0.05;

  coin67 = createSprite(390,125, 0, 0);
  coin67.addImage(coinImg);
  coin67.scale = 0.05;

  coin68 = createSprite(220,150, 0, 0);
  coin68.addImage(coinImg);
  coin68.scale = 0.05;

  coin69 = createSprite(295,150, 0, 0);
  coin69.addImage(coinImg);
  coin69.scale = 0.05;

  coin70 = createSprite(315,150, 0, 0);
  coin70.addImage(coinImg);
  coin70.scale = 0.05;

  coin71 = createSprite(350,140, 0, 0);
  coin71.addImage(coinImg);
  coin71.scale = 0.05;

  coin72 = createSprite(25,170, 0, 0);
  coin72.addImage(coinImg);
  coin72.scale = 0.05;

  coin73 = createSprite(50,170, 0, 0);
  coin73.addImage(coinImg);
  coin73.scale = 0.05;

  coin74 = createSprite(75,170, 0, 0);
  coin74.addImage(coinImg);
  coin74.scale = 0.05;

  coin75 = createSprite(100,170, 0, 0);
  coin75.addImage(coinImg);
  coin75.scale = 0.05;

  coin76 = createSprite(125,170, 0, 0);
  coin76.addImage(coinImg);
  coin76.scale = 0.05;

  coin77 = createSprite(150,170, 0, 0);
  coin77.addImage(coinImg);
  coin77.scale = 0.05;

  coin78 = createSprite(175,170, 0, 0);
  coin78.addImage(coinImg);
  coin78.scale = 0.05;

  coin79 = createSprite(200,170, 0, 0);
  coin79.addImage(coinImg);
  coin79.scale = 0.05;

  coin80 = createSprite(220,170, 0, 0);
  coin80.addImage(coinImg);
  coin80.scale = 0.05;

  coin81 = createSprite(260,170, 0, 0);
  coin81.addImage(coinImg);
  coin81.scale = 0.05;

  coin82 = createSprite(295,170, 0, 0);
  coin82.addImage(coinImg);
  coin82.scale = 0.05;

  coin83 = createSprite(315,170, 0, 0);
  coin83.addImage(coinImg);
  coin83.scale = 0.05;

  coin84 = createSprite(350,160, 0, 0);
  coin84.addImage(coinImg);
  coin84.scale = 0.05;

  coin85 = createSprite(370,160, 0, 0);
  coin85.addImage(coinImg);
  coin85.scale = 0.05;

  coin86 = createSprite(390,160, 0, 0);
  coin86.addImage(coinImg);
  coin86.scale = 0.05;

  coin87 = createSprite(350,175, 0, 0);
  coin87.addImage(coinImg);
  coin87.scale = 0.05;

  coin88 = createSprite(370,175, 0, 0);
  coin88.addImage(coinImg);
  coin88.scale = 0.05;

  coin89 = createSprite(65,190, 0, 0);
  coin89.addImage(coinImg);
  coin89.scale = 0.05;

  coin90 = createSprite(100,190, 0, 0);
  coin90.addImage(coinImg);
  coin90.scale = 0.05;

  coin91 = createSprite(260,190, 0, 0);
  coin91.addImage(coinImg);
  coin91.scale = 0.05;

  coin92 = createSprite(15,210, 0, 0);
  coin92.addImage(coinImg);
  coin92.scale = 0.05;

  coin93 = createSprite(40,210, 0, 0);
  coin93.addImage(coinImg);
  coin93.scale = 0.05;

  coin94 = createSprite(65,210, 0, 0);
  coin94.addImage(coinImg);
  coin94.scale = 0.05;

  coin95 = createSprite(100,210, 0, 0);
  coin95.addImage(coinImg);
  coin95.scale = 0.05;

  coin96 = createSprite(260,210, 0, 0);
  coin96.addImage(coinImg);
  coin96.scale = 0.05;

  coin97 = createSprite(295,210, 0, 0);
  coin97.addImage(coinImg);
  coin97.scale = 0.05;

  coin98 = createSprite(320,210, 0, 0);
  coin98.addImage(coinImg);
  coin98.scale = 0.05;

  coin99 = createSprite(345,210, 0, 0);
  coin99.addImage(coinImg);
  coin99.scale = 0.05;

  coin100 = createSprite(370,210, 0, 0);
  coin100.addImage(coinImg);
  coin100.scale = 0.05;

 

  //creating a maze
  cardboard1 =createSprite(0,35,120,15);
  cardboard1.shapeColor ="pink";
  
  cardboard2 =createSprite(100,0,15,140);
  cardboard2.shapeColor ="pink";
  
  cardboard3 =createSprite(100,70,120,15);
  cardboard3.shapeColor ="pink";
  
   cardboard4 =createSprite(7,120,15,120);
  cardboard4.shapeColor ="pink";
  
   cardboard5 =createSprite(118,110,152,15);
  cardboard5.shapeColor ="pink";
  
   cardboard6 =createSprite(197,70,15,95);
  cardboard6.shapeColor ="pink";
  
   cardboard7 =createSprite(160,30,60,15);
  cardboard7.shapeColor ="pink";
  
   cardboard8 =createSprite(240,70,15,95);
  cardboard8.shapeColor ="pink";
  
   cardboard9 =createSprite(300,30,110,15);
  cardboard9.shapeColor ="pink";
  
   cardboard10 =createSprite(390,30,15,160);
  cardboard10.shapeColor ="pink";
  
   cardboard11 =createSprite(332,65,105,15);
  cardboard11.shapeColor ="pink";
  
   cardboard12 =createSprite(110,150,190,15);
  cardboard12.shapeColor ="pink";
  
   cardboard13 =createSprite(129,129,15,26);
  cardboard13.shapeColor ="pink";
  
   cardboard14 =createSprite(330,125,15,65);
  cardboard14.shapeColor ="pink";
  
   cardboard15 =createSprite(285,110,76,15);
  cardboard15.shapeColor ="pink";
  
   cardboard16 =createSprite(240,180,15,75);
  cardboard16.shapeColor ="pink";
  
   cardboard17 =createSprite(280,180,15,75);
  cardboard17.shapeColor ="pink";
  
   cardboard18 =createSprite(260,150,27,15);
  cardboard18.shapeColor ="pink";
  
   cardboard19 =createSprite(180,185,105,15);
  cardboard19.shapeColor ="pink";
  
   cardboard20 =createSprite(380,140,40,15);
  cardboard20.shapeColor ="pink";
  
   cardboard21 =createSprite(330,190,95,15);
  cardboard21.shapeColor ="pink";
  
   cardboard22 =createSprite(330,170,15,27);
  cardboard22.shapeColor ="pink";
  
   cardboard23 =createSprite(385,205,15,75);
  cardboard23.shapeColor ="pink";
  
   cardboard24 =createSprite(121,205,15,55);
  cardboard24.shapeColor ="pink";
  
   cardboard25 =createSprite(85,225,15,90);
  cardboard25.shapeColor ="pink";
  
   cardboard26 =createSprite(25,190,55,15);
  cardboard26.shapeColor ="pink";
  
   cardboard27 =createSprite(187,225,121,15);
  cardboard27.shapeColor ="pink";
  
   cardboard28 =createSprite(170,262,156,15);
  cardboard28.shapeColor ="pink";
  
   cardboard29 =createSprite(205,243,15,23);
  cardboard29.shapeColor ="pink";
  
   cardboard30 =createSprite(53,225,50,15);
  cardboard30.shapeColor ="pink";
  
   cardboard31 =createSprite(45,300,15,90);
  cardboard31.shapeColor ='pink';
  
   cardboard32 =createSprite(31,300,15,15);
  cardboard32.shapeColor ="pink";
  
   cardboard33 =createSprite(280,240,15,60);
  cardboard33.shapeColor ="pink";
  
   cardboard34 =createSprite(195,300,285,15);
  cardboard34.shapeColor ="pink";
  
   cardboard35 =createSprite(330,260,15,70);
  cardboard35.shapeColor ="pink";
  
   cardboard36 =createSprite(357,270,40,15);
  cardboard36.shapeColor ="pink";
  
   cup =createSprite(390,360,15,80);
  cup.shapeColor ="yellow";
  
   cardboard38 =createSprite(380,310,35,15);
  cardboard38.shapeColor ="pink";
  
   cardboard39 =createSprite(370,330,15,30);
  cardboard39.shapeColor ="pink";
  
   cardboard40 =createSprite(83,337,62,15);
  cardboard40.shapeColor ="pink";
  
   cardboard41 =createSprite(106,360,15,40);
  cardboard41.shapeColor ="pink";
  
   cardboard42 =createSprite(50,372,100,15);
  cardboard42.shapeColor ="pink";
  
   cardboard43 =createSprite(262,337,201,15);
  cardboard43.shapeColor ="pink";
  
   cardboard44 =createSprite(248,371,270,15);
  cardboard44.shapeColor ="pink";
}

function draw() {
  background("black"); 

  textSize(20);
  fill("white");
  text("Score: " + score, 290,395)

  pacman.collide(edges);
  pacman.collide(cardboard1);
  pacman.collide(cardboard2);
  pacman.collide(cardboard3);
  pacman.collide(cardboard4);
  pacman.collide(cardboard5);
  pacman.collide(cardboard6);
  pacman.collide(cardboard7);
  pacman.collide(cardboard8);
  pacman.collide(cardboard9);
  pacman.collide(cardboard10);
  pacman.collide(cardboard11);
  pacman.collide(cardboard12);
  pacman.collide(cardboard13);
  pacman.collide(cardboard14);
  pacman.collide(cardboard15);
  pacman.collide(cardboard16);
  pacman.collide(cardboard17);
  pacman.collide(cardboard18);
  pacman.collide(cardboard19);
  pacman.collide(cardboard20);
  pacman.collide(cardboard21);
  pacman.collide(cardboard22);
  pacman.collide(cardboard23);
  pacman.collide(cardboard24);
  pacman.collide(cardboard25);
  pacman.collide(cardboard26);
  pacman.collide(cardboard27);
  pacman.collide(cardboard28);
  pacman.collide(cardboard29);
  pacman.collide(cardboard30);
  pacman.collide(cardboard31);
  pacman.collide(cardboard32);
  pacman.collide(cardboard33);
  pacman.collide(cardboard34);
  pacman.collide(cardboard35);
  pacman.collide(cardboard36);
  pacman.collide(cardboard38);
  pacman.collide(cardboard39);
  pacman.collide(cardboard40);
  pacman.collide(cardboard41);
  pacman.collide(cardboard42);
  pacman.collide(cardboard43);
  pacman.collide(cardboard44);

  redGhost.collide(edges);
  redGhost.collide(cardboard1);
  redGhost.collide(cardboard2);
  redGhost.collide(cardboard3);
  redGhost.collide(cardboard4);
  redGhost.collide(cardboard5);
  redGhost.collide(cardboard6);
  redGhost.collide(cardboard7);
  redGhost.collide(cardboard8);
  redGhost.collide(cardboard9);
  redGhost.collide(cardboard10);
  redGhost.collide(cardboard11);
  redGhost.collide(cardboard12);
  redGhost.collide(cardboard13);
  redGhost.collide(cardboard14);
  redGhost.collide(cardboard15);
  redGhost.collide(cardboard16);
  redGhost.collide(cardboard17);
  redGhost.collide(cardboard18);
  redGhost.collide(cardboard19);
  redGhost.collide(cardboard20);
  redGhost.collide(cardboard21);
  redGhost.collide(cardboard22);
  redGhost.collide(cardboard23);
  redGhost.collide(cardboard24);
  redGhost.collide(cardboard25);
  redGhost.collide(cardboard26);
  redGhost.collide(cardboard27);
  redGhost.collide(cardboard28);
  redGhost.collide(cardboard29);
  redGhost.collide(cardboard30);
  redGhost.collide(cardboard31);
  redGhost.collide(cardboard32);
  redGhost.collide(cardboard33);
  redGhost.collide(cardboard34);
  redGhost.collide(cardboard35);
  redGhost.collide(cardboard36);
  redGhost.collide(cardboard38);
  redGhost.collide(cardboard39);
  redGhost.collide(cardboard40);
  redGhost.collide(cardboard41);
  redGhost.collide(cardboard42);
  redGhost.collide(cardboard43);
  redGhost.collide(cardboard44);

  BlueGhost.collide(edges);
  BlueGhost.collide(cardboard1);
  BlueGhost.collide(cardboard2);
  BlueGhost.collide(cardboard3);
  BlueGhost.collide(cardboard4);
  BlueGhost.collide(cardboard5);
  BlueGhost.collide(cardboard6);
  BlueGhost.collide(cardboard7);
  BlueGhost.collide(cardboard8);
  BlueGhost.collide(cardboard9);
  BlueGhost.collide(cardboard10);
  BlueGhost.collide(cardboard11);
  BlueGhost.collide(cardboard12);
  BlueGhost.collide(cardboard13);
  BlueGhost.collide(cardboard14);
  BlueGhost.collide(cardboard15);
  BlueGhost.collide(cardboard16);
  BlueGhost.collide(cardboard17);
  BlueGhost.collide(cardboard18);
  BlueGhost.collide(cardboard19);
  BlueGhost.collide(cardboard20);
  BlueGhost.collide(cardboard21);
  BlueGhost.collide(cardboard22);
  BlueGhost.collide(cardboard23);
  BlueGhost.collide(cardboard24);
  BlueGhost.collide(cardboard25);
  BlueGhost.collide(cardboard26);
  BlueGhost.collide(cardboard27);
  BlueGhost.collide(cardboard28);
  BlueGhost.collide(cardboard29);
  BlueGhost.collide(cardboard30);
  BlueGhost.collide(cardboard31);
  BlueGhost.collide(cardboard32);
  BlueGhost.collide(cardboard33);
  BlueGhost.collide(cardboard34);
  BlueGhost.collide(cardboard35);
  BlueGhost.collide(cardboard36);
  BlueGhost.collide(cardboard38);
  BlueGhost.collide(cardboard39);
  BlueGhost.collide(cardboard40);
  BlueGhost.collide(cardboard41);
  BlueGhost.collide(cardboard42);
  BlueGhost.collide(cardboard43);
  BlueGhost.collide(cardboard44);

  GreenGhost.collide(edges);
  GreenGhost.collide(cardboard1);
  GreenGhost.collide(cardboard2);
  GreenGhost.collide(cardboard3);
  GreenGhost.collide(cardboard4);
  GreenGhost.collide(cardboard5);
  GreenGhost.collide(cardboard6);
  GreenGhost.collide(cardboard7);
  GreenGhost.collide(cardboard8);
  GreenGhost.collide(cardboard9);
  GreenGhost.collide(cardboard10);
  GreenGhost.collide(cardboard11);
  GreenGhost.collide(cardboard12);
  GreenGhost.collide(cardboard13);
  GreenGhost.collide(cardboard14);
  GreenGhost.collide(cardboard15);
  GreenGhost.collide(cardboard16);
  GreenGhost.collide(cardboard17);
  GreenGhost.collide(cardboard18);
  GreenGhost.collide(cardboard19);
  GreenGhost.collide(cardboard20);
  GreenGhost.collide(cardboard21);
  GreenGhost.collide(cardboard22);
  GreenGhost.collide(cardboard23);
  GreenGhost.collide(cardboard24);
  GreenGhost.collide(cardboard25);
  GreenGhost.collide(cardboard26);
  GreenGhost.collide(cardboard27);
  GreenGhost.collide(cardboard28);
  GreenGhost.collide(cardboard29);
  GreenGhost.collide(cardboard30);
  GreenGhost.collide(cardboard31);
  GreenGhost.collide(cardboard32);
  GreenGhost.collide(cardboard33);
  GreenGhost.collide(cardboard34);
  GreenGhost.collide(cardboard35);
  GreenGhost.collide(cardboard36);
  GreenGhost.collide(cardboard38);
  GreenGhost.collide(cardboard39);
  GreenGhost.collide(cardboard40);
  GreenGhost.collide(cardboard41);
  GreenGhost.collide(cardboard42);
  GreenGhost.collide(cardboard43);
  GreenGhost.collide(cardboard44);

  YellowGhost.collide(edges);
  YellowGhost.collide(cardboard1);
  YellowGhost.collide(cardboard2);
  YellowGhost.collide(cardboard3);
  YellowGhost.collide(cardboard4);
  YellowGhost.collide(cardboard5);
  YellowGhost.collide(cardboard6);
  YellowGhost.collide(cardboard7);
  YellowGhost.collide(cardboard8);
  YellowGhost.collide(cardboard9);
  YellowGhost.collide(cardboard10);
  YellowGhost.collide(cardboard11);
  YellowGhost.collide(cardboard12);
  YellowGhost.collide(cardboard13);
  YellowGhost.collide(cardboard14);
  YellowGhost.collide(cardboard15);
  YellowGhost.collide(cardboard16);
  YellowGhost.collide(cardboard17);
  YellowGhost.collide(cardboard18);
  YellowGhost.collide(cardboard19);
  YellowGhost.collide(cardboard20);
  YellowGhost.collide(cardboard21);
  YellowGhost.collide(cardboard22);
  YellowGhost.collide(cardboard23);
  YellowGhost.collide(cardboard24);
  YellowGhost.collide(cardboard25);
  YellowGhost.collide(cardboard26);
  YellowGhost.collide(cardboard27);
  YellowGhost.collide(cardboard28);
  YellowGhost.collide(cardboard29);
  YellowGhost.collide(cardboard30);
  YellowGhost.collide(cardboard31);
  YellowGhost.collide(cardboard32);
  YellowGhost.collide(cardboard33);
  YellowGhost.collide(cardboard34);
  YellowGhost.collide(cardboard35);
  YellowGhost.collide(cardboard36);
  YellowGhost.collide(cardboard38);
  YellowGhost.collide(cardboard39);
  YellowGhost.collide(cardboard40);
  YellowGhost.collide(cardboard41);
  YellowGhost.collide(cardboard42);
  YellowGhost.collide(cardboard43);
  YellowGhost.collide(cardboard44);

  if(keyDown(UP_ARROW)){
    pacman.y = pacman.y -5;
    pacman.changeAnimation("upImg", upImg);
  }

  if(keyDown(DOWN_ARROW)){
    pacman.y = pacman.y +5;
    pacman.changeAnimation("downImg", downImg);
  }

  if(keyDown(LEFT_ARROW)){
    pacman.x = pacman.x -5;
    pacman.changeAnimation("leftImg", leftImg);
  }

  if(keyDown(RIGHT_ARROW)){
    pacman.x = pacman.x +5;
    pacman.changeAnimation("pacmanImg", pacmanImg)
  }

  if(pacman.isTouching(coin)){
    coin.x = -20;
    score = score+10
  }

  if(pacman.isTouching(coin2)){
    coin2.x = -20;
    score = score+10
  }

  

  drawSprites();
}
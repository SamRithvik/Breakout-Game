var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var destroyed = 0;

var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";

var gameState = "start";

var score = 0;

var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";

var paddle=createSprite(200,390,100,20);
var ball=createSprite(200,200,20,20);
ball.shapeColor = "white";
paddle.shapeColor = "white";
function draw() {
  background("black");
  
  textSize(30);
  fill("white");
  text("Score : " + score, 250,30);
  
  createEdgeSprites();
  
  if (gameState === "start"){
  textSize(30);
  fill("white");
  text("Press Space to Start " , 75,250);
  if (keyDown("space")){
    ball.setVelocity(randomNumber(-9, 9), (randomNumber(7, 9)));
    gameState = "play";
  }
  }
  
  if (gameState === "play"){
      paddle.x = World.mouseX;
      if (destroyed === 16){
        gameState = "end";
      }
  }
  
  if (gameState === "end"){
      textSize(75);
  fill("gold");
  text("YOU WIN! " , 25,250);
  if (destroyed === 16){
  playSound("assets/category_achievements/melodic_win_10.mp3");
  destroyed = 0;
  }
  ball.velocityX = 0;
  ball.velocityY = 0;
  ball.visible = false;
  }
  
 if (ball.isTouching(box1)){
      ball.bounceOff(box1);
      playSound("assets/category_projectile/game_ball_bounce.mp3");
      box1.destroy();
      score = score+1;
      destroyed = destroyed +1;
      ball.velocityX = ball.velocityX +2;
      ball.velocityY = ball.velocityY +2;
 }
  if (ball.isTouching(box2)){
      ball.bounceOff(box2);
      playSound("assets/category_projectile/game_ball_bounce.mp3");
      box2.destroy();
      score = score+1;
      destroyed = destroyed +1;
      ball.velocityX = ball.velocityX +2;
      ball.velocityY = ball.velocityY +2;
    }
  if (ball.isTouching(box3)){
      ball.bounceOff(box3);
      playSound("assets/category_projectile/game_ball_bounce.mp3");
      box3.destroy();
      score = score+1;
      destroyed = destroyed +1;
      ball.velocityX = ball.velocityX +2;
      ball.velocityY = ball.velocityY +2;
    }
    if (ball.isTouching(box4)){
      ball.bounceOff(box4);
      playSound("assets/category_projectile/game_ball_bounce.mp3");
      box4.destroy();
      score = score+1;
      destroyed = destroyed +1;
      ball.velocityX = ball.velocityX +2;
      ball.velocityY = ball.velocityY +2;
    }
    if (ball.isTouching(box5)){
      ball.bounceOff(box5);
      playSound("assets/category_projectile/game_ball_bounce.mp3");
      box5.destroy();
      score = score+1;
      destroyed = destroyed +1;
      ball.velocityX = ball.velocityX +2;
      ball.velocityY = ball.velocityY +2;
    }
    if (ball.isTouching(box6)){
      ball.bounceOff(box6);
      playSound("assets/category_projectile/game_ball_bounce.mp3");
      box6.destroy();
      score = score+1;
      destroyed = destroyed +1;
      ball.velocityX = ball.velocityX +2;
      ball.velocityY = ball.velocityY +2;
    }
    if (ball.isTouching(box7)){
      ball.bounceOff(box7);
      playSound("assets/category_projectile/game_ball_bounce.mp3");
      box7.destroy();
      score = score+1;
      destroyed = destroyed +1;
      ball.velocityX = ball.velocityX +2;
      ball.velocityY = ball.velocityY +2;
    }
    if (ball.isTouching(box8)){
      ball.bounceOff(box8);
      playSound("assets/category_projectile/game_ball_bounce.mp3");
      box8.destroy();
      score = score+1;
      destroyed = destroyed +1;
      ball.velocityX = ball.velocityX +2;
      ball.velocityY = ball.velocityY +2;
    }
    if (ball.isTouching(box9)){
      ball.bounceOff(box9);
      playSound("assets/category_projectile/game_ball_bounce.mp3");
      box9.destroy();
      score = score+1;
      destroyed = destroyed +1;
      ball.velocityX = ball.velocityX +2;
      ball.velocityY = ball.velocityY +2;
    }
    if (ball.isTouching(box10)){
      ball.bounceOff(box10);
      playSound("assets/category_projectile/game_ball_bounce.mp3");
      box10.destroy();
      score = score+1;
      destroyed = destroyed +1;
      ball.velocityX = ball.velocityX +2;
      ball.velocityY = ball.velocityY +2;
    }
    if (ball.isTouching(box11)){
      ball.bounceOff(box11);
      playSound("assets/category_projectile/game_ball_bounce.mp3");
      box11.destroy();
      score = score+1;
      destroyed = destroyed +1;
      ball.velocityX = ball.velocityX +2;
      ball.velocityY = ball.velocityY +2;
    }
    if (ball.isTouching(box12)){
      ball.bounceOff(box12);
      playSound("assets/category_projectile/game_ball_bounce.mp3");
      box12.destroy();
      score = score+1;
      destroyed = destroyed +1;
      ball.velocityX = ball.velocityX +2;
      ball.velocityY = ball.velocityY +2;
    }
    if (ball.isTouching(box13)){
      ball.bounceOff(box13);
      playSound("assets/category_projectile/game_ball_bounce.mp3");
      box13.destroy();
      score = score+1;
      destroyed = destroyed +1;
      ball.velocityX = ball.velocityX +2;
      ball.velocityY = ball.velocityY +2;
    }
    if (ball.isTouching(box14)){
      ball.bounceOff(box14);
      playSound("assets/category_projectile/game_ball_bounce.mp3");
      box14.destroy();
      score = score+1;
      destroyed = destroyed +1;
      ball.velocityX = ball.velocityX +2;
      ball.velocityY = ball.velocityY +2;
    }
    if (ball.isTouching(box15)){
      ball.bounceOff(box15);
      playSound("assets/category_projectile/game_ball_bounce.mp3");
      box15.destroy();
      score = score+1;
      destroyed = destroyed +1;
      ball.velocityX = ball.velocityX +2;
      ball.velocityY = ball.velocityY +2;
    }
    if (ball.isTouching(box16)){
      ball.bounceOff(box16);
      playSound("assets/category_projectile/game_ball_bounce.mp3");
      box16.destroy();
      score = score+1;
      destroyed = destroyed +1;
      ball.velocityX = ball.velocityX +2;
      ball.velocityY = ball.velocityY +2;
    }
  
  if (ball.isTouching(bottomEdge)){
    playSound("assets/category_explosion/8bit_explosion.mp3");
    ball.y = 200;
    ball.x = 200;
    ball.velocityY = 0;
    ball.velocityX = 0;
    score = score - 5;
    gameState = "start";
  }
  
  if (ball.bounceOff(paddle)){
    playSound("assets/category_bell/vibrant_game_star_burst_3.mp3");
  }
  
  ball.bounceOff(paddle);
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(box1);
  ball.bounceOff(box2);
  ball.bounceOff(box3);
  ball.bounceOff(box4);
  ball.bounceOff(box5);
  ball.bounceOff(box6);
  ball.bounceOff(box7);
  ball.bounceOff(box8);
  ball.bounceOff(box9);
  ball.bounceOff(box10);
  ball.bounceOff(box11);
  ball.bounceOff(box12);
  ball.bounceOff(box13);
  ball.bounceOff(box14);
  ball.bounceOff(box15);
  ball.bounceOff(box16);
  drawSprites();
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

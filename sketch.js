let u;
let u2;
let count;
let mods = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#000');
  u = 50;
  u2 = (u/2)*sqrt(3);
  let highCount = (height/u)+3;
  let wideCount = (width/u2)+3;
  count = int(highCount * wideCount);
  let index = 0;
  for (let xc = 0; xc < wideCount*2; xc++) {
    for (let yc = 0; yc < highCount*2; yc++) {
      mods[index++] = new Module((int(xc)*u2*2),int(yc)*u);
    }
   }
}

function draw() {
  noStroke();
  for (let i = 0; i <= count; i++) {
    mods[i].draw1();
  }
  translate(u2,u/2);
  for (let i = 0; i <= count; i++) {
    mods[i].draw3();
  }
}

function mousePressed() {
  for (let i = 0; i <= count; i++) {
    mods[i].Pressed();
  }
}


function Module(_x, _y) {
  this.s = 40;
  this.x1 = _x;
  this.y1 = _y;
  this.x3 = _x;
  this.y3 = _y;
  this.b1 = false;
  this.b3 = false;
  this.isOverCircle1 = false;
  this.isOverCircle3 = false;
  this.c1 = '#545861';
  this.c3 = '#545861';
}


Module.prototype.draw1 = function() {
  push();
  translate(this.x1, this.y1);
  rectMode(CENTER);
  noStroke();
  fill(0);
  ellipse(0,0,this.s+1,this.s+1);
  fill(this.c1);
  ellipse(0,0,this.s,this.s);
  this.px1 = mouseX;
  this.py1 = mouseY;
  this.nx1 = this.x1;
  this.ny1 = this.y1;
  this.isOverCircle1 = (this.px1>this.nx1-this.s/2 && this.px1<this.nx1+this.s/2 && this.py1>this.ny1-this.s/2 && this.py1<this.ny1+this.s/2);
  if(this.isOverCircle1 === true)
  {
    fill('rgba(255, 255, 255, 0.2)');
    ellipse(0,0,this.s,this.s);
  } else {
	  noFill(); 
  }
  pop();
}


Module.prototype.draw3 = function() {
  push();
  translate(this.x3, this.y3);
  rectMode(CENTER);
  noStroke();
  fill(0);
  ellipse(0,0,this.s+1,this.s+1);
  fill(this.c3);
  ellipse(0,0,this.s,this.s);
  this.px3 = mouseX;
  this.py3 = mouseY;
  this.nx3 = this.x3+u2;
  this.ny3 = this.y3+(u/2);
  this.isOverCircle3 = (this.px3>this.nx3-this.s/2 && this.px3<this.nx3+this.s/2 && this.py3>this.ny3-this.s/2 && this.py3<this.ny3+this.s/2);  
  if(this.isOverCircle3 === true)
  {
    fill('rgba(255, 255, 255, 0.2)');
    ellipse(0,0,this.s,this.s);
  } else {
	  noFill(); 
  }
  pop();
}


Module.prototype.Pressed = function() {
    if (this.isOverCircle1 === true){
      if(this.b1 === false){
      this.c1 = '#FFF0BD';
      this.b1 = true;
      } else {
      this.c1 = '#545861';
      this.b1 = false; 
      }
    }
    if (this.isOverCircle3 === true){
      if(this.b3 === false){
      this.c3 = '#FFF0BD';
      this.b3 = true;
      } else {
      this.c3 = '#545061';
      this.b3 = false; 
      }
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background('#000');

}
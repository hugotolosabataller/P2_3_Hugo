let bocas=['👅','👄','🫦'];
let paleta=['#ffcc00','#ff4400'];
//let p1;
let p=[];

function setup(){
  createCanvas(displayWidth, displayHeight);
  //p1=new Pajaro(width,100,floor(random(0,3)));
  for(let i=0;i<100;i++){
    p[i]=new Pajaro(random(width),random(-250,height+50),ceil(random(-1,2)));
  }
}

function draw(){
  background(0,200,255)
  for(let i=0;i<p.length;i++){
    p [i].show();
    p [i].move();
  }
  //p1.show();
  //p1.move();
  }

class Pajaro {
  
  constructor(x,y,b){
    this.x=x;
    this.y=y
    this.b=b;
  }
  show(){
    //scale(1);
    push();
    fill(paleta[1]);
    translate(this.x,this.y);
    triangle(0,200,100,150,100,200);
    ellipseMode(CORNER);
    fill(paleta[0]);
    ellipse(100,140,150,75);
    fill(paleta[1]);
    triangle(234,200,275,150,275,200);
    triangle(234,200,300,150,300,200);
    textSize(30);
    text('👀',50,180);
    text(bocas[this.b],50,205);
    pop();
  }
   move(){
    this.x=this.x-1;
    if(this.x<-250){
      this.x=width;
    }
   }
}
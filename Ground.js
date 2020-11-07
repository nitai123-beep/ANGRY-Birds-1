class Ground {
constructor(x,y,width,h){
var options = {

isStatic:true

}
this.g1=Bodies.rectangle(x,y,width,h,options);
this.w=width;
this.h=h;
World.add(world,this.g1);
}
display(){

    var pos = this.g1.position
    rectMode(CENTER);
    fill("brown");
    rect(pos.x,pos.y,this.w,this.h)

}



}
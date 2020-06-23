class Confette {
    constructor(x,y,c){
        this.x = x;
        this.y = y;
        this.color = c;
    }

    display(){
        fill(this.color);
        ellipseMode(CENTER);
        noStroke();
        ellipse(this.x,this.y,20)
    }
}
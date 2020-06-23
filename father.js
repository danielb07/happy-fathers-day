class Father {
    constructor(i,x,y){
        this.i = i;
        this.x = x;
        this.y = y;
        
    }
    renderer(){
        // giftImg,RandomGift[0]-75,RandomGift[1]-75
        image(this.i,this.x,this.y);
    
    }
}
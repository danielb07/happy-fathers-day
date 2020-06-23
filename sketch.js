var gift;
var RandomGift
var gifts;
var giftS
var _1,_2,_3,_4,_5;
var giftIMG;
var bgImg
var imgs;
var bg;
var happyFathersDay;
var fathersPics = [];
var droplets = [];

var show = 0;
function preload(){
    happyFathersDay = loadImage("imgs/happy-fathers-day.png");
    _1 = loadImage("imgs/pic-02.png")
    _2 = loadImage("imgs/pic-10.png");
    _3 = loadImage("imgs/pic-03.png");
    _4 = loadImage("imgs/pic-04.png");
    _5 = loadImage("imgs/pic-11.png");
    _6 = loadImage("imgs/pic-05.png")
    giftImg = loadImage("imgs/present.png");
    surpriseImg = loadImage("imgs/bg-surprise.png");
    bgImg = loadImage("imgs/bg.png");
    

}

function setup() {
   
  createCanvas(1756, 909);
  
  gifts = [[2200,200],[162, 76],[1266, 91],[745, 521],[745, 126],[162, 579],[1316, 453]];
  giftS = 150
  imgs = [[],_6,_5,_4,_3,_2,_1];
  
  RandomGift = gifts.pop(); 

  bg = surpriseImg;
}

function draw() {
    
    background(bg);

    for(var i=0; i<fathersPics.length;i++){
        var pic = fathersPics[i];
        pic.renderer();
    }

    giftIMG = image(giftImg,RandomGift[0]-75,RandomGift[1]-75);
    giftImg.resize(giftS,giftS);

    if(gifts.length === 0){
        image(happyFathersDay,615, 231)
        if(frameCount%5===0){
            var x = random(30,1722);
            let words = ['blue', 'green', 'purple', 'red','yellow'];
            let color = random(words);
            var raindrop = new Confette(x,0,color);
            droplets.push(raindrop);
          }
          for(var i=0;i<droplets.length;i++){
            var droplet = droplets[i]
            droplet.display();
            droplet.y += 2;
            // handle memoryLeak    
            if(droplet.y>874){
                droplets.shift();
            }    
          }
    }

   


}

function mousePressed(){

    if(mouseX > RandomGift[0]-150 && mouseX < RandomGift[0]+150 && mouseY > RandomGift[1]-150 && mouseY < RandomGift[1]+150){ 
        bg = bgImg  
        var RandomImg = imgs.pop();
        fathersPics.push(new Father(RandomImg,RandomGift[0]-75,RandomGift[1]-75))
        // _11.position(RandomGift[0], RandomGift[1]);
        
        RandomGift = gifts.pop(); 
        var XPos = RandomGift[0];
        var yPos = RandomGift[1];
        randomX = XPos;
        randomY = yPos;
    }else{
        var gotItWrong = ["What,you like the ground more than my present","are you going to ignore my gift or what","is this how you are going to repay me, by not even looking at the gift"]
        var ra = random(gotItWrong)
        // console.log(ra)
        console.log(mouseX + ", " + mouseY);
    }
}

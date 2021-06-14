class Street extends Location{
    constructor(canvas, url){
        super(500, 701, 0, 0, canvas, url);
        this.speed = 2.5;
    }
    drawStreet(top){
        this.canvas.drawImage(this.photo, this.left, top, this.width, this.height);
    }
}
class Snake
{
    constructor()
    {
        this.x = 0;
        this.y = 0;
        this.xspeed = 5;
        this.yspeed = 5;
    }
    
    update()
    {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }
    
    show()
    {
        fill(255);
        rect(this.x, this.y, 10, 10);
    }
    
    dir(x, y)
    {
        this.xspeed = x;
        this.yspeed = y;
    }
}
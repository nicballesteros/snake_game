class Snake
{
    constructor()
    {
        this.x = 300;
        this.y = 300;
        this.xspeed = 0;
        this.yspeed = 0;
        
        this.lastX = 0;
        this.lastY = 0;

        
        this.tail = [];
        this.total = 0;
        this.isDead = false;
    }
    
    update()
    {
        if(this.total === this.tail.length)
        {
            for(let i = 0; i < this.tail.length; i++)
            {
                this.tail[i] = this.tail[i+1];
            }
        }
        
        this.tail[this.total - 1] = new Tail(this.x, this.y);
        
        this.lastX = this.x;
        this.lastY = this.y;
        
        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;
        
        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
        
        this.isDead = false;
    }
    
    show()
    {
        fill(255);
        for(let i = 0; i < this.tail.length; i++)
        {
            //console.log(this.tail[i]);
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        
        rect(this.x, this.y, scl, scl);
    }
    
    dir(x, y)
    {
        this.xspeed = x;
        this.yspeed = y;
    }
    eat(pos)
    {
        let d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1)
        {
            this.total++;
            return true;
        }
        else
        {
            return false;
        }
    }
    kill()
    {
        this.total = 0;
        this.tail = [];
        this.x = 300;
        this.y = 300;
        this.xspeed = 0;
        this.yspeed = 0;
        this.isDead = true;
        console.log("poor snakey");
    }
    death(forceDead)
    {
        if(forceDead)
        {
            this.kill();
        }
        else
        {
            for(let i = 0;i < this.tail.length; i++) 
            {
                let d = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
                if(d < 1)
                {
                    this.kill();
                    break;
                }
                else
                {
                    this.isDead = false;
                }
            }
        }
    }
    getIsDead()
    {
        return this.isDead;
    }
    
    wall()
    {
        if(this.lastX === this.x && this.lastY === this.y && ((this.x >= width - scl || this.y >= height - scl) || (this.x <= 0 || this.y <= 0)))
        {
            return true;
        }
    }
    
    getTailArr()
    {
        return this.tail;
    }
    
    getHead()
    {
        let obj = {
            x: this.x,
            y: this.y
        }
        return obj;
    }
}



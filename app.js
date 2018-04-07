//to do
/*
1. food spawns on body is bad
2. scoreboard
3. multiplayer
4. speed increase
*/

let s;
let scl = 20;
let food = new Food();
let a,b,c,d = false;

function setup() {
    createCanvas(620, 620);
    s = new Snake();
    frameRate(10);
    
    let tail = new Array();
    
    let arr = s.getTailArr();
    arr.push(s.getHead());
    food.pickLocation(arr);
    
    
}

function draw() {
    if(s.eat(food))
    {
        let arr = s.getTailArr();
        console.log(arr);
        arr.push(s.getHead());
        food.pickLocation(arr);
    }
    
    background(51);
    s.death(false)
    if(s.wall())
    {
        s.death(true);
    }
    if(s.getIsDead())
    {
        a = false;
        b = false;
        c = false;
        d = false;
    }
    s.update();
    s.show();
    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
    

}

function keyPressed()
{
    if (keyCode === UP_ARROW)
    {
        if(!b)
        {
            s.dir(0, -1);
            a = true;
            b = false;
            c = false;
            d = false;
        }
    }
    else if (keyCode === DOWN_ARROW)
    {
        if(!a)
        {
            s.dir(0,1);
            a = false;
            b = true;
            c = false;
            d = false;
        }
    }
    else if (keyCode === LEFT_ARROW)
    {
        if(!d)
        {
            s.dir(-1,0);
            a = false;
            b = false;
            c = true;
            d = false;
        }
    }
    else if (keyCode === RIGHT_ARROW)
    {
        if(!c)
        {
            s.dir(1,0);
            a = false;
            b = false;
            c = false;
            d = true;
        }
    }
}
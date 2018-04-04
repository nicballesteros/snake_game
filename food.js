class Food
{
    constructor()
    {
        this.x = 0;
        this.y = 0; 
    }
    
    pickLocation()
    {
        let cols = floor(width/scl);
        let rows = floor(height/scl);
        this.x = (floor(random(cols))) * scl;
        this.y = (floor(random(rows))) * scl;
    }
}
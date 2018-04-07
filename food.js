class Food
{
    constructor()
    {
        this.x = 0;
        this.y = 0; 
    }

    pickLocation(arr)
    {
        console.log(arr);
        let stop = false;
        
        let cols = floor(width/scl);
        let rows = floor(height/scl);
        this.x = (floor(random(cols))) * scl;
        this.y = (floor(random(rows))) * scl;
        
        for(let i = 0; i < arr.length; i++)
        {
            if(arr[i].x === this.x && arr[i] === this.y)
            {
                stop = true
            }
        }
        
        if(stop)
        {
            this.pickLocation(arr);
        }
    }
}
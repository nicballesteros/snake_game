class scoreboard
{
    constructor()
    {
        this.score = 0;
        this.size = {
            x:200,
            y:200
        };
    }
    setScore(score)
    {
        this.score = score;
    }
    getScore()
    {
        return this.score;
    }
}
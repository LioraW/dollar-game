class Dollar
{
    constructor(width, x, y, rise, run, goal_node){
        print(width)
        this.width = W(width);
        this.x = x;
        this.y = y;
        this.rise = rise;
        this.run = run;
        this.goal_node = goal_node;
    }
    move_x(move)
    {
        this.x += move * this.run;
    }
    move_y(move)
    {
        this.y += move * this.rise;
    }
    check_goal()
    {
        if(this.goal_node.touch(this.x, this.y))
        {
            return true;
        }
    }
    draw()
    {
        push();
        translate(this.x, this.y);
        fill(0,240,255);
        noStroke();
        image(dollar_icon, 0, 0, W(dollar_icon.width/6), H(dollar_icon.height/6));
        pop();
    }
}
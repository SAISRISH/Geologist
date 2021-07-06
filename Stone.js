class Stone{
	constructor(x,y,r)
	{
        var options = {
			restitution:0.1,
			density:1.5,
			friction:1,
		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("green");
            //draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r)

			pop()
	}

}

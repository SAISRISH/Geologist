class Iron{
	constructor(x,y,r)
	{
        var options = {
			restitution:0,
			density:2.5,
			friction:2,
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
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("peach");
			fill("red");
			//draw the ellipse here to display the rubber ball
ellipse(0,0,this.r)
			pop()
	}

}
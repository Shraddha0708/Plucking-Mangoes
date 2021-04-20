class Tree {

	constructor(x,y) {
        
        this.x=x;
		this.y=y;
		this.width=450;
		this.height=600;
		this.thickness=10;
		
		this.image=loadImage("tree.png");
		this.Body = Bodies.rectangle(this.x, this.y, this.width, this.thickness, {isStatic:true});
		World.add(world, this.Body);

	}
	
	display(){

			var pos = this.Body.position;
			push();
			translate(pos.x, pos.y+10);
			fill(255);
			imageMode(CENTER);
			image(this.image, 0,-this.height/2,this.width, this.height);
			pop();
			
	}

}
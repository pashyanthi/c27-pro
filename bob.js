 class Bob {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          'restitution':1,
          'friction':0,
          'density':0.8,
         
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.width = r;
      this.height =r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
     //purh
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
     
      fill("red");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
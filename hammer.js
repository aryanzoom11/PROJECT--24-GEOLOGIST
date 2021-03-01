class hammer {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':2
      }
      hammer = Bodies.rectangle(x, y, width, height, options);
  
      
      World.add(world, hammer);
    }
  
  
    display(){
    rectMode(CENTER);
      fill("brown");
      rect(0, 0, this.width, this.height);
  
    
  
    }
  
  };
  
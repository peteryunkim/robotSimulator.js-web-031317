'use strict';

function Robot() {


}
Robot.prototype.bearing = function(){
	this.bearing = bearing
}
Robot.prototype.orient = function(direction){
  var faces = [ 'east', 'west', 'north', 'south' ]
  if (faces.includes(direction)){
  	this.bearing = direction
  } else
  	throw new Error('Invalid Robot Bearing')
}
Robot.prototype.turnRight = function(){
	switch(this.bearing){
  	case "north":
  	  this.bearing = "east"
  	  break
  	case "east":
  	  this.bearing = "south"
  	  break
  	case "south":
  	  this.bearing = "west"
  	  break
  	case "west":
  	  this.bearing = "north"
  	  break
  }
}

Robot.prototype.turnLeft = function(){
	switch(this.bearing){
  	case "north":
  	  this.bearing = "west"
  	  break
  	case "east":
  	  this.bearing = "north"
  	  break
  	case "south":
  	  this.bearing = "east"
  	  break
  	case "west":
  	  this.bearing = "south"
  	  break
  }
}

Robot.prototype.at = function(x,y){
	this.x = x;
	this.y = y;
	this.coordinates = [ this.x, this.y ]
}

Robot.prototype.advance = function(){
	switch(this.bearing){
		case "north":
			this.coordinates[1] += 1;
			break
		case "east":
			this.coordinates[0] += 1;
			break
		case "south":
		  this.coordinates[1] -= 1 ;
		  break
		case "west":
		  this.coordinates[0] -= 1;
			break
	}
}

Robot.prototype.instructions = function(ins){
	var instruction_array = []
	var instruction = ins.toUpperCase().split("")
	var rob = this
	instruction.forEach(function(element){
		switch(element){
			case "A":
				rob.advance();
				instruction_array.push('advance');
				break;
			case "R":
				rob.turnRight();
				instruction_array.push('turnRight');
				break;
			case "L":
				rob.turnLeft();
				instruction_array.push('turnLeft');
				break;
		}
	})
	return instruction_array
}
Robot.prototype.place = function(obj){
	this.coordinates = [obj['x'], obj['y']];
	this.bearing = obj['direction']
}
Robot.prototype.evaluate = function(instructions){
	this.instructions(instructions)
}
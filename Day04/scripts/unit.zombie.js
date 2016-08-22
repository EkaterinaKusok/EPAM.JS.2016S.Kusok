Unit.Zombie = function(config) {
    this.name = "zombie";
    this.health = 100;
	this.speed = config.speed;
	this.isDie = false;
	
    var settings = {
        currentPosition: config.position,
        endPosition: 0,
        speed: config.speed,
        $zombie: ""
    };
	
	this.move = function() {
        settings.currentPosition -= this.speed;
        settings.$zombie.css({ "left": settings.currentPosition + "px" });  
        //console.log("move " + this.name);
    }
		
	this.moveSlow = function() {
        settings.currentPosition -= settings.speed;
        settings.$zombie.css({ "left": settings.currentPosition + "px" });     
        //console.log("move " + this.name + " " + settings.speed);
    }

	this.weak = function(weakSpeed) {
        this.health -= weakSpeed;
		settings.$zombie.html( this.health );
		if (this.health < 1){
			this.die();
		}
    }
	
    this.die = function() {
		this.isDie = true;
        $(settings.$zombie).remove();
    }

    this.show = function($line) {
        settings.$zombie = $("<div>", {
            class: "zombie " + this.name
        });
		settings.$zombie.innerHTML = this.health;
        settings.$zombie.css({ "left": settings.currentPosition + "px" });
		settings.$zombie.html( this.health );
        $($line).append(settings.$zombie);
        return settings.$zombie;
    }

    this.isEndPosition = function() {
        return (settings.endPosition > settings.currentPosition);
    }

    return settings;
};
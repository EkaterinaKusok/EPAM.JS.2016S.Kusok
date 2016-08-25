Unit.Zombie = function(config) {
    this.name = "zombie";
    this.fullHealth = 50;
    this.health;
    this.speed = config.speed;
    this.isDie = false;

    var settings = {
        currentPosition: config.position,
        endPosition: 0,
        speed: config.speed,
        $zombie: ""
    };

    this.show = function($line) {
		this.health = this.fullHealth;
        settings.$zombie = $("<div>", {
            class: "zombie " + this.name
        });
        settings.$zombie.innerHTML = this.health;
        settings.$zombie.css({ "left": settings.currentPosition + "px" });
		
        var $health = $("<div>", {
            class: "health"
        });
        $health.css({ "width": 40 * this.health / this.fullHealth + "px" });
        $health.html(this.health);
        settings.$zombie.html($health);

        $($line).append(settings.$zombie);
        return settings.$zombie;
    }

    this.move = function(slow) {
        if (slow) {
            settings.currentPosition -= settings.speed;
        }
        else {
            settings.currentPosition -= this.speed;
        }
		
        settings.$zombie.css({ "left": settings.currentPosition + "px" });
    }

    this.moveSlow = function() {
        settings.currentPosition -= settings.speed;
        settings.$zombie.css({ "left": settings.currentPosition + "px" });
    }

    this.reduceHealth = function(reduceSpeed) {
        this.health -= reduceSpeed;
        var $health = $("<div>", {
            class: "health"
        });
        $health.css({ "width": 40 * this.health / this.fullHealth + "px" });
        $health.html(this.health);
        settings.$zombie.html($health);

        if (this.health < 1) {
            this.die();
        }
    }

    this.die = function() {
        this.isDie = true;
        $(settings.$zombie).remove();
    }

    this.isEndPosition = function() {
        return (settings.endPosition > settings.currentPosition);
    }

    return settings;
};
Unit.Zombie = function(config) {
    this.name = "zombie";
    this.health = 100;
    var settings = {
        currentPosition: config.position,
        endPosition: 0,
        speed: config.speed,
        $zombie: ""
    };

    this.move = function() {
        settings.currentPosition -= settings.speed;
        settings.$zombie.css({ "left": settings.currentPosition });
        //console.log("move " + this.name);
    }

    this.die = function() {
        $(settings.$zombie).remove();
    }

    this.show = function($line) {
        settings.$zombie = $("<div>", {
            class: "zombie " + this.name
        });
        settings.$zombie.css({ "left": settings.currentPosition });
        $($line).append(settings.$zombie);
        return settings.$zombie;
    }

    this.isEndPosition = function() {
        return (settings.endPosition > settings.currentPosition);
    }

    return settings;
};
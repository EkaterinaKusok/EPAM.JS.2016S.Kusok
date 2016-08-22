Unit.Zombie.Strong = function(config) {
    var base = Unit.Zombie.call(this, config);
    this.name = "strong";
    this.health = 90;	
    this.speed = base.speed * 1.5;
    console.log("strong was created");
}
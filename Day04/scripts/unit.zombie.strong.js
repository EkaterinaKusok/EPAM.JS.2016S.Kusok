Unit.Zombie.Strong = function(config) {
    var base = Unit.Zombie.call(this, config);
    this.name = "strong";
    this.health = 90;
    console.log("strong was created");
}
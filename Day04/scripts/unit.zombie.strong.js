Unit.Zombie.Strong = function(config) {
    var base = Unit.Zombie.call(this, config);
    this.name = "strong";
    this.speed = base.speed * 2;
    console.log("strong was created");
}
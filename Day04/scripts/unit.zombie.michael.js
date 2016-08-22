Unit.Zombie.Michael = function(config) {
    var base = Unit.Zombie.call(this, config);
    this.name = "michael";
    this.health = 150;
    this.speed = base.speed * 2; //michael will move faster than base zombie
    console.log("michael was created");
}
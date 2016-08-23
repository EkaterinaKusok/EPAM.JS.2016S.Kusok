Unit.Zombie.Michael = function(config) {
    var base = Unit.Zombie.call(this, config);
    this.name = "michael";
    this.fullHealth = 70;
    this.speed = base.speed * 1.5; //michael will move faster than base zombie
    console.log("michael was created");
}
$(function() {
    var zombieTypes = [Unit.Zombie.Michael, Unit.Zombie.Strong];
    var zombies = [];
    var timerId;

    var $field = $(".active-field");
    var $generateButton = $("#btnGenerate");
    var $startButton = $("#btnStart");
    var $fieldLines = $(".field-line");
    var $gameOver = $(".game-over");

    $startButton.click(function() {
        $gameOver.hide();
        var $this = $(this);
        if ($this.hasClass("start")) {
            timerId = setTimeout(moveAllZombies, 100);
            changeToStopButton($this);
        } else {
            clearTimeout(timerId);
            changeToStartButton($this);
        }
    });

    $generateButton.click(function() {
        //if ($startButton.hasClass("stop"))
        createZombie();
    });

    function createZombie() {
        var config = {
            position: $fieldLines.width() - 50,
            speed: 1
        };
        var randomZombieType = random(0, zombieTypes.length - 1);
        var zombie = new zombieTypes[randomZombieType](config);
        var line = random(0, 4);
        zombie.show($fieldLines.get(line));
        zombies[zombies.length] = zombie;
    }

    function moveAllZombies() {
        for (var i = 0; i < zombies.length; i++) {
            zombies[i].move();
            if (zombies[i].isEndPosition()) {
                gameOver();
            }
        }
        timerId = setTimeout(moveAllZombies, 100);
    }

    function gameOver() {
        clearTimeout(timerId);
        $gameOver.show();
        changeToStartButton($startButton);
        for (var i = 0; i < zombies.length; i++) {
            zombies[i].die();
        }
        zombies = [];
    }

    function changeToStopButton($button) {
        $button.removeClass("start").addClass("stop");
        $button.text("Stop");
    }

    function changeToStartButton($button) {
        $button.removeClass("stop").addClass("start");
        $button.text("Start");
    }
});
$(function() {
    var zombieTypes = [Unit.Zombie.Michael, Unit.Zombie.Strong];
    var zombies = [];

    var moveTimerId;
    var growOldTimerId;
    var growOldCounter = 0;
    var moveSlowCounter = 0;

    var moveSlowDuration = 10000;
    var moveFrequency = 100;
    var growOldDuration = 10000;
    var growOldFrequency = 1000;
    var reduceHealthValue = 15;

    var $field = $(".active-field");
    var $fieldLines = $(".field-line");
    var $gameOver = $(".game-over");
    var $startButton = $("#btnStart");
    var $generateButton = $("#btnGenerate");
    var $slowUpButton = $("#btnSlowUp");
    var $growOldButton = $("#btnGrowOld");
    var $explodeButton = $("#btnExplode");
    var $resetButton = $("#btnReset");

    $startButton.click(function() {
        $gameOver.hide();
        var $this = $(this);
        if ($this.hasClass("start")) {
            var growOldCounter = 0;
            var moveSlowCounter = 0;
            moveTimerId = setTimeout(moveZombies, moveFrequency);
            growOldTimerId = setTimeout(growOldZombies, growOldFrequency);
            changeToStopButton($this);
        }
        else {
            clearTimeout(moveTimerId);
            clearTimeout(growOldTimerId);
            changeToStartButton($this);
        }
    });

    $generateButton.click(function() {
        if (!$generateButton.hasClass("disabled")) {
            createZombie();
        }
    });

    $slowUpButton.click(function() { // 10s 100iterations
        if (!$slowUpButton.hasClass("disabled")) {
            disabled($slowUpButton);
            moveSlowCounter = moveSlowDuration / moveFrequency;
        }
    });

    $growOldButton.click(function() { // 10s 1s-1health
        if (!$growOldButton.hasClass("disabled")) {
            disabled($growOldButton);
            clearTimeout(growOldTimerId);
            growOldCounter = growOldDuration / growOldFrequency;
            growOldTimerId = setTimeout(growOldZombies, growOldFrequency);
        }
    });

    $explodeButton.click(function() {
        for (var i = 0; i < zombies.length; i++) {
            zombies[i].reduceHealth(reduceHealthValue);
        }
        zombies = $.grep(zombies, function(a) {
            return !a.isDie;
        });
    });

    $resetButton.click(function() {
        clearTimeout(moveTimerId);
        clearTimeout(growOldTimerId);
        changeToStartButton($startButton);
        for (var i = 0; i < zombies.length; i++) {
            zombies[i].die();
        }
        zombies = [];
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

    function moveZombies() {
        var isSlow = false;
        if (moveSlowCounter > 0) {
            moveSlowCounter--;
            isSlow = true;
        }
        else if (moveSlowCounter == 0) {
            moveSlowCounter--;
            enabled($slowUpButton);
        }
        for (var i = 0; i < zombies.length; i++) {
            zombies[i].move(isSlow);
            if (zombies[i].isEndPosition()) {
                gameOver();
            }
        }
        moveTimerId = setTimeout(moveZombies, moveFrequency);
    }

    function growOldZombies() {
        if (growOldCounter > 0) {
            for (var i = 0; i < zombies.length; i++) {
                zombies[i].reduceHealth(1);
            }
            zombies = $.grep(zombies, function(a) {
                return !a.isDie;
            });
            growOldCounter--;
            growOldTimerId = setTimeout(growOldZombies, growOldFrequency);
        }
        else if (growOldCounter == 0) {
            growOldCounter--;
            enabled($growOldButton);
        }
    }

    function gameOver() {
        clearTimeout(moveTimerId);
        clearTimeout(growOldTimerId);
        $gameOver.show();
        changeToStartButton($startButton);
        for (var i = 0; i < zombies.length; i++) {
            zombies[i].die();
        }
        zombies = [];
    }

    function enabled($button) {
        $button.removeClass("disabled");
    }

    function disabled($button) {
        $button.addClass("disabled");
    }

    function changeToStopButton($button) {
        $button.removeClass("start").addClass("stop");
        $button.text("Stop");

        enabled($generateButton);
        if (moveSlowCounter < 1) {
            enabled($slowUpButton);
        }
        if (growOldCounter < 1) {
            enabled($growOldButton);
        }
        enabled($explodeButton);
    }

    function changeToStartButton($button) {
        $button.removeClass("stop").addClass("start");
        $button.text("Start");

        disabled($generateButton);
        disabled($slowUpButton);
        disabled($growOldButton);
        disabled($explodeButton);
    }
});
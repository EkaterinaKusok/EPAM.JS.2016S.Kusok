$(function() {
    var zombieTypes = [Unit.Zombie.Michael, Unit.Zombie.Strong];
    var zombies = [];
    var timerId;
	var slowId;	
	var weakId;
	
    var $field = $(".active-field");
    var $generateButton = $("#btnGenerate");
    var $startButton = $("#btnStart");
    var $slowButton = $("#btnSlow");
    var $weakButton = $("#btnWeak");
    var $bombButton = $("#btnBomb");
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
            clearTimeout(slowId);
            clearTimeout(weakId);
            changeToStartButton($this);
        }
    });

    $generateButton.click(function() {
        //if ($startButton.hasClass("stop"))
        createZombie();
    });
	
	$slowButton.click(function() {
		clearTimeout(timerId);
		timerId = setTimeout(moveSlowAllZombies, 100);
		slowId = setTimeout( function(){			
			clearTimeout(timerId);
			timerId = setTimeout(moveAllZombies, 100);
		}, 5000);
    });
	
	$weakButton.click(function() {		
		clearTimeout(weakId);
		weakId = setTimeout(weakAllZombies, 200);
		var weakFuncTimerId = setTimeout( function(){			
			clearTimeout(weakId);
			clearTimeout(weakFuncTimerId);
		}, 3000);
    });
	
	$bombButton.click(function() {		
		for (var i = 0; i < zombies.length; i++) {
            zombies[i].weak(30);	
        }
		zombies = $.grep(zombies, function( a ) {
			return !a.isDie;
		});
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

	function moveSlowAllZombies() {
        for (var i = 0; i < zombies.length; i++) {
            zombies[i].moveSlow();
            if (zombies[i].isEndPosition()) {
                gameOver();
            }
        }
        timerId = setTimeout(moveSlowAllZombies, 100);
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
	
	function weakAllZombies() {
        for (var i = 0; i < zombies.length; i++) {
            zombies[i].weak(1);	
        }
		zombies = $.grep(zombies, function( a ) {
			return !a.isDie;
		});
		//zombies[i].isDie
        weakId = setTimeout(weakAllZombies, 200);
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
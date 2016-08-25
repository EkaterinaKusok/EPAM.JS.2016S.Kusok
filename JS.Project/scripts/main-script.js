$(function() {
    var resources = [
        { name: "cheese", counter: 0 },
        { name: "orange", counter: 0 },
        { name: "cherry", counter: 0 },
        { name: "pumpkin", counter: 0 }
    ];

    var $field = $(".active-field");
    var $button = $("#main-button");
    var resourceSize = 64;

    var resourceTimerId;
    var bombTimerId;
    var resourceLiveTime = 700;
    var bombLiveTime = 2000;
    var resourceFrequency = 500;
    var bombFrequency = 5000;

    $button.click(function() {
        var $this = $(this);
        var $resources = $(".active-field .resource");
		
        if ($this.text() == "Start") {
            start($resources);
            changeToStopButton($this);
        } else {
            stop($resources);
            changeToStartButton($this);
        }
    });

    function start($resources) {
        console.log("start");
        $resources.removeClass("disabled");
        $resources.fadeIn(function() {
            $(this).remove();
        });
        generateRandomResource();
        //resourceTimerId = setTimeout(generateRandomResource, resourceFrequency);
        bombTimerId = setTimeout(generateBomb, bombFrequency / 2);

        function generateRandomResource() {
            var randomType = random(0, resources.length - 1);
            var position = generatePosition();

            var $resource = $("<div>", {
                class: "resource " + resources[randomType].name
            });
            $resource.css({
                "left": position.x,
                "top": position.y
            });
            $field.append($resource);
            $resource.fadeIn(resourceLiveTime, function() {
                $resource.remove();
            });
            $resource.on("click", { resource: randomType }, incrementResourceCounter);
            resourceTimerId = setTimeout(generateRandomResource, resourceFrequency);
        }

        function incrementResourceCounter(event) {
            $this = $(this);
			
            if (!$this.hasClass("disabled")) {
                var randomType = event.data.resource;
                resources[randomType].counter++;
                $(".counter ." + resources[randomType].name + " p").text(resources[randomType].counter);
                $this.remove();
            }
        }

        function generateBomb() {
            var $bomb = $("<div/>", {
                class: "resource bomb"
            });
            var position = generatePosition();
            $bomb.css({
                "left": position.x,
                "top": position.y
            });
            $field.append($bomb);
            $bomb.fadeIn(bombLiveTime, explode);
            bombTimerId = setTimeout(generateBomb, bombFrequency);
        }

        function explode() {
            var randomType = random(0, resources.length - 1);
            $counter = $(".counter p").eq(randomType);
            resources[randomType].counter -= 10;
            var resultCounter = resources[randomType].counter;
			
            if (resources[randomType].counter <= 0) {
                resources[randomType].counter = 0;
                resultCounter = "-";
            }
			
            $counter.text(resultCounter);
            $(this).remove();
        }

        function generatePosition() {
            var randomX = random(0, $field.width() - resourceSize);
            var randonY = random(0, $field.height() - resourceSize);
            var position = { x: randomX + "px", y: randonY + "px" };
            return position;
        }
    }

    function stop($resources) {
        console.log("stop");
        clearTimeout(resourceTimerId);
        clearTimeout(bombTimerId);
        $resources.stop();
        $resources.addClass("disabled");
    }

    function changeToStopButton($button) {
        $button.removeClass("start").addClass("stop");
        $button.text("Stop");
    }

    function changeToStartButton($button) {
        $button.removeClass("stop").addClass("start");
        $button.text("Start");
    }
})
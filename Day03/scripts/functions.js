function random(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function generate($container) {
    $container.empty();
    for (var i = 0; i < 50; i++) { 
        generateBlock($container);
    }
}

function generateBlock($container) {
    var content = $('<div/>', {
        class: 'block',
        html: random(1, 100)
    });
    $container.append(content);
}

function setColor() {
    $(".block").each(function() {
		var $this = $(this);
        var color = chooseColor($this.text());
        $this.css("background-color", color);
    });
}

function chooseColor(value) {
    if (value > 75) {
        return "#f44336";
    } else if (value > 50) {
        return "#ff9800";
    } else if (value > 25) {
        return "#4caf50";
    } else {
        return "white";
    }
}

function reset($container) {
    $container.empty();
}

function enableButton($button){	
	$button.removeAttr('disabled');
	$button.removeClass("disabled-button");
}

function disableButton($button){	
	$button.attr('disabled', true);
	$button.addClass("disabled-button");
}
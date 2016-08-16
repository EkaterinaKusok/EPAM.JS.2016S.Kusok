$(function(){
	var $setColor = $("#set-color");
	var $generate = $("#generate");
	var $reset = $("#reset");
	var $blocksContainer = $(".blocks.container");
	
	$generate.click(function() {
		generate($blocksContainer);		
		disableButton($generate);
		enableButton($setColor);		
		enableButton($reset);
	});

	$setColor.click(function() {
		setColor();
		disableButton($setColor);
	});

	$reset.click(function() {
		reset($blocksContainer);		
		enableButton($generate);
		disableButton($setColor);		
		disableButton($reset);
	});
	
	function generate($container) {
		$container.empty();
		for (var i = 0; i < 50; i++) { 
			generateBlock($container);
		}
	}

	function generateBlock($container) {
		var content = $("<div/>", {
			class: "block",
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
		$button.prop("disabled", false);
		$button.removeClass("disabled-button");
	}

	function disableButton($button){	
		$button.prop("disabled", true);
		$button.addClass("disabled-button");
	}
})


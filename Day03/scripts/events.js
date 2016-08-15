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
})


$("#generate").click(function() {
    generate();
    $("#generate").attr('disabled', true);
    $("#generate").addClass("disabled-button");
    $("#set-color").removeAttr('disabled');
    $("#set-color").removeClass("disabled-button");
    $("#reset").removeAttr('disabled');
    $("#reset").removeClass("disabled-button");
});

$("#set-color").click(function() {
    setColor();
    $("#set-color").attr('disabled', true);
    $("#set-color").addClass("disabled-button");
});

$("#reset").click(function() {
    reset();
    $("#generate").removeAttr('disabled');
    $("#generate").removeClass("disabled-button");
    $("#set-color").attr('disabled', true);
    $("#set-color").addClass("disabled-button");
    $("#reset").attr('disabled', true);
    $("#reset").addClass("disabled-button");
});

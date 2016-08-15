function random(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function generate() {
    $(".blocks.container").empty(); // Удаляем содержимое контейнера
    for (var i = 0; i < 50; i++) { // Заполняем контейнер блоками
        generateBlock();
    }
}

function generateBlock() {
    var content = $('<div/>', {
        class: 'block',
        html: random(1, 100)
    });
    $(".blocks.container").append(content);
}

function setColor() {
    $(".block").each(function(index) {
        var color = chooseColor($(this).text());
        $(this).css("background-color", color);
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

function reset() {
    $(".blocks.container").empty();
}
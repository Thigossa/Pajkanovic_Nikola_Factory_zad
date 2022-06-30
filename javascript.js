document.getElementById("left").onclick = function() {leftmove()};
function leftmove() {
    $('#imagestop').hide().fadeIn(200).prepend($('#imagestop span:last'));
    $('#imagesbot').hide().fadeIn(200).append($('#imagesbot span:first'));
}
document.getElementById("right").onclick = function() {rightmove()};
function rightmove() {
    $('#imagestop').hide().fadeIn(200).prepend($('#imagestop span:last'));
    $('#imagesbot').hide().fadeIn(200).prepend($('#imagesbot span:last'));
}

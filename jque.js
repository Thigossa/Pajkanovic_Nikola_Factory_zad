$( document ).ready(function() {
    console.log( "ready!" );
});
$( window ).on( "load", function() {
    let timeoutl;
    let timeoutr;
    $('.lftbtn').on("click", function () {
        $('.toprow').append($('.toprow span:first').hide().fadeIn(3000));
        $('.botrow').append($('.botrow span:first').hide().fadeIn(3000));

        if($(".toprow:animated")||$(".botrow:animated")){
            $('.lftbtn').prop('disabled', true);
            timeoutl = setTimeout(wait,3000);
        }
    });
    $('.rghtbtn').on("click", function () {
        $('.toprow').prepend($('.toprow span:last').hide().fadeIn(3000));
        $('.botrow').prepend($('.botrow span:last').hide().fadeIn(3000));
        $('.toprow span:last').hide().fadeIn(3000)
        /*.slideToggle(3000);*/

        $('.botrow span:last').hide().fadeIn(3000)
        /*.slideToggle(3000);*/
        if($(".toprow:animated")||$(".botrow:animated")) {
            $('.rghtbtn').prop('disabled', true);
            timeoutr = setTimeout(wait,3000);
        }
    });
    function wait() {
        $('.lftbtn').prop('disabled', false);
        $('.rghtbtn').prop('disabled', false);
      }
});



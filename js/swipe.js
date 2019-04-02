$(document).ready(function () {

    jQuery('body').swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if(direction == 'left'){
                $('#side-menu').addClass('show')
            }
            if(direction == 'right'){
                $('#side-menu').removeClass('show')
            }
        }
    });

});
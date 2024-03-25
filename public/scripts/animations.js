// Hover animation for double arrow in nav bar //

$(document).ready(function() {

$('i.nav-icon').hover(function() {
    $(this).addClass('fa-bounce');
}, function() {
    $(this).removeClass('fa-bounce');
});

});
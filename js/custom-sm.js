$(document).ready(function(){
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
        triggerElement: '#advant0'
    })
    .setClassToggle('.zona','fade-in')
    .addTo(controller)
});
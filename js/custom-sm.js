var controller = new ScrollMagic.Controller();
var Scene = new ScrollMagic.Scene({
    triggerElement: '#advant0',
    triggerHook: 0.1,
})
    .setClassToggle('#advant0','fade-in')
    .addTo(controller)
var Scene1 = new ScrollMagic.Scene({
    triggerElement: '#advant1',
    triggerHook: 0.1,
})
    .setClassToggle('#advant1','fade-in')
    .addTo(controller)
var Scene2 = new ScrollMagic.Scene({
    triggerElement: '#advant2',
    triggerHook: 0.1,
})
    .setClassToggle('#advant2','fade-in')
    .addTo(controller)

$('.item1')



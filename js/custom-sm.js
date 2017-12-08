var controller = new ScrollMagic.Controller();
var Scene = new ScrollMagic.Scene({
    triggerElement: '#advant0',
    triggerHook: 0.3,
})
    .setClassToggle('#advant0','fade-in')
    .addTo(controller)

var Scene1 = new ScrollMagic.Scene({
    triggerElement: '#advant1',
    triggerHook: 0.3,
})
    .setClassToggle('#advant1','fade-in')

    .addTo(controller)

var Scene2 = new ScrollMagic.Scene({
    triggerElement: '#advant2',
    triggerHook: 0.3,
})
    .setClassToggle('#advant2','fade-in')
    .addTo(controller)

var Scene10 = new ScrollMagic.Scene({
    triggerElement: '#advant0',
    triggerHook: 0.3,
})
    .setClassToggle('#advant0>.brb','black')
    .addTo(controller)
var Scene20 = new ScrollMagic.Scene({
    triggerElement: '#advant1',
    triggerHook: 0.3,
})
    .setClassToggle('#advant1>.brb','black')
    .addTo(controller)
var Scene30 = new ScrollMagic.Scene({
    triggerElement: '#advant2',
    triggerHook: 0.3,
})
    .setClassToggle('#advant2>.brb','black')
    .addTo(controller)



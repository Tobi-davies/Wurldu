// HorizontalScroll

var blocks = document.getElementsByClassName("block");
var container = document.getElementsByClassName("container");
var hs = new HorizontalScroll.default({
    blocks: blocks,
    container: container,
    isAnimated: true,
    springEffect: 0.8,
    skewReducer: 35
});

// AnimationEffect

const tl = gsap.timeline();
tl
    .from('.brand-logo', {
        xPercent: -100,
        opacity: 0,
    })
    .from('nav h1', {
        yPercent: -100,
        opacity: 0
    })
    .from('.home_heading, .home_paragraph, .btn', {
        xPercent: -20,
        opacity: 0,
        stagger: 0.2,

    })
    .from('.home img', {
        opacity: 0,
        stagger: 0.2,
        duration: 1
    })
    .from('.cat_text .heading1, .heading2', {
        xPercent: -20,
        opacity: 0,
        stagger: 0.2,
    })
    .from('.cat_text .paragraph', {
        xPercent: -20,
        opacity: 0,
        stagger: 0.2,
    })


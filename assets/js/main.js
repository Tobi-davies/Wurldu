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
    .from('.home_img .home_img_1, .home_img_2, .home_img_3, .home_img_4', {
        opacity: 0,
        stagger: 0.2,
        ease:Bounce.easeOut,
        scale: 0,
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


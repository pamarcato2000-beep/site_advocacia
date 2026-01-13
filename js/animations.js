gsap.registerPlugin(ScrollTrigger);

// 1. Animação de entrada do Hero (Revelação)
const tl = gsap.timeline();

tl.from(".hero-title", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
})
.from(".hero-subtitle", {
    opacity: 0,
    y: 20,
    duration: 0.8
}, "-=0.5")
.from(".main-image-wrapper", {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    ease: "expo.out"
}, "-=1");

// 2. Movimento da Imagem conforme o Mouse (Efeito Insano)
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;
    
    gsap.to(".main-image-wrapper", {
        rotationY: x * 10,
        rotationX: -y * 10,
        ease: "power2.out",
        duration: 0.5
    });
});

// 3. Revelação dos Cards no Scroll
gsap.from(".service-card", {
    scrollTrigger: {
        trigger: "#areas",
        start: "top 70%",
    },
    y: 80,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    ease: "back.out(1.7)"
});
// PRELOADER
window.addEventListener("load", () => {
    gsap.fromTo(
        ".ball",
        { width: 50, height: 50 },
        {
            width: "200vmax",
            height: "200vmax",
            duration: 1.6,
            ease: "power3.inOut"
        }
    );

    gsap.to(".preloader-img", {
        opacity: 1,
        duration: 0.8,
        delay: 1.1,
        ease: "power2.out"
    });

    gsap.to(".preloader", {
        yPercent: -100,
        duration: 1.1,
        delay: 1.9,
        ease: "power4.inOut"
    });
});


// GALLERY
const img = document.getElementById("gallery-img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 1;
const total = 6;

function slide(newIndex, direction) {
    const newSrc = `./product/${newIndex}.png`;

    gsap.to(img, {
        x: direction === "next" ? -200 : 200,
        opacity: 0,
        scale: 0.2,
        duration: 0.4,
        ease: "power3.inOut",
        onComplete: () => {
            img.src = newSrc;
            index = newIndex;

            gsap.fromTo(
                img,
                { x: direction === "next" ? 200 : -200, opacity: 0, scale: 0.2 },
                { x: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.inOut" }
            );
        }
    });
}

next.onclick = () => slide(index >= total ? 1 : index + 1, "next");
prev.onclick = () => slide(index <= 1 ? total : index - 1, "prev");

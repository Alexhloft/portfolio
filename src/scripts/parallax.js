import { arrayExpression } from "babel-types";

const parallax = document.querySelector(".parallax__inner");
const layers = parallax.children;

console.log('layers');

function moveLayers(wScroll) {
    Array.from(layers).forEach(layer => {
        const divider = layer.dataset.speed;
        const strafe = wScroll * divider;

        layer.style.transform = `translateY(-${strafe}%)`;
    });
};

window.addEventListener("scroll", e=> {
    const wScroll = window.pageYOffset;
    moveLayers(wScroll);
})
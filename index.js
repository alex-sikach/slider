let offset = 0;
const sliderLine = document.querySelector(".slider-line");
document.querySelector("#next").addEventListener("click", () => {
    offset+=256;
    if(offset > 768) offset = 0;
    sliderLine.style.left = `${-offset}px`;
});
document.querySelector("#prev").onclick = () => {
    offset-=256;
    if(offset < 0) offset = 768;
    sliderLine.style.left = `${-offset}px`;
};
addEventListener("keydown", e => {
    console.log(e);
    if(e.key == 'ArrowRight' || e.key == 'd') {
        offset+=256;
        if(offset > 768) offset = 0;
        sliderLine.style.left = `${-offset}px`; 
    };
});
addEventListener("keydown", e => {
    console.log(e);
    if(e.key == 'ArrowLeft' || e.key == 'a') {
        offset-=256;
        if(offset < 0) offset = 768;
        sliderLine.style.left = `${-offset}px`;
    };
});
const divLogo = document.querySelector(".div__logo");
const h1LogoText = document.querySelector(".h1__logo_text");

let hover = true;

divLogo.addEventListener('mousemove', function () {
    if (hover === true) {
        h1LogoText.style.transform = 'translateX(0%)';
        h1LogoText.style.opacity = '1';
        hover = false;
    }
});

divLogo.addEventListener('mouseleave', function () {
        h1LogoText.style.transform = 'translateX(-100%)';
        h1LogoText.style.opacity = '0';
        hover = true;
});

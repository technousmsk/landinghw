const headerMenuBackground = document.querySelector(".header-menu-background")

window.addEventListener('scroll', function (e) {
    const offsetFromTop = document.querySelector('html').scrollTop;
    if (offsetFromTop > 0) {
        headerMenuBackground.style.opacity = '1';
    } else {
        headerMenuBackground.style.opacity = '0';
    }
})

document.querySelector('.video-button-shadow').addEventListener('click', function (e) {
    document.querySelector('.container-video-block').style.display = 'none';
    document.querySelector('#videoRabbit').play();
});

const buttons = document.querySelectorAll('.statistic-button');
const offers = document.querySelectorAll('.offer');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (event) { //TODO replace onclick with addEventListener
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove('statistic-button_active');
            offers[j].classList.remove('offer_active');
        }
        const choosedPlan = event.target.getAttribute('data-offerName');
        const choosedClass = `${choosedPlan}`;
        const choosedElement = document.querySelector(choosedClass);
        choosedElement.classList.add('offer_active');
        this.classList.add('statistic-button_active');
    };
}

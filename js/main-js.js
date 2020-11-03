const headerMenu = document.querySelector(".header-menu")

window.addEventListener('scroll', function (e) {
    const offsetFromTop = document.querySelector('html').scrollTop;
    if (offsetFromTop > 0) {
        headerMenu.style.background = 'linear-gradient(0deg, rgba(255,255,255,1) 22%, rgba(231,183,183,1) 30%, rgba(186,0,0,1) 63%, rgba(255,255,255,1) 78%)';
    } else {
        headerMenu.style.background = 'none';
    }
})

document.querySelectorAll('.video-button-shadow')[0].addEventListener('click', function (e) {
    document.querySelector('.container-video-block').style.display = 'none';
    document.querySelector('#rabbitVideo').play();
});

const buttons = document.querySelectorAll('.statistic-button');
const offers = document.querySelectorAll('.offer-line');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (event) {
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove('statistic-button_active');
            offers[j].classList.remove('offer_active');
        }
        const choosedPlan = event.target.getAttribute('.statistic-button');
        console.log('choosedPlan', choosedPlan)
        const choosedClass = `${choosedPlan}`;
        const choosedElement = document.querySelector(choosedClass);
        choosedElement.classList.add('.offer_active');
        this.classList.add('statistic-button_active');
    };
}

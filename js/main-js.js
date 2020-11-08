const headerMenuBackground = document.querySelector(".header-menu-background")

window.addEventListener('scroll', function (e) {
    const offsetFromTop = document.querySelector('html').scrollTop;
    if (offsetFromTop > 0) {
        headerMenuBackground.style.opacity = '1';
    } else {
        headerMenuBackground.style.opacity = '0';
    }
    if (offsetFromTop > 0) {
        headerMenuBackground.style.border = 'solid 1px black'
    }
})


document.querySelector('.video-button-shadow').addEventListener('click', function (e) {
    document.querySelector('.container-video-block').style.display = 'none';
    document.querySelector('#videoRabbit').play();
});

const buttons = document.querySelectorAll('.statistic-button');
const offers = document.querySelectorAll('.offer');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (event) { //TODO replace with addEventListener
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

let allvaluti;   // все валююты
fetch('https://developerhub.alfabank.by:8273/partner/1.0.0/public/nationalRates')
    .then(response => response.json())
    .then(currentExchange => {
        allvaluti = currentExchange
        // .then(currentExchange => console.log('currentExchange', currentExchange));
        // console.log("status: " +JSON.parse(JSON.stringify()));


        const valuta = {
            usd: {},
            eur: {},
            rub: {}

        };
        console.log('allvaluti', allvaluti);
        valuta.usd = allvaluti.rates.find((rate) => rate.iso == 'USD')
        valuta.eur = allvaluti.rates.find((rate) => rate.iso == 'EUR')
        valuta.rub = allvaluti.rates.find((rate) => rate.iso == 'RUB')

        document.querySelector('.currency-usd').innerHTML = valuta.usd.rate;
        document.querySelector('.currency-eur').innerHTML = valuta.eur.rate;
        document.querySelector('.currency-rub').innerHTML = valuta.rub.rate;
        console.log(valuta);

    });
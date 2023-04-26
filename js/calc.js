const button = document.querySelectorAll('.zakaz')
const calc = document.querySelector('.calc')
const calcClose = document.querySelector('.calc_close')

let price = 34999
const priceList = [
    5000,
    15000, 
    1000, 
    10000,
    8500,
    500,
    15000, 
    5000, 
    5000
]
const formCheckInput = document.querySelectorAll('.form-check-input')
const calcPrice = document.querySelector('.calc__price')


const promocode = 'test'
const calcPromo = document.querySelector('.calc__promo')
const calcPromoButton = document.querySelector('.calc__promo_button')
const calcPromoNotification = document.querySelector('.calc__promo_notification')


calcPrice.innerHTML = price

Array.from(button).forEach(element => {
    element.addEventListener('click', () => {
        calc.classList.add('calc_active')
    })
})

calcClose.addEventListener('click', () => {
    calc.classList.remove('calc_active')
})


Array.from(formCheckInput).forEach(element => {
    element.addEventListener('click', () => {
        if (element.checked) {
            let prePrice = price
            let lastPrice = price + priceList[Number(element.id.substring(9)) - 1]

            price = lastPrice

            anime({
                targets: calcPrice,
                innerHTML: [prePrice, lastPrice],
                color: ['#30E784', '#0B132A'],
                round: 1,
                easing: 'easeOutQuad',
                duration: 800
            });
        } 
        else {
            let prePrice = price
            let lastPrice = price - priceList[Number(element.id.substring(9)) - 1]

            price = lastPrice

            anime({
                targets: calcPrice,
                innerHTML: [prePrice, lastPrice],
                color: ['#FF0000', '#0B132A'],
                round: 1,
                easing: 'easeOutQuad',
                duration: 800
            });
        } 
    })
})


calcPromoButton.addEventListener('click', () => {
    if (calcPromo.value == promocode) {
        price *= 0.9

        for (let i = 0; i < priceList.length; i++) {
            priceList[i] *= 0.9
        }  

        anime({
            targets: calcPromoNotification,
            width: [0, 200],
            easing: 'easeOutQuad',
            duration: 200
        });

        calcPromoNotification.innerHTML = 'Ваша скидка 10%'
        calcPrice.innerHTML = Math.round(price)
    }   
})
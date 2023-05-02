const zakazTurbosite = document.querySelectorAll('.zakaz__turbosite')
const zakazTurbosite2 = document.querySelectorAll('.zakaz__turbosite2')
const turbosite = document.querySelector('.turbosite')
const turbosite2 = document.querySelector('.turbosite2')
const calcClose = document.querySelectorAll('.calc_close')

let priceTurbosite = 24999
let priceTurbosite2 = 45099
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
const calcPriceTurbosite = document.querySelector('.calc__price_turbosite')
const calcPriceTurbosite2 = document.querySelector('.calc__price_turbosite2')


const promocode = 'test'
const calcPromo = document.querySelector('.calc__promo_input_turbosite')
const calcPromo2 = document.querySelector('.calc__promo_input_turbosite2')
const calcPromoTurbosite = document.querySelector('.calc__promo_turbosite')
const calcPromoTurbosite2 = document.querySelector('.calc__promo_turbosite2')
const calcPromoNotificationTurbosite = document.querySelector('.calc__promo_notification_turbosite')
const calcPromoNotificationTurbosite2 = document.querySelector('.calc__promo_notification_turbosite2')

let promocodeUse1 = false
let promocodeUse2 = false


Array.from(zakazTurbosite).forEach(element => {
    element.addEventListener('click', () => {
        calcPriceTurbosite.innerHTML = priceTurbosite
        turbosite.classList.add('calc_active')
    })
})

Array.from(zakazTurbosite2).forEach(element => {
    element.addEventListener('click', () => {
        calcPriceTurbosite2.innerHTML = priceTurbosite2
        turbosite2.classList.add('calc_active')
    })
})

Array.from(calcClose).forEach(element => {
    element.addEventListener('click', () => {
        turbosite.classList.remove('calc_active')
        turbosite2.classList.remove('calc_active')
    })
})


Array.from(formCheckInput).forEach(element => {
    element.addEventListener('click', () => {
        if (element.checked) {
            let prePrice = priceTurbosite
            let lastPrice = priceTurbosite + priceList[Number(element.id.substring(9)) - 1]

            priceTurbosite = lastPrice

            anime({
                targets: calcPriceTurbosite,
                innerHTML: [prePrice, lastPrice],
                color: ['#30E784', '#0B132A'],
                round: 1,
                easing: 'easeOutQuad',
                duration: 800
            });
        } 
        else {
            let prePrice = priceTurbosite
            let lastPrice = priceTurbosite - priceList[Number(element.id.substring(9)) - 1]

            priceTurbosite = lastPrice

            anime({
                targets: calcPriceTurbosite,
                innerHTML: [prePrice, lastPrice],
                color: ['#FF0000', '#0B132A'],
                round: 1,
                easing: 'easeOutQuad',
                duration: 800
            });
        } 
    })
})

Array.from(formCheckInput).forEach(element => {
    element.addEventListener('click', () => {
        if (element.checked) {
            let prePrice = priceTurbosite2
            let lastPrice = priceTurbosite2 + priceList[Number(element.id.substring(9)) - 1]

            priceTurbosite2 = lastPrice

            anime({
                targets: calcPriceTurbosite2,
                innerHTML: [prePrice, lastPrice],
                color: ['#30E784', '#0B132A'],
                round: 1,
                easing: 'easeOutQuad',
                duration: 800
            });
        } 
        else {
            let prePrice = priceTurbosite2
            let lastPrice = priceTurbosite2 - priceList[Number(element.id.substring(9)) - 1]

            priceTurbosite2 = lastPrice

            anime({
                targets: calcPriceTurbosite2,
                innerHTML: [prePrice, lastPrice],
                color: ['#FF0000', '#0B132A'],
                round: 1,
                easing: 'easeOutQuad',
                duration: 800
            });
        } 
    })
})


calcPromoTurbosite.addEventListener('click', () => {
    if (calcPromo.value == promocode && !promocodeUse1) {
        priceTurbosite *= 0.9
        promocodeUse1 = true

        for (let i = 0; i < priceList.length; i++) {
            priceList[i] *= 0.9
        }  

        anime({
            targets: calcPromoNotificationTurbosite,
            width: [0, 200],
            easing: 'easeOutQuad',
            duration: 200
        });
        
        calcPromoNotificationTurbosite.innerHTML = 'Ваша скидка 10%'
        calcPriceTurbosite.innerHTML = Math.round(priceTurbosite)
    }   
})

calcPromoTurbosite2.addEventListener('click', () => {
    if (calcPromo2.value == promocode && !promocodeUse2) {
        priceTurbosite2 *= 0.9
        promocodeUse2 = true

        for (let i = 0; i < priceList.length; i++) {
            priceList[i] *= 0.9
        }  

        anime({
            targets: calcPromoNotificationTurbosite2,
            width: [0, 200],
            easing: 'easeOutQuad',
            duration: 200
        });

        calcPromoNotificationTurbosite2.innerHTML = 'Ваша скидка 10%'
        calcPriceTurbosite2.innerHTML = Math.round(priceTurbosite2)
    }   
})
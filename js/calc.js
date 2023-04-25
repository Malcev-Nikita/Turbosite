const button = document.querySelectorAll('.zakaz')
const calc = document.querySelector('.calc')
const calcClose = document.querySelector('.calc_close')

Array.from(button).forEach(element => {
    element.addEventListener('click', () => {
        calc.classList.add('calc_active')
    })
})

calcClose.addEventListener('click', () => {
    calc.classList.remove('calc_active')
})
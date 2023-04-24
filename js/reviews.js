const reviews_button = document.querySelectorAll('.accordion button')

Array.from(reviews_button).forEach(element => {
    element.addEventListener('click', () => {
        element.setAttribute('aria-expanded', (element.getAttribute('aria-expanded') == 'false' ? ('true') : ('false')))
    })
})
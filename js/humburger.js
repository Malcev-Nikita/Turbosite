const humburger = document.querySelector('.humburger')
const topHeaderMenu = document.querySelector('.top__header_menu')

humburger.addEventListener('click', () => {
    if (topHeaderMenu.classList.contains('top__header_menu_active')) {
        topHeaderMenu.classList.remove('top__header_menu_active')
        humburger.classList.remove('humburger_active')
    } 
    else {
        topHeaderMenu.classList.add('top__header_menu_active')
        humburger.classList.add('humburger_active')
    }
})
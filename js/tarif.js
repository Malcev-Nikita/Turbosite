Array.from(document.getElementsByClassName("tarif")).forEach(element => {
    element.addEventListener('click', () => {
        Array.from(document.getElementsByClassName("tarif")).forEach(element2 => {
            element2.classList.remove("favorite")
        })
        element.classList.add("favorite")
    })
});
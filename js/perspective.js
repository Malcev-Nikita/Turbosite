// const img_perspective = document.getElementsByClassName('img__perspective')

// Array.from(img_perspective).forEach(element => {
//     element.addEventListener('mousemove', (event) => {
//         cx = Math.ceil($(window).width() / 2.0);
//         dx = event.pageX - cx;
//         console.log((dx / cx) * 30)
//         element.style.transform = `perspective(600px) rotateY(${(dx / cx) * 30}deg) `
//     });

//     element.addEventListener('mouseout', () => {
//         element.style.transform = ``
//     });
// });
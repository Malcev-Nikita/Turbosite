const video = document.querySelectorAll('.video')
const SliderInnerRight = document.querySelectorAll('.slider_inner_right')[0]

video.forEach(element => {
    
    element.querySelector('img').addEventListener('click', () => {
        element.querySelector('.video_full').classList.add("video_full_active")
    })

    element.querySelector('.video_full img').addEventListener('click', () => {
        element.querySelector('.video_full').classList.remove("video_full_active")
    })
});


SliderInnerRight.querySelector('.video__header').addEventListener('click', () => {
    SliderInnerRight.querySelector('.video_full').classList.add("video_full_active")
})

SliderInnerRight.querySelector('.video_full img').addEventListener('click', () => {
    SliderInnerRight.querySelector('.video_full').classList.remove("video_full_active")
})